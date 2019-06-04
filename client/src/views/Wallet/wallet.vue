<template>
    <div class="wallets-header-wrapper" v-loading="loading">
        <primary-header tab="wallet" />
        <add-wallet v-if="addWallet" />
        <div class="wallets-wrapper">
           <div class="wallets-header">
               <div class="add-wallet" @click="addWallet = true">
                   <i class="el-icon-wallet icon"></i>
                   <h3 class="title">Adicionar Carteira</h3>
               </div>
               <div class="new-wallet" v-for="(wallet, i) in wallets" :key="i" 
                    @click="walletSelect = wallet">
                   <i class="el-icon-wallet icon"></i>
                   <h3 class="title">{{wallet.name}}</h3>
               </div>
           </div>
           <div class="body-wrapper">
               <div class="profile-side">
                   <div class="name">{{user.name}}</div>
                   <div class="email">{{user.email}}</div>

                   <div class="logout-btn" @click="Logout">SAIR</div>

                   <div class="delete-account" @click="DeleteAccount">EXCLUIR CONTA</div>
               </div>
               <div class="wallet-side" v-if="walletSelect">
                   <div class="header-infos">
                       <div class="stats">
                            <div class="amount">
                                <div class="title">SALDO BRUTO</div>
                                <div class="value">R$ {{walletSelect.amount[walletSelect.amount.length - 1].value}}</div>
                            </div>
                            <div class="profit">
                                <div class="title">RENTABILIDADE TOTAL</div>
                                <div class="value">{{walletSelect.percentage}}%</div>
                            </div>
                            <div class="applicated-value">
                                <div class="title">VALOR APLICADO</div>
                                <div class="value">R$ {{walletSelect.amount[0].value}}</div>
                            </div>
                            <div class="first-date">
                                <div class="title">PRIMEIRA APLICAÇÃO</div>
                                <div class="date">{{walletSelect.startDate | moment('DDMMMYYYY')}}</div>
                            </div>
                       </div>
                       <div class="update">ATUALIZADO: {{walletSelect.amount[walletSelect.amount.length - 1].date | moment('DDMMMYYYY')}}</div>
                   </div>
                   <line-chart :chartData="dataChart" :options="options" />
               </div>
               <div class="wallet-side-else" v-else>
                   Sem carteira selecionada
               </div>
           </div>
        </div>
    </div>
</template>

<script>
import primaryHeader from '../../components/primaryHeader.vue'
import addWallet from '../../components/addWallet.vue'
import lineChart from '../../components/lineChart.js'

export default {
    components: {
        primaryHeader,
        addWallet,
        lineChart
    },
    data () {
        return {
            user: localStorage.getItem('user'),
            wallets: [],
            walletSelect: null,
            addWallet: false,
            loading: false,
            dataChart: null,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    methods: {
        Logout () {
            localStorage.clear()
            location.reload()
        },
        DeleteAccount () {
            this.loading = true
            this.$node.delete(`/users/delete/${this.user._id}`)
            .then(({data}) => {
                if(data.n == 1) {
                    localStorage.clear()
                    location.reload()
                } else this.$swal('Oops...', 'Ocorreu um erro interno.', 'error')
            })
            .catch(err => console.log(err))
            .finally(() => this.loading = false)
        },
        ChangeChart (wallet) {
            const amountSet = [],
            initialSet = [],
            labels = []

            wallet.amount.map(a => {
                amountSet.push(a.value)
                initialSet.push(wallet.amount[0].value)
                labels.push(this.$moment.unix(a.date).format("DD/MM"))
            })
            this.dataChart = {
                labels: labels,
                datasets: [{
                    data: amountSet,
                    label: "Aculumado",
                    borderColor: "#3e95cd"
                },{ 
                    data: initialSet,
                    label: "Inicial",
                    borderColor: "#8e5ea2"
                }]
            }
        }
    },
    mounted () {
        this.user = JSON.parse(this.user)
        this.wallets = this.user.wallet

        this.$eventBus.$on('CloseAddWallet', () => { this.addWallet = false })
        this.$eventBus.$on('WalletAdded', data => {
            this.addWallet = false
            this.wallets = data.wallet
            localStorage.setItem('user', JSON.stringify(data))
        })
    },
    watch: {
        walletSelect () {
            this.ChangeChart(this.walletSelect)
            const amount = (this.walletSelect.amount[this.walletSelect.amount.length - 1].value - this.walletSelect.amount[0].value).toFixed(2)
            this.walletSelect.percentage = ((Number(amount) * 100) / this.walletSelect.amount[0].value).toFixed(2)
        }
    },
    beforeRouteEnter (to, from, next) {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user !== null) next(true)
        else next({ name: 'login' })
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/settings/variables/colors';

.wallets-wrapper {
    width: 100%;
    height: 100vh;
    color: $defaultFont;
    >.wallets-header {
        display: flex;
        padding: 20px 50px;
        background-color: #D6D6D6;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        >.add-wallet {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 200px;
            max-width: 200px;
            padding: 20px;
            border: 3px dashed rgba(51, 51, 51, .2);
            border-radius: 4px;
            flex-grow: 1;
            cursor: pointer;
            >.icon {
                font-size: 1.5em;
            }
        }
        >.new-wallet {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 200px;
            max-width: 200px;
            margin-left: 20px;
            padding: 20px;
            border: 3px solid rgba(51, 51, 51, .2);
            border-radius: 4px;
            cursor: pointer;
            flex-grow: 1;
            >.icon {
                font-size: 1.5em;
            }
        }
    }
    >.body-wrapper {
        display: grid;
        grid-template-columns: 50% 50%;
        max-width: 1050px;
        margin: auto;
        margin-top: 50px;
        >.profile-side {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-right: 1px solid rgba(51, 51, 51, .2);
            >.name, .email {
                padding: 10px 0;
                width: 50%;
                border-bottom: 1px solid rgba(51, 51, 51, .2);
            }
            >.logout-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 50px;
                padding: 15px 60px;
                background-color: #D6D6D6;
                border-radius: 50px;
                cursor: pointer;
            }
            >.delete-account {
                margin-top: 50px;
                color: #F98017;
                cursor: pointer;
            }
        }
        >.wallet-side {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 20px;
            >.header-infos {
                width: 100%;
                padding: 20px;
                background-color: #D6D6D6;
                >.stats {
                    display: grid;
                    grid-template-columns: 50% 50%;
                    margin-bottom: 10px;
                    >.amount, .profit, .first-date, .applicated-value {
                        >.title {
                            font-size: .9em;
                            color: #707070;
                        }
                        >.value, .date {
                            font-size: 1.1em;
                            font-weight: bold;
                        }
                    }
                    >.amount, .profit { margin-bottom: 10px; }
                    >.first-date, .profit {
                        text-align: end;
                        >.value, .date { color: #32AF60; }
                    }
                }
                >.update {
                    text-align: center;
                    font-size: .9em;
                }
            }
        }
        >.wallet-side-else { text-align: center; }
    }
}
</style>

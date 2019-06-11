<template>
    <div class="indices-header-wrapper">
        <primary-header tab="indices" />
        <div class="indices-chart-wrapper">
            <div class="indices-wrapper" v-loading="loading">
                <div class="indices">
                   <h3 class="title">Índices</h3>
                   <div class="indice">
                       <div class="name">CDI</div>
                       <div class="tax">
                           <div class="title">Taxa mensal</div>
                           <div class="value">{{cdi}}%</div>
                       </div>
                    </div>
                    <div class="indice">
                       <div class="name">SELIC</div>
                       <div class="tax">
                           <div class="title">Taxa mensal</div>
                           <div class="value">{{selic}}%</div>
                       </div>
                    </div>
                    <div class="indice">
                       <div class="name">IPCA</div>
                       <div class="tax">
                           <div class="title">Taxa mensal</div>
                           <div class="value">{{ipca}}%</div>
                       </div>
                    </div>
                </div>
            </div>
            <div class="chart-wrapper" v-loading="loading">
                <line-chart :chartData="dataChart" :options="options" />
            </div>
        </div>
        <div class="info">Base de dados retirada do <a class="link" href="https://www.bcb.gov.br/">Banco Central do Brasil</a></div>
    </div>
</template>

<script>
import primaryHeader from '../../components/primaryHeader.vue'
import lineChart from '../../components/lineChart.js'

export default {
    components: {
        primaryHeader,
        lineChart
    },
    data () {
        return {
            selic: 0,
            ipca: 0,
            cdi: 0,
            dataChart: null,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    methods: {
        CreateChart () {
            this.loading = true
            const diSet = [],
            selicSet = [],
            ipcaSet = [],
            labels = []
            //DI
            this.$api.get('bcdata.sgs.4176/dados?formato=json')
            .then(({data}) => {
                this.cdi = data[data.length - 1].valor
                data.map(tax => {
                    const date = this.$moment(tax.data, 'DD/MM/YYYY')
                    if(date.unix() >= 1243814400) {
                        diSet.push(tax.valor)
                    }
                })
                //Selic
                this.$api.get('bcdata.sgs.4390/dados?formato=json')
                .then(({data}) => {
                    this.selic = data[data.length - 1].valor
                    data.map(tax => {
                        const date = this.$moment(tax.data, 'DD/MM/YYYY')
                        if(date.unix() >= 1243814400) {
                            selicSet.push(tax.valor)
                            labels.push(this.$moment(tax.data, 'DD/MM/YYYY').format('MM/YY'))
                        }
                    })
                    //IPCA
                    this.$api.get('bcdata.sgs.10841/dados?formato=json')
                    .then(({data}) => {
                        this.ipca = data[data.length - 1].valor
                        data.map(tax => {
                            const date = this.$moment(tax.data, 'DD/MM/YYYY')
                            if(date.unix() >= 1243814400) {
                                ipcaSet.push(tax.valor)
                            }
                        })
                        this.dataChart = {
                            labels: labels,
                            datasets: [{
                                data: diSet,
                                label: "CDI",
                                borderColor: "#3e95cd"
                            },
                            {
                                data: selicSet,
                                label: "Selic",
                                borderColor: "#8e5ea2"
                            },
                            {
                                data: ipcaSet,
                                label: "IPCA",
                                borderColor: "#A8DBA8"
                            }]
                        }
                        this.loading = false
                    })
                    .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        }
    },
    mounted () {
        this.CreateChart()
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/settings/variables/colors';

.info {
    text-align: center;
    margin: 20px 0;
    >.link {
        color: #F98017;
    }
}

.indices-chart-wrapper {
    max-width: 1050px;
    margin: auto;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: $defaultFont;
    >.chart-wrapper {
        flex: 1 1 100%;
    }
    >.indices-wrapper {
        flex: 1 1 100%;
        margin-bottom: 50px;
        >.indices {
            padding: 20px;
            background: white;
            box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
            border-radius: 4px;
            >.title {
                margin-bottom: 10px;
            }
            >.indice {
                display: flex;
                align-items: center;
                margin-bottom: 5px;
                justify-content: space-between;
                padding: 5px;
                >.tax {
                    text-align: center;
                    >.value { font-weight: bold; }
                }
                &:hover {
                    background: $gray-300;
                }
            }
        }
    }
}
</style>

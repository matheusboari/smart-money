<template>
    <div class="wallets-header-wrapper">
        <primary-header tab="wallet" />
        <div class="wallets-wrapper">
           <div class="wallets">
               <div class="add-wallet">
                   <i class="el-icon-wallet icon"></i>
                   <h3 class="title">Adicionar Carteira</h3>
               </div>
               <div class="new-wallet">
                   <i class="el-icon-wallet icon"></i>
                   <h3 class="title">New Wallet</h3>
               </div>
               <div class="new-wallet">
                   <i class="el-icon-wallet icon"></i>
                   <h3 class="title">New Wallet</h3>
               </div>
               <div class="new-wallet">
                   <i class="el-icon-wallet icon"></i>
                   <h3 class="title">New Wallet</h3>
               </div>
               <div class="new-wallet">
                   <i class="el-icon-wallet icon"></i>
                   <h3 class="title">New Wallet</h3>
               </div>
               <div class="new-wallet">
                   <i class="el-icon-wallet icon"></i>
                   <h3 class="title">New Wallet</h3>
               </div>
               <div class="new-wallet">
                   <i class="el-icon-wallet icon"></i>
                   <h3 class="title">New Wallet</h3>
               </div>
               <div class="new-wallet">
                   <i class="el-icon-wallet icon"></i>
                   <h3 class="title">New Wallet</h3>
               </div>
               <div class="new-wallet">
                   <i class="el-icon-wallet icon"></i>
                   <h3 class="title">New Wallet</h3>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
import primaryHeader from '../../components/primaryHeader.vue'

export default {
    components: {
        primaryHeader
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
    height: 100%;
    color: $defaultFont;
    >.wallets {
        display: flex;
        padding: 20px 50px;
        background-color: $gray-300;
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
}
</style>

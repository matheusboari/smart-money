<template>
    <div class="intermediate-trails-wrapper">
        <primary-header />

        <div class="intermediate-trails">
            <div class="title-wrapper">
                <h1 class="title">Trilhas para intermediários</h1>
                <h3 class="subtitle">Para quem quer conhecer algo a mais sobre investimentos.</h3>
            </div>

            <div class="trails">
                <router-link tag="div" :to="{name: 'cdb'}" class="igpdi trail">
                    <h2 class="title">Trilha de CDB</h2>
                    <span class="description">Saiba tudo sobre o investimento CDB</span>
                </router-link>

                <div class="cdi trail">
                    <h2 class="title">Fundo Garantidor de Créditos</h2>
                    <span class="description">Conheça tudo sobre o fundo garantidor de créditos (FGC).</span>
                </div>

                <div class="selic trail">
                    <h2 class="title">Impostos incidentes</h2>
                    <span class="description">Saiba quais são os impostos incidentes.</span>
                </div>

                <div class="ipca trail">
                    <h2 class="title">Entendendo os títulos do tesouro direto</h2>
                    <span class="description">Conheça os títulos do tesouro direto.</span>
                </div>

                <div class="igpm trail">
                    <h2 class="title">Juros semestrais</h2>
                    <span class="description">Entenda como funciona os juros semestrais.</span>
                </div>

                <div class="poupanca trail">
                    <h2 class="title">Trilha de LCI e LCA</h2>
                    <span class="description">Conheça os investimentos incentivados pelo governo.</span>
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
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/settings/variables/colors';
$bgWidth: 10000px;

.intermediate-trails-wrapper {
    color: $defaultFont;
    >.intermediate-trails {
        padding: 40px;
        min-height: calc(100vh - 66px);
        max-height: 100%;
        background: linear-gradient(to right, #2c7cd6 0%,#2ce0bf 33%,#2c7cd6 100%);
        background-size: $bgWidth 100%;
        animation: bg 15s linear infinite ;
        >.title-wrapper {
            color: $white;
            >.subtitle {
                font-size: 1.2em;
                font-style: italic;
                font-weight: normal;
            }
        }
        >.trails {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 50px;
            >.cdi { color: $cdiColor }
            >.selic { color: $selicColor }
            >.ipca { color: $ipcaColor }
            >.igpm { color: $igpmColor }
            >.igpdi { color: $igpdiColor }
            >.poupanca { color: $poupancaColor }
            >.trail {
                border-radius: 4px;
                width: 250px;
                padding: 20px 40px;
                margin: 10px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                background-color: $white;
                cursor: pointer;
                >.title {
                    font-weight: bold;
                    font-size: 1.5em;
                }
                >.description {
                    font-style: italic;
                }
            }
        }
    }
}

@keyframes bg{
  0%{
    background-position-x: 0;
  }
  
  100%{
    background-position-x: $bgWidth;
  }
}
</style>

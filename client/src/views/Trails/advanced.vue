<template>
    <div class="advanced-trails-wrapper">
        <primary-header />

        <div class="advanced-trails">
            <div class="title-wrapper">
                <h1 class="title">Trilhas para avançados</h1>
                <h3 class="subtitle">Buscando atualizar todo seu conhecimento?</h3>
            </div>

            <div class="trails">
                <div class="cdi trail">
                    <h2 class="title">Como calcular a rentabilidade do meu título</h2>
                    <!-- <span class="description">Descrição da trilha sobre CDI</span> -->
                </div>

                <div class="selic trail">
                    <h2 class="title">Certificado de Recebíveis do Agronegócio</h2>
                    <!-- <span class="description">Descrição da trilha sobre SELIC</span> -->
                </div>

                <div class="ipca trail">
                    <h2 class="title">Certificado de Recebíveis Imobiliários</h2>
                    <!-- <span class="description">Descrição da trilha sobre IPCA</span> -->
                </div>

                <div class="igpm trail">
                    <h2 class="title">Debêntures</h2>
                    <!-- <span class="description">Descrição da trilha sobre IGPM</span> -->
                </div>

                <div class="igpdi trail">
                    <h2 class="title">Letra de Câmbio</h2>
                    <!-- <span class="description">Descrição da trilha sobre IGPDI</span> -->
                </div>

                <div class="poupanca trail">
                    <h2 class="title">Depósito a Prazo com Garantia Especial</h2>
                    <!-- <span class="description">Descrição da trilha sobre POUPANÇA</span> -->
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

.advanced-trails-wrapper {
    color: $defaultFont;
    >.advanced-trails {
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

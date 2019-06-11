<template>
    <div class="novice-trails-wrapper">
        <primary-header />

        <div class="novice-trails">
            <div class="title-wrapper">
                <h1 class="title">Trilhas para iniciantes</h1>
                <h3 class="subtitle">Um caminho para quem deseja começar a conhecer investimentos em renda fixa.</h3>
            </div>

            <div class="trails">
                <router-link tag="div" :to="{name: 'intro'}" class="cdi trail">
                    <h2 class="title">Trilha de Introdução</h2>
                    <span class="description">Uma breve intrudoção aos investimentos de renda fixa.</span>
                </router-link>

                <div class="selic trail">
                    <h2 class="title">O que são taxas e tributos</h2>
                    <span class="description">O que você precisa saber sobre taxas e tributos.</span>
                </div>

                <div class="ipca trail">
                    <h2 class="title">Juros simples e Juros Compostos</h2>
                    <span class="description">Tudo sobre juros simples e juros compostos.</span>
                </div>

                <div class="igpm trail">
                    <h2 class="title">Investimentos pré-fixados</h2>
                    <span class="description">Introdução aos investimentos pré-fixados.</span>
                </div>

                <div class="poupanca trail">
                    <h2 class="title">Investimentos pós-fixados</h2>
                    <span class="description">Introdução aos investimentos pós-fixados.</span>
                </div>

                <div class="igpdi trail">
                    <h2 class="title">Indexadores econômicos</h2>
                    <span class="description">Tudo sobre indexadores econômicos.</span>
                </div>

                <div class="tesouro trail">
                    <h2 class="title">Introdução ao tesouro direto</h2>
                    <span class="description">Introdução sobre a aplicação em tesouro direto.</span>
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

.novice-trails-wrapper {
    color: $defaultFont;
    >.novice-trails {
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
            >.tesouro { color: $tesouroColor }
            >.trail {
                border-radius: 4px;
                width: 250px;
                padding: 20px 40px;
                margin: 10px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
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

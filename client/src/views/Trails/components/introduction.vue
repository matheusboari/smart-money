<template>
    <div class="post-header-wrapper">
        <primary-header />
        <div class="post-wrapper">
            <h1 class="title">Introdução aos investimentos</h1>

            <div class="paragraph 1">
                <h2 class="title">Ativo</h2>
                <p class="text">
                    Existem diversas definições sobre o que são ativos e passivos. <br><br>
                    Paulo Cesar Fulgencio, autor do livro <em>Glossário Vade Mecum: administração pública, ciências contábeis, direito, economia, meio ambiente,</em> diz: <br><br>
                    “Em contabilidade, ativo é um termo básico utilizado para expressar os bens, valores, créditos, direitos e assemelhados que, num determinado momento, formam o patrimônio de uma pessoa singular ou coletiva e que são avaliados pelos respectivos custos.” <br><br>
                    Já o site Ativo Financeiro expões que: <br><br>
                    “Um ativo financeiro é um ativo não físico cujo valor é derivado de uma reivindicação contratual, como depósitos bancários, títulos e ações.” <br><br>
                    Finalmente, de acordo com Robert T. Kiyosaki, autor do livro Pai Rico, Pai Pobre: <br><br>
                    “Um ativo é tudo aquilo que gera renda para o seu possuidor” <br><br>

                </p>
            </div>
        </div>
    </div>
</template>

<script>
import primaryHeader from '../../../components/primaryHeader.vue'

export default {
    components: { primaryHeader }    
}
</script>


<style lang="scss" scoped>
@import '~styles/settings/variables/colors';

.post-wrapper {
    color: $defaultFont;
    padding: 40px;
    >.title {
        text-align: center;
    }
    >.paragraph {
        margin-top: 50px;
        padding: 0 100px;
        >.text {
            font-size: 1.2em;
        }
    }
}
</style>

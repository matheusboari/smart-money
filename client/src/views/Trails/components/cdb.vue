<template>
    <div class="post-header-wrapper">
        <primary-header />
        <div class="post-wrapper">
            <h1 class="title">Introdução aos investimentos</h1>

            <div class="image">
                <img class="photo" src="https://images.pexels.com/photos/163032/office-pen-calculator-computation-163032.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                <em class="subtitle">Imagem de uso gratuíto retirada de pexels.com </em>
            </div>

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
                <p class="text">
                    No Brasil existem diversas opções de ativos disponíveis, cada um com suas particularidades e adequações a diferentes tipos de investidores. Alguns exemplos de ativos são: 
                    <ul class="list">
                        <li>Poupança;</li>
                        <li>Títulos públicos;</li>
                        <li>Letras de câmbio;</li>
                        <li>Fundos de renda fixa;</li>
                        <li>Debêntures.</li>
                    </ul>
                    Para uma vida financeira saudável, é indispensável investir dinheiro em ativos, deste modo é possível evitar o endividamento, gerar uma renda extra ou ter dinheiro para aposentadoria. Quanto antes se começar a investir, melhor será a vida financeira daquele que aplica.
                </p>

                <h2 class="title">Passivos</h2>
                <p class="text">
                    Ao contrário dos ativos, um passivo é tudo aquilo que gera despesa ao seu possuidor. São, de modo geral, dívidas e obrigatoriedades que uma pessoa tem que pagar. Ao adquirir ou alugar uma casa, por exemplo, além do valor pago pela casa ou o valor do aluguel, é necessário pagar todos os anos o IPTU ao governo, além disso existem despesas como esgoto (normalmente incluso na conta de água), água e luz. Isso também vale para um carro, tem despesas como IPVA, manutenção e combustível.<br><br>
                    O ideal para uma vida financeira saudável é diminuir os gastos com passivos e sempre investir em ativos.
                </p>

                <h2 class="title">Investimento financeiro</h2>
                <p class="text">
                    Em economia e finanças, investimento financeiro é uma operação de compra e venda de um ativo financeiro. O objetivo ao se realizar um investimento financeiro pode ser a criação de um fundo emergencial, aposentadoria, algum objetivo específico como uma viagem ou casamento, compra de um imóvel ou até mesmo obter uma renda extra. Existem diversos critérios a ser considerados em um investimento, como: 
                    <ul class="list">
                        <li>Tipo de renda – Pode ser dividida entre fixa ou variável. Renda fixa é aquela que pode ser quantificável no momento da aplicação, além disso há uma baixa chance de perda de capital nesta modalidade de investimento. Já renda variável é aquela que flutua entre indexadores positivos e negativos, deste modo há uma maior chance de possíveis perdas, porém a rentabilidade também pode ser maior que ativos de renda fixa;</li>
                        <li>Risco – Pode ser alto ou baixo. Normalmente, investimentos de renda fixa tem um baixo risco ao contrário dos de renda variável que têm um alto risco;</li>
                        <li>Prazo – Pode ser de curto, médio e longo prazo. De modo que existem investimentos com carência de horas, dias ou anos</li>
                        <li>Liquidez – Alta ou baixa, representa o tempo que o dinheiro leva para voltar ao investidor após o resgate. Quanto menor a liquidez, maior o tempo para que o montante seja depositado.</li>
                    </ul>
                </p>
                <p class="text">
                    Todos estes fatores devem ser levados em consideração antes de se realizar uma aplicação. Uma pessoa que pretende criar uma reserva de emergência, deve escolher uma aplicação de renda fixa, com o menor risco possível, de curto ou médio prazo com alta liquidez. Já alguém que deseja criar uma reserva para aposentadoria deve optar por um misto entre renda fixa e variável, de baixo risco, longo prazo e a liquidez pode ser tanto alta quanto baixa. 
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
        margin-bottom: 50px;
    }
    >.image {
        text-align: center;
        width: 100%;
        >.photo {
            width: 100%;
            height: 50%;
            object-fit: cover;
        }
    }
    >.paragraph {
        margin-top: 50px;
        padding: 0 100px;
        >.title {
            margin: 20px 0;
        }
        >.text {
            font-size: 1.2em;
            >.list {
                margin: 10px 0;
            }
        }
    }
}
</style>

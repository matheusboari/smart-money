<template>
    <div class="post-header-wrapper">
        <primary-header />
        <div class="post-wrapper">
            <h1 class="title">Trilha de CDB</h1>

            <div class="image">
                <img class="photo" src="https://images.pexels.com/photos/1451448/pexels-photo-1451448.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                <em class="subtitle">Imagem de uso gratuíto retirada de pexels.com </em>
            </div>

            <div class="paragraph 1">
                <p class="text">
                    Quando se trata de investir seu dinheiro é comum ficar um pouco ‘perdido’ no inicio em frente de tantas opções. Com foco nisso que vamos explicar um dos tipos de investimentos mais recomendados para quem ainda está começando, o CDB.
                </p>
                <br>
                <p class="text">
                    Para capitalizar recursos com o intuito de financiar suas atividades os bancos se utilizam de muitos métodos, entre eles a emissão e disponibilização de títulos. Esses são conhecidos como CDB (Certificado de Depósitos Bancários), que é um investimento de renda fixa, muito seguro. Com isso o investidor ‘empresta’ seu dinheiro para o banco, que irá devolver o dinheiro corrigido com os juros. Simplificando o CDB se assemelha com outro tipo de investimento, o Tesouro Direto, só que ao invés de ‘emprestar’ dinheiro para o governo se compra os títulos das instituições bancarias.
                </p>
                <br>
                <p class="text">
                    O CDB se divide em três tipos principais, são eles:
                    <ul class="list">
                        <li>Pré-fixado: Neste modelo de aplicação o rendimento do investimento já é acordado no momento em que se realiza, recebendo assim sempre o que já foi estabelecido.</li>
                        <li>Pós-fixado: O tipo mais comum de CDB. Nele o acordo realizado é que a rentabilidade irá seguir alguma taxa referência, podendo ser a SELIC ou CDI, assim você só descobre o valor do seu rendimento ao final do tempo combinado</li>
                        <li>Hibrido: Com esse tipo o investidor consegue ‘misturar’ os dois métodos anteriores, e com isso fazer parte de suas aplicações com uma taxa já estipulada e o restante acompanhando alguma taxa referência. </li>
                    </ul>
                </p>

                <p class="text">
                    Algumas das vantagens do CDB é de que ele possui uma rentabilidade maior do que a da poupança, podendo ganhar até o dobro. Também possui uma possibilidade de liquidez diária, assim permitindo que o dinheiro seja resgatado a qualquer momento caso seja necessário. Outra grande vantagem é do fato de todo investimento feito no valor de até R$ 250 mil reais é protegido pelo FGC (Fundo Garantidor de Crédito).
                </p>
                <br>
                <p class="text">
                    Mesmo assim o CDB possui desvantagens também, como por exemplo o fato dele ser um investimento tributado.  Apesar de haver cobrança no momento em que é feita a aplicação, há o tributo obrigatório para todas as operações do CDB, que é o imposto de renda. Assim a alíquota muda de acordo com o tempo, por exemplo 22,5% para aplicações de 180 dias ou 15% para os 721 dias ou mais.
                </p>
                <br>
                <p class="text">
                    Com tudo isso o CDB é uma boa opção para quem deseja começar a aplicar seu dinheiro e não sabe muito bem por onde. Tudo isso devido ao fato de ser um investimento assegurado pelo FGC e também rendar mais do que a tradicional poupança. Mas tem que se levar em conta na hora de escolhe-lo o fato de ser um investimento que possui uma maior rentabilidade de médio a longo prazo.
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

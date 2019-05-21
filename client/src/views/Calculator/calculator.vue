<template>
    <div class="calculator-header-wrapper">
        <primary-header tab="calculator" />
        <div class="calculator-wrapper">
            <div class="calculator">
                <div class="inputs-wrapper">
                    <h2 class="title">Calculadora de Investimentos</h2>
                    <div class="inputs">
                        <div class="input value">
                            <strong class="title">Valor da Aplicação</strong>
                            <el-input placeholder="100" v-model="value">
                                <template slot="prepend">R$</template>
                                <template slot="append">.00</template>
                            </el-input>
                        </div>
                        <div class="input period">
                            <strong class="title">Período</strong>
                            <el-input placeholder="12" v-model="months">
                                <template slot="append">meses</template>
                            </el-input>
                        </div>
                        <div class="input di-tax">
                            <strong class="title">Taxa DI</strong>
                            <el-input placeholder="6,4" v-model="taxDi">
                                <template slot="append">% ao ano</template>
                            </el-input>
                        </div>
                        <div class="input selic-tax">
                            <strong class="title">Taxa SELIC</strong>
                            <el-input placeholder="6,4" v-model="taxSelic">
                                <template slot="append">% ao ano</template>
                            </el-input>
                        </div>
                        <div class="input cdb-lc">
                            <strong class="title">CDB/LC</strong>
                            <el-input placeholder="83" v-model="cdb">
                                <template slot="append">% DI</template>
                            </el-input>
                        </div>
                        <div class="input lci-lca">
                            <strong class="title">LCI/LCA</strong>
                            <el-input placeholder="91" v-model="licLca">
                                <template slot="append">% DI</template>
                            </el-input>
                        </div>
                    </div>
                    <em class="obs">
                        Valores prefixados, por hora, são apenas para simulações.
                    </em>
                </div>
                <div class="results-wrapper">
                    <h2 class="title">Rentabilidade</h2>
                    <span class="subtitle">
                        Simulação da rentabilidade do seu investimento conforme o tipo de aplicação:
                    </span>
                    <div class="results">
                        <div class="result poupanca">
                            <strong class="title">Poupança</strong>
                            <span class="stat">Valor líquido: R$ 4.55</span>
                            <el-progress :text-inside="false" :stroke-width="18" :percentage="4.5" color="rgba(142, 113, 199, 0.7)"></el-progress>
                        </div>
                        <div class="result">
                            <strong class="title">CDB</strong>
                            <span class="stat">Valor Total: R$ 5.31</span>
                            <div class="imposto">
                                <el-badge :value="20 + '%'" class="item"><span class="stat">Imposto de Renda: R$ 1.06</span></el-badge>
                            </div>
                            <span class="stat">Valor Líquido: R$ 4.25</span>
                            <el-progress :text-inside="false" :stroke-width="18" :percentage="4.3" color="rgba(142, 113, 199, 0.7)"></el-progress>
                        </div>
                        <div class="result">
                            <strong class="title">LCI</strong>
                            <span class="stat">Valor Líquido: R$ 5.82</span>
                            <el-progress :text-inside="false" :stroke-width="18" :percentage="5.8" color="rgba(142, 113, 199, 0.7)"></el-progress>
                        </div>
                        <div class="result">
                            <strong class="title">Tesouro SELIC</strong>
                            <span class="stat">Valor Total: R$ 6.40</span>
                            <div class="imposto">
                                <el-badge :value="20 + '%'" class="item"><span class="stat">Imposto de Renda: R$ 1.28</span></el-badge>
                            </div>
                            <span class="stat">Taxa Bovespa: R$ 0.30</span>
                            <span class="stat">Valor Líquido: R$ 4.82</span>
                            <el-progress :text-inside="false" :stroke-width="18" :percentage="4.8" color="rgba(142, 113, 199, 0.7)"></el-progress>
                        </div>
                    </div>
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
            value: 100,
            months: 12,
            taxDi: 6.4,
            taxSelic: 6.4,
            cdb: 83,
            licLca: 91
        }
    },
    methods: {

    },
    watch: {
        value () {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/settings/variables/colors';

.calculator-header-wrapper {
    color: $defaultFont;
    >.calculator-wrapper {
        max-width: 1050px;
        margin: auto;
        margin-top: 50px;
        >.calculator {
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            justify-content: space-between;
            >.inputs-wrapper, .results-wrapper {
                >.title {
                    font-size: 2.25em;
                }
                >.inputs {
                    >.input {
                        margin-top: 10px;
                    }
                }
                >.results {
                    max-width: 400px;
                    >.result {
                        display: flex;
                        flex-direction: column;
                        margin-top: 20px;
                        >.title {
                            margin-bottom: 5px;
                        }
                        >.imposto {
                            >.item {
                                >.stat {
                                    padding-right: 10px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

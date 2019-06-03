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
                            <span class="stat">Valor líquido: R$ {{profit.poupanca.total}}</span>
                            <el-progress :text-inside="true" :stroke-width="18" :percentage="profit.poupanca.profit" color="rgba(142, 113, 199, 0.7)"></el-progress>
                        </div>
                        <div class="result">
                            <strong class="title">CDB</strong>
                            <span class="stat">Valor Total: R$ {{profit.cdb.total}}</span>
                            <div class="imposto">
                                <el-badge :value="taxes + '%'" class="item"><span class="stat">Imposto de Renda: R$ {{profit.cdb.taxes}}</span></el-badge>
                            </div>
                            <span class="stat">Valor Líquido: R$ {{profit.cdb.amount}}</span>
                            <el-progress :text-inside="true" :stroke-width="18" :percentage="profit.cdb.profit" color="rgba(142, 113, 199, 0.7)"></el-progress>
                        </div>
                        <div class="result">
                            <strong class="title">LCI</strong>
                            <span class="stat">Valor Líquido: R$ {{profit.lci.total}}</span>
                            <el-progress :text-inside="true" :stroke-width="18" :percentage="profit.lci.profit" color="rgba(142, 113, 199, 0.7)"></el-progress>
                        </div>
                        <div class="result">
                            <strong class="title">Tesouro SELIC</strong>
                            <span class="stat">Valor Total: R$ {{profit.selic.total}}</span>
                            <div class="imposto">
                                <el-badge :value="taxes + '%'" class="item"><span class="stat">Imposto de Renda: R$ {{profit.selic.taxes}}</span></el-badge>
                            </div>
                            <span class="stat">Valor Líquido: R$ {{profit.selic.amount}}</span>
                            <el-progress :text-inside="true" :stroke-width="18" :percentage="profit.selic.profit" color="rgba(142, 113, 199, 0.7)"></el-progress>
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
            licLca: 91,
            taxIpca: 6.4,
            taxes: 20,
            profit: {
                poupanca: {
                    total: 4.55,
                    profit: 4.6
                },
                cdb: {
                    total: 5.31,
                    taxes: 1.06,
                    profit: 4.2,
                    amount: 4.25
                },
                lci: {
                    total: 5.82,
                    profit: 5.8
                },
                selic: {
                    total: 6.4,
                    taxes: 1.28,
                    profit: 4.8,
                    amount: 4.82
                }
            }
        }
    },
    methods: {
        MonthTax (yearlyTax) {
            return Math.pow((1 + (yearlyTax / 100)), (1/12)) - 1
        },
        CompoundInterest (initialValue, monthTax, months) {
            return initialValue * Math.pow((1 + monthTax), months)
        },
        PoupancaProfit (initialValue, selic, months) {
            if(selic <= 8.5) selic = selic * 0.7
            this.profit.poupanca.total = (this.CompoundInterest(initialValue, this.MonthTax(selic), months) - initialValue).toFixed(2)
            if(initialValue > 0)
                this.profit.poupanca.profit = ((this.profit.poupanca.total / initialValue) * 100).toFixed(1)
        },
        CdbProfit (initialValue, cdb, di, months, taxes) {
            let amount = this.CompoundInterest(initialValue, this.MonthTax(cdb * di / 100), months)
            this.profit.cdb.total = (amount - initialValue).toFixed(2)
            this.profit.cdb.taxes = (this.profit.cdb.total * (taxes / 100)).toFixed(2)
            this.profit.cdb.amount = (this.profit.cdb.total - this.profit.cdb.taxes).toFixed(2)
            if(initialValue > 0)
                this.profit.cdb.profit = ((this.profit.cdb.total / initialValue) * 100).toFixed(1)
        },
        LciProfit (initialValue, lci, di, months) {
            this.profit.lci.total = (this.CompoundInterest(initialValue, this.MonthTax(lci * di / 100), months) - initialValue).toFixed(2)
            if(initialValue > 0)
                this.profit.lci.profit = ((this.profit.lci.total / initialValue) * 100).toFixed(1)
        },
        SelicProfit (initialValue, selic, months, taxes) {
            let amount = this.CompoundInterest(initialValue, this.MonthTax(selic), months)
            this.profit.selic.total = (amount - initialValue).toFixed(2)
            this.profit.selic.taxes = (this.profit.selic.total * (taxes / 100)).toFixed(2)
            this.profit.selic.amount = (this.profit.selic.total - this.profit.selic.taxes).toFixed(2)
            if(initialValue > 0)
                this.profit.selic.profit = ((this.profit.selic.total / initialValue) * 100).toFixed(1)
        }
    },
    watch: {
        value () {
            this.PoupancaProfit(Number(this.value), Number(this.taxSelic), Number(this.months))
            this.CdbProfit(Number(this.value), Number(this.cdb), Number(this.taxDi), Number(this.months), this.taxes)
            this.LciProfit(Number(this.value), Number(this.licLca), Number(this.taxDi), Number(this.months))
            this.SelicProfit(Number(this.value), Number(this.taxSelic), Number(this.months), this.taxes)
        },
        months () {
            if(this.months <= 6) this.taxes = 22.5 
            else if (this.months > 6 && this.months <= 12) this.taxes = 20
            else if (this.months > 12 && this.months <= 24) this.taxes = 17.5
            else if (this.months > 24) this.taxes = 15
            else this.taxes = 20
            
            this.PoupancaProfit(Number(this.value), Number(this.taxSelic), Number(this.months))
            this.CdbProfit(Number(this.value), Number(this.cdb), Number(this.taxDi), Number(this.months), this.taxes)
            this.LciProfit(Number(this.value), Number(this.licLca), Number(this.taxDi), Number(this.months))
            this.SelicProfit(Number(this.value), Number(this.taxSelic), Number(this.months), this.taxes)
        },
        taxSelic () {
            this.PoupancaProfit(Number(this.value), Number(this.taxSelic), Number(this.months))
            this.SelicProfit(Number(this.value), Number(this.taxSelic), Number(this.months), this.taxes)
        },
        taxDi () {
            this.CdbProfit(Number(this.value), Number(this.cdb), Number(this.taxDi), Number(this.months), this.taxes)
            this.LciProfit(Number(this.value), Number(this.licLca), Number(this.taxDi), Number(this.months))
        },
        cdb () {
            this.CdbProfit(Number(this.value), Number(this.cdb), Number(this.taxDi), Number(this.months), this.taxes)
        },
        licLca () {
            this.LciProfit(Number(this.value), Number(this.licLca), Number(this.taxDi), Number(this.months))
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
        margin-bottom: 50px;
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

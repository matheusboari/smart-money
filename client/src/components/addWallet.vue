<template>
    <div class="body-wrapper">
        <div class="add-wallet">
            <i class="el-icon-error icon"></i>
            <h1 class="title">Nova Carteira</h1>
            <div class="form-wrapper">
                <div class="type">
                    <el-select v-model="type" class="type-input" placeholder="Select">
                        <el-option
                            label="SELIC"
                            value="selic">
                        </el-option>
                        <el-option
                            label="IPCA"
                            value="ipca">
                        </el-option>
                        <el-option
                            label="CDI"
                            value="cdi">
                        </el-option>
                    </el-select>
                </div>
                <div class="value">
                    <el-input type="number" placeholder="1000" v-model="value">
                        <template slot="prepend">R$</template>
                        <template slot="append">.00</template>
                    </el-input>
                </div>
                <div class="date">
                    <el-date-picker
                        class="date-picker"
                        v-model="date"
                        type="date"
                        placeholder="Selecione o início"
                        format="dd/MM/yyyy"
                        value-format="timestamp">
                    </el-date-picker>
                </div>
            </div>
            <div class="add-btn">Adicionar</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            type: null,
            value: null,
            date: null
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/settings/variables/colors';

.body-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: rgba($color: #000000, $alpha: .5);
    color: $defaultFont;
    >.add-wallet {
        text-align: center;
        padding: 30px;
        background: white;
        border-radius: 4px;
        position: relative;
        >.icon {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
        }
        >.title {
            margin-bottom: 20px;
        }
        >.form-wrapper {
            display: flex;
            flex-direction: column;
            >.type, .value, .date {
                display: flex;
                width: 100%;
                margin-bottom: 10px;
                >.type-input, .date-picker { width: 100%; }
            }
            margin-bottom: 30px;
        }
        >.add-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px 40px;
            background-color: #D6D6D6;
            border-radius: 50px;
            cursor: pointer;
        }
    }
}
</style>

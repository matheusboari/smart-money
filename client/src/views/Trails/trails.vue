<template>
    <div class="trails-page-wrapper">
        <primary-header />
        <div class="trails-content-wrapper">
            <router-link tag="div" :to="{name: 'novice'}"
                class="novice-investor-button"
                @click="expand.novice = true">
                <h1 class="title">Investidor Iniciante</h1>
                <h3 class="subtitle">Está curioso para saber como funciona a renda fixa?</h3>
            </router-link>
            <router-link tag="div" :to="{name: 'intermediate'}"
                class="intermediate-investor-button"
                @click="expand.intermediate = true">
                <h1 class="title">Investidor Intermediário</h1>
                <h3 class="subtitle">Buscando por um algo a mais?</h3>
            </router-link>
            <router-link tag="div" :to="{name: 'advanced'}"
                class="advanced-investor-button"
                @click="expand.advanced = true">
                <h1 class="title">Investidor Avançado</h1>
                <h3 class="subtitle">Que tal compartilhar suas experiências?</h3>
            </router-link>
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
            expand: {
                novice: false,
                intermediate: false,
                advanced: false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/settings/variables/colors';

.trails-content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 66px);
    >.novice-investor-button, >.intermediate-investor-button, >.advanced-investor-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 300px;
        height: 300px;
        border-radius: 4px;
        padding: 10px;
        box-sizing: border-box;
        cursor: pointer;
        margin: 0 10px;
        transition: width .2s linear, height .2s linear;
        box-shadow: 0 3px 10px rgba(0, 0, 0, .15);
        &:hover {
            width: 295px;
            height: 295px;
        }
        >.title {
            font-size: 2.5em;
            line-height: 30px;
            margin-bottom: 20px;
            transition: opacity .3s;
        }
        >.subtitle {
            font-size: 1.25em;
            font-weight: normal;
            transition: opacity .3s;
        }
    }
    >.novice-investor-button { background-color: $noviceInvestor; color: $advancedInvestor; }
    >.intermediate-investor-button { background-color: $intermediateInvestor; color: $white; }
    >.advanced-investor-button { background-color: $advancedInvestor; color: $white; }
    >.--expand {
        width: 100%;
        height: 100%;
        // position: absolute;
        margin: 0;
        border-radius: 0;
        z-index: 5;
        >.title, >.subtitle { opacity: 0; }
    }
}

@media only screen and (max-width: 550px) {
    .trails-content-wrapper {
        margin-top: 20px;
        flex-direction: column;
        >.novice-investor-button, >.intermediate-investor-button, >.advanced-investor-button {
            margin: 10px 0;
        }
    }
}
</style>

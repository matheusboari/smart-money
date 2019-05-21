<template>
    <div class="header-wrapper">
        <div class="logo-wrapper">
            <img src="../assets/logo.png" class="logo" alt="">
        </div>
        <div class="nav-wrapper">
            <router-link tag="div" :to="{ name: 'trails' }" class="nav-item"
                :class="{'--selected': tab == 'trails'}">Trilhas</router-link>
            <!-- <router-link tag="div" :to="{ name: 'charts' }" class="nav-item"
                :class="{'--selected': tab == 'charts'}">Gráficos</router-link> -->
            <router-link tag="div" :to="{ name: 'indices' }" class="nav-item"
                :class="{'--selected': tab == 'indices'}">Índices</router-link>
            <router-link tag="div" :to="{ name: 'calculator' }" class="nav-item"
                :class="{'--selected': tab == 'calculator'}">Calculadora</router-link>
            <!-- <router-link tag="div" :to="{ name: 'news' }" class="nav-item"
                :class="{'--selected': tab == 'news'}">Notícias</router-link> -->
            <router-link tag="div" :to="{ name: 'profile' }" class="nav-item"
                :class="{'--selected': tab == 'profile'}">Perfil</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tab: {
            type: String,
            default: 'trails'
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
    display: grid;
    grid-template-columns: 33% 34% 33%;
    grid-template-rows: 65px;
    background-color: #fefefe;
    border-bottom: 1px solid rgba(51, 51, 51, .12);
    position: sticky;
    box-sizing: border-box;
    top: 0;
    >.logo-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        >.logo {
            height: 50px;
            object-fit: cover;
        }
    }
    >.nav-wrapper {
        display: flex;
        align-items: flex-end;
        >.nav-item {
            color: rgba(51, 51, 51, .5);
            font-size: 1.1em;
            padding: 0 10px;
            cursor: pointer;
            &:hover {
                color: #333;
                border-bottom: 1px solid #333;    
            }
        }
        >.--selected {
            color: #333;
            border-bottom: 1px solid #333;
        }
    }
}

@media only screen and (max-width: 550px) {
    .header-wrapper {
        grid-template-rows: 80px;
        >.nav-wrapper {
            display: none;
        }
    }
}
</style>

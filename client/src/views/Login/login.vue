<template>
    <div class="body">
        <div class="cards-wrap">
            <login-card v-if="!register">
                <template slot="register-btn">
                    <span class="span-switch">Você não tem uma conta? <span class="switch" @click="register = true">registre-se</span></span>
                </template>
            </login-card>
            <register-card v-else>
                <template slot="login-btn">
                    <span class="span-switch">Já tem uma conta? <span class="switch" @click="register = false"> faça login</span></span>
                </template>
            </register-card>
            <div class="background-wrap">
                <img src="../../assets/logo-white.png" class="logo" alt="">
                <span class="info">A Smart Money é um sistema de ensino e informação para investidores em renda fixa. 
                    Além de contar com trilhas de ensino e calculadora financeira!</span>
            </div>
        </div>
    </div>
</template>

<script>
import loginCard from './components/login.vue'
import registerCard from './components/register.vue'

export default {
    components: {
        loginCard,
        registerCard
    },
    data () {
        return {
            register: false,
        }
    },
    beforeRouteEnter (to, from, next) {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user !== null) next({ name: 'wallet' })
        else next(true)
    }
}
</script>

<style lang="scss" scoped>
.body {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../../assets/background-login.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    &::before {
        content: ' ';
        width: 100%;
        height: 100%;
        background: #27333c85;
        position: absolute;
    }
}
.cards-wrap {
    display: flex;
    z-index: 5;
    >.background-wrap {
        width: 500px;
        height: 500px;
        border-radius: 0 30px 30px 0;
        background-image: url('../../assets/background-login.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        padding: 30px;
        &::before {
            content: ' ';
            width: 500px;
            height: 500px;
            background: #27333c85;
            position: absolute;
            border-radius: 0 30px 30px 0;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        >.logo {
            position: relative;
            width: 100px;
            margin-bottom: 10px;
        }
        >.info {
            position: relative;
            color: white;
            text-align: center;
        }
    }
}
.span-switch {
    color: #27333c;
    >.switch {
        cursor: pointer;
        font-weight: bold;
    }
    font-style: italic;
}
</style>

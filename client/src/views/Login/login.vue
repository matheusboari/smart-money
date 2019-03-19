<template>
    <div class="body">
        <login-card v-if="!register">
            <template slot="register-btn">
                <span class="span-switch" @click="register = true">Ou registre-se</span>
            </template>
        </login-card>
        <register-card v-else>
            <template slot="login-btn">
                <span class="span-switch" @click="register = false">Login</span>
            </template>
        </register-card>
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
    }
}
</script>

<style lang="scss" scoped>
.body {
    background-image: url('../../assets/background-login.jpg');
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    &::before {
        content: ' ';
        background: rgba(0, 46, 24, 0.75);
        position: absolute;
        width: 100%;
        height: 100%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    >.form {
        position: relative;
    }
}
.span-switch {
    color: white;
    cursor: pointer;
    font-style: italic;
}
</style>

<template>
    <div class="body">
        <login-card v-if="!register">
            <template slot="register-btn">
                <button @click="register = true">Register</button>
            </template>
        </login-card>
        <register-card v-else>
            <template slot="login-btn">
                <button @click="register = false">Login</button>
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
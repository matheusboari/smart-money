<template>
    <div class="form login">
        <h1 class="title">Login</h1>
        <input class="input" type="text" name="user" placeholder="Login" v-model="username" />
        <input class="input" type="password" name="pass" placeholder="Password" v-model="password" />
        <button class="btn-primary" @click="login()">Login</button>
        <slot name="register-btn"></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login () {
            const self = this

            if(verifyFields()) {
                this.$node.post('users/login', {
                    login: this.username,
                    password: this.password
                })
                .then(({data}) => {
                    console.log(data)
                })
                .catch(err => console.log(err))
            }

            function verifyFields () {
                if(self.username == '') {
                    console.log('Username deve ser preenchido')
                    return false
                } else if(self.password == '') {
                    console.log('Senha deve ser preenchida')
                    return false
                } else return true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    >.title {
        color: white;
        margin-bottom: 30px;
    }
    >.input {
        margin-bottom: 10px;
    }
    >.btn-primary {
        margin-bottom: 10px;
    }
}
</style>

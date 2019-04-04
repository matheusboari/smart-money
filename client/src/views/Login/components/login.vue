<template>
    <div class="form login">
        <h3 class="title">Bem vindo ao</h3>
        <img src="../../../assets/logo.png" class="logo" alt="">
        <span class="info">Faça login e tenha acesso ilimitado aos recursos que a Smart Money disponibiliza.</span>
        <b-input class="input" v-model="username" placeholder="Login" />
        <b-input type="password" class="input" v-model="password" placeholder="Senha" />

        <b-button class="btn" @click="login()" variant="primary">Login</b-button>
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
    border-radius: 30px 0 0 30px;
    padding: 40px;
    width: 500px;
    height: 500px;
    box-shadow: 0px 1px 10px -1px rgba(0,0,0,0.4);
    >.title {
        font-size: 1.3em;
        font-style: italic;
        color: #27333c;
        margin: 0;
    }
    >.info {
        width: 70%;
        text-align: center;
        opacity: .75;
        margin-bottom: 20px;
    }
    >.logo {
        width: 100px;
        margin: 10px 0;
    }
    >.input, .btn {
        width: 70%;
        margin-bottom: 10px;
    }
}
</style>

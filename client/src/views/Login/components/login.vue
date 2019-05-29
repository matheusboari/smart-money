<template>
    <div class="form login" v-loading="loading">
        <h3 class="title">Bem vindo ao</h3>
        <img src="../../../assets/logo.png" class="logo" alt="">
        <h3 class="smart-money">Smart Money</h3>
        <span class="info">Faça login e tenha acesso ilimitado aos recursos que a Smart Money disponibiliza.</span>
        <el-input class="input" v-model="username" placeholder="Login" />
        <el-input type="password" class="input" v-model="password" placeholder="Senha" />

        <el-button type="primary" class="btn" @click="Login()" variant="primary">Login</el-button>
        <slot name="register-btn"></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username: '',
            password: '',
            loading: false
        }
    },
    methods: {
        Login () {
            this.loading = true
            const params = { login: this.username, password: this.password }
            if(this.VerifyFields()) {
                this.$node.post('users/login', params)
                .then(({data}) => { console.log(data) })
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
            }
        },
        VerifyFields () {
            if(this.username == '') {
                this.$swal('Oops...', 'Preencha o login corretamente.', 'error')
                return false
            } else if(this.password == '') {
                this.$swal('Oops...', 'Preencha a senha corretamente.', 'error')
                return false
            } else return true
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
    background: white;
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

<template>
    <div class="form register" v-loading="loading">
        <img src="../../../assets/logo.png" class="logo" alt="">

        <el-input class="input" v-model="query.name" placeholder="Name" />
        <el-input class="input" v-model="query.username" placeholder="Username" />
        <el-input class="input" v-model="query.email" placeholder="E-mail" />
        <el-input class="input" v-model="query.password" placeholder="Password" type="password" />
        <el-input class="input" v-model="confirmPass" placeholder="Confirm password" type="password" />
        
        <el-button type="primary" class="btn" @click="register()" variant="primary">Register</el-button>

        <slot name="login-btn"></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            query: {
                name: '',
                username: '',
                email: '',
                password: '',
                date: ''
            },
            confirmPass: '',
            loading: false
        }
    },
    methods: {
        register () {
            this.loading = true
            const params = { name: this.query.name, login: this.query.username, password: this.query.password, email: this.query.email }
            if(this.VerifyFields()) {
                this.$node.post('users/register', params)
                .then(({data}) => {
                    if(data.status) this.Login(params.login, params.password)
                    else return this.$swal('Oops...', data.details, 'error')
                })
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
            }
        },
        VerifyFields () {
            if(this.query.name == '') {
                this.$swal('Oops...', 'Preencha o nome corretamente.', 'error')
                return false
            } else if(this.query.username == '') {
                this.$swal('Oops...', 'Preencha o username corretamente.', 'error')
                return false
            } else if(this.query.email == '') {
                this.$swal('Oops...', 'Preencha o e-mail corretamente.', 'error')
                return false
            } else if(this.query.password == '') {
                this.$swal('Oops...', 'Preencha a senha corretamente.', 'error')
                return false
            } else if(this.query.password !== this.confirmPass) {
                this.$swal('Oops...', 'As senhas não são iguais.', 'error')
                return false
            } else return true
        },
        Login (login, password) {
            this.loading = true
            const params = { login, password }
            this.$node.post('users/login', params)
            .then(({data}) => {
                localStorage.setItem('user', JSON.stringify(data.user))
                location.reload()
            })
            .catch(err => console.log(err))
            .finally(() => this.loading = false)
        }
    }
}
</script>

<style lang="scss" scoped>
.register {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px 0 0 30px;
    padding: 40px;
    width: 500px;
    height: 500px;
    box-shadow: 0px 1px 10px -1px rgba(0,0,0,0.4);
    background: white;
    >.logo {
        width: 75px;
        margin: 10px 0;
    }
    >.input, .btn {
        width: 70%;
        margin-bottom: 10px;
    }
}
</style>
<template>
    <div class="form register">
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
            confirmPass: ''
        }
    },
    methods: {
        register () {
            const self = this

            if(verifyFields()) {
                this.$node.post('users/register', {
                    nome: this.query.name,
                    login: this.query.username,
                    senha: this.query.password,
                    email: this.query.email,
                    data_nascimento: this.query.date
                })
                .then(({data}) => {
                    console.log(data)
                })
                .catch(err => console.log(err))
            }

            function verifyFields () {
                if(self.query.name == '') {
                    console.log('Nome deve ser preenchido')
                    return false
                } else if(self.query.username == '') {
                    console.log('Username deve ser preenchido')
                    return false
                } else if(self.query.email == '') {
                    console.log('Email deve ser preenchido')
                    return false
                } else if(self.query.date == '') {
                    console.log('Data de nascimento deve ser preenchida')
                    return false
                } else if(self.query.password == '') {
                    console.log('Senha deve ser preenchido')
                    return false
                } else if(self.query.password !== self.confirmPass) {
                    console.log('Senhas não são iguais')
                    return false
                } else return true
            }
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
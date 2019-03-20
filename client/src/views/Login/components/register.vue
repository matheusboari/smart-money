<template>
    <div class="form register">
        <h1 class="title">Register</h1>
        <input class="input" v-model="query.name" type="text" name="user" placeholder="Name">
        <input class="input" v-model="query.username" type="text" name="user" placeholder="Username">
        <input class="input" v-model="query.email" type="text" name="email" placeholder="E-mail">
        <input class="input" v-model="query.date" type="date">
        <input class="input" v-model="query.password" type="password" name="pass" placeholder="Password">
        <input class="input" v-model="confirmPass" type="password" name="confirm-pass" placeholder="Confirm password">
        <button class="btn-primary" @click="register()">Register</button>

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
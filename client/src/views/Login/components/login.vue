<template>
    <div class="form login">
        <h1 class="title">Login</h1>
        <input class="input" type="text" name="user" placeholder="Username" v-model="username" />
        <input class="input" type="password" name="pass" placeholder="Password" v-model="password" />
        <button class="btn-primary">Login</button>
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

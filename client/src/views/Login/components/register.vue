<template>
    <div class="form register">
        <h1 class="title">Register</h1>
        <input class="input" type="text" name="user" placeholder="Name">
        <input class="input" type="text" name="user" placeholder="Username">
        <input class="input" type="text" name="email" placeholder="E-mail">
        <input class="input" type="password" name="pass" placeholder="Password">
        <input class="input" type="password" name="confirm-pass" placeholder="Confirm password">
        <button class="btn-primary">Register</button>

        <slot name="login-btn"></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
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
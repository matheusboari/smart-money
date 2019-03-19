<template>
    <div class="body-register">
        <h1>Register</h1>
        <input type="text" name="user" placeholder="Name">
        <input type="text" name="user" placeholder="Username">
        <input type="text" name="email" placeholder="E-mail">
        <input type="password" name="pass" placeholder="Password">
        <input type="password" name="confirm-pass" placeholder="Confirm password">
        <button>Register</button>

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

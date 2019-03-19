<template>
    <div class="body-login">
        <h1>Login</h1>
        <input type="text" name="user" placeholder="Username">
        <input type="password" name="pass" placeholder="Password">
        <button>Login</button>
        <slot name="register-btn"></slot>
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

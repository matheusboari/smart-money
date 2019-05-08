<template>
    <div class="trails-page-wrapper">
        <primary-header />
        <div class="trails-content-wrapper">

        </div>
    </div>
</template>

<script>
import primaryHeader from '../../components/primaryHeader.vue'

export default {
    components: {
        primaryHeader
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.trails-content-wrapper {
    height: 120vh;
}
</style>

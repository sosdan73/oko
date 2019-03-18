<template>
    <div>
        <navbar></navbar>
        <transition name="appear" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue';
    import Home from './Home.vue';
    export default {
        components: {
            navbar: Navbar,
            home: Home,
        }
    }
</script>

<style lang="scss" scoped>
    $pink: #ffeff2;
    $lightgrey: #eee;
    $grey: #b0b0b0;
    $creatorgrey: #777777;
    $dark: #454545;
    
    .appear-enter {
        opacity: 0;
    }
    .appear-enter-active {
        transition: opacity 800ms;
    }
    .appear-leave-active {
        transition: opacity 800ms;
        opacity: 0;
    }
</style>

<template>
    <div>
        <navbar></navbar>
        <router-view></router-view>
        
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
    
</style>

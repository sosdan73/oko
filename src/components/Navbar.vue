<template>
    <div>
        <img id="menuImg" src="../images/navbar_background.png" alt="">
        <a href="#" @click="showMenu"><i class="fas fa-bars"></i></a>
        <div id="menu">
            <div v-for="l in links">
                <a :href="l.linkMob">{{ l.name.toUpperCase() }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import { navlinks } from '../data.js';
    export default {
        data() {
            return {
                links: navlinks
            }
        },
        methods: {
            showMenu() {

            }
        },

    }
</script>

<style lang="scss" scoped>
    $grey: #b0b0b0;
    #menuImg {
        width: 100%;
        height: 30%;
        position: absolute;
        left: 0;
        top: -12%;
    }
    i {
        color: $grey;
        font-size: 55px;
        position: absolute;
        left: 5%;
        top: 2%;
    }
    #menu {
        width: 40%;
        margin-left: 30%;
        margin-right: 30%;
        position: absolute;
        top: 5%;
        div {
            margin-bottom: 5%;
            a {
                text-decoration: none;
                color: $grey;
            }
            a:hover {
                border-bottom: 1px solid $grey;
            }
        }
    }
</style>

<template>
    <div>
        <img id="menuImg" src="../images/navbar_background.png" alt="">
        <a href="#" @click="showMenu"><i class="fas fa-bars"></i></a>
        <transition name="anim-menu">
            <div id="menu" v-if="menuClicked" @click="showMenu">
                <div v-for="l in links">
                    <router-link :to="l.linkMob">{{ l.name.toUpperCase() }}</router-link>
                </div>
            </div>
        </transition>
        <transition name="anim-img">
            <div @click="showMenu">
                <router-link to="/" v-if="menuClicked"><i class="fas fa-backward"></i></router-link>
            </div>
        </transition>
    </div>
</template>

<script>
    import { navlinks } from '../data.js';
    import { eventBus } from '../main.js';
    export default {
        data() {
            return {
                links: navlinks,
                menuClicked: false
            }
        },
        methods: {
            showMenu() {
                this.menuClicked = !this.menuClicked;
                eventBus.$emit('changeLogoShowing', this.menuClicked);
                if (this.menuClicked) {
                    var menuImg = document.querySelector('#menuImg');
                    var top = -12;
                    var timer = setInterval(function() {
                        top += 0.5;
                        menuImg.style.top = top + '%';
                        if (top == 0) clearInterval(timer);
                    }, 20);
                } else {
                    var menuImg = document.querySelector('#menuImg');
                    var top = 0;
                    var timer = setInterval(function() {
                        top -= 0.5;
                        menuImg.style.top = top + '%';
                        if (top == -12) clearInterval(timer);
                    }, 20);
                }
            }
        },

    }
</script>

<style lang="scss" scoped>
    $grey: #b0b0b0;

    .anim-menu-enter {
        opacity: 0;
    }
    .anim-menu-enter-active {
        transition: opacity 750ms;
    }
    .anim-menu-leave-active {
        transition: opacity 750ms;
        opacity: 0;
    }

    .anim-img-enter {
        opacity: 0;
    }
    .anim-img-enter-active {
        transition: opacity 7500ms;
    }
    .anim-img-leave-active {
        transition: opacity 750ms;
        opacity: 0;
    }

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
    .fa-backward {
        position: absolute;
        left: 15%;
        top: 2%;
    }
</style>

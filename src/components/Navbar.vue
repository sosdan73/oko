<template>
    <div>
        <img id="menuImg" src="../images/navbar_background.png" alt="" :style="{height:height}">
        <a href="#" @click="showMenu"><i class="fas fa-bars"></i></a>
        <transition name="anim-menu">
            <div id="menu" v-if="menuClicked" @click="showMenu">
                <div v-for="l in links">
                    <router-link :to="l.linkMob">{{ l.name.toUpperCase() }}</router-link>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import { navlinks } from '../data.js';
    import { eventBus } from '../main.js';
    const mar = (window.innerHeight * 0.33) + 'px';
    export default {
        data() {
            return {
                links: navlinks,
                menuClicked: false,
                height: mar
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

   @media (min-width: 0px) {
        #oko {
            font-size: 3rem;
            top: 2%;
        }
        i {
            font-size: 2.8rem;
        }
    }
   @media (min-width: 350px) {
        #oko {
            font-size: 3rem;
            top: 2%;
        }
        i {
            font-size: 3.1rem;
        }
    }
    @media (min-width: 450px) {
        #oko {
            font-size: 4rem;
            top: 1%;
        }
        i {
            font-size: 4.6rem;
        }
    }

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

    .okoanim-enter {
        opacity: 0;
    }
    .okoanim-enter-active {
        transition: opacity 750ms;
    }
    .okoanim-leave-active {
        transition: opacity 750ms;
        opacity: 0;
    }
    
    #menuImg {
        width: 100%;
        position: absolute;
        left: 0;
        top: -12%;
    }
    i {
        color: $grey;
        position: absolute;
        left: 5%;
        top: 2%;
    }
    #oko {
        position: absolute;
        right: 4%;
        color: $grey;
        text-decoration: none;
        font-weight: 100;
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

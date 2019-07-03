<template>
    <div>
        <transition name="logo">
            <h2 v-if="showLogo" :style="{marginTop:marginTitle}">О НАС</h2>
        </transition>
        <p id="text" :style="{marginTop:marginContent}">{{ text }}</p>
        <div class="arrow" @click="prevPerson">
            <i class="fas fa-angle-left"></i>
        </div>
        <div id="mobileAboutUs">
            <img :src="about[0].imageLink" alt="">
            <h3>{{ about[0].name }}</h3>
            <p>{{ about[0].description }}</p>
        </div>
        <div class="arrow" @click="nextPerson">
            <i class="fas fa-angle-right"></i>
        </div>
        <footer-component id="footerComponent"></footer-component>
    </div>
</template>

<script>
    import { aboutUsText } from '../data.js';
    import { about } from '../data.js';
    import { eventBus } from '../main.js';
    import Footer from './Footer.vue';
    
    
    export default {
        methods: {
            mar() {
                return (window.innerHeight * 0.21) + 'px';
            },
            mar2() {
                return (window.innerHeight * 0.35) + 'px';
            },
            prevPerson() {

            },
            nextPerson() {

            }
        },
        data() {
            return {
                text: aboutUsText,
                about: about,
                marginTitle: this.mar(),
                marginContent: this.mar2(),
                showLogo: true
            }
        },
        created() {
            eventBus.$on('changeLogoShowing', (logoShowed) => {
                this.showLogo = !logoShowed;
            });
        },
        components: {
            footerComponent: Footer
        },
    }
</script>

<style lang="scss" scoped>
    $lightgrey: #eee;
    $dark: #454545;

    @media (min-width: 0px) {
        h2 {
            font-size: 2.5rem;
        }
        #text {
            font-size: 1rem;
        }
        .arrow, #mobileAboutUs {
            height: 200px;
        }
        .arrow i {
            margin-top: calc(100px - 2rem);
        }
    }
    @media (min-width: 350px) {
        h2 {
            font-size: 3rem;
        }
        #text {
            font-size: 1.2rem;
        }
        .arrow, #mobileAboutUs {
            height: 200px;
        }
        .arrow i {
            margin-top: calc(100px - 2rem);
        }
    }
    @media (min-width: 450px) {
        h2 {
            font-size: 4rem;
        }
        #text {
            font-size: 1.3rem;
        }
        .arrow, #mobileAboutUs {
            height: 250px;
        }
        .arrow i {
            margin-top: calc(125px - 2rem);
        }
    }


    .logo-enter {
        opacity: 0;
    }
    .logo-enter-active {
        transition: opacity 2000ms;
    }
    .logo-leave-active {
        transition: opacity 300ms;
        opacity: 0;
    }

    div {
        color: $dark;
        h2 {
            position: absolute;
            top: 0;
            width: 100%;
        }
        #text {
            margin: 0 10%;
            text-align: justify;
            margin-bottom: 7%;
        }
        .arrow {
            width: 15%;
            float: left;
            cursor: pointer;
            color: $dark;
            font-size: 4rem;
            i {
                cursor: inherit;
            }
        }
        .arrow:hover {
            color: #303030;
        }
        .arrow:active {
            color: $dark;
        }
        #mobileAboutUs {
            padding-top: 2%;
            width: 70%;
            float: left;
            img {
                width: 40%;
            }
        }
        #footerComponent {
            position: fixed;
            bottom: -1%;
        }
    }
    
</style>


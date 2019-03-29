<template>
    <div>
        <transition name="logo">
            <h2 v-if="showLogo" :style="{marginTop:marginTitle}">{{ 'Методика'.toUpperCase() }}</h2>
        </transition>
        <p id="t0" :style="{marginTop:marginContent}">{{ text[0] }}</p>
        <h3>Межоклюзионное пространство является «ключом» к функциональным мышечным цепям.</h3>
        <p id="t1">{{ text[1] }}</p>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import { methodicsText } from '../data.js';
    import { eventBus } from '../main.js';
    import Footer from './Footer.vue';
    const mar = (window.innerHeight * 0.21) + 'px';
    const mar2 = (window.innerHeight * 0.35) + 'px';

    export default {
        data() {
            return {
                text: methodicsText,
                marginTitle: mar,
                marginContent: mar2,
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
        }
    }
</script>

<style lang="scss" scoped>
    $dark: #454545;
    $margin: 6%;

    @media (min-width: 0px) {
        div p {
            font-size: 1rem;
        }
        h2 {
            font-size: 2.5rem;
        }
        h3 {
            font-size: 1.5rem;
        }
    }
    @media (min-width: 350px) {
        div p {
            font-size: 1.3rem;
        }
        h2 {
            font-size: 3rem;
        }
        h3 {
            font-size: 2rem;
        }
    }
    @media (min-width: 450px) {
        div p {
            font-size: 1.5rem;
        }
        h2 {
            font-size: 4rem;
        }
        h3 {
            font-size: 2.6rem;
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
        p {
            margin: 0 7%;
            letter-spacing: 0.5px;
            text-align: justify;
        }
        h3 {
            margin: 6%;
        }
        #t1 {
            margin-bottom: 10%;
            margin-top: 0;
        }
    }
    
</style>


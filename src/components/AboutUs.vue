<template>
    <div>
        <transition name="logo">
            <h2 v-if="showLogo" :style="{marginTop:marginTitle}">О НАС</h2>
        </transition>
        <div id="mobileAboutUs" :style="{marginTop:marginContent}">
            <p id="text">{{ text }}</p>
            <div v-for="a in about" class="man">
                <div class="img">
                    <img :src="'.' + a.imageLink" alt="">
                </div>
                <div class="info">
                    <p>
                        <h3>{{ a.name }}</h3>
                        {{ a.description }}
                    </p>
                </div>
            </div>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import { aboutUsText } from '../data.js';
    import { about } from '../data.js';
    import { eventBus } from '../main.js';
    import Footer from './Footer.vue'; 
    const mar = (window.innerHeight * 0.21) + 'px';
    const mar2 = (window.innerHeight * 0.35) + 'px';
    
    export default {
        data() {
            return {
                text: aboutUsText,
                about: about,
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
    $lightgrey: #eee;
    $dark: #454545;

    @media (min-width: 0px) {
        h2 {
            font-size: 2.5rem;
        }
    }
    @media (min-width: 350px) {
        h2 {
            font-size: 3rem;
        }
    }
    @media (min-width: 450px) {
        h2 {
            font-size: 4rem;
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
        #mobileAboutUs {
            width: 100%;
            #text {
                margin: 0 10%;
                text-align: justify;
                margin-bottom: 7%;
            }
            .man {
                width: 100%;
                margin-bottom: 8%;
                height: 170px;
                .img {
                    float: left;
                    width: 24%;
                    margin-left: 8%;
                    img {
                        width: 100%;
                        max-width: 150px;
                    }
                }
                .info {
                    float: left;
                    width: 60%;
                    text-align: left;
                    padding-left: 4%;
                    margin-top: -2%;
                    p {
                        font-size: 20px;
                    }
                    h3 {
                        font-size: 26px;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
    
</style>


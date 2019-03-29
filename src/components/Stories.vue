<template>
    <div>
        <transition name="logo">
            <h2 v-if="showLogo" :style="{marginTop:marginTitle}">ИСТОРИИ</h2>
        </transition>
        <section :style="{marginTop:marginContent}">
            <div v-for="v in videos" class="area" :style="{marginBottom:marginBottom(v.id)}">
                <div class="video" :style="{height:calcVideo()}">
                    <iframe :src="v.link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="person">
                    <p>{{ v.name }}</p>
                </div>
            </div>
        </section>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import { videos } from '../data.js';
    import { eventBus } from '../main.js';
    import Img from './Wave.vue';
    import Footer from './Footer.vue'
    const mar = (window.innerHeight * 0.21) + 'px';
    const mar2 = (window.innerHeight * 0.35) + 'px';

    export default {
        data() {
            return {
                videos,
                width: '70%',
                marginTitle: mar,
                marginContent: mar2,
                showLogo: true
            }
        },
        methods: {
            calcVideo() {
                let pxWidth = window.innerWidth * Number.parseFloat(this.width) / 100;
                let pxHeight = pxWidth * 9 / 16;
                console.log(pxWidth, pxHeight);
                return pxHeight + 'px';
            },
            calcHeight() {
                let pxHeight = Number.parseFloat(window.innerHeight);
                return (pxHeight * 0.25) + 'px';
            },
            marginBottom(id) {
                if (id ==  2) {
                    return '15%';
                }
            }
        },
        components: {
            imgComp: Img,
            footerComponent: Footer
        },
        created() {
            eventBus.$on('changeLogoShowing', (logoShowed) => {
                this.showLogo = !logoShowed;
            });
        }
    }
</script>

<style lang="scss" scoped>
    $dark: #454545;
    $lightgrey: #eee;
    $grey: #b0b0b0;

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
        color: $lightgrey;
        h2 {
            position: absolute;
            top: 0;
            width: 100%;
            color: $dark;
        }
        section {
            margin-top: 35%;
            .area {
                width: 70%;
                margin: 5% 15%;
                .video {
                    margin-bottom: 0;
                    height: 10%;
                    iframe {
                        width: 100%;
                        height: 100%;
                    }
                }
                .person {
                    margin-top: 0;
                    background-color: $dark;
                    text-align: left;
                    p {
                        padding-left: 5%;
                        padding-top: 2%;
                        padding-bottom: 2%;
                        font-size: 18px;
                        margin: 0;
                    }
                }
            }
        }
    }

</style>


<template>
    <div>
        <transition name="logo">
            <h1 v-if="showLogo">ОКО</h1>
        </transition>
        <img id="rightBubble" src="../images/right_bubble.png" alt="">
        <img id="rightPaws" src="../images/paws.png" alt="">
    </div>
</template>

<script>
    import { eventBus } from '../main.js';

    export default {
        created() {
            eventBus.$on('changeLogoShowing', (logoShowed) => {
                this.showLogo = !logoShowed;
            });
        },
        data() {
            return {
                showLogo: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    $lightgrey: #eee;

    .logo-enter {
        opacity: 0;
    }
    .logo-enter-active {
        transition: opacity 500ms;
    }
    .logo-leave-active {
        transition: opacity 500ms;
        opacity: 0;
    }

    h1 {
        font-size: 66px;
        color: $lightgrey;
        position: absolute;
        top: 20%;
        left: 25%;
    }
    #rightBubble {
        position: absolute;
        bottom: 3%;
        right: 0;
        width: 65%;
        max-width: 450px;
        height: 70%;
    }
    #rightPaws {
        position: absolute;
        right: 5%;
        bottom: 13%;
    }
</style>

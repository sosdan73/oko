<template>
    <div>
        <navbar></navbar>
        <h1>ОКО</h1>
        <img id="rightBubble" src="../images/right_bubble.png" alt="">
        <img id="rightPaws" src="../images/paws.png" alt="">
    </div>
</template>

<script>
    import Navbar from './Navbar.vue';
    export default {
        components: {
            navbar: Navbar,
        }
    }
</script>

<style lang="scss" scoped>
    $pink: #ffeff2;
    $lightgrey: #eee;
    $grey: #b0b0b0;
    $creatorgrey: #777777;
    $dark: #454545;
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

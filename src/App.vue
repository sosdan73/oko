<template>
    <div id="app">
        <desktop id="desktop"></desktop>
        <mobile id="mobile"></mobile>
    </div>
</template>

<script>
    import Desktop from './components/Desktop.vue';
    import Mobile from './components/Mobile.vue';
    export default {
        components: {
            desktop: Desktop,
            mobile: Mobile
        }
    }
</script>

<style lang="scss">
    $pink: #ffeff2;
    $lightgrey: #eee;
    $grey: #b0b0b0;
    $creatorgrey: #777777;
    $dark: #454545;

    @media (min-width: 800px) {
        #mobile {
            display: none;
        }
    }
    @media (max-width: 799px) {
        #desktop {
            display: none;
        }
    }

    #app {
        font-family: 'Avenir', sans-serif;
        text-align: center;
        letter-spacing: 1px;
    }
    
    body {
        margin: 0;
        height: 100%;
        width: 100%;
        background-color: $grey;
        overflow-y: hidden;
    }
    html, body {
        overflow-x: hidden;
    }
</style>

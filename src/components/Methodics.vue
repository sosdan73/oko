<template>
    <div>
        <h2>{{ 'Методика'.toUpperCase() }}</h2>
        <p>{{ text[0] }}</p>
        <h3>Межоклюзионное пространство является «ключом» к функциональным мышечным цепям.</h3>
        <p>{{ text[1] }}</p>
    </div>
</template>

<script>
    import { methodicsText } from '../data.js';
    export default {
        data() {
            return {
                text: methodicsText
            }
        }
    }
</script>

<style lang="scss" scoped>
    $dark: #454545;
    div {
        color: $dark;
    }
    h2 {
        margin-top: 20%;
        font-size: 38px;
    }
    p {
        margin: 0 7% 0 7%;
        font-size: 18px;
        letter-spacing: 0.5px;
        text-align: justify;
    }
    h3 {
        font-size: 28px;
        // text-align: justify;
        margin: 5%;
    }
</style>


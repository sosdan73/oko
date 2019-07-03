<template>
    <div>
        <img class="footerImg" src="../images/footer.png" alt="">
        <p>Made by <strong>BSG Studios &copy</strong>
        <br>
        <a href="https://dial-dent.ru" target="_blank">www.dial-dent.ru</a></p>
        <div>
            <span><router-link id="logoOko" to="/">OKO</router-link></span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    $dark: #454545;

    @media (min-width: 0px) {
        p, a {
            font-size: 0.8rem;
        }
        p {
            margin-top: -9%;
            padding-bottom: 3%;
        }
    }
    @media (min-width: 375px) {
        p, a {
            font-size: 1rem;
        }
        p {
            margin-top: -10%;
            padding-bottom: 3%;
        }
    }
    @media (min-width: 450px) {
        p, a {
            font-size: 1.2rem;
        }
        p {
            margin-top: -5%;
            padding-bottom: 2%;
        }
    }

    div {
        .footerImg {
            width: 103%;
            margin-bottom: -5%;
            margin-left: -3%;
        }
        p {
            margin-bottom: 0;
            margin-left: 5%;
            text-align: left;
            color: $dark;
            a {
                text-decoration: none;
                color: $dark;
            }
        }
        div {
            text-align: right;
            margin-top: -8%;
            margin-bottom: 2%;
            span {
                font-family: 'Raleway', sans-serif;
                margin-right: 5%;
                #logoOko {
                    text-decoration: none;
                    color: $dark;
                    font-size: 2.5rem;
                }
            }
        }
    }

</style>

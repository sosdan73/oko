<template>
    <div>
        <img src="../images/wave2.png" id="img">
    </div>
</template>

<style lang="scss" scoped>
    @keyframes img {
        from {
            transform: translateX(0);
        } to {
            transform: translateX(-33.3333%);
        }
    }

    #img {
        width: 150%;
        max-height: 30%;
        animation-name: img;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
</style>

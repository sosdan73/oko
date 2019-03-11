<template>
    <div id="app">
        <!-- Start Section -->
        <section id="start">
            <nav>
                <div v-for="i in navLinks">
                    <a :href="i.link">{{ i.name.toUpperCase() }}</a>
                </div>
            </nav>
            <img src="./images/paws.png" alt=" ">
            <div id="logo">
                <h1>ОКО</h1>
                <h2>Ортокранио-окклюзивное программирование</h2>
            </div>
        </section>

        <!-- Methodics Section -->
        <section id="methodics">
            <section id="sectionMethodics">
                    <header>
                        <h2>Взаимосвязь равновесия, устойчивости межоклюзионного пространства</h2>
                        <p>Межоклюзионное пространство является «ключом» к функциональным мышечным цепям.</p>
                    </header>
                    <p id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis ullam temporibus deserunt alias natus autem ex incidunt. Dolore dolor commodi optio natus maiores aliquid explicabo maxime perferendis velit non inventore officiis sequi laborum modi officia, ipsum sit deleniti quo laboriosam voluptatibus accusamus fuga sapiente tenetur excepturi. Quos eius quas facilis doloremque, similique repudiandae laborum nisi tempora dicta possimus iure vitae dolorum magni illum aspernatur expedita laboriosam eaque ut temporibus voluptatibus asperiores hic! Dolorem sunt nulla nobis libero nostrum dolor ad expedita quisquam reiciendis, illum delectus possimus natus accusamus quos consectetur. Et debitis corrupti necessitatibus quibusdam. Ipsam architecto ad magnam.</p>
                    <transition name="appereance">
                        <p v-if="pShow" id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aperiam veniam esse cum nam possimus id, sapiente, a harum perferendis atque quidem eius impedit consequuntur vitae vel praesentium, rerum mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci ab dicta ad molestiae repellendus distinctio doloribus modi, rem veritatis similique minima placeat ipsa dignissimos! Repellendus voluptatem aperiam quia labore!</p>
                    </transition>
                    <span @click="pShow = !pShow">{{ readOrHide() }}</span>
                    <img src="./images/wave2.png" id="img"></img>
            </section>
        </section>

        <!-- About us Section -->
        <section id="aboutUs">
            <section id="sectionAboutUs">
                <header>
                    <h2>О нас</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat praesentium vitae quidem odio aspernatur?</p>
                </header>
                <section>
                    <div v-for="a in aboutData">
                        <img :src="a.imageLink" alt="">
                        <div>
                            <span>{{ a.name.toUpperCase() }}</span>
                            <p>{{ a.position }}</p>
                        </div>
                        <p>{{ a.description }}</p>
                    </div>
                </section>
            </section>
        </section>

        <!-- Stories Section -->
        <section id="stories"> 
            <h2>ИСТОРИИ</h2>
            <section>
                <div class="blockVideo">
                    <transition name="videos">
                        <div :id="'div'+loopId.pourId" class="iframe" :style="position[loopId.pourId]" v-if="videosShow">
                            <div>
                                <iframe :src="videosData[loopId.sourceId].link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <hr>
                                <p><strong>{{ videosData[loopId.sourceId].name.toUpperCase() }}</strong><br>{{ videosData[loopId.sourceId].nameDescription }}</p>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="i" id="leftArrow" @click="prevVideo()">
                    <i class="fas fa-angle-left"></i>
                </div>
                <div class="i" id="rightArrow" @click="nextVideo()">
                    <i class="fas fa-angle-right"></i>
                </div>
            </section>
        </section>

        <!-- Footer Section -->
        <section id="footer">
            <footer>
                <div id="footerLogo">
                    <!-- <img src="./images/Logo.png" alt=""> -->
                    <p><strong>О ОКО</strong></p>
                </div>
                <div id="footerContacts">
                        <p>
                            <span>Подробнее о клинике:</span>
                            <span id="phone"><a href="tel:+7(999)999-99-99">+7(999)999-99-99</a></span>
                            <br>
                            <span id="mail"><a href="mailto:web@page.com">web@page.com&nbsp</a></span>
                            <br>
                            <a href="https://dial-dent.ru" target="_blank">www.dial-dent.ru</a>
                        </p>
                </div>
                <div id="footerLink">
                    <span>Made by <strong>BSG Studios &copy</strong></span>
                </div>
            </footer>
        </section>
    </div>
</template>

<script>
    import { about } from './aboutData.js';
    import { videos } from './videosData.js';
    export default {
        name: 'app',
        data () {
            return {
                // About layout
                position: {
                    right: '0%'
                },
                isClickable: true,
                navLinks: [
                    {name: 'Методика', link: '#methodics'},
                    {name: 'О нас', link: '#aboutUs'},
                    {name: 'Истории', link: '#stories'},
                    // {name: 'Контакты', link: '#'}
                ],
                aboutData: about,
                videosData: videos,
                pShow: false,
                videosShow: true,
                // About JS
                firstTime: true,
                reversedVideos: false,
                videosId: [0, 1],
                loopId: {
                    pourId: 0,
                    sourceId: 0
                },
            }
        },
        methods: {
            stringRequire(string) {
                return require(string);
            },
            readOrHide() {
                if (this.pShow) {
                    return 'Скрыть';
                } else {
                    return 'Читать больше';
                }
            },
            hideShowVideo() {
                this.videosShow = !this.videosShow;
                setTimeout(function() {
                    this.videosShow = !this.videosShow;
                }.bind(this), 750);
            },
            changeLink(sign) {
                let id = this.loopId.sourceId;
                if (sign == 1) {
                    id + 1 == this.videosData.length ? id = 0 : id++;
                    this.loopId.sourceId = id;
                } else {
                    id == 0 ? id = this.videosData.length - 1 : id--;
                    this.loopId.sourceId = id;
                }
            },
            nextVideo() {
                if (this.isClickable) {
                    this.changeLink(1);
                    this.isClickable = !this.isClickable;
                    this.hideShowVideo();
                    setTimeout(function() {
                        this.isClickable = !this.isClickable;
                    }.bind(this), 750);
                }
            },
            prevVideo() {
                if (this.isClickable) {
                    this.changeLink(-1);
                    this.isClickable = !this.isClickable;
                    this.hideShowVideo();
                    setTimeout(function() {
                        this.isClickable = !this.isClickable;
                    }.bind(this), 750);
                }
            },
        }
    }
</script>

<style lang="scss">
    $pink: #ffeff2;
    $lightgrey: #eee;
    $grey: #b0b0b0;
    $creatorgrey: #777777;
    $dark: #454545;
    @keyframes img {
        from {
            transform: translateX(0);
        } to {
            transform: translateX(-33.3333%);
        }
    }
    .appereance-enter {
        opacity: 0;
    }
    .appereance-enter-active {
        transition: opacity 1s;
    }
    .appereance-leave-active {
        transition: opacity 500ms;
        opacity: 0;
    }
    .videos-enter {
        opacity: 0;
    }
    .videos-enter-active {
        transition: opacity 750ms;
    }
    .videos-leave-active {
        transition: opacity 750ms;
        opacity: 0;
    }
    #app {
        font-family: 'Avenir', sans-serif;
        text-align: center;
        letter-spacing: 1px;
        #start {
            background-image: url('./images/backgroundHome.png');
            height: 760px;
            background-attachment: local;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            color: $lightgrey;
            margin-bottom: 100px;
            nav {
                margin-left: 34.16666667%;
                margin-right: 32.83333333%;
                padding-top: 40px;
                width: 33%;
                div {
                    padding: 0 0.74404762%;
                    float: left;
                    width: 31.845238%
                }
                div:hover {
                    border-bottom: solid 1px $lightgrey;
                }
                a {
                    text-decoration: none;
                    font-size: 14px;
                    margin: 0 12.6283355%;
                    color: $lightgrey;
                }
            }
            #logo {
                position: absolute;
                top: 250px;
                left: 26.3888889%;
                width: 27.0833333%;
                h1 {
                    font-size: 52px;
                    margin-bottom: 25px;
                }
                h2 {
                    font-size: 24px;
                }
            }
            img {
                position: absolute;
                left: 65.9722222%;
                top: 385px;
            }
        }
        #methodics {
            color: $dark;
            #sectionMethodics {
                padding-top: 100px;
                header {
                    margin-bottom: 50px;
                    h2 {
                        font-size: 52px;
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 24px;
                    }
                }
                #text {
                    column-count: 2;
                    margin: 10px 9.02777778% 30px 9.02777778%;
                }
                #img {
                    width: 150%;
                    max-height: 30%;
                    animation-name: img;
                    animation-duration: 5s;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;
                }
                span {
                    font-weight: bold;
                    cursor: pointer;
                    position: relative;
                    margin-top: 500px;
                }
            }
        }
        #aboutUs {
            padding-top: 20px;
            #sectionAboutUs {
                color: $dark;
                background-color: $grey;
                background-image: url('./images/pink_bubbles.png');
                background-attachment: local;
                background-size: 110% 120%;
                background-repeat: no-repeat;
                padding-bottom: 110px;
                header {
                    h2 {
                        font-size: 52px;
                        margin-bottom: 10px;
                    }
                    p {
                        font-size: 24px;
                        margin: 20px 27.7777778%;
                    }
                }
                section {
                    width: 80%;
                    margin-left: 10%;
                    margin-right: 10%;
                    margin-bottom: 100px;
                    height: 338px;
                    div {
                        float: left;
                        width: 20%;
                        margin-right: 6.66666667%;
                        margin-left: 6.66666667%;
                        margin-bottom: 50px;
                        img {
                            width: 60%;
                            margin-bottom: 15px;
                        }
                        p {
                            font-size: 16px;
                            margin-bottom: 40px;
                        }
                        div {
                            border: none;
                            float: none;
                            width: 100%;
                            margin: 0;
                            span {
                                font-weight: 900;
                                letter-spacing: 0.5px;
                            }
                            p {
                                margin-bottom: 0;
                                font-style: italic;
                            }
                        }
                    }
                }
            }
        }
        #stories {
            background-color: $dark;
            color: $lightgrey;
            padding-top: 20px;
            padding-bottom: 150px;
            h2 {
                font-size: 52px;
                font-weight: 700;
                letter-spacing: 0.5px;
                margin-bottom: 25px;
            }
            section {
                min-height: 300px;
                padding-bottom: 200px;
                .blockVideo {
                    position: absolute;
                    left: 20%;
                    width: 60%;
                    .iframe {
                        margin: 0 14.2361111%;
                        iframe {
                            width: 100%;
                            height: 352.5px;
                        }
                        hr {
                            color: $lightgrey;
                        }
                        p {
                            text-align: left;
                        }
                    }
                }
                .i {
                    cursor: pointer;
                    background-color: $dark;
                    color: $lightgrey;
                    font-size: 46px;
                    width: 20%;
                    height: 319px;
                    i {
                        cursor: inherit;
                        position: absolute;
                        top: 50%;
                    }
                    i:active {
                        color: inherit;
                    }
                }
                #leftArrow {
                    position: absolute;
                    left: 0;
                }
                #rightArrow {
                    position: absolute;
                    right: 0;
                }
                .i:active {
                    color: $grey;
                }
                
            }
        }
        #footer {
            color: $dark;
            a {
                text-decoration: none;
                color: $dark;
            }
            a:hover {
                font-weight: 700;
            }
            #footerLogo {
                width: 20%;
                height: 100%;
                float: left;
                img {
                    width: 10%;
                }
                p {
                    // float: right;
                    // margin-right: 50%;
                    margin-top: 30px;
                }
            }
            #footerContacts {
                width: 53%;
                margin-right: 2%; 
                height: 100%;
                float: left;
                text-align: right;
                p {
                    margin-bottom: 0;
                }
            }
            #footerLink {
                background-color: $lightgrey;
                color: $creatorgrey;
                width: 25%;
                height: 90px;
                float: left;
                span {
                    position: relative;
                    top: 40%;
                }           
            }
        }
    }
    body {
        margin: 0;
        height: 100%;
        width: 100%;
        background-color: $grey;
        overflow-x: hidden;
    }
</style>

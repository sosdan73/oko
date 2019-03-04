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
            <!-- <img src="./images/wave.png" alt=""> -->
        </section>

        <!-- About us Section -->
        <section id="aboutUs">
            <header>
                <h2>О нас</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat praesentium vitae quidem odio aspernatur?</p>
            </header>
            <section>
                <div v-for="a in aboutData">
                    <img :src="a.imageLink" alt="">
                    <p>{{ a.description }}</p>
                    <div>
                        <span>{{ a.name.toUpperCase() }}</span>
                        <p>{{ a.position }}</p>
                    </div>
                </div>
            </section>
        </section>

        <!-- Stories Section -->
        <section id="stories"> 
            <h2>ИСТОРИИ</h2>
            <section>
                <div class="blockVideo">
                    <div v-for="v in loopId" :id="'div'+v.pourId" class="iframe" :style="position[v.pourId]">
                        <div>
                            <iframe :src="videosData[v.sourceId].link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <hr>
                            <p><strong>{{ videosData[v.sourceId].name.toUpperCase() }}</strong><br>{{ videosData[v.sourceId].nameDescription }}</p>
                        </div>
                    </div>
                </div>
                <div class="i" id="leftArrow" @click="prevVideo()">
                    <i class="fas fa-angle-left" @click="prevVideo()"></i>
                </div>
                <div class="i" id="rightArrow" @click="nextVideo()">
                    <i class="fas fa-angle-right"></i>
                </div>
            </section>
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
                position: [
                    {right: '0%'},
                    {right: '0%'}
                ],
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
                // About JS
                firstTime: true,
                reversedVideos: false,
                videosId: [0, 1],
                loopId: [
                    { pourId: 0, sourceId: 0 },
                    { pourId: 1, sourceId: 1 },
                ]
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
            toggleBool() {
                this.isClickable = !this.isClickable;
                // console.log('toggled!');
            },
            changeLink0() {
                let dif = this.videosData.length - this.loopId[this.videosId[0]].sourceId;
                if (dif <= 2) {
                    this.loopId[this.videosId[0]].sourceId = Math.abs(dif - 2);
                } else {
                    this.loopId[this.videosId[0]].sourceId += 2;
                }
            },
            changeLink1() {
                let dif = this.loopId[this.videosId[1]].sourceId;
                if (dif < 2) {
                    this.loopId[this.videosId[1]].sourceId += this.videosData.length - 2;
                } else {
                    this.loopId[this.videosId[1]].sourceId -= 2;
                }
            },
            moveLeftVideoToRight(num) {
                let i = 0;
                let timer = setInterval(move.bind(this), 7);
                function move() {
                    i++;
                    this.position[num].right = (Number.parseFloat(this.position[num].right) - 1.25) + '%';
                    if (i == 40) {
                        clearInterval(timer);
                    }
                };
            },
            moveLeftVideoToLeft(num) {
                let i = 0;
                let timer = setInterval(move.bind(this), 7);
                function move() {
                    i++;
                    this.position[num].right = (Number.parseFloat(this.position[num].right) + 1.25) + '%';
                    if (i == 40) {                         
                        if (this.firstTime) {
                            this.position[num].right = Number.parseFloat(this.position[num].right) - 150 + '%';
                            this.firstTime = false;
                        } else {
                            this.firstTime = true;
                            this.reversedVideos = !this.reversedVideos;
                            this.videosId[0] = Math.abs(this.videosId[0] - 1);
                            this.videosId[1] = Math.abs(this.videosId[1] - 1);
                            setTimeout(this.toggleBool.bind(this), 3000);
                        }
                        clearInterval(timer);
                    }
                };
            },
            moveRightVideoToRight(num) {
                let i = 0;
                let timer = setInterval(move.bind(this), 7);
                function move() {
                    i++;
                    this.position[num].right = (Number.parseFloat(this.position[num].right) - 1.25) + '%';
                    if (i == 40) {
                        clearInterval(timer);                           
                        if (this.firstTime) {
                            this.position[num].right = Number.parseFloat(this.position[num].right) + 150 + '%';
                            this.firstTime = false;
                        } else {
                            this.firstTime = true;
                            this.reversedVideos = !this.reversedVideos;
                            this.videosId[0] = Math.abs(this.videosId[0] - 1);
                            this.videosId[1] = Math.abs(this.videosId[1] - 1);
                            setTimeout(this.toggleBool.bind(this), 3000);
                        }
                    }
                };
            },
            moveRightVideoToLeft(num) {
                let i = 0;
                let timer = setInterval(move.bind(this), 7);
                function move() {
                    i++;
                    this.position[num].right = (Number.parseFloat(this.position[num].right) + 1.25) + '%';
                    if (i == 40) {
                        clearInterval(timer);
                    }
                };
            },
            nextVideo() {
                if (this.isClickable) {
                    this.changeLink0();
                    this.toggleBool();
                    this.moveRightVideoToLeft(this.videosId[1]);
                    this.moveLeftVideoToLeft(this.videosId[0]);
                    setTimeout(function() {
                        this.moveLeftVideoToLeft(this.videosId[0]);
                    }.bind(this), 500);
                }
            },
            prevVideo() {
                if (this.isClickable) {
                    this.changeLink1();
                    this.toggleBool();
                    this.moveLeftVideoToRight(this.videosId[0]);
                    this.moveRightVideoToRight(this.videosId[1]);
                    setTimeout(function() {
                        this.moveRightVideoToRight(this.videosId[1]);
                    }.bind(this), 300);
                }
            },
        }
    }
</script>

<style lang="scss">
    $pink: #ffeff2;
    $lightgrey: #eee;
    $grey: #b0b0b0;
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
    #app {
        font-family: 'Roboto', 'Avenir', sans-serif;
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
                margin-left: 39.16666667%;
                padding-top: 40px;
                div {
                    padding: 0 5px;
                    float: left;
                }
                div:hover {
                    border-bottom: solid 1px $lightgrey;
                }
                a {
                    text-decoration: none;
                    font-size: 14px;
                    margin: 0 20px;
                    color: $lightgrey;
                }
            }
            #logo {
                position: absolute;
                top: 250px;
                left: 380px;
                width: 325px;
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
                left: 950px;
                top: 385px;
            }
        }
        #methodics {
            color: $dark;
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
                margin: 10px 130px 30px 130px;
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
        #aboutUs {
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
                    margin-bottom: -50px;
                }
                p {
                    font-size: 24px;
                    margin: 100px 400px

                }
            }
            section {
                width: 80%;
                margin-left: 10%;
                margin-right: 10%;
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
        #stories {
            background-color: $dark;
            color: $lightgrey;
            padding-top: 100px;
            h2 {
                font-size: 14px;
                font-weight: 700;
                letter-spacing: 0.5px;
                margin-bottom: 25px;
            }
            section {
                min-height: 300px;
                padding-bottom: 200px;
                .blockVideo {
                    position: absolute;
                    left: 15.6666667%;
                    width: 68.6666667%;
                    .iframe {
                        margin: 0 3.94736842%;
                        display: inline-block;
                        position: relative;
                        iframe {
                            width: 412px;
                            height: 235px;
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
                    font-size: 32px;
                    width: 15.6666667%;
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
    }
    body {
        margin: 0;
        height: 100%;
        width: 100%;
        background-color: $grey;
        overflow-x: hidden;
    }
</style>

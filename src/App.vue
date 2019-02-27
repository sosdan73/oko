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
                    <div v-for="v in [0, 1]" :id="'div'+v" class="iframe" :style="position[v]">
                        <div>
                            <iframe :src="videosData[v].link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <hr>
                            <p><strong>{{ videosData[v].name.toUpperCase() }}</strong><br>{{ videosData[v].nameDescription }}</p>
                        </div>
                    </div>
                </div>
                <div class="i" id="leftArrow" @click="prevVideo()">
                    <i class="fas fa-angle-left" @click="prevVideo()"></i>
                </div>
                <div class="i" id="rightArrow" @click="nextVideo()">
                    <i class="fas fa-angle-right" @click="nextVideo()"></i>
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
                    navLinks: [
                        {name: 'Методика', link: '#'},
                        {name: 'О нас', link: '#'},
                        {name: 'Истории', link: '#'},
                        {name: 'Контакты', link: '#'}
                    ],
                    aboutData: about,
                    videosData: videos,
                    id: [0, 1],
                    pShow: false,
                    firstTime: true,
                    position: [
                        {right: '0%'},
                        {right: '0%'}
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
                changeLeftVideoPosition() {
                    
                },
                changeRightVideoPosition() {

                },
                moveLeftVideoToRight() {

                },
                moveLeftVideoToLeft1() {
                    const div0 = document.querySelector('#div0');
                    var passed = 0;
                    var timer = setInterval(move, 10);
                    function move() {
                        if (this.firstTime == false) {
                            passed = -100;
                            div0.style.left = '100%';
                        }
                        div0.style.right = passed + '%';
                        if (Math.abs(passed) == 50) {
                            clearInterval(timer);
                            if (this.firstTime == true) {
                                this.firstTime = false;
                            }
                        } else {
                            passed += 2.5;
                            console.log(passed);
                        }
                    };
                },
                moveLeftVideoToLeft2() {
                    var i = 0;
                    var timer = setInterval(move.bind(this), 10);
                    function move() {
                        console.log(i, this.position[0].right);
                        
                        i++;
                        this.position[0].right = (Number.parseFloat(this.position[0].right) + 1.25) + '%';
                        if (i == 19) {
                            clearInterval(timer);
                            console.log(this.firstTime);                            
                            if (this.firstTime) {
                                this.position[0].right = -100 + '%';
                                this.firstTime = false;
                            } else {
                                this.position[0].right = -50 + '%';
                                this.firstTime = true;
                            }
                        }
                    };
                    // var coordinate = Number.parseInt(div0.style.right);
                    // if (isNaN(coordinate)) {
                    //     coordinate = 0;
                    // }
                    // var timer = setInterval(move.bind(this), 10);
                    // function move() {
                    //     div0.style.right = coordinate + '%';
                    //     if (i == 20) {
                    //         clearInterval(timer);
                    //         console.log(this.firstTime);
                            
                    //         if (this.firstTime == true) {
                    //             console.log(Number.parseInt(div0.style.right), coordinate);
                    //             div0.style.right -= 150 + '%';
                    //             console.log(Number.parseInt(div0.style.right), coordinate);
                    //         }
                    //     } else {
                    //         i++;
                    //         coordinate += 2.5;
                    //         console.log(coordinate);
                    //     }
                    // };
                    // this.position[0].right = -20 + '%';
                },
                moveRightVideoToRight() {

                },
                moveRightVideoToLeft() {
                    const div1 = document.querySelector('#div1');
                    var passed = 0;
                    var timer = setInterval(move, 10);
                    function move() {
                        div1.style.right = passed + '%';
                        if (passed >= 50) {
                            clearInterval(timer);
                        } else {
                            passed += 2.5;
                        }
                    }
                },
                nextVideo() {
                    this.moveLeftVideoToLeft2();
                    // setTimeout(this.moveLeftVideoToLeft2.bind(this), 550);
                    // this.moveRightVideoToLeft();
                },
                prevVideo() {
                    this.moveRightVideoToRight();
                    this.moveLeftVideoToRight();
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
                position: absolute;
                left: 470px;
                top: 40px;
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

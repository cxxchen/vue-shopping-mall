<template>
    <div class="container">
        <HomeNav></HomeNav>
        <!-- 商品显示区域 -->
        <div class="content">
            <!-- 秒杀 -->
            <div class="seckill">
                <!-- 头部 -->
                <div class="seckill-head">
                    <div class="seckill-icon">
                        <img src="static/img/index/clock.png">
                    </div>
                    <div class="seckill-text">
                        <span class="seckill-title">限时特购</span>
                        <span class="seckill-remarks"></span>
                    </div>
                </div>
                <!-- 内容 -->
                <div class="seckill-content">
                    <div class="seckill-item" v-for="(item, index) in seckills.goodsList" :key="index">
                        <div class="seckill-item-img">
                            <router-link to="GoodsList"><img :src="item.img"></router-link>
                        </div>
                        <div class="seckill-item-info">
                            <p>{{item.intro}}</p>
                            <p>
                                <span class="seckill-price text-danger"><Icon
                                    type="social-yen"></Icon>{{item.price}}</span>
                                <span class="seckill-old-price"><s>{{item.realPrice}}</s></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 推荐商品 -->
            <div class="seckill-head">
                    <div class="seckill-icon">
                        <img src="static/img/index/clock.png">
                    </div>
                    <div class="seckill-text">
                        <span class="seckill-title">推荐商品</span>
                        <span class="seckill-remarks"></span>
                    </div>
            </div>
             <!--内容-->
               <div class="seckill-content" v-for="(item, index) in computer.detail" :key="index">
                <div class="seckill-item" v-for="(sitem, index) in item.itemFour" :key="index">
                    <div class="seckill-item-img">
                        <router-link to="GoodsList"><img :src="sitem.img"></router-link>
                    </div>
                    <div class="seckill-item-info">
                        <p>{{sitem.intro}}</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

    import HomeNav from '@/components/nav/HomeNav';
    import store from '@/vuex/store';
    import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';
    import Footer from './footer/Footer.vue';

    export default {
        name: 'Index',
        created() {
            this.loadSeckillsInfo();
            this.loadCarouselItems();
            this.loadComputer();
            this.loadEat();
            this.loadShoppingCart();
        },
        mounted() {
            const father = this;
            this.setIntervalObj = setInterval(function () {
                father.REDUCE_SECKILLS_TIME();
            }, 1000);
        },
        data() {
            return {
                setIntervalObj: null
            };
        },
        methods: {
            ...mapActions(['loadSeckillsInfo', 'loadCarouselItems', 'loadComputer', 'loadEat', 'loadShoppingCart']),
            ...mapMutations(['REDUCE_SECKILLS_TIME'])
        },
        computed: {
            ...mapState(['seckills', 'computer', 'eat']),
            ...mapGetters(['seckillsHours', 'seckillsMinutes', 'seckillsSeconds'])
        },
        components: {
            HomeNav,
            Footer
        },
        destroyed() {
            clearInterval(this.setIntervalObj);
        },
        store
    };
</script>

<style scoped>
    .container {
        background-color: #F6F6F6;
    }

    .content {
        width: 1008px;
        margin: 0px 150px;
    }

    /*****************************秒杀专栏开始*****************************/
    /*秒杀专栏*/
    .seckill {
        width: 100%;
        height: 330px;
        margin: 15px auto;
    }

    .seckill-head {
        width: 100%;
        height: 50px;
        background-color: #ff0000;
    }

    .seckill-icon {
        width: 68px;
        height: 100%;
        float: left;
    }

    .seckill-icon img {
        width: 35px;
        height: 35px;
        margin-top: 6px;
        margin-left: 15px;
        animation-name: shake-clock;
        animation-duration: 0.3s;
        animation-iteration-count: infinite; /*设置无线循环*/
    }


    .seckill-text {
        width: 300px;
        height: 100%;
        float: left;
    }

    .seckill-text .seckill-title {
        font-size: 22px;
        line-height: 50px;
        color: #fff;
    }

    .seckill-text .seckill-remarks {
        margin-left: 5px;
        font-size: 10px;
        color: #fff;
    }

    /*倒计时*/
    .count-down {
        height: 100%;
        margin-right: 30px;
        line-height: 50px;
        float: right;
    }

    .count-down-text {
        color: #fff;
    }

    .count-down-num {
        padding: 3px;
        border-radius: 5px;
        background-color: #440106;
        font-size: 26px;
        font-weight: bold;
        color: #f90013;
    }

    .count-down-point {
        font-size: 26px;
        font-weight: bold;
        color: #440106;
    }

    .seckill-content {
        width: 100%;
        height: 280px;
    }

    .seckill-item {
        width: 183px;
        height: 250px;
        margin-top: 15px;
        margin-left: 15px;
        box-shadow: 0px 0px 8px #ccc;
        cursor: pointer;
        float: left;
    }

    .seckill-item-img {
        width: 160px;
        height: 160px;
        margin: 0px auto;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        background-color: #fff;
    }

    .seckill-item-img img {
        width: 130px;
        height: 130px;
        margin-left: 15px;
        margin-top: 15px;
        transition: margin-top 0.3s;
    }

    .seckill-item-img:hover img {
        margin-top: 6px;
        transition: margin-top 0.3s;
    }

    .seckill-item-info {
        padding: 5px;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 12px;
        color: black;
    }

    .seckill-item-info i:first-child {
        font-size: 14px;
    }

    .seckill-price {
        margin-right: 5px;
        font-size: 25px;
        font-weight: bold;
    }

    /*****************************秒杀专栏结束*****************************/

    /*****************************商品专栏开始*****************************/
    .item-class {
        width: 100%;
        height: 470px;
        margin-top: 15px;
        background-color: #fff;
    }

    .item-class-head {
        width: 100%;
        height: 50px;
        background-color: #4488a7;
    }

    .item-class-eat-head {
        background-color: #32b3c9;
    }

    .item-class-head ul {
        list-style: none;
        float: right;
        margin-right: 30px;
        line-height: 50px;
    }

    .item-class-head a {
        padding: 6px;
        margin-left: 15px;
        font-size: 12px;
        background-color: #6da6be;
        border: 1px solid #6da6be;
        text-decoration: none;
        color: #fff;
    }

    .item-class-eat-head a {
        background-color: #6095a0;
        border: 1px solid #53cfe8;
    }

    .item-class-head a:hover {
        border: 1px solid #fff;
    }

    .item-class-head li {
        float: left;
    }

    .item-class-title {
        font-size: 25px;
        line-height: 50px;
        color: #fff;
        margin-left: 15px;
    }

    .item-class-content {
        width: 49%;
        cursor: pointer;
        border-right: 1px solid #ccc;
        margin-left: 0.9%;
        /*background-color: #cff;*/
        float: left;
    }

    .item-class-content:nth-child(odd) {
        border: none;
    }

    .item-content-top {
        width: 100%;
        height: 260px;
    }


    .pt_bi_tit {
        font-weight: bold;
        font-size: 12px;
        color: #4488a7;
    }

    .pt_bi_tit-eat {
        color: #ecb127;
    }

    .pt_bi_promo {
        color: #00695c;
    }

    .item-content-bottom {
        width: 100%;
        margin-top: 8px;
    }

    .item-content-bottom-img {
        width: 156px;
        margin-right: 8px;
        overflow: hidden;
        float: left;
    }

    .item-content-bottom-img img {
        margin-left: 0px;
        transition: margin-left 0.3s;
        max-width: 90%;
        margin-left: 10%;
    }

    .item-content-bottom-img:hover img {
        margin-left: -15px;
        transition: margin-left 0.3s;
    }

    /*****************************商品专栏结束*****************************/
</style>

<template>
    <div>
        <SearchBar></SearchBar>
        <GoodsListNav></GoodsListNav>
        <div class="nav-body">
            <!-- 侧边导航 -->
            <div class="nav-side" ref="navSide">
                <ul>
                    <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
                        <span class="nav-side-item">手机</span> /
                        <span class="nav-side-item">电话卡</span>
                    </li>
                    <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
                        <span class="nav-side-item">电视</span> /
                        <span class="nav-side-item">盒子</span>
                    </li>
                    <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
                        <span class="nav-side-item">笔记本</span> /
                        <span class="nav-side-item">显示器</span>
                    </li>
                    <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
                        <span class="nav-side-item">家电</span> /
                        <span class="nav-side-item">插线板</span>
                    </li>
                    <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
                        <span class="nav-side-item">扫地机器人</span>
                    </li>
                         <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
                        <span class="nav-side-item">智能</span> /
                        <span class="nav-side-item">路由器</span>
                    </li>
                         <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
                        <span class="nav-side-item">耳机</span> /
                        <span class="nav-side-item">音箱</span>
                    </li>
                         <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
                        <span class="nav-side-item">生活</span> /
                        <span class="nav-side-item">箱包</span>
                    </li>
                </ul>
            </div>
            <div class="nav-content">
                <!-- 幻灯片 -->
                <div>
                    <Carousel autoplay loop>
                        <CarouselItem v-for="(item, index) in marketing.CarouselItems" :key="index">
                            <router-link to="/goodsList">
                                <img :src="item">
                            </router-link>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="detail-item-panel panel-1" :duration="{ enter: 100, leave: 100 }" v-show="panel1"
                 @mouseenter="showDetail(1)" ref="itemPanel1" @mouseleave="hideDetail(1)">
                <div class="nav-detail-item">
                    <span v-for="(item, index) in panelData1.navTags" :key="index">{{item}} > </span>
                </div>
                <ul>
                    <li v-for="(items, index) in panelData1.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
                        <router-link to="/goodsList" v-for="(item, subIndex) in items.tags" :key="subIndex">
                            <span class="detail-item">{{item}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </transition>
        <transition name="fade">
            <div class="detail-item-panel panel-2" :duration="{ enter: 100, leave: 100 }" v-show="panel2"
                 @mouseenter="showDetail(2)" ref="itemPanel2" @mouseleave="hideDetail(2)">
                <div class="nav-detail-item">
                    <span v-for="(item, index) in panelData2.navTags" :key="index">{{item}} > </span>
                </div>
                <ul>
                    <li v-for="(items, index) in panelData2.classNav" :key="index" class="detail-item-row">
                        <span class="detail-item-title">{{items.title}}
                          <span class="glyphicon glyphicon-menu-right"></span>
                        </span>
                        <router-link to="/goodsList" v-for="(item, subIndex) in items.tags" :key="subIndex">
                            <span class="detail-item">{{item}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    import SearchBar from '../header/SearchBar.vue';
    import GoodsListNav from '@/components/nav/GoodsListNav';
    import store from '@/vuex/store';
    import {mapState} from 'vuex';

    export default {
        name: 'HomeNav',
        data() {
            return {
                panel1: false,
                panel2: false,
                nav: [],
                panelData1: {
                    navTags: ['手机','家电'],
                    classNav: [
                        {
                            tags: ['小米10至尊版', '小米10', '小米10青春版', 'Redmi K30S至尊纪念版', 'Redmi K30至尊纪念版', '小米云服务']
                        },
                        {
                            tags: ['Redmi k30 pro', 'Redmi k30 5g', 'Redmi k30 4g', 'Redmi 10x pro', 'Redmi 10x 5g','Redmi 10x 4g']
                        },
                        {

                            tags: ['Redmi note 9 pro', 'Redmi note 9 5g', 'Redmi note 9 4g', 'Redmi note 8 pro','Redmi note 8']
                        },
                        {
                            tags: ['Redmi k30 pro', 'Redmi k30 5g', 'Redmi k30 4g', 'Redmi 10x pro', 'Redmi 10x 5g','Redmi 10x 4g']
                        },
                        {

                            tags: ['Redmi note 9 pro', 'Redmi note 9 5g', 'Redmi note 9 4g', 'Redmi note 8 pro','Redmi note 8']
                        },
                        {
                            tags: ['Redmi 9', 'Redmi 9A', 'Redmi 8', 'Redmi 8A', '腾讯黑鲨游戏手机', '手机电信']
                        },
                        {
                            tags: ['米家扫地机器人1T 黑色', '米家扫地一体机器人 黑色', '米家扫地机器人G1白色', '米家扫拖机器人',]
                        },
                        {

                            tags: ['米家扫拖机器人1C 白色', '米家扫地机器人1S 白色', '米家扫地机器人', '米家机器人白色','米家吸尘器 白色']
                        },
                          {

                            tags: ['米家无线吸尘器 白色', '语音自动清扫套餐', '米家手持无线吸尘器1C 白色', '米家扫拖一体机配件 拖布']
                        }
                    ]
                },
                panelData2: {
                    navTags: ['电视','笔记本'],
                    classNav: [
                        {
                            
                            tags: ['小米透明电视', '小米电视大师 82英寸', '小米电视5 Pro 55英寸', '小米电视5 65英寸', 'Redmi 智能电视A系列']
                        },
                        {
                            
                            tags: ['量子点电视', 'Redmi智能电视X系列', '小米电视5 PRO 65英寸', '小米电视5 55英寸', '小米全面屏电视E43k']
                        },
                        {
                            
                            tags: ['金属全面屏电视', '小米盒子', '大师电视 65英寸OLED', '小米电视5Pro75英寸', '小米电视4A 60英寸']
                        },
                        {
                           
                            tags: ['Redmi 智能电视 x55', '小米全面屏电视', '电视音箱', 'Redmi 智能电视 MAX 98', '小米电视4A 70英寸']
                        },
                        {
                           
                            tags: ['小米电视4S 75英寸', '小米壁画电视', '激光投影电视', '小米电视5Pro75英寸', '小米电视4A 60英寸']
                        },
                         {
                            
                            tags: ['Redmi G 游戏本', 'RedmiBook Air 13', 'RedmiBook 16', 'RedmiBook 14', 'RedmiBook 13']
                        },
                        {
                           
                            tags: ['小米笔记本Pro 15.6', 'RedmiBook 15', '小米笔记本 Air 13.3', '小米笔记本 Air 12.5', '小米游戏本']
                        },
                        {
                            
                            tags: ['小米显示器34英寸', '小米显示器27英寸', 'Redmi显示器23.8英寸', '键鼠套餐', '鼠标','转接器']
                        }
                    ]
                }
            };
        },
        computed: {
            ...mapState(['marketing'])
        },
        methods: {
            showDetail(index) {
                index === 1 ? (this.panel1 = true) : (this.panel2 = true);
            },
            hideDetail(index) {
                index === 1 ? (this.panel1 = false) : (this.panel2 = false);
            }
        },
        mounted() {
            this.$refs.itemPanel1.style.left =this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
            this.$refs.itemPanel2.style.left =this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
            this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
            this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
        },
        updated() {
            this.$refs.itemPanel1.style.left = this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
            this.$refs.itemPanel2.style.left =this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
            this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
            this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
        },
        components:{
            SearchBar,
            GoodsListNav,
        },
        store
    };
</script>

<style scoped>
    .nav-item ul {
        list-style: none;
        margin-left: 15px;
    }

    .nav-item li {
        float: left;
        font-size: 16px;
        font-weight: bold;

        margin-left: 30px;
    }

    .nav-item a {
        text-decoration: none;
        color: #555555;
    }

    .nav-item a:hover {
        color: #d9534f;
    }

    /*大的导航信息，包含导航，幻灯片等*/
    .nav-body {
        width: 1020px;
        height: 485px;
        margin: 0px 150px;
    }

    .nav-side {
        width: 185px;
        height: 100%;
        padding: 0px;
        margin-left:1px;
        color: #fff;
        float: left;
        background-color: #1a1818;
    }

    .nav-side ul {
        width: 100%;
        padding: 0px;
        padding-top: 15px;
        list-style: none;
    }

    .nav-side li {
        padding: 7.5px;
        padding-left: 15px;
        font-size: 14px;
        line-height: 18px;
        border-radius: 2px;
        border:solid 1px gray;
        margin: 5px;
    }

    .nav-side li:hover {
        background: #999395;
    }

    .nav-side-item:hover {
        cursor: pointer;
        color: #c81623;
    }

    /*轮播内容*/
    .nav-content {
        width: 792px;
        margin-left: 20px;
        overflow: hidden;
        float: left;
    }

    /*导航图片*/
    .nav-show-img {
        margin-top: 10px;
        float: left;
    }

    .nav-show-img:nth-child(2) {
        margin-left: 12px;
    }

    /*显示商品*/
    .content {
        width: 100%;
    }

    /*显示商品详细信息*/
    .detail-item-panel {
        width: 815px;
        height: 485px;
        background-color: #fff;
        position: absolute;
        top: 168px;
        left: 389px;
        z-index: 999;
    }

    .nav-detail-item {
        margin-left: 26px;
        margin-top: 15px;
        margin-bottom: 15px;
        cursor: pointer;
        color: #eee;
    }

    .nav-detail-item span {
        padding: 6px;
        padding-left: 12px;
        margin-left: 15px;
        font-size: 12px;
        background-color: #6e6568;
    }

    .nav-detail-item span:hover {
        margin-left: 15px;
        background-color: #f44336;
    }

    .detail-item-panel ul {
        list-style: none;
    }

    .detail-item-panel li {
        line-height: 38px;
        margin-left: 40px;
    }

    .detail-item-title {
        padding-right: 6px;
        font-weight: bold;
        font-size: 12px;
        cursor: pointer;
        color: #555555;
    }

    .detail-item-title:hover {
        color: #d9534f;
    }

    .detail-item-row a {
        color: #555555;
    }

    .detail-item {
        font-size: 14px;
        padding-left: 12px;
        padding-right: 8px;
        cursor: pointer;
        border-left: 1px solid #ccc;
    }

    .detail-item:hover {
        color: #d9534f;
    }
</style>

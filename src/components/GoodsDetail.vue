<template>
    <div>
        <SearchBar></SearchBar>
        <GoodsListNav></GoodsListNav>
        <div class="shop-item-path">
            <div class="shop-nav-container">
                <Breadcrumb>
                    <BreadcrumbItem to="/">首页</BreadcrumbItem>
                    <BreadcrumbItem to="/goodsList">返回商品全部分类</BreadcrumbItem>
                    <BreadcrumbItem>内容</BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
        <!-- 商品信息展示 -->
        <ShowGoods></ShowGoods>
        <!-- 商品详细展示 -->
        <ShowGoodsDetail></ShowGoodsDetail>
        <Spin size="large" fix v-if="isLoading"></Spin>
        <Footer></Footer>
    </div>
</template>

<script>

    import SearchBar from './header/SearchBar.vue';
    import GoodsListNav from '@/components/nav/GoodsListNav';
    import ShowGoods from '@/components/goodsDetail/ShowGoods';
    import ShowGoodsDetail from '@/components/goodsDetail/ShowGoodsDetail';
    import store from '@/vuex/store';
    import {mapState, mapActions} from 'vuex';
    import Footer from './footer/Footer.vue';

    export default {
        name: 'GoodsDetail',
        beforeRouteEnter(to, from, next) {
            window.scrollTo(0, 0);
            next();
        },
        created() {
            let goodId= this.$route.query.goodId;
            this.loadGoodsInfo(goodId);
        },
        data() {
            return {
                tagsColor: ['blue', 'green', 'red', 'yellow']
            };
        },
        methods: {
            ...mapActions(['loadGoodsInfo'])
        },
        computed: {
            ...mapState(['goodsInfo', 'isLoading'])
        },
        components: {
            SearchBar,
            GoodsListNav,
            ShowGoods,
            ShowGoodsDetail,
            Footer
        },
        store
    };
</script>

<style scoped>
    .shop-item-path {
        height: 38px;
        background-color: rgb(236, 235, 235);
        line-height: 38px;
        color: #2c2c2c;
    }

    .shop-nav-container {
        margin: 0px auto;
        width: 80%;
    }
</style>

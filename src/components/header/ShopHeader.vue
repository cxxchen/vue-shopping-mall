<template>
    <div class="shop-box">
        <div class="shop-container">
            <div class="shop-title">
                <div class="shop-title-icon">
                    <Icon type="fireball"></Icon>
                    <i class="fa fa-fire"></i>
                </div>
                <div class="shop-title-content">
                    <p>
                        <router-link to="/merchant">{{ shopIntro.shopName }}</router-link>
                    </p>
                    <p>
                        <router-link to="/merchant">{{ shopIntro.slogen }}</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ShopHeader',
        data() {
            return {
                shopIntro: {
                    shopName: '商品分类',
                    slogen: '商品详情页',
                    showGoods: [
                        {
                            img: 'static/img/goodsList/item-show-1.jpg',
                            intro: []
                        },
                        {
                            img: 'static/img/goodsList/item-show-2.jpg',
                            intro: []
                        },
                        {
                            img: 'static/img/goodsList/item-show-3.jpg',
                            intro: []
                        }
                    ]
                }
            };
        }
    };
</script>

<style scoped>
    /* 店铺介绍 */
    .shop-box {
        width: 100%;
        height: 120px;
        background-color: #77b0d6;
    }

    .shop-container {
        width: 80%;
        height: 100%;
        margin: 0px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #fff;
    }

    .shop-title {
        display: flex;
        flex-direction: row;
    }

    .shop-title-icon {
        font-size: 46px;
    }

    .shop-title-content {
        padding-top: 8px;
        margin-left: 15px;
    }

    .shop-title-content p {
        line-height: 26px;
        font-size: 20px;
    }

    .shop-title-content a {
        color: #fff;
    }

    .shop-another-item {
        display: flex;
        flex-direction: row;
    }

    .shop-another-item-detail {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 15px;
    }

    .shop-another-item-img {
        height: 80px;
        border-radius: 40px;
        overflow: hidden;
    }

    .shop-another-item-img img {
        width: 80px;
    }

    .shop-anoter-item-intro {
        margin-left: 15px;
    }
</style>

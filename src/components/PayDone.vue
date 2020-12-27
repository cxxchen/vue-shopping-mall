<template>
    <div>
        <SearchBar></SearchBar>
        <GoodsListNav></GoodsListNav>
        <div class="pay-container">
            <div class="pay-box">
                <div class="pay-qr-scan">
                    <div class="pay-tips">
                        <router-link to="/">
                        <p>
                         支付成功，我们将会为您尽快发货！点击这里，返回主页！！！  
                        </p></router-link>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import SearchBar from './header/SearchBar.vue';
    import GoodsListNav from '@/components/nav/GoodsListNav';
    import Footer from './footer/Footer.vue';
    
    export default {
        name: 'Pay',
        components: {
            SearchBar,
            GoodsListNav,
            Footer
        },
    };
</script>

<style scoped>
    .pay-container {
        margin: 15px auto;
        width: 80%;
        min-width: 1000px;
        border: solid 1px rgb(255, 0, 0);
    }

    .pay-box {
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .pay-demo {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pay-demo img {
        height: 80%;
    }

    .pay-qr-scan {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .pay-tips {
        width: 80%;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
    }

    .pay-tips a {
        color: #999999;
        font-size: 30px;
    }
</style>

<template>
    <div>
        <SearchBar></SearchBar>
        <GoodsListNav></GoodsListNav>
        <div class="goods-list-container">
            <Table border ref="selection" :columns="columns" :data="shoppingCart" size="large"
                   @on-selection-change="select" no-data-text="您的购物车没有商品，请先添加商品到购物车再点击购买"></Table>
            <div class="address-container">
                <h3>收货人地址</h3>
                <div class="address-box">
                    <div class="address-check">
                        <div class="address-detail">
                            <p>{{checkAddress.address}}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            选择地址
                            <p slot="content">
                                <RadioGroup vertical size="large" @on-change="changeAddress">
                                    <Radio :label="item.addressId" v-for="(item, index) in address" :key="index">
                                        <span>{{item.name}} {{item.province}} {{item.city}} {{item.address}} {{item.phone}} {{item.postalcode}}</span>
                                    </Radio>
                                </RadioGroup>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pay-container">
                <div class="pay-box">
                    <p><span>合计：</span> <span class="money"><Icon type="social-yen"></Icon> {{totalPrice.toFixed(2)}}
                    <router-link to="/pay">
                            <Button type="error" size="large">支付订单</Button>
                    </router-link></span>
                    </p>
                        
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

    import GoodsListNav from '@/components/nav/GoodsListNav';
    import store from '@/vuex/store';
    import {mapState, mapActions} from 'vuex';
    import SearchBar from './header/SearchBar.vue';
    import Footer from './footer/Footer.vue';


    export default {
        name: 'Order',
        beforeRouteEnter(to, from, next) {
            window.scrollTo(0, 0);
            next();
        },
        created() {
            this.loadAddress();
        },
        data() {
            return {
                goodsCheckList: [],
                columns: [
                    {
                        type: 'selection',
                        width: 58,
                        align: 'center'
                    },
                    {
                        title: '图片',
                        key: 'img',
                        width: 86,
                        render: (h, params) => {
                            return h('div', [
                                h('img', {
                                    attrs: {
                                        src: params.row.img
                                    }
                                })
                            ]);
                        },
                        align: 'center'
                    },
                    {
                        title: '商品信息',
                        key: 'title',
                        align: 'center'
                    },
                    {
                        title: '型号',
                        width: 198,
                        key: 'package',
                        align: 'center'
                    },
                    {
                        title: '数量',
                        key: 'count',
                        width: 68,
                        align: 'center'
                    },
                    {
                        title: '价格',
                        width: 68,
                        key: 'price',
                        align: 'center'
                    }
                ],
                checkAddress: {
                    name: '未选择',
                    address: '请选择地址'
                },
                remarks: ''
            };
        },
        computed: {
            ...mapState(['address', 'shoppingCart']),
            totalPrice() {
                let price = 0;
                this.goodsCheckList.forEach(item => {
                    price += item.price * item.count;
                });
                return price;
            }
        },
        methods: {
            ...mapActions(['loadAddress']),
            select(selection, row) {
                console.log(selection);
                this.goodsCheckList = selection;
            },
            changeAddress(data) {
                const father = this;
                this.address.forEach(item => {
                    if (item.addressId === data) {
                        father.checkAddress.name = item.name;
                        father.checkAddress.address = `${item.name} ${item.province} ${item.city} ${item.address} ${item.phone} ${item.postalcode}`;
                    }
                });
            }
        },
        mounted() {
            setTimeout(() => {
                this.$refs.selection.selectAll(true);
            }, 500);
        },
        components: {
             SearchBar,
             GoodsListNav,
             Footer
        },
        store
    };
</script>

<style scoped>
    .goods-list-container {
        margin: 15px auto;
        width: 80%;
    }

    .tips-box {
        margin-bottom: 15px;
    }

    .address-container {
        margin-top: 15px;
    }

    .address-box {
        margin-top: 15px;
        padding: 15px;
        border: 1px #ccc dotted;

    }

    .address-check {
        margin: 15px 0px;
        height: 36px;
        display: flex;
        align-items: center;
    }

    .address-check-name {
        width: 120px;
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: #ccc;
    }

    .address-check-name span {
        width: 120px;
        height: 36px;
        font-size: 14px;
        line-height: 36px;
        text-align: center;
        color: #fff;
        background-color: #f90013;
    }

    .address-detail {
        padding-left: 15px;
        font-size: 14px;
        color: #999999;
    }

    .remarks-container {
        margin: 15px 0px;
    }

    .remarks-input {
        margin-top: 15px;
    }

    .invoices-container p {
        font-size: 12px;
        line-height: 30px;
        color: #999;
    }

    .pay-container {
        margin: 15px;
        display: flex;
        justify-content: flex-end;
        border: solid 1px black;
        background-color:rgb(223, 223, 223);
    }

    .pay-box {
        font-size: 18px;
        font-weight: bolder;
        color: #495060;
        margin-top:-3px;
    }

    .money {
        font-size: 26px;
        color: #e9650e;
    }
</style>

<template>
    <div class="container">
        <Layout class="layout">
            <Header>
                <Menu active-name="1-2" theme="dark" width="auto" @on-select="onSelect" mode="horizontal">
                    <MenuItem name="myAddress">我的收货地址</MenuItem>
                    <MenuItem name="myOrder">我的订单</MenuItem>
                    <MenuItem name="myShoppingCart">我的购物车</MenuItem>
                </Menu>
            </Header>


            <Content class="content">
                <transition mode="out-in">
                    <router-view></router-view>
                </transition>
            </Content>

        </Layout>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                activeTitle: '我的订单',
                bar: {
                    'myAddress': '收货地址',
                    'addAddress': '添加收货地址',
                    'myOrder': '我的订单',
                    'myShoppingCart': '我的购物车'
                }
            };
        },
        methods: {
            onSelect(name) {
                this.activeTitle = this.bar[name];
                this.$router.push(`/home/${name}`);
            }
        }
    };
</script>

<style scoped>
    .side-bar a {
        color: #232323;
    }

    .user-icon {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .user-icon span {
        font-size: 96px;
    }

    .user-img {
        margin-bottom: 15px;
        width: 96px;
        height: 96px;
        border-radius: 48px;
        overflow: hidden;
    }

    .user-img img {
        width: 100%;
    }

    .content {
        margin: 15px;
        background-color: #fff;
        padding: 15px;
    }

    .layout-footer-center {
        padding: 0px 15px;
        padding-bottom: 15px;
        text-align: center;
    }
</style>

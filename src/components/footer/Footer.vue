<template>
    <div>
        <footer class="footer">
            <div class="clearfix"></div>
            <div class="service-intro">
                <div class="clearfix"></div>
                <div class="friend-link">
                    <div class="friend-link-item">
                        <ul>
                            <li v-for="(link, index) in moreLink" :key="index">
                                <span :class="[linkItemClass, {'link-last-item': index === 10}]">{{link}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="copyright">
                    <p>合作伙伴 联系我们 网站地图 © 2020 cslg-web版权所有</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                linkItemClass: 'link-item',
                moreLink: [
                    '商城首页', 'MIUI', '米家', '米聊', '多看', '游戏', '政企服务', '小米天猫店', '小米集团隐私政策', '小米公司儿童信息保护规则','问题反馈'
                ]
            };
        }
    };
</script>

<style scoped>
    /*****************************底 部 开 始*****************************/
    .footer {
        width: 100%;
        height: 100px;
        margin-top: 30px;
        background-color: #eaeaea;
    }

    .footer-icon-text {
        margin-left: 45px;
        color: #444444;
        font-size: 18px;
        font-weight: bold;
        line-height: 64px;
    }

    .service-intro {
        width: 100%;
        border-top: 1px solid #b2dfdb;
    }

    .servece-type-info ul {
        list-style: none;
    }

    .servece-type-info li {
        font-size: 14px;
        cursor: pointer;
        line-height: 26px;
    }

    .servece-type-info li:first-child {
        font-size: 16px;
        line-height: 28px;
        font-weight: bold;
    }

    .friend-link {
        display: flex;
        align-items: center;
        width: 908px;
        height: 30px;
        margin: 0px auto;
        color: #666;
        border-top: 1px solid #b2dfdb;
    }

    .friend-link-item {
        margin: 0px auto;
    }

    .friend-link-item ul {
        list-style: none;
    }

    .friend-link-item li {
        padding: 5px 0px;
        float: left;
    }

    .link-item {
        padding: 0px 8px;
        cursor: pointer;
        border-right: 1px solid #ccc;
    }

    .link-last-item {
        border: none;
    }

    .copyright {
        width: 100%;
        color: #666;
        line-height: 30px;
        text-align: center;
    }

    .copyright a {
        color: #232323;
        font-size: 20px;
    }

    /*****************************底 部 结 束*****************************/
</style>

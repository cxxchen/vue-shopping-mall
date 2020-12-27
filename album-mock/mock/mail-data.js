const Mock = require('mockjs');

let mockAddress = function () {

    let template = {};
    template[`data|2`] =
        [{
            addressId: '@id()',
            name: '@cword(3)',
            "province|+1": [
                "江苏省",
                "湖南省",
                "广东省"
            ],
            "city|+1": ['南通市', '如皋市', '苏州市', '泰州市'],
            "area|+1": ['江天区', '北山区', '南山区'],
            address: '燕岭路633号',
            phone: '152****0609',
            postalcode: "@integer(100000,500000)"
        }

        ];
    let data = Mock.mock(template).data;
    return data;
};
/*
let mockAddress = function () {
    let template = {};
    template[`data|15`] =
        [
            {
                img: 'static/img/goodsList/item-show-@integer(2,5).jpg',
                price: "@integer(100,5000)",
                intro: '@cword(15)',
                remarks: "@cowrd(8)",
                "shopName|+1": ['小米官方直营店',"jing","dddd"],
                sale: 7360
            },
        ];
    let data = Mock.mock(template).data;
    return data;
};
*/

let mockData = {
    //秒杀数据
    secKillsInfo: [
        {
            intro: '小米电视大师 82英寸至尊纪念版',
            img: 'static/img/index/seckill/1.jpg',
            price: 46666,
            realPrice: 49999
        },
        {
            intro: '小米电视4A 60英寸',
            img: 'static/img/index/seckill/2.jpg',
            price: 2000,
            realPrice: 2399
        },
        {
            intro: '小米扫地机器人',
            img: 'static/img/index/seckill/3.jpg',
            price: 3999,
            realPrice: 5999
        },
        {
            intro: '米家扫拖机器人1T',
            img: 'static/img/index/seckill/4.jpg',
            price: 2000,
            realPrice: 2999
        },
        {
            intro: '米家语音自动清扫套装',
            img: 'static/img/index/seckill/5.jpg',
            price: 1278,
            realPrice: 1378
        }
    ],
    carouselItems: {
        carouselItems: [
            'static/img/nav/1.webp',
            'static/img/nav/2.webp',
            'static/img/nav/3.webp',
            'static/img/nav/4.webp',
            'static/img/nav/5.webp'
        ],
        activity: [
            'static/img/nav/nav_showimg1.jpg',
            'static/img/nav/nav_showimg2.jpg'
        ]
    },
    computer: {
        title: '推荐你买',
        link: ['外设', '游戏装备', '装机大师'],
        detail: [
            {
                bigImg: 'static/img/index/computer/item-show-11.jpg',
                itemFour: [
                    {
                        title: '电脑馆',
                        intro: '小米10至尊纪念版',
                        img: 'static/img/index/computer/item-show-1.jpg'
                    },
                    {
                        title: '外设装备',
                        intro: '小米手机mix3',
                        img: 'static/img/index/computer/item-show-2.jpg'
                    },
                    {
                        title: '电脑配件',
                        intro: '小米10',
                        img: 'static/img/index/computer/item-show-3.jpg'
                    },
                    {
                        title: '办公生活',
                        intro: '小米10 青春版 5G',
                        img: 'static/img/index/computer/item-show-4.jpg'
                    },
                    {
                        title: '办公生活',
                        intro: 'Redmi 8A',
                        img: 'static/img/index/computer/item-show-9.jpg'
                    }
                ],
                itemContent: [
                    'static/img/index/computer/item-show-16.jpg',
                    'static/img/index/computer/item-show-17.jpg',
                    'static/img/index/computer/item-show-18.jpg'
                ]
            },
            {
                bigImg: 'static/img/index/computer/item-show-31.jpg',
                itemFour: [
                    {
                        title: '我的电脑',
                        intro: 'Redmi K30 至尊纪念版',
                        img: 'static/img/index/computer/item-show-5.jpg'
                    },
                    {
                        title: '热爱游戏',
                        intro: 'Redmi 10X Pro 5G',
                        img: 'static/img/index/computer/item-show-6.jpg'
                    },
                    {
                        title: '影音',
                        intro: 'Note 9 Pro 5G',
                        img: 'static/img/index/computer/item-show-7.jpg'
                    },
                    {
                        title: '摄像',
                        intro: 'Redmi Note 8',
                        img: 'static/img/index/computer/item-show-8.jpg'
                    },
                    {
                        title: '摄像',
                        intro: '小米笔记本air 4g',
                        img: 'static/img/index/computer/item-show-15.jpg'
                    }
                ],
                itemContent: [
                    'static/img/index/computer/item-show-26.jpg',
                    'static/img/index/computer/item-show-27.jpg',
                    'static/img/index/computer/item-show-28.jpg'
                ]
            }
        ]
    },
    goodsList: {
        asItems: [
            {
                img: 'static/img/goodsList/item-as-img-1.jpg',
                price: 46666,
                intro: '小米电视大师 82英寸至尊纪念版',
                num: 9160,
                sale: 8800
            },
            {
                img: 'static/img/goodsList/item-as-img-2.jpg',
                price:2000,
                intro: '小米电视4A 60英寸',
                num: 6160,
                sale: 7990
            },
            {
                img: 'static/img/goodsList/item-as-img-1.jpg',
                price: 4666,
                intro: '小米电视大师 82英寸至尊纪念版',
                num: 9160,
                sale: 7600
            },
            {
                img: 'static/img/goodsList/item-as-img-2.jpg',
                price: 2000,
                intro: '小米电视4A 60英寸',
                num: 6160,
                sale: 6900
            }
        ],
        goodsList: [
            {
                img: 'static/img/goodsList/item-show-1.jpg',
                goodId:'1',
                price: 5299,
                intro: '小米10至尊纪念版',
                remarks: 4532,
                shopName: '小米官方直营店',
                sale: 9900
            },
            {
                img: 'static/img/goodsList/item-show-2.jpg',
                goodId:'2',
                price: 3799,
                intro: '小米10',
                remarks: 2322,
                shopName: '小米官方直营店',
                sale: 7360
            },
            {
                img: 'static/img/goodsList/item-show-3.jpg',
                goodId:'3',
                price: 2099,
                intro: '小米10 青春版 5G',
                remarks: 5467,
                shopName: '小米官方直营店',
                sale: 9900
            },

            {
                img: 'static/img/goodsList/item-show-4.jpg',
                goodId:'4',
                price: 2599,
                intro: 'Redmi K30S 至尊纪念版',
                remarks: 3433,
                shopName: '小米官方直营店',
                sale: 7360
            },
            {
                img: 'static/img/goodsList/item-show-5.jpg',
                goodId:'5',
                price: 2199,
                intro: 'Redmi K30 至尊纪念版',
                remarks: 6677,
                shopName: '小米官方直营店',
                sale: 9900
            },
            {
                img: 'static/img/goodsList/item-show-6.jpg',
                goodId:'6',
                price: 2099,
                intro: 'Redmi 10X Pro 5G',
                remarks: 1243,
                shopName: '小米官方直营店',
                sale: 7360
            },
            {
                img: 'static/img/goodsList/item-show-7.jpg',
                goodId:'7',
                price: 1599,
                intro: 'Note 9 Pro 5G',
                remarks: 5676,
                shopName: '小米官方直营店',
                sale: 9900
            },
            {
                img: 'static/img/goodsList/item-show-8.jpg',
                goodId:'8',
                price: 1299,
                intro: 'Redmi Note 8',
                remarks: 2333,
                shopName: '小米官方直营店',
                sale: 7360
            },
            {
                img: 'static/img/goodsList/item-show-9.jpg',
                goodId:'9',
                price: 699,
                intro: 'Redmi 8A',
                remarks: 5444,
                shopName: '小米官方直营店',
                sale: 9900
            },
            {
                img: 'static/img/goodsList/item-show-10.jpg',
                goodId:'10',
                price: 3999,
                intro: '小米扫地机器人',
                remarks: 6555,
                shopName: '小米官方直营店',
                sale: 9900
            },
            {
                img: 'static/img/goodsList/item-show-11.jpg',
                goodId:'11',
                price: 2000,
                intro: '米家扫拖机器人1T',
                remarks: 5444,
                shopName: '小米官方直营店',
                sale: 9900
            },
            {
                img: 'static/img/goodsList/item-show-12.jpg',
                goodId:'12',
                price: 1278,
                intro: '米家语音自动清扫套装',
                remarks: 6555,
                shopName: '小米官方直营店',
                sale: 9900
            },
            {
                img: 'static/img/goodsList/item-show-15.jpg',
                goodId:'13',
                price: 3999,
                intro: '小米笔记本air 4g',
                remarks: 9006,
                shopName: '小米官方直营店',
                sale: 5560
            },
            {
                img: 'static/img/goodsList/item-show-16.jpg',
                goodId:'14',
                price: 6999,
                intro: '小米游戏本2019版',
                remarks: 8666,
                shopName: '小米官方直营店',
                sale: 5260
            },
            {
                img: 'static/img/goodsList/item-as-img-1.jpg',
                goodId:'15',
                price: 46666,
                intro: '小米电视大师 82英寸至尊纪念版',
                remarks: 5444,
                shopName: '小米官方直营店',
                sale: 9900
            },
            {
                img: 'static/img/goodsList/item-as-img-2.jpg',
                goodId:'16',
                price: 2000,
                intro: '小米电视4A 60英寸',
                remarks: 6555,
                shopName: '小米官方直营店',
                sale: 9900
            }
        ]
    },
    recommend: [
        [
            {
                img: 'static/img/otherBuy/1.jpg',
                intro: '米家互联网洗烘一体机Pro 10kg',
                price: 2999
            },
            {
                img: 'static/img/otherBuy/2.jpg',
                intro: 'Redmi全自动波轮洗衣机1A 8kg',
                price: 849
            },
            {
                img: 'static/img/otherBuy/3.jpg',
                intro: '巨省电|小米1级空调（1.5匹/变频/新一级有效）',
                price: 2399
            },
            {
                img: 'static/img/otherBuy/4.jpg',
                intro: '小米体脂称2',
                price: 94
            }
        ],
        [
            {
                img: 'static/img/otherBuy/5.jpg',
                intro: '米家互联网对开门冰箱 540L',
                price: 2399
            },
            {
                img: 'static/img/otherBuy/6.jpg',
                intro: 'bebird智能可视采耳棒M9 Pro',
                price: 199
            },
            {
                img: 'static/img/otherBuy/7.jpg',
                intro: '小米无线鼠标Lite',
                price: 29
            },
            {
                img: 'static/img/otherBuy/8.jpg',
                intro: '小米真无线蓝牙耳机Air 2 Pro',
                price: 699
            }
        ]
    ],
    address: mockAddress()
}

module.exports = mockData;
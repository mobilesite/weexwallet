<template>
    <div class="ej-page">
        <navbar :fixed="true" mode="light">
            <text slot="center">标题</text>
        </navbar>

        <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
            <div class="item-container" :style="contentStyle"><text>首页</text></div>
            <div class="item-container" :style="contentStyle"><text>特别推荐</text></div>
            <div class="item-container" :style="contentStyle"><text>消息中心</text></div>
            <div class="item-container" :style="contentStyle"><text>我的主页</text></div>
        </wxc-tab-bar>
    </div>
</template>

<script>
import Navbar from './components/navbar.vue';
import { WxcTabBar, Utils } from 'weex-ui';

export default {
    components: {
        Navbar,
        WxcTabBar
    },
    data() {
        return {
            logo:
                'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',

            // 正常模式的tab title配置
            tabTitles: [
                {
                    title: '首页',
                    icon:
                        'https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png',
                    activeIcon:
                        'https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png'
                },
                {
                    title: '特别推荐',
                    icon:
                        'https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png',
                    activeIcon:
                        'https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png'
                },
                {
                    title: '消息中心',
                    icon:
                        'https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png',
                    activeIcon:
                        'https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png',
                    badge: 5
                },
                {
                    title: '我的主页',
                    icon:
                        'https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png',
                    activeIcon:
                        'https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png',
                    dot: true
                }
            ],
            tabStyles: {
                bgColor: '#FFFFFF',
                titleColor: '#666666',
                activeTitleColor: '#3D3D3D',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: true,
                iconWidth: 70,
                iconHeight: 70,
                width: 160,
                height: 120,
                fontSize: 24,
                textPaddingLeft: 10,
                textPaddingRight: 10
            },
            // 使用 iconFont 模式的tab title配置
            tabIconFontTitles: [
                {
                    title: '首页',
                    codePoint: '\ue623'
                },
                {
                    title: '特别推荐',
                    codePoint: '\ue608'
                },
                {
                    title: '消息中心',
                    codePoint: '\ue752',
                    badge: 5
                },
                {
                    title: '我的主页',
                    codePoint: '\ue601',
                    dot: true
                }
            ],
            tabIconFontStyles: {
                bgColor: '#FFFFFF',
                titleColor: '#666666',
                activeTitleColor: '#3D3D3D',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: true,
                width: 160,
                height: 120,
                fontSize: 24,
                textPaddingLeft: 10,
                textPaddingRight: 10,
                iconFontSize: 50,
                iconFontColor: '#333333',
                activeIconFontColor: 'red',
                iconFontUrl:
                    'http://at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
            }
        };
    },
    created() {
        // setTitle('TabBar');
        const tabPageHeight = Utils.env.getPageHeight();
        const { tabStyles } = this;
        this.contentStyle = { height: tabPageHeight - tabStyles.height + 'px' };
    },
    methods: {
        wxcTabBarCurrentTabSelected(e) {
            const index = e.page;
            // console.log(index);
        }
    }
};
</script>

<style lang="less" scoped>
@import './styles/index.less';

.item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
}
</style>

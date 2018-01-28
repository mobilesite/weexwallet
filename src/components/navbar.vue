<template>
    <div class="ej-navbar" :class="cls">
        <div class="ej-navbar__left">
            <slot name="left">
                <a class="ej-navbar__back">
                    <icon type="back" class-name="ej-navbar__back-icon"></icon>
                </a>
            </slot>
        </div>
        <div class="ej-navbar__center">
            <slot name="center"></slot>
        </div>
        <div class="ej-navbar__right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
import classnames from 'classnames';
import Icon from './icon.vue';

export default {
    name: 'Navbar',
    components: {
        Icon
    },
    props: {
        mode: {
            type: String,
            default: 'light'
        },
        fixed: {
            type: Boolean,
            default: 'true'
        },
        mode: {
            type: String, //'dark' | 'light'
            default: 'light'
        },
        onLeftClick: {
            type: Function,
            default: () => {}
        }
    },
    computed: {
        cls() {
            let modeClass = `ej-navbar--${this.mode}`;

            return [
                modeClass,
                {
                    'ej-navbar--fixed': this.fixed
                }
            ];
        }
    },
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {
        clickBack() {
            this.$emit('back');
        }
    }
};
</script>

<style lang="less">
@import '../styles/index.less';
@import '../styles/components/navbar/index.less';
</style>

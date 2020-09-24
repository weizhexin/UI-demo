<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
        <g-icon v-if="loading" name="loading" class="loading icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>

    </button>

</template>
<script>
    import Icon from './icon'
    export default {
        name: 'GuluButton',
        components: {
            'g-icon': Icon
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator (value) {
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .g-button { font-size: 14px; height: 32px; padding: 0 1em;
        border-radius: 4px; border: 1px solid #999999;
        background: #eeeeee;
        display: inline-flex; justify-content: center; align-items: center;
        vertical-align: middle;
        &:hover { border-color: #666666; }
        &:active { background-color: #333333; }
        &:focus { outline: none; }
        > .content { order: 2; }
        > .icon { order: 1; margin-right: .1em; }

        &.icon-right {
            > .content { order: 1; }
            > .icon { order: 2; margin-right: 0; margin-left: .1em;}
        }
        .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>
<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
            <g-tabs :selected.sync="selectedTab">
                <g-tabs-head>
                    <g-tabs-item name='tab1'>新闻</g-tabs-item>
                    <g-tabs-item name='tab2'>实事</g-tabs-item>
                    <g-tabs-item name='tab3'>军事</g-tabs-item>
                    <g-tabs-item name='tab4' disabled>机密</g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name='tab1'>内容1</g-tabs-pane>
                    <g-tabs-pane name='tab2'>内容2</g-tabs-pane>
                    <g-tabs-pane name='tab3'>内容3</g-tabs-pane>
                    <g-tabs-pane name='tab4'>内容4</g-tabs-pane>
                </g-tabs-body>
            </g-tabs>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import GTabs from '../../../src/tabs'
    import GTabsBody from '../../../src/tabs-body'
    import GTabsHead from '../../../src/tabs-head'
    import GTabsItem from '../../../src/tabs-item'
    import GTabsPane from '../../../src/tabs-pane'
    export default {
        components: {GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane},
        data () {
            return {
                selectedTab: 'tab2',
                content: `
          <g-tabs :selected.sync="selectedTab">
                <g-tabs-head>
                    <g-tabs-item name='tab1'>新闻</g-tabs-item>
                    <g-tabs-item name='tab2'>实事</g-tabs-item>
                    <g-tabs-item name='tab3'>军事</g-tabs-item>
                    <g-tabs-item name='tab4' disabled>机密</g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name='tab1'>内容1</g-tabs-pane>
                    <g-tabs-pane name='tab2'>内容2</g-tabs-pane>
                    <g-tabs-pane name='tab3'>内容3</g-tabs-pane>
                    <g-tabs-pane name='tab4'>内容4</g-tabs-pane>
                </g-tabs-body>
            </g-tabs>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
## 介绍
这是我在学习Vue过程中做的UI框架
## 开始使用
1、添加CSS样式
    使用本框架前，请在CSS中开启border-box
    ```
    *,*::before,*::after{box-sizing:border-box}
    ```
    IE8及以上浏览器都支持此样式。
    你还需要设置默认颜色等变量（后续会改为scss变量）
    ```
    html{
                --font-size:14px;
                --button-height:32px;
                --button-size:14px;
                --button-bg:white;
                --button-active-bg:#eee;
                --border-radius:4px;
                --color:#333;
                --border-color:#999;
                --border-color-hover:#666;
            }
    ```
    IE5及以上浏览器都支持此样式
2、安装框架
    ```
    npm i --save ui
    ```
3、引入框架
    ```
    import {Button,ButtonGroup,Icon} from 'ui'
    import ui/dist/index.css
    export default{
        name:'app',
        components:{
            HelloWord,
            'g-button':Button,
            'g-icon':Icon
        }
    }
    ```
4、引入svg symbols
    ```
    <script src="//at.alicdn.com/t/font_2036329_nqf6p7ratii.js"></script>
    ```



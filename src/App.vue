<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: #c8f0f0;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
  }
  &.router-link-exact-active {
    color: #42b983;
    // background-color: #c8f0f0;
  }
}

/* CSS Document */
html, body, div, span, object, iframe,h1, h2, 
h3, h4, h5, h6, p, blockquote, pre,abbr, address, cite, code,del, dfn, 
em, img, ins,kbd, q, samp,small, strong, sub, sup, var,b, i,dl, dt, dd, 
ol, ul, li,fieldset, form, label, legend,table, caption, tbody, 
tfoot,thead,tr, th, td,article, aside, canvas, details, figcaption, 
figure, footer, header, hgroup, menu, nav, section, summary,time, mark, 
audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    outline-style:none;/*FF*/ 
}

body {
    line-height:1;
    background: #f1f1f1;
}
 
a{
    margin:0;
    padding:0;
    border:0;
    font-size:100%;
    text-decoration: none;
    color: #000;
     
}
a:hover,a:focus{
    text-decoration:none;
    /* bblr:expression(this.onFocus=this.blur());IE */
    /* outline-style:none;FF  */
    }
table {
    border-collapse:collapse;
    border-spacing:0;
}
 
input, select {
    vertical-align:middle;
}

/*css为clearfix，清除浮动*/
.clearfix::before,
.clearfix::after{
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both;
}
.clearfix:after{clear:both;} 
.clearfix{ 
    *zoom:1;/*IE/7/6*/
}
.router-link-active{
    color: red !important;
}
li{
  list-style: none;
}
</style>

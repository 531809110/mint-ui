<template>
  <div>
    <h1>Sub09子组件</h1>
    <!--(1)显示父组件数据-->
    <!--(2)为h3绑定点事件,事件处理函数-->
    <!--   函数是由父组传入 14:44-->
    <h3 @click="add3">{{msg}}</h3>
    <!--(3)接收图片-->
    <img :src="img3" />
  </div>
</template>
<script>
export default {
  //(2)声明接收父组件数据 msg类型字符串
  props:{
    img3:{default:""}, //图片路径
    msg:{default:""},  //显示文字
    add3:{type:Function}//type接收类型
  }                     //Function 函数类型
}
</script>


<template>
  <div>
    <!--TabBarIcon.vue图标-->
    <img :src="focused?selectedImage:normalImage" class="imgstyle"/>
  </div>
</template>
<script>
export default {
   //(1)声明接收父元素传递数据
   props:{
     focused:false,             //选中状态
     selectedImage:{default:""},//选中图标
     normalImage:{default:""}   //默认图片
   }
}
</script>
<style scoped>
.imgstyle{
  width:30px;
  height:30px;
}
</style>



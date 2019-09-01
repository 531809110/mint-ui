<template>
   <div class="page-tabbar">
      <div class="page-wrap">
      <!--Home.vue-->
      <!--1:顶部标题子组件-->      
      <titlebar
       leftTitle="微信(11)"
       :search="mysearch"
       :add="myadd"
       :rightFirstImg="require('../../assets/ic_search.png')"
       :rightSecondImg="require('../../assets/ic_add.png')"
      ></titlebar>
      <!--2:div保留(标题)48px高度-->
      <div style="margin-top:48px;">
      </div>
      <!--Home.vue 入口全局组件-->
      <!--3:切换面板列表-->
      <mt-tab-container class="page-tabbar-container" v-model="active">
        <mt-tab-container-item id="message">
           <!--(2)引入消息列表子组件-->
           <messagelist></messagelist>
        </mt-tab-container-item>
      </mt-tab-container>
      <!--4:tabbar列表-->
      <mt-tabbar fixed v-model="active">
        <mt-tab-item id="message" @click.native="changeState(0)">
          <tabbaricon
          :selectedImage="require('../../assets/ic_weixin_selected.png')"
          :normalImage="require('../../assets/ic_weixin_normal.png')"
          :focused="currentIndex[0].isSelect"
          ></tabbaricon>
           微信
        </mt-tab-item>
        <mt-tab-item id="contact" @click.native="changeState(1)">
           <tabbaricon
          :selectedImage="require('../../assets/ic_contacts_selected.png')"
          :normalImage="require('../../assets/ic_contacts_normal.png')"
          :focused="currentIndex[1].isSelect"
          ></tabbaricon>
          通讯录
        </mt-tab-item>        
        <mt-tab-item id="find" @click.native="changeState(2)">
          <tabbaricon
          :selectedImage="require('../../assets/ic_find_selected.png')"
          :normalImage="require('../../assets/ic_find_normal.png')"
          :focused="currentIndex[2].isSelect"
          ></tabbaricon> 
          发现
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
           <tabbaricon
          :selectedImage="require('../../assets/ic_me_selected.png')"
          :normalImage="require('../../assets/ic_me_normal.png')"
          :focused="currentIndex[3].isSelect"
          ></tabbaricon>
          我的
        </mt-tab-item>                 
      </mt-tabbar>
   </div>
   </div>
</template>
<script>
//1:引入顶部标题子组件
import TitleBar from "./common/TitileBar.vue"
//2:引入消息列表子组件 
import MessageList from "./common/MessageList.vue"
//3:引入底部导航条图片组件
import TabBarIcon from "./common/TabBarIcon.vue"
export default {
  data(){
    return {
      //面板中显示子组件id
      active:"message",
      //创建数组保存所有(底部导航条)图片状态
      currentIndex:[
        {isSelect:true}, //与第一个按钮图片相关
        {isSelect:false},//与第二个按钮图片相关
        {isSelect:false},//与第三个按钮图片相关
        {isSelect:false} //与第四个按钮图片相关
      ]
      //15:31
      //为按钮绑定点击事件
      //当前按钮图片,选中状态true其它元素false
    }
  },
  methods: {
    mysearch(){console.log("搜索");},
    myadd(){console.log("+")},
    changeState(idx){
      //功能:当点底部按钮切换图片状态
      //当前图片选中其它默认
      //参数idx:表示按钮下标
      //1：创建循环遍历状态数组中所有值
  for(var i=0;i<this.currentIndex.length;i++){
     //2: 判断如果参数与当前元素下标相同
     if(i == idx){
      //3：当前元素状态修改true
      this.currentIndex[i].isSelect=true;
     }else{
       //4: 其它元素状态修改false
       this.currentIndex[i].isSelect=false
     }
     
  }


    }
  },
  components:{
    "tabbaricon":TabBarIcon,//tabbar图片组件
    "titlebar":TitleBar,    //顶部标题
    "messagelist":MessageList//消息列表
  }
}
</script>
<style  scoped>
 /*1:添加二个样式*/
 .page-tabbar{
   overflow: hidden;  /*元素溢出隐藏*/
 }
 .page-wrap{
   overflow: auto;/*溢出数据显示轮动条*/
   padding-bottom:60px;/*底部导航条*/
 }
 /*home.vue*/
 /*覆盖原组件中样式 tabbar按钮中文字颜色*/
 /*(1)覆盖原组件中样式 默认文字颜色*/
 .mint-tabbar>.mint-tab-item{
   color:#999;
 }
 /*(2)覆盖原组件中样式 选中文字颜色*/
 .mint-tabbar>.mint-tab-item.is-selected{
    background-color:transparent;/*透明*/
    color:#45c018;/*文字颜色*/
 }
 




</style>



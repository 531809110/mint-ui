<template>
  <div> <!--根元素-->
   <h1>Exam04.vue</h1>
   <!--1:开关组件:移动端项目使用-->
   <mt-switch v-model="val2" @change="handle2">
     开关选项     
   </mt-switch>
   <!--2:单选列表:移动端项目使用-->
   <mt-radio
   title="单选列表"
   :options="['a','b','c']"
   v-model="val3">
   </mt-radio>
   <mt-button @click="get3">
     获取用户选中值
   </mt-button>
   <mt-radio
    title="东哥今年多大了"
    v-model="val4"
    :options="options">
   </mt-radio>
   <mt-button @click="get4">
    获取东哥年龄
   </mt-button>
   <!--复选框列表-->
   <mt-checklist
    title="复选框列表"
    v-model="val5"
    :options="['a选项','b选项','c选项']"
   >
   </mt-checklist>
   <mt-button @click="get5">
      获取值
   </mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      val5:[],     //保存复选框选中值
      val2:true,
      val3:"",
      val4:"",    //保存东哥年龄
      options:[
        {label:"去年",value:"24"},
        {label:"今年",value:"23"},
        {label:"明年",value:"22"}
      ]  //东哥年龄列表
      }//状态原始值 21
  },
  methods:{
    get5(){
      //功能:获取复选框列表选中值
      console.log(this.val5)
    },
    get4(){
      //功能:获取东哥年龄
      console.log(this.val4)
    },
    get3(){
      //功能:获取用户选中单选列表中值
      console.log(this.val3);
    },
    handle2(){//处理状态变化函数
      //当组件状态发生改变,触发事件执行
      console.log(this.val2);//状态
    }
  }
}
</script>

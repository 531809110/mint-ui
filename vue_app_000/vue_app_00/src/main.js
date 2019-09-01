import Vue from 'vue'
import App from './App.vue'
import router from './router'
//删除 line 5~ line 16
//1:引入第三方组件库 mint-ui
//1.1 完成引入所有组件
import MintUI from "mint-ui" 
//1.2 单引入mint-ui样式文件
import "mint-ui/lib/style.css"
//1.3 将mint-ui 注册vue
Vue.use(MintUI)
//1.4:引入图标字体文件 
import "./font/iconfont.css"
//main.js 配置axios
//1.5:引入axios库
import axios from "axios"
import Vuex from "vuex"
Vue.use(Vuex);
var store=new Vuex.Store({
  state:{cartCount:0},
  mutations:{
    //购物车数量加1
    increment(state){state.cartCount++;},
    //购物车数量增加指定值 5
    updateCount(state,c){state.cartCount+=c;},
    clear(state){state.cartCount=0;}
  },
  getters:{
    getCartCount:function(state){
      return state.cartCount;
    }
  }
});
//1.6:配置请求时保存session信息 
axios.defaults.withCredentials=true
//1.7:配置请求基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/"
//注意:地址栏请输必须!!!!!!!!!
//http://127.0.0.1:8080/!!!!
//如果地址  http://localhost 报错
//1.8:注册
Vue.prototype.axios = axios;


new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
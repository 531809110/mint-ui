<template>
  <div>
    <div class="selectAll" @change="select">全选<input v-model="status" type="checkbox"></div>
    <div class="cartItem" v-for="(item,index) in list" :key="index">
      <div class="leftText">
        <input type="checkbox" v-model="item.cb" @change="seletItem">
        <div><img class="imgstyle" :src="'http://127.0.0.1:8080/'+item.img_url" alt=""></div>
        <div class=""><span>{{item.id}}</span></div>
        <div class=""><span>{{item.lname}}</span></div>
        <div class=""><span>{{item.price}}</span></div>
        <div class=""><span>{{item.count}}</span></div>
      </div>
      <mt-button @click="del" :data-id="item.id">删除</mt-button>
    </div>
    <div @click="delAll">
      <mt-button>删除选中商品</mt-button>
      <h3 style="color:red">购物车数量：{{$store.getters.getCartCount}}</h3>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [], //当前登录用户购物车列表
        status: true
      }
    },
    created() {
      //当前组件创建成功回调函数
      this.loadMore();
    },
    methods: {
      seletItem() {
        var b = true;
        for (var item of this.list) {
          b = b && item.cb;
        }
        if (b) {
          this.status = true
        } else {
          this.status = false
        }
      },
      delAll() {
        var url = "delAll";
        var ids = [];
        for (var item of this.list) {
          if (item.cb) {
            ids.push(item.id);
          }
        }
        if(ids.length==0){this.$toast("请选中商品");return;}
        ids = ids.join();
        var obj = {
          ids: ids
        };
        this.$messagebox.confirm("是否删除").then(
          action => {
            if (action == "confirm") {
              this.axios.get(url, {
                params: obj
              }).then(res => {
                if (res.data.code == -2) {
                  //4:如果服务器返回-2 删除失败
                  this.$messagebox("", "删除失败");
                } else if (res.data.code == 1) {
                  this.loadMore();
                }
              })
            }
          }
        ).catch(err => {
          return;
        })
      },
      del(e) {
        var url = "delItem";
        var obj = {
          id: e.target.dataset.id
        };
        this.$messagebox.confirm("是否删除").then(
          action => {
            if (action == "confirm") {
              this.axios.get(url, {
                params: obj
              }).then(res => {
                if (res.data.code == -2) {
                  //4:如果服务器返回-2 删除失败
                  this.$messagebox("", "删除失败");
                } else if (res.data.code == 1) {
                  this.loadMore();
                }
              })
            }
          }
        ).catch(err => {
          return;
        })

      },
      select(e) {
        var cb = e.target.checked; //e是事件对象，后面加一个属性target(target就是复选框)，复选框里有个属性checked
        // console.log(cb)
        for (var key of this.list) {
          key.cb = cb;
          // console.log(this.list);
        }
      },
      loadMore() {
        this.$store.commit("clear");
        //功能:获取当前用户购物车列表
        //1:创建url请求服务器地址
        var url = "carts";
        //2:发送ajax 请求(让服务器程序完成功能)
        this.axios.get(url).then(res => {
          if (res.data.code == -1) {
            //4:如果服务器返回-1 请登录
            this.$messagebox("消息", "请登录").then(res => {
              //回调函数（用户点击确认按钮后调用函数）
              this.$router.push("/Login")
            })
          } else {
            //3:获取服务器返回数据
            var rows = res.data.data;
            for (var key of rows) {
              key.cb = true;
              this.$store.commit("increment");
            }
          //  this.$store.commit("updateCount(rows.length)") 
            //  console.log(this.list)
            this.list = rows;
          }
        })
      }
    }
  }
</script>

<style scoped>
  .cartItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .leftText {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .imgstyle {
    width: 30px;
    height: 30px;
  }
</style>
<template>
  <div>
      <van-tabbar route safe-area-inset-bottom>
        <van-tabbar-item :to="item.to" v-for="(item,index) in tabData" :key="index" >{{item.name}}</van-tabbar-item>
      </van-tabbar>
  </div>

</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: 'TabBar',
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem
  },
  data() {
    return {
      tabData:[
        {to:'/',name:'测试1'},
        {to:'/test2',name:'测试2'}
      ]
    }
  }
}
</script>


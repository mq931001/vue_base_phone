<template>
  <div class="test2">
    <h1>测试第一个页面。哈哈哈</h1>
  </div>
</template>
<script>
export default {
  name: 'Test1',
  components:{ },
  props: {},
  mixins: [],
  directives: {},
  data() {
    return {
      list:'数据'
    }
  },
  computed: {},
  watch: {},
  beforeCreate (){}, // 实例刚在内存中被创建出来，此时，还没有初始化好 data 和 methods 属性 
                     // loading事件
  created (){},      // 实例已经在内存中创建，此时 data 和 methods 已经创建OK，此时还没有开始 编译模板 dom还未生成
                    // 在这结束loading，还做一些初始化，实现函数自执行
  beforeMount (){}, // 此时已经完成了模板的编译，但是还没有挂载到页面中 此时有了虚拟DOM。
  mounted (){},     // 已经将编译好的模板，挂载到了页面指定的容器中显示 渲染为真实DOM。
                    // 在这发起后端请求，拿回数据，配合路由钩子做一些事情
  beforeUpdate () {}, // 状态更新之前执行此函数， 此时 data 中的状态值是最新的，但是界面上显示的 数据还是旧的，因为此时还没有开始重新渲染DOM节点
  updated () {},     // 实例更新完毕之后调用此函数，此时 data 中的状态值 和 界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了！
  activated () { },  // keep-alive 进入页面就会触发
  deactivated () { },    // keep-alive 缓存状态
  beforeDestroy () { },  // 实例销毁之前调用。在这一步，实例仍然完全可用。
                        // 你确认删除XX吗？ destroyed ：当前组件已被删除，清空相关内容
  destroyed() { },      // 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 
  methods: {
    run () {}
  }
}
</script>
<style lang="scss">
  h1{
    font-size: 2px;
    display: flex;
  }
</style>
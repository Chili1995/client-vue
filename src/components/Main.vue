<template>
    <div>
      {{this.$store.state.userInfo.userName}} 登录成功 !
    </div>
</template>
<script>

export default {
  name: 'Main',
  data () {
    return {
      user:'11'
    }
  },
  created: function () {
  },
  methods:{
  }
}

</script>

<style scoped>

</style>

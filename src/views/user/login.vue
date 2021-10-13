<template>
  <div>
    <h1>登录</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-button type="primary" @click.native.prevent="handleLogin()">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data() {
    return {
      form: {
        name: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      login(this.form).then(res => {
        console.log(res)
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style scoped >

</style>

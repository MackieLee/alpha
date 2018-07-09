<template>
  <div class="padding-15">
    <el-form ref="loginForm" status-icon :model="loginForm" :rules="loginValidate">
      <!-- 手机号 -->
      <el-form-item prop="phNum">
        <el-input type="text" prefix-icon="el-icon-mobile-phone" v-model="loginForm.phNum" placeholder="请输入手机号码">
        </el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="valiCode" v-show="showCode">
        <el-col :span="11">
          <el-input type="text" v-model="loginForm.valiCode" placeholder="验证码"></el-input>
        </el-col>
        <el-col :span="11" :offset="2">
          <!-- 图片验证码 -->
          <img src="" alt="">
        </el-col>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="passWd">
        <el-input :type="pwdMode" :icon="eyeMode" v-model="loginForm.passWd" @on-click="pwdToggle" placeholder="请输入密码">
        </el-input>
      </el-form-item>
      <Button type="primary" long>登陆</Button>
    </el-form>
    <p class="padding-ver-6" style="text-align: right;">
      <router-link to="/reset" class="reset" tag="span">忘记密码？</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      // 登陆时手机号验证
      const validateNum = (rule,val,callback) => {
        if(!val) {
          callback(new Error("手机号码不能为空"))
        } else {
          // 判断手机号是否存在
          // 通过后显示输入验证码
          this.showCode = true
        }
        callback()
      }

      // 登陆时密码验证
      const validatePasswd = (rule,val,callback) => {
        if(!val) {
          callback(new Error("密码不能为空"))
        } else {
          // 查询密码是否正确
        }
        callback()
      }

      // 验证码验证
      const validateVali = (rule,val,callback) => {
        if(!val) {
          callback(new Error("密码不能为空"))
        } else {
          // 查询密码是否正确
        }
        callback()
      }

      return {
        pwdMode: 'password',
        eyeMode: 'eye-disabled',
        showCode: false,
        // 登陆表单
        loginForm: {
          phNum: '',
          passWd: '',
          valiCode: '',
        },
        // 登陆表单验证
        loginValidate: {
          phNum: [
            {
              validator: validateNum,
              trigger: "blur"
            }
          ],
          passWd: [
            {
              validator: validatePasswd,
              trigger: "blur"
            }
          ],
          valiCode: [
            {
              validator: validateVali,
              trigger: "blur"
            }
          ]
        }
      }
    },
    methods: {
      // 切换密码输入状态的显示或隐藏
      pwdToggle: function() {
        if(this.pwdMode === 'password') {
          // 显示密码
          this.pwdMode = 'text'
          this.eyeMode = 'eye'
        }else{
          // 隐藏密码
          this.pwdMode = 'password'
          this.eyeMode = 'eye-disabled'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .reset {
    color: #b2b1af;
  }
</style>

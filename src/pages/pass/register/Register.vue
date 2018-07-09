<template>
  <div class="login">
    <div class="form-load padding-15">
      <el-form ref="regForm" status-icon :model="regForm" :rules="regValidate">
        <!-- 手机号 -->
        <el-form-item prop="phNum">
          <el-input type="text" v-model="regForm.phNum" placeholder="请输入手机号码">
          </el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="ckCode" v-show="showckeckcode">
          <el-col :span="10">
            <el-input type="text" v-model="regForm.ckCode" placeholder="验证码">
            </el-input>
          </el-col>
          <el-col :span="12" offset="2">
            <img src="" alt="">
          </el-col>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="passWd">
          <el-input :type="pwdMode" :icon="eyeMode" v-model="regForm.passWd" @on-click="pwdToggle" placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <Button type="primary" long>注册</Button>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      // 注册时手机号验证
      const validateNum = (rule,val,callback) => {
        if(!val) {
          callback(new Error("手机号码不能为空"))
        } else {
          // 判断手机号是否存在
          // 当判断通过时，显示验证码输入框
          this.showckeckcode = true
        }
        callback()
      }

      // 注册时验证码验证
      const validateCkcode = (rule,val,callback) => {
        if(!val) {
          callback(new Error("验证码不能为空"))
        } else {
          // 查询验证码是否正确
        }
        callback()
      }

      // 注册时密码验证
      const validatePasswd = (rule,val,callback) => {

        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/

        if(!val) {
          callback(new Error("密码不能为空"))
        } else if(!reg.test(val)){
          callback(new Error("密码必须不小于8位且包含大小写字母和数字"))
        }
        callback()
      }

      return {
        pwdMode: 'password',
        eyeMode: 'eye-disabled',
        showckeckcode: false,
        // 注册表单
        regForm: {
          phNum: '',
          passWd: '',
          ckCode: '',
        },
        // 注册时表单验证
        regValidate: {
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
          ckCode: [
            {
              validator: validateCkcode,
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
    },
  }
</script>

<style lang="scss" scoped>
  .top-bar {
    background: #f7f7f7;
  }
</style>

<template>
  <div class="pwd padding-15">
    <el-form status-icon ref="pwdForm" :model="pwdForm" :rules="pwdValidate">
      <el-form-item prop="pwd">
        <el-input :type="pwdMode" :icon="eyeMode" v-model="pwdForm.pwd" @on-click="pwdToggle" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <Button type="primary" @click="reset('pwdForm',pwdForm)" long>重置</Button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { ifAllowed, setHash } from '@/public/index'
  export default {
    data: function () {
      const validatepwd = (rule, val, callback) => {
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/

        if (!val) {
          callback(new Error("密码不能为空"))
        } else if (!reg.test(val)) {
          callback(new Error("密码必须不小于8位且包含大小写字母和数字"))
        }
        callback()
      }
      return {
        phNum: '', // 用户手机号
        pwdMode: 'password',
        eyeMode: 'eye-disabled',
        pwdForm: {
          pwd: '' // 密码value
        },
        // 密码重置表单验证
        pwdValidate: {
          pwd: [
            {
              validator: validatepwd,
              trigger: "blur"
            }
          ],
        }
      }
    },
    methods: {
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
      },
      reset: function (name,val) {
        this.$refs[name].validate((valid) => {
          if(valid) {
            setHash(this,'cpl')
          } else {

          }
        })
      }
    },
    beforeMount() {
      ifAllowed(this)
      // 获取用户手机号
    }
  }
</script>

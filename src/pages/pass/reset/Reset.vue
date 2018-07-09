<template>
  <div class="padding-15">
    <!-- 密码找回表单 -->
    <el-form ref="resetForm" status-icon :model="resetForm" :rules="resetValidate">
      <!-- 手机号 -->
      <el-form-item prop="phNum">
        <el-input type="text" v-model="resetForm.phNum" placeholder="请输入手机号码">
        </el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="ckCode">
        <el-col :span="10">
          <el-input type="text" v-model="resetForm.ckCode" placeholder="验证码"></el-input>
        </el-col>
        <el-col :span="12" offset="2">
          <img src="" alt="">
        </el-col>
      </el-form-item>
      <!-- 短信验证码 -->
      <el-form-item prop="msgCode">
        <el-col :span="10">
          <el-input type="text" v-model="resetForm.msgCode" placeholder="动态码"></el-input>
        </el-col>
        <el-col :span="12" offset="2">
          <Button @click="getMsg" :disabled="msgState">{{ time }}</Button>
        </el-col>
      </el-form-item>
      <el-form-item>
        <Button type="primary" @click="nextStep('resetForm',resetForm)" long>下一步</Button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { setHash } from '@/public/index'

  export default {
    data: function () {

      // 判断手机号是否正确

      const validateNum = (rule, val, callback) => {
        this.state.ph = false
        if (!val) {
          callback(new Error("手机号码不能为空"))
          this.sign.ph = 'close-circled'
        } else {
          // 判断手机号是否存在

          // when success
          this.sign.ph = 'checkmark-circled'
          this.state.ph = true
        }
        callback()
      }

      // 判断验证码是否输入正确

      const validateCkcode = (rule, val, callback) => {
        this.state.ck = false
        if (!val) {
          callback(new Error("验证码不能为空"))
          this.sign.ck = 'close-circled'
        } else {
          // 查询验证码是否正确
          this.sign.ck = 'checkmark-circled'
          this.state.ck = true
        }
        callback()
      }

      // 判断短信验证码是否正确

      const validateMsg = (rule, val, callback) => {
        if (!val) {
          callback(new Error("验证码不能为空"))
          this.sign.msg = 'close-circled'
        } else {
          // 查询验证码是否正确
          this.sign.msg = 'checkmark-circled'
        }
        callback()
      }

      return {
        // 获取短信验证码状态、
        msgState: false,
        time: '获取短信验证码',
        // 表单状态
        state: {
          ph: false,
          ck: false
        },
        // 标记
        sign: {
          ph: '',
          ck: '',
          msg: ''
        },
        // 重置密码的表单value
        resetForm: {
          phNum: '',
          ckCode: '',
          msgCode: ''
        },
        // 表单验证
        resetValidate: {
          phNum: [
            {
              validator: validateNum,
              trigger: "blur"
            }
          ],
          ckCode: [
            {
              validator: validateCkcode,
              trigger: "blur"
            }
          ],
          msgCode: [
            {
              validator: validateMsg,
              trigger: "blur"
            }
          ]
        }
      }
    },
    methods: {
      getMsg() {
        this.$refs.resetForm.validateField("phNum")
        this.$refs.resetForm.validateField("ckCode")
        // 如果是灰色状态，返回false，如果可以点击，则发送短信
        if(!this.msgState) {
          // 发送短信操作
        } else {
          return false
        }
        if(this.state.ck && this.state.ph) {
          this.msgState = true
          let _self = this
          let time = 60
          /*
            在这儿执行发送验证码的命令
          */

          // 按钮冻结计时

          let interval = window.setInterval(function() {
            if(time === 0) {
              _self.time = '获取短信验证码'
              _self.msgState = false
              window.clearInterval(interval)
            } else {
              _self.time = time + '秒后再次获取'
              time--
            }
          }, 1000)

        } else {
          return false
        }
      },
      nextStep: function (name,val) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            // 发送表单数据到后台
            setHash(this,'pwd')
          } else {

          }
        })
      }
    }
  }
</script>


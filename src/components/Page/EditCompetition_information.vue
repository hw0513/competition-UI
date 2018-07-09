<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="竞赛名称">
    <el-input v-model="ruleForm.competition.name" :disabled="true"> </el-input>
  </el-form-item>
  <el-form-item label="报名时间" required>
    <el-col :span="11">
      <el-form-item prop="start_enter">
        <el-date-picker type="date" placeholder="选择开始报名日期" v-model="ruleForm.start_enter" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col :span="2">
        -
    </el-col>
    <el-col :span="11">
      <el-form-item prop="end_enter">
        <el-date-picker type="date" placeholder="选择结束报名日期" v-model="ruleForm.end_enter" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="竞赛名称" prop="begin_competition">
    <el-date-picker
      v-model="ruleForm.begin_competition"
      type="date"
      placeholder="选择比赛开始时间"
      >
    </el-date-picker>
  </el-form-item>
  <el-form-item label="比赛地点" prop="place">
    <el-input v-model="ruleForm.place"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">修改比赛信息</el-button>
    <el-button @click="cancelParams ()">取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {

        },
        rules: {
            start_enter: [
                { required: true, message: '请选择开始报名日期', trigger: 'change' }
            ],
            end_enter: [
                { required: true, message: '请选择截止报名日期', trigger: 'change' }
            ],
            begin_competition: [
                { required: true, message: '请选择日期', trigger: 'change' }
            ],
        }
      };
    },
    methods: {
    submitForm(formName) {
        let url='http://47.97.223.234:8888//message_board/update';
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post(url,this.ruleForm)
            .then(function(response){
                this.$alert(response.body.msg, '用户信息', {
                    confirmButtonText: '确定',
                });
            })
        } else {

            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      cancelParams () {
        this.$router.push({
            name: 'Competition_information',
        })
      }
    },
    created:function(){
      this.ruleForm=this.$route.params.dataObj;
    },

  }
</script>
<style scoped>
</style>


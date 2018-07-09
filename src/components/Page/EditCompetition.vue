<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="竞赛名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="主办单位" prop="host_unit">
    <el-input v-model="ruleForm.host_unit"></el-input>
  </el-form-item>
 <el-form-item label="竞赛级别" prop="lev">
    <el-radio-group v-model="ruleForm.lev">
      <el-radio label="校级"></el-radio>
      <el-radio label="省级"></el-radio>
      <el-radio label="国家级"></el-radio>
      <el-radio label="国际级"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="竞赛类别" prop="type">
    <el-select v-model="ruleForm.type" placeholder="请选择竞赛类别">
      <el-option label="创业商业" value="创业商业"></el-option>
      <el-option label="科技创新" value="科技创新"></el-option>
      <el-option label="体育竞技" value="体育竞技"></el-option>
      <el-option label="其它比赛" value="其它比赛"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="比赛的描述" prop="competition_describe">
    <el-input type="textarea" v-model="ruleForm.competition_describe"></el-input>
  </el-form-item>
  <el-form-item label="最多参赛人数"
    prop="competition_way" >
     <el-input-number v-model="ruleForm.competition_way" :min="1" :max="10" label="竞赛人数在1-10之间"></el-input-number>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">修改信息</el-button>
    <el-button @click="cancelParams ()">取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          competition_way:1,
          host_unit:'',
          name: '',
          type: '',
          lev: '',
          competition_describe: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入竞赛名称', trigger: 'blur' },
          ],
          host_unit: [
            { required: true, message: '请输入竞赛名称', trigger: 'blur' },
          ],
          type: [
            {required: true, message: '请选择竞赛类别', trigger: 'change' }
          ],
          lev: [
            { required: true, message: '请选择竞赛级别', trigger: 'change' }
          ],
          competition_describe: [
            { required: true, message: '请填写竞赛的描述', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        var url='http://47.97.223.234:8888//competition/update';
        this.$refs[formName].validate((valid) => {
          if (valid) { 
            this.$http.post(url,this.ruleForm).then(function(response){
                this.$alert(response.body.msg, '用户信息', {
                    confirmButtonText: '确定',
                });
            })
        } else {
          this.$alert(response.body.msg, '用户信息', {
                    confirmButtonText: '确定',
                });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      cancelParams () {
        this.$router.push({
            name: 'Competition_management',
        })
      }
    },
    mounted:function(){
      this.ruleForm = this.$route.params.dataObj
    },

  }
</script>

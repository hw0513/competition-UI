<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="新闻标题" prop="title">
      <el-input v-model="ruleForm.title"></el-input>
    </el-form-item>
     <el-form-item label="新闻内容" prop="content">
      <el-row v-loading="quillUpdateImg">
        <quill-editor ref="myQuillEditor"
                      v-model="ruleForm.content" :options="editorOption" @change="onEditorChange($event)">
        </quill-editor>
      </el-row>  
     </el-form-item>
     <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">添加新闻</el-button>
     </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {quillRedefine} from 'vue-quill-editor-upload'
import {quillEditor} from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  components: {quillEditor, quillRedefine},
  data () {
    return {
    ruleForm: {
        content:'',//文章内容
        title:''
    },
    rules: {
      content: [
        { required: true, message: '请输入', trigger: 'blur' },
      ],
      title: [
        { required: true, message: '请输入竞赛名称', trigger: 'blur' },
      ]
    },
    quillUpdateImg: false,// 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
    header: {token: sessionStorage.token},  // 有的图片服务器要求请求头需要有token  
    editorOption: {
    },
    }
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
      console.log('editor change!', html)
      this.ruleForm.content = html
    },
    submitForm(formName) {
          var url='http://47.97.223.234:8888//news/add';
          this.$refs[formName].validate((valid) => {
            if (valid) { 
              this.$http.post(url,this.ruleForm,{emulateJSON:true}).then(function(response){
                  this.$alert(response.body.msg, '用户信息', {
                      confirmButtonText: '确定',
                  });
              })
          } else {
              return false;
            }
          });
        },

  },
  created () {
      this.editorOption = quillRedefine(
        {
          // 图片上传的设置
          uploadConfig: {
            action: 'http://localhost:8888/upload/testuploadimg',  // 必填参数 图片上传地址
            // 必选参数  res是一个函数，函数接收的response为上传成功时服务器返回的数据
            // 你必须把返回的数据中所包含的图片地址 return 回去
            res: (respnse) => {
              return respnse.info
            },
            methods: 'POST',  // 可选参数 图片上传方式  默认为post
            name: 'img',  // 可选参数 文件的参数名 默认为img
            size: 500,  // 可选参数   图片限制大小，单位为Kb, 1M = 1024Kb
            accept: 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon',  // 可选参数 可上传的图片格式
            // start: function (){}
            start: () => {
            },  // 可选参数 接收一个函数 开始上传数据时会触发
            end: () => {
            },  // 可选参数 接收一个函数 上传数据完成（成功或者失败）时会触发
            success: () => {
            },  // 可选参数 接收一个函数 上传数据成功时会触发
            error: () => {
            }  // 可选参数 接收一个函数 上传数据中断时会触发
          },
          // 以下所有设置都和vue-quill-editor本身所对应
          placeholder: '',  // 可选参数 富文本框内的提示语
          handlers: {}  // 可选参数 重定义的事件，比如link等事件
        }
      )
    }


}
</script>
 
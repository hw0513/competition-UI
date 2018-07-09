<template>
    <el-table :data="tableData" style="width: 100%">
    <el-table-column label="编号" type='index' width="50"></el-table-column>
    <el-table-column label="新闻标题">
      <template slot-scope="scope">
        {{ scope.row.title}}
      </template>
    </el-table-column>
    <el-table-column label="操作"   width="180">
      <template slot-scope="scope">
        <el-button size="mini"  icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></el-button>
        <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row)"></el-button>
      </template>
    </el-table-column>
   
  </el-table>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
export default{
    data(){
        return {
            tableData: []
        }
    },
    methods:{
        getdata:function(){
            let url='http://47.97.223.234:8888/news/list';
            this.$http.get(url).then(function(response){
                this.tableData=response.body.data; 
                }),
                function(response){
                    
                }
        },
        handleEdit:function(index,row){
           this.$router.push({
            name: 'Release_competition',
            params: {
              dataObj: row
            }
          })
        },
        handleDelete(index,row){
          let url='http://47.97.223.234:8888//message_board//del';
          this.$http.post(url,row,{emulateJSON:true})
            .then(function(response){
                this.$alert(response.body.msg, '用户信息', {
                    confirmButtonText: '确定',
                }); 
            })
            this.tableData.splice(index,1);  
      }
    },
    created:function(){
         this.getdata();
    },
}
</script>
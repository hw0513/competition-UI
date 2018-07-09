<template>
<div>
  <el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="编号" type='index' width="50"></el-table-column>
      <el-table-column label="竞赛名称" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>描述: {{ scope.row.competition_describe}}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="主办单位">
        <template slot-scope="scope">
          {{ scope.row.host_unit}}
        </template>
      </el-table-column>
      <el-table-column label="竞赛级别">
        <template slot-scope="scope">
          {{ scope.row.lev}}
        </template>
      </el-table-column>
      <el-table-column label="竞赛类别">
        <template slot-scope="scope">
          {{ scope.row.type}}
        </template>
      </el-table-column>
        <el-table-column label="最多竞赛人数">
        <template slot-scope="scope">
          {{ scope.row.competition_way}}
        </template>
        
      </el-table-column>
      <el-table-column label="操作"   width="180">
        <template slot-scope="scope">
          <el-button size="mini"  icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></el-button>
          <el-button size="mini" icon="el-icon-share" @click="handleFabu(scope.$index, scope.row)"></el-button>
          <el-button size="mini" type="primary" icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
   
  </el-table>
  </el-row> 
    <div style="padding:50px">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.pageCode"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="page.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total">
    </el-pagination>
  </div>  
</div>

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
            tableData: [],
            page:{
              pageCode:1,
              limit:10,
              total:0
            }
        }
    },
    methods:{
      getdata:function(){
        let url='http://47.97.223.234:8888/competition/findCount';
        this.$http.get(url).then(function(response){
          this.page.total=response.body.data;
          })

        url='http://47.97.223.234:8888//competition//listByPage';
        this.$http.post(url,this.page).then(function(response){
          this.tableData=response.body.data; 
        })
      },
      handleEdit(index,row){
            this.$router.push({
            name: 'EditCompetition',
            params: {
              dataObj: row
            }
        })
      },
      handleFabu(index,row){
        this.$router.push({
        name: 'Release_competition',
        params: {
            dataObj: row
          }
        })
      },
      handleDelete(index,row){
          let url='http://47.97.223.234:8888/competition/del';
          this.$http.post(url,row,{emulateJSON:true})
            .then(function(response){
                this.$alert(response.body.msg, '用户信息', {
                    confirmButtonText: '确定',
                });
                this.getdata();
            })
          
          //this.tableData.splice(index,1);  
      },
      handleSizeChange(val) {
        this.page.limit=val;
        this.page.pageCode=1;
        this.getdata();
      },
      handleCurrentChange(val) {
        this.page.pageCode=val;
        this.getdata();
      }

    },
   created:function(){
         this.getdata();
    },
}
</script>
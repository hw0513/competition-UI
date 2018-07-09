<template>
<el-table :data="tableData" style="width: 100%">
    <el-table-column label="编号" type='index' width="50"></el-table-column>
    <!-- <el-table-column label="比赛名称" width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>描述: {{ scope.row.competition.name}}</p>
          <p>主办单位: {{ scope.row.competition.host_unit}}</p>
          <p>竞赛级别: {{ scope.row.competition.lev}}</p>
          <p>最大竞赛人数: {{ scope.row.competition.competition_way}}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">
                {{ scope.row.competition.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column> -->
    <el-table-column label="队名">
      <template slot-scope="scope">
        {{ scope.row.player.id}}
      </template>
    </el-table-column>
    <el-table-column  v-for="(player,index) in num" :key="index" label="参赛队员">
    
      <template slot-scope="scope" v-if="index<scope.row.userList.length">
        {{ scope.row.userList[index].name}}
      </template>
    </el-table-column>
    <el-table-column label="获奖级别">
      <template slot-scope="scope">
        {{ scope.row.lev}}
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template slot-scope="scope">
        <el-button size="mini"  icon="el-icon-edit" @click="addAward()"></el-button>
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
            dataObj:{},
            tableData: [],
            num:'',

        }
    },
    methods:{
        getdata:function(){
            var url='http://127.0.0.1:8888/award/listbymessage_board';
            this.$http.post(url,{message_board:this.dataObj.id},{emulateJSON:true}).then(function(response){
                this.tableData=response.body.data;
            })
        },
        getnum:function(){
            var url='http://127.0.0.1:8888/competition/competition_way';
            this.$http.post(url,{competition:this.dataObj.competition.id},{emulateJSON:true}).then(function(response){
                this.num=response.body.data;
            })
        },
    },
    mounted:function(){
      this.dataObj = this.$route.params.dataObj;
      this.getdata();
      this.getnum();
    },
}
</script>

<template>
  <el-container style="height: 1000px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1','2','3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>竞赛管理</template>
           <el-menu-item index="1-1" @click="skip('AddCompetition')">添加比赛信息</el-menu-item>
           <el-menu-item index="1-2" @click="skip('Competition_management')">基本竞赛管理</el-menu-item>
           <el-menu-item index="1-3" @click="skip('Competition_information')">比赛信息管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
          <el-menu-item index="2-1" @click="skip('Award')">用户报名管理</el-menu-item>
          <el-menu-item index="2-2" @click="skip('Award_management')">用户获奖管理</el-menu-item>
          <el-menu-item index="2-3">修改用户密码</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>新闻管理</template>
          <el-menu-item index="3-1" @click="skip('News')">添加新闻</el-menu-item>
          <el-menu-item index="3-2" @click="skip('NewsList')">新闻列表</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    
    <el-header>
      <div style="float:left ; ">
        <span >四川工商学院学科竞赛管理系统</span>
      </div>
      <div style="float:right ;font-size: 12px">
        <span>黄维</span>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登陆</el-dropdown-item>
          <el-dropdown-item>查看个人信息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>

 export default {
  methods:{
    skip:function(name){
        this.$router.push({
                name: name
        })
      }
    }
}
  
</script>

<style scoped>
</style>




<template>
    <div>
        <el-row>
            正在报名的比赛
        </el-row>
        <el-row>
            <el-col :span="7" v-for="(endRegistration,index) in endRegistrationdata" :key="index" class="card">
                <el-card :body-style="{ padding: '0'}">
                <img src="" class="image">
                <div style="padding: 14px;">
                    比赛名称：<span>{{endRegistration.competition.name}}</span>
                    <div class="bottom clearfix">
                    比赛性质：<time class="time">{{endRegistration.competition.competition_way}}</time>
                    </div>
                    <div class="bottom clearfix">
                    截至报名时间：<time class="time">{{endRegistration.end_enter | time}}</time>
                    </div>
                    <div class="bottom clearfix">
                    开始比赛时间：<time class="time">{{endRegistration.end_enter | time}}</time>
                    </div>
                   
                    <div class="bottom clearfix">
                        <el-button type="text" class="button" @click="toEditAward(endRegistration)">查看报名情况</el-button>
                    </div>
                    
                </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    data() {
        return{
            endRegistrationdata:[]
        }
    },
    methods: {
      getdate(){
        let url='http://127.0.0.1:8888/message_board/endRegistration';
        this.$http.get(url).then(function(response){
            this.endRegistrationdata=response.body.data; 
            }),
            function(response){
            }
      },
      toEditAward(endRegistration){
        this.$router.push({
            name: 'EditAward',
            params: {
              dataObj: endRegistration
            }
          })
      }
    },
    created(){
        this.getdate();
    }

  }
</script>
<style scoped>
 .time {
    font-size: 13px;
    color: #999;
  }
  .card{
      margin: 1%;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>


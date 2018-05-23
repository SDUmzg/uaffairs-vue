<template>
  <div id="userInfo">
    <div id="userInfoDiv">
      <table class="formTable">
        <tr>
          <td colspan="2">个人信息</td>
        </tr>
        <tr>
          <td class="title">学号</td>
          <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="userInfo.uid"></td>
        </tr>
        <tr>
          <td class="title">姓名</td>
          <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="userInfo.name"></td>
        </tr>
        <tr>
          <td class="title">性别</td>
          <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="userInfo.sex"></td>
        </tr>
        <tr>
          <td class="title">手机</td>
          <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="userInfo.phone"></td>
        </tr>
        <tr>
          <td class="title">邮箱</td>
          <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="userInfo.email"></td>
        </tr>
        <tr>
          <td class="title">身份证号</td>
          <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="userInfo.idCard"></td>
        </tr>
        <tr>
          <td class="title">状态</td>
          <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="userInfo.status"></td>
        </tr>
      </table>
    </div>
    <div id="familyRelationDiv">
      <table class="formTable" v-for="(ufamilyRelation,index) in userInfo.ufamilyRelationList">
        <tr>
          <td colspan="2">家庭关系{{index+1}}</td>
        </tr>
        <tr>
          <td class="title">姓名</td>
          <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="ufamilyRelation.name"></td>
        </tr>
        <tr>
          <td class="title">电话</td>
          <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="ufamilyRelation.phone"></td>
        </tr>
        <tr>
          <td class="title">邮箱</td>
          <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="ufamilyRelation.email"></td>
        </tr>
        <tr>
          <td class="title">关系</td>
          <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="ufamilyRelation.relation"></td>
        </tr>
      </table>   
      <!-- 按钮：用于打开模态框 -->
      <button type="button" class="btn" data-toggle="modal" data-target="#myModal">新增家庭关系</button> 
    </div>
    <button>更新</button>

    <div class="other">
      <!-- 模态框 -->
      <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
       
            <!-- 模态框头部 -->
            <div class="modal-header">
              <h4 class="modal-title">新增家庭关系</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
       
            <!-- 模态框主体 -->
            <div class="modal-body">

              <div id="familyRelationDiv">
                <table class="formTable">
                  <tr>
                    <td class="title">姓名</td>
                    <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="ufamilyRelationTemp.name"></td>
                  </tr>
                  <tr>
                    <td class="title">电话</td>
                    <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="ufamilyRelationTemp.phone"></td>
                  </tr>
                  <tr>
                    <td class="title">邮箱</td>
                    <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="ufamilyRelationTemp.email"></td>
                  </tr>
                  <tr>
                    <td class="title">关系</td>
                    <td>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model="ufamilyRelationTemp.relation"></td>
                  </tr>
                </table> 
              </div>

            </div>
       
            <!-- 模态框底部 -->
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="addFamilyRelation">确定</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
            </div>
       
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'user-info-index',
  components:{
  },
  data(){
    return{
      userInfo: {
        ssoId:"",
        eduId:"",
        eduType:"",
        name:"",
        sex:"",
        phone:"",
        email:"",
        idCard:"",
        superiorId:"",
        role:"",
        status:"",
        uid:"",
        ufamilyRelationList:[
            // {
            //     "ableStatus":,
            //     "description":,
            //     "createTime":"",
            //     "updateTime":"",
            //     "id":,
            //     "stuId":"",
            //     "name":"",
            //     "phone":"",
            //     "email":"",
            //     "relation":""
            // }
        ]
      },
      ufamilyRelationTemp:{
        stuId:"",
        name:"",
        phone:"",
        email:"",
        relation:""
      } 


    }
  },
  mounted(){
      this.getUserInfo();
  },
  methods:{
  	getUserInfo(){
      var url="http://localhost:8130/user-info/getUserInformationBySsoId.jsonp?sso_id=1";
      var url1="https://api.douban.com//v2/movie/top250";
      this.$http.jsonp(url, {},{ 
        headers: {},
        emulateJSON: true }).then((response) => {
        this.userInfo = response.data;
        console.log(this.userInfo);

      });
  	},
    addFamilyRelation(){
      this.ufamilyRelationTemp.stuId=this.userInfo.eduId;
      alert(JSON.stringify(this.ufamilyRelationTemp));
      
      this.ufamilyRelationTemp={};

      // var url3="http://192.168.16.25:8130/file-system/getId.json"
      // this.$http.jsonp(url3, {},{ 
      //   headers: {},
      //   emulateJSON: true }).then((response) => {
      //     alert(response.data);
      // });
    }
  }
}
</script>

<style scoped>
  .formTable .title{
    width: 80px;
  }
  #userInfo{
    height: 100%;
    padding-bottom: 40px;
    overflow-y: auto;
  }
</style>

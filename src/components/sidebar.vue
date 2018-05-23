<template>

	<div class="vertical-menu">
	  <h1>系统菜单</h1>
	  <a href="#" class="active">Home</a>
	  <div class="mean">
	  	  <router-link to="/user-info">个人信息</router-link>
		  <a>问卷系统</a>
		  <a>通讯薄</a>
		  <a>作业系统</a>
	  	  <router-link to="/file-system">文件系统</router-link>
	  	  <router-link to="/test-view">测试模块</router-link>
	  </div>
	</div>
</template>



<style scoped>
.vertical-menu {
    width: 100%;
    margin-top: 30px;
}

.vertical-menu a {
    background-color: #eee;
    color: black;
    display: block;
    padding: 12px;
    text-decoration: none;
}

.vertical-menu a:hover {
    background-color: #ccc;
}

.vertical-menu a.active {
    background-color: #4CAF50;
    color: white;
}
</style>

<script>
	export default{
		components:{

		},
		data(){
			return{

			}
		},
		methods:{

		}
	}
</script>


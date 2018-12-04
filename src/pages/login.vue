<template>
    <el-form label-position="right" label-width="80px" :model="userInfo" class="login_sec">
        <img src="../assets/login_logo.png" class="login_logo" alt="">
        <h2 class="title">运气宝后台管理系统</h2>
        <el-form-item label="用户名">
            <el-input v-model="userInfo.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="userInfo.userPsw" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="reme">
            <el-checkbox v-model="remember" style="color:#409EFF"> 记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="login_btn" >登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                userInfo: {
                    userName: '',
                    userPsw: '',
                },
                remember:false
            };
        },
        methods: {

        }
    }
</script>
<style lang="less">
    #app{
        background:  #109BA6;
    }
    .login_sec{
        width:400px;
        background: #fff;
        padding-bottom:30px;
        border:1px solid #606266;
        position: fixed;
        top:50%;
        left:50%;
        margin-left:-200px;
        margin-top:-280px;
        text-align: center;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        .login_logo{
            width:100px;
            height: 133px;
            margin-top:10px;
            transform:scale(0.8);
        }
        .title{
            padding:10px;
            font-size:24px;
            color: #606266;
            text-align: center;
            font-weight:normal;
        }
        .el-form-item{
            margin-right:50px;
        }
        .reme{
            text-align:left;
            margin-bottom:4px;
            margin-top:-10px;
        }
        .login_btn{
            width:268px;
            margin-left: -10px;
        }
    }

</style>

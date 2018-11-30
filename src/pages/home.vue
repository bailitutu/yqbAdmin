<template>
    <el-container>
        <div class="left_aside ">
            <div class="logo_item" >
                <img src="../assets/logo.png" alt="">
            </div>
            <el-menu unique-opened  router :default-active= "currentMenu" class="el-menu-vertical-demo"  background-color="#545c64" text-color="#fff"  active-text-color="#ffd04b" :collapse="isCollapse">

                <el-submenu v-for="(item,index) in menuList" :key="index" :index="item.index">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">{{item.title}}</span>
                    </template>
                    <el-menu-item-group >
                        <el-menu-item v-for="(cell,ind) in item.sub" :key="ind"  :index="cell.index"  :route="cell.url">{{cell.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>

        </div>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="3">
                        <el-button size="small" type="warning" @click="changeAside"  icon="el-icon-menu"></el-button>
                        <el-button size="small" type="warning" @click="refreshPage"  icon="el-icon-refresh"></el-button>
                    </el-col>
                    <el-col :span="6" >
                        <el-breadcrumb separator-class="el-icon-arrow-right" class="top_head_breadcrumb">
                            <el-breadcrumb-item>首页</el-breadcrumb-item>
                            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                    <el-col :span="4" :offset="11">
                        <el-menu  class="el-menu-demo top_head_right"  background-color="#545C64" text-color="#fff" active-text-color="#fff" mode="horizontal" >
                            <el-menu-item index="1">我的消息</el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">管理员</template>
                                <el-menu-item index="2-1">个人中心</el-menu-item>
                                <el-menu-item index="2-2">设置</el-menu-item>
                                <el-menu-item index="2-3">退出</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-header>

            <el-main class="main_section">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name:'home',
        data() {
            return {
                currentMenu:'',
                isCollapse: false,
                menuList:[
                    {
                        index:'1',
                        title:'订单管理',
                        sub:[

                            {
                                name:'开户订单',
                                url:'/openOrder',
                                index:'11'
                            },
                            {
                                name:'换气订单',
                                url:'/changeOrder',
                                index:'12'
                            },
                            {
                                name:'置换订单',
                                url:'/displaceOrder',
                                index:'13'
                            },
                            {
                                name:'商城订单',
                                url:'/shopOrder',
                                index:'14'
                            },
                            {
                                name:'订单设置',
                                url:'/orderSetting',
                                index:'15'
                            }

                        ]
                    }
                ],

            };
        },

        created(){
            this.currentMenu = this.menuList[0].sub[0].index;
        },
        watch:{
           '$route'(to ,from){
                this.menuList.map(function(item){
                    if( ){

                    }

                })

           }
        },
        methods: {
            refreshPage(){
                location.reload();
            },
            changeAside(){
                this.isCollapse = !this.isCollapse
            },

        }
    }
</script>

<style lang="less">
    .el-header{
        background-color: #545C64;
        color: #333;
        line-height: 60px;
    }
    .el-main {
        background-color: #fff;
        color: #333;
        text-align: center;
        padding:0;
    }

     .el-container {
        height: 100%;
    }
    .el-submenu,.el-menu-item{
        text-align:left;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse){
        height:100%;
        width: 200px;
        overflow-x: hidden;
    }
    .left_aside {
        background-color: rgb(84, 92, 100);
        color: #333;
        text-align: center;
        height: 100%;
        position: relative;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        .el-menu{
            flex:3;
            margin-top:0;
            height:100%;
        }
        .el-menu-item-group__title{
            display: none;
        }
    }
    .logo_item{
        height:60px;
        line-height: 60px;
        text-align: center;
        border-right: 1px solid #545C64;
        img{
            width:30px;
            height:30px;
            margin:15px auto;
        }
    }

    .top_head_right{
        text-align: right;
    }
    .el-menu--popup{
        min-width:102px;
    }
    /*顶部面包屑*/
    .top_head_breadcrumb{
        height:100%;
        line-height: 60px;
    }
    .el-breadcrumb__inner{
        color:#fff;
    }
    .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
        color:#fff;
    }
    /*内容区域的tab*/
    .main_section{
        padding: 20px;
    }

</style>

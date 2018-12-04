<template>
    <el-container class="page_container">
        <div class="left_aside ">
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
            <el-header class="nav_header">
                <el-button size="small" class="slide_btn fl" type="warning" @click="changeAside"  icon="el-icon-menu"></el-button>

                <el-breadcrumb separator-class="el-icon-arrow-right" class="top_head_breadcrumb fl">
                    <el-breadcrumb-item>{{menuOne}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{menuTwo}}</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="product_title"> 运气宝后台管理系统</div>

                <el-menu  class="el-menu-demo top_head_right"  background-color="#545C64" text-color="#fff" active-text-color="#fff" mode="horizontal" >
                    <el-submenu index="1">
                        <template slot="title">管理员</template>
                        <el-menu-item index="2-1">个人中心</el-menu-item>
                        <el-menu-item index="2-2">设置</el-menu-item>
                        <el-menu-item index="2-3">退出</el-menu-item>
                    </el-submenu>
                </el-menu>
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
                isCollapse: false, //是否隐藏完整目录
                menuOne:'', //面包屑一级目录
                menuTwo:'',//面包屑二级目录
                menuList:[
                    {
                        index:'1',
                        title:'信息管理',
                        sub:[

                            {
                                name:'液化公司查询',
                                url:'/openOrder',
                                index:'11'
                            },
                            {
                                name:'供应点查询',
                                url:'/changeOrder',
                                index:'12'
                            },
                            {
                                name:'送气工查询',
                                url:'/displaceOrder',
                                index:'13'
                            }
                        ]
                    },{
                        index:'2',
                        title:'审核管理',
                        sub:[

                            {
                                name:'商品审核',
                                url:'/openOrder',
                                index:'11'
                            },
                            {
                                name:'燃气公司审核',
                                url:'/changeOrder',
                                index:'12'
                            },
                            {
                                name:'供应点审核',
                                url:'/displaceOrder',
                                index:'13'
                            },
                            {
                                name:'送气工审核',
                                url:'/shopOrder',
                                index:'14'
                            }
                        ]
                    },{
                        index:'3',
                        title:'订单管理',
                        sub:[
                            {
                                name:'换气订单',
                                url:'/changeOrder',
                                index:'11'
                            },
                            {
                                name:'置换订单',
                                url:'/displaceOrder',
                                index:'12'
                            },
                            {
                                name:'开户订单',
                                url:'/openOrder',
                                index:'13'
                            },
                            {
                                name:'充值订单',
                                url:'/shopOrder',
                                index:'14'
                            },
                            {
                                name:'退款订单',
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
            this.currentMenu = this.menuList[0].sub[0].index; //初始化首页路径
            this.getRouterFn( this.$route.path); //设置面包屑导航

        },
        watch:{
           '$route'(to){
               this.getRouterFn(to.path)
           }
        },
        methods: {
            //切换侧边栏显隐
            changeAside(){
                this.isCollapse = !this.isCollapse
            },
            // 获取面包屑导航路径
            getRouterFn(path){
                this.menuList.map((item)=>{
                    item.sub.map((cell)=>{
                        console.log(cell)
                        if(cell.url == path){
                            console.log(this)
                            this.menuTwo = cell.name;
                            this.menuOne = item.title
                        }
                    })
                })
            }
        }
    }
</script>

<style lang="less">
    .el-header{
        background-color: #545C64;
        color: #333;
        line-height: 60px;
    }
    .el-menu{
        border-right: none;
    }

     .page_container{
         height:100%;
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
        .el-menu-item-group__title{
            display: none;
        }
    }


    /*顶部栏*/
    .nav_header{
        position: relative;
        line-height: 60px;
        .slide_btn{
            margin-top: 15px;
            margin-right:10px;
        }
        .top_head_right{
            position: absolute;
            right:20px;
        }
        .top_head_breadcrumb{
            height:100%;
            line-height: 60px;
        }
        .el-breadcrumb__inner{
            color:#fff;
            cursor:default;
        }
        /*顶部面包屑*/
        .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
            color:#fff;
            cursor:default;
        }


        .product_title{
            height:60px;
            line-height: 60px;
            position: absolute;
            left:50%;
            margin-left:-30px;
            color: #fff;
        }
    }

    .el-menu--popup{
        min-width:110px;
    }


    /*内容区域的tab*/
    .main_section{
        overflow-x: hidden;
        overflow-y:auto;
    }

</style>

/**
 * 配置文件
 */
 const config={
    // 接口地址
    //apiUrl:process.env.NODE_ENV !== 'production'?"":"https://panpan.iteasy.cn/poem",
    apiUrl:"",
    // Header组件 菜单全局配置
    HeaderMeun:[
        {
            url:"/",
            name:"诗词",
        },
        {
            url:"/read",
            name:"阅读",
        },
        {
            url:"/about",
            name:"关于",
        }
        // {
        //     url:"/business",
        //     name:"商务",
        // }
    ],
 }

 export default config
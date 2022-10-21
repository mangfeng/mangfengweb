/**
 * read 页面reducer
 * Data:2018/11/29
 * Author:@inoro
 */

// 初始数据
const initState={
    // 默认推荐文章
    articles:[
        {
            title:"千古无非一孤客",
            url:"https://mp.weixin.qq.com/s/_KWvlMh_pFkOUv_rjzQrQg",
            intro:"如果在这样漆黑的夜我有杯酒，必然也和华山一样孤独，今夜的雨也无非是万古一刻的孤独眼泪。",
            date:"2018年11月02日",
        },
        {
            title:"万水人笔记：深藏功与名",
            url:"https://mp.weixin.qq.com/s/k-X10oWUi7zGUtGKg_2rUQ",
            intro:"他们建起城池，竖起旗帜，点上灯火，然后又关上城门，留下背影，希望你去追。",
            date:"2018年07月29日",
        },
        {
            title:"金六：不敢相信这里的热闹",
            url:"https://mp.weixin.qq.com/s/V1oTVawOcDlKA9METcjJfw",
            intro:"他在人生大河的最后一天中，回头望了望两个儿子，希望他们撑起门户。",
            date:"2018年06月10日",
        },
        {
            title:"那个商人的雄心壮志...",
            url:"https://mp.weixin.qq.com/s/GaGUaIDQ8FeNPfg0rQ-uJw",
            intro:"我想青水浩荡照不了远方的路，但单单照见了每个人。",
            date:"2018年06月03日",
        },
        {
            title:"杜甫：与我相逢难相识",
            url:"https://mp.weixin.qq.com/s/XFzj1FXkzu5hU4qECpnrtA",
            intro:"如果说千年只记住一年，千万卷历史只记得一人，千万个夜晚只记得一个秋夜，千万次起伏只看见不语，或许能读出沙鸥，或许能读到平淡中的浓墨重彩，而不是歧路相失。",
            date:"2018年05月26日",
        },
        {
            title:"如果有可能，我要浆洗尘世的一切...",
            url:"https://mp.weixin.qq.com/s/pLpbwXZMLDKun-n7SfeBLw",
            intro:"“本来都在尘中，快要看不见了，在不洗就更不干净了！”他说完就叹息起来，然后甩起袖子继续洗。",
            date:"2018年04月07日",
        }
    ]
}

const read=(state=initState,action)=>{
    switch(action.type){
        case 'READ/STATE_CHANGE':
            return {...state,...action.payload}
        default:
            return state
    }
}

export default read
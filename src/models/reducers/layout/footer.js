/**
 * 底部 footer 组件 reducer
 * Date:2018/11/28
 * Author:@inoro
 **/


// 定义初始数据
const initState={
    //底部弹窗状态
    footerModal:false,
}

const footer=(state = initState, action)=>{
    switch(action.type){
        case 'FOOTER/STATE_CHANGE':
            return {...state,...action.payload}
        default:
            return state
    }
}

export default footer
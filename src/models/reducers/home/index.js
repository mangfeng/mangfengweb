/**
 * 首页组件reducer 
 */

// 默认首页数据
const initState={
    // 列表
    list:[],
    // 首页中部文字描述
    contentHero:{
        title:"有花只插此瓶中",
        titleIntro:"穷尽一生写尽万千世界，唱尽悲欢离合"
    },
    // 弹窗
    visable:false,
}

const home = (state = initState, action) => {

    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        const data=[
            {id:9,title:"2121"}
        ]
        return {
            ...state,
        }
      // 更新 state
      case 'STATE_CHANGE':
        return {...state,...action.payload}
      default:
        return state
    }
}

export default home


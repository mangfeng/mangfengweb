/**
 * 底部footer action
 * Data:2018/11/28
 * Author:@inoro
 */


// 更新 state
export const stateChange=(payload)=>{
    return {
      type:"FOOTER/STATE_CHANGE",
      payload
    }
}
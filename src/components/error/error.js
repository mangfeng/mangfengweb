import React, { Component } from 'react';
import style from '../../asset/css/error/index.module.css'

//错误组件
class Error extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){}
    componentWillReceiveProps(){}

    render(){
        return(
            <div className={style.error}>404未知页面</div>
        )
    }
}

export default Error



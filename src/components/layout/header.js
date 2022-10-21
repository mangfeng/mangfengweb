import React , {Component} from 'react'
import {Link} from "react-router-dom";
import Style from '../../asset/css/layout/header.css'
import config from '../../config'


// 首页头部组件
class Header extends Component{

    render(){
        const {HeaderMeun}=config
        const {styles}=this.props
        const meunList=HeaderMeun.map((item,index)=><li key={index}><Link to={item.url}>{item.name}</Link></li>)
        
        return(
            <div style={styles}>
                <div className={Style.header}>
                    {/* Logo */}
                    <div className={Style.logo}></div>
                    {/* 菜单 */}
                    <div className={Style.meun}>
                        <ul>
                            {meunList}
                            <li><a href="mailto:official@mangfeng.com.cn">意见反馈</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header
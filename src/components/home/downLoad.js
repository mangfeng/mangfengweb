import React , {Component} from 'react'
import Style from '../../asset/css/home/download.css'


// 下载展示区域
class DownLoad extends Component{
    render(){
        return(
            <div className={Style.downloadContainer}>
                <ul>
                    <li>
                        <div className={Style.downloadItem}>
                            <div className={Style.qcode}></div>
                            <span><i></i>iPhone客户端</span>
                        </div>
                    </li>
                    <li>
                        <div className={Style.downloadItem}>
                            <div className={Style.qcode}></div>
                            <span><i></i>Android客户端</span>
                        </div>
                    </li>
                    <li>
                        <div className={Style.downloadItem}>
                            <div className={Style.qcode}></div>
                            <span><i></i>微信小程序</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default DownLoad
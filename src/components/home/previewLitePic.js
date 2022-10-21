import React,{Component} from 'react'
import Style from '../../asset/css/home/previewLitePic.css'

// 预览小图组件
class PreviewLitePic extends Component{
    render(){

        const {url,text}=this.props

        return(
            <div className={Style.previewContainer}>
                <ul>
                    <li>
                        <div className={Style.previewItem}>
                            <div className={Style.qcode} style={{backgroundImage:"url("+url+")"}}></div>
                            <span>{text}</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default PreviewLitePic
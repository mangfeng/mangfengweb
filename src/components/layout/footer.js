import React , { Component } from 'react'
import { connect } from 'react-redux'
import Style from '../../asset/css/layout/footer.css'
import Modal from '../../components/common/modal'
import PreviewLitePic from '../../components/home/previewLitePic'
import * as action from '../../models/action/layout/footer'

// 底部信息组件
class Footer extends Component{
    
    render(){

        const {footer,dispatch}=this.props
        const {footerModal}=footer

        // 二维码弹窗
        const qcodeProps={
            visable:footerModal,
            title:"莽风阅读公众号",
            width:"400px",
            // top:"20px",
            // 关闭弹窗
            closeModal(){
                openQodeModal()
            }
        }

        // 二维码图片信息
        const qcodeImage={
            url:'https://api.mangfeng.com.cn/image/weixinQcode.jpg',
            text:"微信号：mfread"
        }

        // 打开弹窗
        const openQodeModal=()=>{
            dispatch(action.stateChange({
                footerModal:!footerModal
            }))
        }

        

        return(
            <div className={Style.footerContainer}>
            
                <div className={Style.footerContent}>

                    {/* 底部功能 */}
                    <div className={Style.footerFeature}>
                        <div className={Style.footerLink}>
                            <ul>
                                <li>
                                    <h3>产品服务</h3>
                                    <ul>
                                        <li>莽风诗词</li>
                                        <li>莽风阅读</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>关注我们</h3>
                                    <ul>
                                        <li><a href="https://weibo.com/iguzhureader" target="_blank">新浪微博</a></li>
                                        <li onClick={()=>openQodeModal()}>官方微信</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={Style.footerContact}>
                            <h4>商务合作：official@mangfeng.com.cn</h4>
                        </div>
                    </div>
                    <div className={Style.footerInfo}>
                        <h5>Copyright © 2018, Mangfeng Team. All Rights Reserved.莽风团队 &nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://www.beian.miit.gov.cn/" target="_blank">陕ICP备18009013号</a></h5>
                    </div>

                </div>

                {/* 二维码预览弹窗 */}
                <Modal {...qcodeProps}>
                    <PreviewLitePic {...qcodeImage}/>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps=({footer})=>{
    return {footer}
}

export default connect(mapStateToProps)(Footer)
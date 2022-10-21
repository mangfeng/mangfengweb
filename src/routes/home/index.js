import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as action from '../../models/action'
import { push } from 'connected-react-router'
import * as DocumentTitle from 'react-document-title';
import Header from '../../components/layout/header'
import HomeContent from '../../components/home/homeContent'
import Footer from '../../components/layout/footer'
import Modal from '../../components/common/modal/index'
import DownLoad from '../../components/home/downLoad'



// 首页
class Homes extends Component{

    constructor(props){super(props)}

    componentDidMount(){
        // 获取数据
        // this.getJson()
    }

    // 获取数据-Demo
    getJson(){
        const {dispatch}=this.props
        // 加载数据
        // dispatch(action.toggleTodo("111"))
        // dispatch(push({pathname: "/user/view/111",query:{id:111}}))
    }

    render(){
        const {home,dispatch}=this.props
        const {list,contentHero,visable}=home

        // 中部展示组件
        const homeContentProps={
            contentHero,
            // 显示下载弹出
            showDownLoadMoal(){
                dispatch(action.stateChange({
                    visable:true
                }))
            }
        }
        
        // 弹出组件
        const modalProps={
            visable:visable,
            title:"莽风诗词",
            width:"800px",
            // top:"300px",
            // 关闭弹窗
            closeModal(){
                dispatch(action.stateChange({
                    visable:false
                }))
            }
        }

        return(
            <DocumentTitle title="莽风首页--mangfeng.com.cn">
                <div>
                    {/* 头部 */}
                    <Header/>
                    {/* 首页中部展示组件 */}
                    <HomeContent {...homeContentProps}/>
                    {/* 底部区域 */}
                    <Footer/>
                    {/* 弹出层 */}
                    <Modal {...modalProps}>
                        <DownLoad/>
                    </Modal>
                </div>
            </DocumentTitle>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
}

// mapDispatchToProps 定义Dispatch 触发 action reducer
// const mapDispatchToProps=(dispatch)=>{
//     return {
//         getJson:()=>{
//             dispatch(action.toggleTodo())
//         }
//     }
// }

export default connect(mapStateToProps)(Homes)
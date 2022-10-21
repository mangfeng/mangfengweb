import React,{Component} from 'react'
import Style from './assets/index.css'

// 对话框 modal 组件
class Modal extends Component{

    constructor(props){
        super(props)
        this.state={
            modalClass:null,
            maskModalClass:null,
            visableState:false,
            centerStyle:null,//居中
        }
        // 创建 modal ref
        this.modal = React.createRef();
    }

    componentWillMount(){
        const {visable}=this.props
        // 组件加载后不添加默认样式以免css3动画出现最后一帧
        !visable?this.setState({modalClass:"",maskModalClass:"",visableState:false}):null
    }

    componentWillReceiveProps(next){
        const {visable,center,top}=next
        const {visableState}=this.state

        // 设置居中样式
        const centerStyle={position:"fixed",zIndex:"9999",transform:"translate(-50%,-50%)",top:"50%",left:"50%"}


        // 判断是否接受到相同的状态
        // 重复状态则不渲染
        if(visable!==visableState){
            this.setState({
                modalClass:`${Style.modalContent}`, //弹窗样式
                maskModalClass:visable?`${Style.modalBackground} ${Style.openMaskModal}`:`${Style.modalBackground} ${Style.closeMaskModal}`, //遮罩动画与样式
                visableState:visable, //显示状态
                centerStyle:center && top==""?centerStyle:{}, //判断是否居中
            })
        }
    }

    // 关闭弹窗
    handleCloseModal(){
        const {closeModal}=this.props
        closeModal()
        setTimeout(()=>{
           this.setState({centerStyle:{},visableState:false,modalClass:""})
        },300)
    }


    render(){

        const {
            visable,
            title,
            children,
            width,
            top,
        }=this.props

        const {modalClass,maskModalClass,centerStyle,visableState}=this.state

        //弹窗动画与样式
        const modalAniClass=visableState?`${modalClass} ${Style.openModal}`:modalClass!==""?`${modalClass} ${Style.closeModal}`:`${Style.none}` 
        
        //visable?document.body.style.overflow="hidden":document.body.style.overflow="initial" // 增加bodyoverflow
        
        // 判断是否存在top 也就是是否设置距离顶部高度 未设置只返回宽度
        const styles=top!==""?{width:width,height:"auto",overflow:"hidden",bottom:"inherit",top:top,position:"fixed"}:{width:width}
        return(
            <div>
                    <div style={centerStyle}>
                        <div className={modalAniClass} style={styles}>
                            {/* 标题栏 */}
                            {
                                title!==""?
                                <div className={Style.modalTitle}>
                                    <span>{title}</span>
                                    <span onClick={()=>this.handleCloseModal()}></span>
                                </div>
                                :null
                            }
                            {/* 主体内容 */}
                            <div className={Style.modalContainer}>
                                {children}
                            </div>
                        </div>
                        
                    </div>
                    <div className={maskModalClass} onClick={()=>this.handleCloseModal()}></div>
            </div>
        )
    }
}

// 定义默认 props
Modal.defaultProps = {
    visable:false, // boolean 是否显示
    closeModal:()=>{}, //关闭回调函数
    title:"", //标题 如果无标题则无标题栏
    children:<div>主体</div>,//react 组件
    width:"400px", // 宽度
    center:true, // 是否居中 默认为居中
    top:"",//距离顶部高度 不设置top则center为true时有效，设置后center为true失效
};

export default Modal
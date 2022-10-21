import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as DocumentTitle from 'react-document-title';
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import ReadList from '../../components/read/readList'



// 阅读
class Read extends Component{

    constructor(props){super(props)}

    componentDidMount(){
    }

    render(){

        const {read}=this.props
        const {articles}=read

        // 头部 props
        const headerProps={
            styles:{background:"#f7f7f7"}
        }

        // 文章组件
        const readListProps={
            articles,
        }
        return(
            <DocumentTitle title="莽风阅读--mangfeng.com.cn">
                <div>
                    {/* 头部 */}
                    <Header {...headerProps}/>
                    {/* 中部 */}
                    <ReadList {...readListProps}/>
                    {/* 底部 */}
                    <Footer/>
               </div>
            </DocumentTitle>
        )
    }
}

const mapStateToProps=({read})=>{
    return {read}
}


export default connect(mapStateToProps)(Read)
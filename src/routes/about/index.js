import React , { Component } from 'react'
import { connect } from 'react-redux'
import * as DocumentTitle from 'react-document-title'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import AboutComponent from '../../components/about/about'

// 关于页面
class About extends Component{

    render(){

        // 头部 props
        const headerProps={
            styles:{background:"#f7f7f7"}
        }
        
        return(
            <DocumentTitle title="关于莽风--mangfeng.com.cn">
                <div>
                    {/* 头部 */}
                    <Header {...headerProps}/>
                    {/* 关于 */}
                    <AboutComponent/>
                    {/* 底部 */}
                    <Footer/>
                </div>
            </DocumentTitle>
        )
    }

}


const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps)(About)
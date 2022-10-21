import React,{Component} from 'react'
import Style from '../../asset/css/read/readList.css'


// 阅读列表组件
class ReadList extends Component{
    render(){

        const {articles}=this.props

        const readListItem=articles.map((value,index)=>{
            return(
                <li key={index}>
                
                    <div>
                        <p><a href={value.url} target="blank">{value.title}</a></p>
                        <p>{value.intro}</p>
                    </div>
                    
                    <i>更新于：{value.date}</i>
                </li>
            )
        })

        return(
            <div>
                <div className={Style.readHeader}>
                    <div className={Style.readContent}>
                        <h1>莽风阅读精选</h1>
                        <h5>焕发少年的精神</h5>
                    </div>
                </div>
                {/* 首页banner */}
                <div className={Style.banner}></div>
                {/* 列表 */}
                <div className={Style.readList}>
                    <ul>
                       {readListItem}
                    </ul>
                </div>
                {/* 关注更多 */}
                <div className={Style.getMore}>获取更多 关注微信：mfread</div>
            </div>
        )
    }
}

export default ReadList
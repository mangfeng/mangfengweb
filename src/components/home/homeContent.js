import React,{Component} from 'react'
import Style from '../../asset/css/home/homeContent.css'


// 首页中部展示组件
class HomeContent extends Component{
    render(){
        const {contentHero,showDownLoadMoal}=this.props
        return(
            <main className={Style.homeContent}>
                
                {/* 顶部 */}
                <h1>{contentHero.title}</h1>
                <h3>{contentHero.titleIntro}</h3>
                <div className={Style.downloadApp} onClick={()=>showDownLoadMoal()}>下载</div>

                {/* 实例app截图 */}
                <div className={Style.contentPic}>
                    <div className={Style.appFirstTitle}>发现</div>
                    <div className={Style.appFirstIntro}>此地一为别 孤蓬万里征</div>
                    <div className={Style.appSearch}>
                        <span>请输入关键字查询</span>
                        <span></span>
                    </div>
                    {/* APP 标题 */}
                    <div className={Style.appHeaderTitle}>
                        <span>文集</span>
                        <span>更多</span>
                    </div>
                    <div className={Style.appBookList}>
                        <div className={Style.appBookItem}>
                            <div className={Style.appBookCover}>
                                <span></span>
                                <span>黄庭坚文集</span>
                            </div>
                            <div className={Style.appBookItemTitle}>黄庭坚文集</div>
                        </div>
                        <div className={Style.appBookItem}>
                            <div className={Style.appBookCover}>
                                <span></span>
                                <span>白居易文集</span>
                            </div>
                            <div className={Style.appBookItemTitle}>白居易文集</div>
                        </div>
                        <div className={Style.appBookItem}>
                            <div className={Style.appBookCover}>
                                <span></span>
                                <span>孟浩然文集</span>
                            </div>
                            <div className={Style.appBookItemTitle}>孟浩然文集</div>
                        </div>
                    </div>
                    {/* APP 标题 */}
                    <div className={Style.appHeaderTitle}>
                        <span>朝代</span>
                        <span>更多</span>
                    </div>
                    <div className={Style.appDynstry}>
                        <ul>
                            <li>秦</li>
                            <li>汉</li>
                            <li>晋</li>
                            <li>唐</li>
                        </ul>
                    </div>
                </div>

            </main>
        )
    }
}

export default HomeContent
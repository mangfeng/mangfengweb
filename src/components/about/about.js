import React,{ Component } from 'react'
import Style from '../../asset/css/about/about.css'

// 关于组件
class AboutComponent extends Component{
    render(){
        return(
            <div>
                <div className={Style.aboutHeader}>
                    <div className={Style.aboutContent}>
                        <h1>关于莽风</h1>
                        <h5>焕发少年的精神</h5>
                    </div>
                </div>
                <div className={Style.aboutPage}>
                    <div className={Style.aboutContent}>
                        <h3>我们在做什么</h3>
                        <div className={Style.aboutArticles}>
                            <p>莽风旨在传播独立观点与事物，以及与中国文化与文化相关的产品</p>
                        </div>

                        <h3>我们的产品</h3>
                        <div className={Style.aboutArticles}>
                            <p>莽风诗词</p>
                            <p>穷其一生写遍万千世界，唱尽悲欢离合，一句“无语凝噎”道尽别情之苦，若报国无门悲愤填胸也把“栏杆拍遍”，独处才觉“流年，又成虚度”。莽风诗词为你提供优质传统诗词服务，为传播中华传统文化做出努力！</p>
                            <br/>
                            <p>莽风阅读</p>
                            <p>一句 焕发少年的精神 时刻激励着我们的思想，莽风阅读为您提供优质的原创阅读服务，让无味有味，让此刻历久弥新。</p>
                        </div>
                        

                        <h3>联系我们</h3>
                        <div className={Style.aboutArticles}>
                            <p>商务合作：official@mangfeng.com.cn</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutComponent
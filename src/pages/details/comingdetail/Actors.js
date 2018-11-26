import React,{Component} from 'react' 
import styled from 'styled-components'
import Swiper from 'swiper/dist/js/swiper.js'
import uuid from 'uuid'

import handelImage from '@util/handelImage'

class Actors extends Component{
    componentDidMount(){
        new Swiper ('.swiper-actor', {
            slidesPerView : 3.5,
            spaceBetween : 10,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            freeMode : true,//惯性运动
        })  
    }
    render(){
        console.log(this.props.actor)
        return(
            <ActorsWrapper>
                <section className="swiper-actor">
                    <div className="swiper-wrapper">
                        {   
                            this.props.actor.map(item=>{
                                let _img=handelImage(item,"96.120")
                                return  <div key={uuid()} className="swiper-slide">
                                            <img  alt="" src={_img} />
                                            <p  className="name"></p>
                                            <p  className="position"></p>
                                        </div> 
                            })
                        }
                    </div>
                </section>
                <div className="actor-all">
                    <h4>更多剧情</h4>
                    <i className="iconfont icon-arrow-right-copy-copy-copy"></i>
                </div>
            </ActorsWrapper>
        )
    }
}
const ActorsWrapper =styled.div`
    section.swiper-actor {
        background: white;
        padding: 15px 0 5px 15px;
        width:100vw;
        height: 160px;
        overflow:hidden;
        .swiper-slide {
            img {
                width: 90px;
                height: 120px;
            }
        }
    }
.actor-all {
    background: white;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    line-height: 1.066667rem;
    color: #555;
}
`
export default Actors;
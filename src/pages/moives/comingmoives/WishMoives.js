import React,{Component} from 'react' 
import {WishMoivesWrapper} from '../styledComponent'
import WishMoivesItem from './WishMoiveItem'
import Swiper from 'swiper/dist/js/swiper.js'
import ajax from "@util/axios"
class WishMoives extends Component{
    constructor(){
        super()
        this.state={
            wishData:[]
        }
    }
    async componentWillMount(){
        let _result=await ajax({url:'/my/ajax/mostExpected?ci=&limit=10&offset=0&token='});
        this.setState({
            wishData:_result.coming
        })
    }
    componentDidMount(){
        new Swiper ('.swiper-container', {
            slidesPerView : 3.715,
            spaceBetween : 12,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            freeMode : true,//惯性运动
        })  
    }
    render(){
        return(
            <WishMoivesWrapper>
                <p className="title">近期最受期待</p>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.wishData.map(item=>{
                                return (
                                    <div className="swiper-slide" key={item.id}>
                                        <WishMoivesItem   info={item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </WishMoivesWrapper>
        )
    }
}
export default WishMoives;
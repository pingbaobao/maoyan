import React,{Component} from 'react' 
import {MoiveItemWrapper} from './styledComponent'
function RenderScore(props){
    if(props.sc===0){
        return <p>暂无评分</p>
    }
    return <p>观众评<span className="num"> {props.sc}</span></p>
        
}
class MoiveItem extends Component{
    render(){
        let info=this.props.info;
        return(
            <MoiveItemWrapper>
                <img alt="哈哈" src='https://p0.meituan.net/128.180/movie/600beaeaa9929649f38181d41f2c8578328129.jpg'/>
                <div className="ticket" >
                    <div className="ticket-info">
                        <div className="moive-title">
                            <div className="title">{info.nm}</div>
                            {info.version?<div  className="v3d"></div>:''}
                            
                        </div>
                        <div className="moive-score">
                            {
                                info.showst===3?<RenderScore sc={info.sc}></RenderScore>
                                :<p><span className="num"> {info.wish}</span>人想看</p>
                            }
                            
                        </div>
                        <div className="moive-actor">
                            主演：
                            <span>
                             {info.star}
                            </span>
                        </div>
                        <div className="show-info">
                            {info.showInfo}
                        </div>
                    </div>
                    {
                        info.globalReleased?<div className="buy-ticket">购票</div>:<div className="presell-ticket">预约</div>
                    }
                </div>
            </MoiveItemWrapper>
        )
    }
}
export default MoiveItem;
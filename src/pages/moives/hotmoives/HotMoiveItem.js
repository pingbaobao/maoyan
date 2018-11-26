import React,{Component} from 'react' 
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'
import handelImage from "@util/handelImage"
import qs from 'querystring'


function RenderScore(props){
    if(props.sc===0){
        return <p>暂无评分</p>
    }
    return <p>观众评<span className="num"> {props.sc}</span></p>
        
}
class HotMoiveItem extends Component{
    render(){
        let info=this.props.info;
        let _img=handelImage(info.img);
        return(
            <HotMoiveItemWrapper onClick={this.goDetail.bind(this,info.id)}>
                <img alt="哈哈" src={_img}/>
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
            </HotMoiveItemWrapper>
        )
    }
    goDetail(_id){
        this.props.history.push({
            pathname:"/hotdetail",
            search:'?'+qs.stringify({id:_id})
        })
    }
}


export const HotMoiveItemWrapper = styled.div `
    padding-left: .4rem;
    padding-right:.453333rem;
    padding-top: .32rem;
    height: 3.04rem;
    display:flex;
    img{
        background-color: transparent;
        height: 2.4rem;
        width:1.706667rem;
        margin-right:.373333rem;  
    }
    div.ticket{
        flex:1;
        display:flex;
        border-bottom: .026667rem solid #e6e6e6;
        div.ticket-info{
            flex:1;
            div.moive-title{
                max-height: .64rem;
                margin-bottom: .186667rem;
                line-height: .64rem;
                overflow: hidden;
                display:flex;
                div.title{
                    font-size: .453333rem;
                    max-width:4.133333rem;
                    color: #333;
                    font-weight: 700;
                    padding-right: .133333rem; 
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                div.v3d{
                    background-repeat: no-repeat;
                    background:url(data:image/png;base64,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);
                    width: 1.146667rem;
                    line-height: .64rem;
                    background-size: contain;
                    background-repeat: no-repeat;
                    height: .373333rem;
                    display: inline-block;
                    margin-top: .133333rem;
                    flex: 0 0 auto;
                    margin-right: .08rem;
                }
            }
            div.moive-score{
                font-size: .346667rem;
                color: #666;
                white-space: nowrap;
                line-height: 1;
                span.num{
                    font-weight: 700;
                    color: #faaf00;
                    font-size: .4rem;
                }
            }
            div.moive-actor{
                width:5.386667rem;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin-top: .16rem;
                line-height: .4rem;
                font-size: .346667rem;
                color: #666;
            }
            div.show-info{
                font-size: .346667rem;
                color: #666;
                margin-top: .16rem;
                line-height: .4rem;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
        div.buy-ticket{
            margin-top:.826667rem;
            width: 1.253333rem;
            height: .72rem;
            line-height: .746667rem;
            text-align: center;
            box-sizing: border-box;
            background-color: #f03d37;
            color: #fff;
            border-radius: .106667rem;
            white-space: nowrap;
            font-size: .32rem;
            cursor: pointer;
        }
        div.presell-ticket{
            margin-top:.826667rem;
            width: 1.253333rem;
            height: .72rem;
            line-height: .746667rem;
            text-align: center;
            box-sizing: border-box;
            background-color: #3c9fe6;
            color: #fff;
            border-radius: .106667rem;
            white-space: nowrap;
            font-size: .32rem;
            cursor: pointer;
        }
    }
`

export default withRouter(HotMoiveItem);
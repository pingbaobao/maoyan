import React,{Component} from 'react' 
import styled from 'styled-components'
import qs from 'querystring'
import {withRouter} from 'react-router-dom'

import handelImage from "@util/handelImage"
class ComingMoivesItem extends Component{
    render(){
        let {info} =this.props;
        let _img=handelImage(info.img,"64.90")
        return(
            <ComingMoivesItemWrapper onClick={this.goDetail.bind(this,info.id)}>
                {
                    info.comingTitle?<p className="show-date">{info.comingTitle}</p>:''
                }
                <div className="moive">
                    <img alt='图片' src={_img} />
                    <div className="moive-info">
                        <div className="moive-info-wrapper">
                            <div className="moive-title">
                                <div className="title">{info.nm}</div>
                                {
                                    info.version?<div  className="v3d"></div>:''
                                }
                                {
                                    info.preShow?<div  className="opens"></div>:''   
                                }
                            </div>
                            <div className="moive-score">
                                    <p><span className="num">{info.wish}</span>人想看</p>
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
                            info.showst===4?<div className="presell ">预售</div>:<div className="wish-see">想看</div>
                        }
                    </div>
                </div>
            </ComingMoivesItemWrapper>
        )
    }
    goDetail(_id){
        this.props.history.push({
            pathname:"/comingdetail",
            search:'?'+qs.stringify({id:_id})
        })
    }
}


export const ComingMoivesItemWrapper = styled.section `
    padding: 12px 29px 0  0;
    margin-left: 15px;
    position: relative;
    p.show-date{
        padding: 12px  15px 12px 0;
        margin: 0;
        font-size: 14px;
        color: #333;
    }
    div.moive{
        display:flex;
        img{
            width:64px;
            height: 90px;
        }
        div.moive-info{
            flex:1;
            display:flex;
            margin-left:10px;
            padding-bottom:15px;
            border-bottom:solid 1px #F2F2F2;
            div.moive-info-wrapper{
                margin-right:5px;
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
                    div.opens{
                        background-repeat: no-repeat;
                        background:url(/image/opens.png);
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
           
            div.presell{
                    background-color: #3c9fe6;
                    width: 47px;
                    height: 27px;
                    margin-top:31px;
                    line-height: 28px;
                    text-align: center;
                    box-sizing: border-box;
                    color: #fff;
                    border-radius: 4px;
                    white-space: nowrap;
                    font-size: 12px;
                    cursor: pointer;
                }
                div.wish-see{
                    background-color: #faaf00;
                    width: 47px;
                    height: 27px;
                    margin-top:31px;
                    line-height: 28px;
                    text-align: center;
                    box-sizing: border-box;
                    color: #fff;
                    border-radius: 4px;
                    white-space: nowrap;
                    font-size: 12px;
                    cursor: pointer;
                }
        }
    }
        
`


export default withRouter(ComingMoivesItem);
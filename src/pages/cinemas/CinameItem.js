import React,{Component} from 'react' 
import uuid from 'uuid'

import styled from 'styled-components'
class CinameItem extends Component{
    render(){
        let {info}=this.props;
        return(
            <CinameItemWrapper>
                <div className='title'>
                    {info.nm}
                    <span className="price-block">
                        <span className="price">{info.sellPrice}</span>元起
                    </span>
                </div>
                <div className='location-block'>
                    <span className="location-text">{info.addr}</span>
                    <span className='distance'>{info.distance}</span>
                </div>
                <div className="label-block">
                    {
                        info.tag.snack?<div className="snack"> 小吃 </div>:''
                    }
                    {
                        info.tag.vipTag? <div className="vipTag"> 折扣卡 </div>:''
                    }
                    {
                        info.tag.hallTypeVOList.length>0?info.tag.hallTypeVOList.map(item=><div key={uuid()} className="hallType">{item.name}</div>):''
                    }
                    
                </div>
                <div className="discount-block">
                    {
                        info.promotion.cardPromotionTag? <img alt="*"  src="/image/card.png" />:''
                    }
                    {
                        info.promotion.cardPromotionTag?<span className="discount-text"> {info.promotion.cardPromotionTag}</span>:''
                    }
                    
                </div>
            </CinameItemWrapper>
        )
    }
}




export const CinameItemWrapper=styled.div`
    padding: 13px 15px 13px 0;
    margin:0 15px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    border-bottom:solid 1px #dedede;
    div.title{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        height: 23px;
        line-height: 23px;
        font-size: 16px;
        color: #000;
        font-weight:600;
        span.price-block{
            padding-top: 9px;
            padding-left: 3px;
            font-size: 11px;
            color: #f03d37;
            margin-left: 3px;
            span.price{
                font-weight: 100;
                font-size: 18px;
                margin:0 3px;
            }
        }
    }
    div.location-block{
        margin-top: 6px;
        font-size: 13px;
        font-weight:600;
        color: #666;
        display: flex;
        line-height: 1.5;
        justify-content:space-between;
        span.location-text{
            flex: 1;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
    div.label-block{
        height: 17px;
        line-height: 17px;
        margin-top: 4px;
        margin-bottom: 4px;
        overflow: hidden;
        font-size: 0;
        flex-shrink: 0;
        div.snack,div.vipTag{
            margin-right:6px;
            color: #f90;
            border: 1px solid #f90;
            position: relative;
            display: inline-block;
            padding: 2 3px;
            height: 17px;
            line-height: 15px;
            border-radius: 2px;
            font-size: 12px;
        }
        div.hallType{
            margin-right:6px;
            color: #589daf;
            border: 1px solid #589daf;
            position: relative;
            display: inline-block;
            padding: 0 3px;
            height: 15px;
            line-height: 15px;
            border-radius: 2px;
            font-size: 12px;
        }
    }
    div.discount-block{
        position: relative;
        img{
            width: 15px;
            height: 14px;
            position: relative;
            top:0;
        }
        span.discount-text{
            margin-left: 0;
            font-size: 11px;
            color: #999;
        }
    }
`






export default CinameItem;
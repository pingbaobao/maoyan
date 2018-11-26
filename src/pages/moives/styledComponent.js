import styled from 'styled-components'

export const MoivesWrapper = styled.div `
    display:flex;
    flex-direction:column;
    height: 100vh;
    width:100vw;
`
export const MoivesBarWrapper = styled.div `
    padding: 0 .4rem;
    height: 1.173333rem;
    width: 100%;
    font-size: .4rem;
    line-height: 1.173333rem;
    color: #777;
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .026667rem solid #e6e6e6;
    div.location{
        span.location-check{
            font-size:.32rem;
        }
    }
    div.moives-kind-btn{
        float:left;
        font-size: .4rem;
        color: #666;
        width: 2.133333rem;
        width: 21.33333vw;
        text-align: center;
        margin: 0 .32rem;
        font-weight: 700;
       
        &.active{
            color: #ef4238;
            border-bottom:solid .053333rem #ef4238;
        }
    }
    div.search{
        span{
            font-size:.56rem;
            color:#ef4238;
            font-weight:bold;
        }
    }
`



export const HotMoivesListWrapper = styled.div `
    flex:1;
    overflow:auto;
    .section{

    }
`
export const ComingMoivesListWrapper = styled.div `
    flex:1;
    overflow:auto;
    .section{

    }
`




export const WishMoivesWrapper = styled.div `
    padding: .32rem .4rem .32rem .4rem;
    margin-bottom: .266667rem;
    font-size: .373333rem;
    color: #777;
    border-bottom:solid #F5F5F5  8px;
    p.title{
        margin: 0 0 .32rem;
        font-size: .373333rem;
        color: #333;
        font-weight:500;
    }
    div.swiper-container{
        width:9.146667rem;
        height: 4.293333rem;
    }
`
export const WishMoivesItemWrapper = styled.div `
    width: 2.266667rem;
    margin-right: .266667rem;
    div.moives-image{
        position:relative;
        width: 2.266667rem;
        height: 3.066667rem;
        text-align:center;
        img{
            width: 2.266667rem;
            height: 3.066667rem;
        }
        span.wish{
            position: absolute;
            left: .106667rem;
            bottom: .053333rem;
            color: #faaf00;
            font-size: .293333rem;
            font-weight: 600;
            background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
        }
        div.heart{
            width: 28px;
            height: 28px;
            background: rgba(61,63,71,.6);
            text-align: center;
            border-bottom-right-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
            span{
                display: inline-block;
                margin-top:7px;
                background-image: url(/image/heart.png);
                width: 10px;
                height: 10px;
                background-size: 100%;
                background-repeat: no-repeat;
            }
        }
    }
    p.moives-title{
        margin: .213333rem 0 .133333rem 0;
        font-size: .346667rem;
        color: #222;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    p.moives-date{
        margin: 0;
        font-size: .32rem;
        color: #999;
        display: block;
        white-space: nowrap;
    }
`




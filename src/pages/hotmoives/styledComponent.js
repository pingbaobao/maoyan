
import styled from 'styled-components'
export const MoivesWrapper=styled.div`
    display:flex;
    flex-direction:column;
    height: 100vh;
    width:100vw;
`
export const MoivesBarWrapper = styled.div`
    padding: 0 15px;
    height: 44px;
    width: 100%;
    font-size: 15px;
    line-height: 44px;
    color: #777;
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    div.location{
        span.location-check{
            font-size:12px;
        }
    }
    div.moives-kind-btn{
        float:left;
        font-size: 15px;
        color: #666;
        width: 80px;
        width: 21.33333vw;
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
       
        &.active{
            color: #ef4238;
            border-bottom:solid 2px #ef4238;
        }
    }
    div.search{
        span{
            font-size:21px;
            color:#ef4238;
            font-weight:bold;
        }
    }
`
export const MoivesListWrapper=styled.div`
    flex:1;
    overflow:auto;
    .section{

    }
`

export const MoiveItemWrapper=styled.div`
    padding-left: 15px;
    padding-right:17px;
    padding-top: 12px;
    height: 114px;
    display:flex;
    img{
        background-color: transparent;
        height: 90px;
        width:64px;
        margin-right:14px;  
    }
    div.ticket{
        flex:1;
        display:flex;
        border-bottom: 1px solid #e6e6e6;
        div.ticket-info{
            flex:1;
            div.moive-title{
                max-height: 24px;
                margin-bottom: 7px;
                line-height: 24px;
                overflow: hidden;
                display:flex;
                div.title{
                    font-size: 17px;
                    width:155px;
                    color: #333;
                    font-weight: 700;
                    padding-right: 5px; 
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                div.v3d{
                    background-repeat: no-repeat;
                    background:url(data:image/png;base64,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);
                    width: 43px;
                    line-height: 24px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    height: 14px;
                    display: inline-block;
                    margin-top: 5px;
                    flex: 0 0 auto;
                    margin-right: 3px;
                }
            }
            div.moive-score{
                font-size: 13px;
                color: #666;
                white-space: nowrap;
                line-height: 1;
                span.num{
                    font-weight: 700;
                    color: #faaf00;
                    font-size: 15px;
                }
            }
            div.moive-actor{
                width:202px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin-top: 6px;
                line-height: 15px;
                font-size: 13px;
                color: #666;
            }
            div.show-info{
                font-size: 13px;
                color: #666;
                margin-top: 6px;
                line-height: 15px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
        div.buy-ticket{
            margin-top:31px;
            width: 47px;
            height: 27px;
            line-height: 28px;
            text-align: center;
            box-sizing: border-box;
            background-color: #f03d37;
            color: #fff;
            border-radius: 4px;
            white-space: nowrap;
            font-size: 12px;
            cursor: pointer;
        }
        div.presell-ticket{
            margin-top:31px;
            width: 47px;
            height: 27px;
            line-height: 28px;
            text-align: center;
            box-sizing: border-box;
            background-color: #3c9fe6;
            color: #fff;
            border-radius: 4px;
            white-space: nowrap;
            font-size: 12px;
            cursor: pointer;
        }
    }
`
import styled from 'styled-components'

export const HotDetailWrapper=styled.div`
    height: 100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
`

export const DateBarWrapper=styled.section`
    width:100vw;
    height:45px;
    border-bottom:solid 1px #E7E7E7;
    overflow: auto;
    /* 去除滚动条 */
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar { width: 0 !important }
    div.date-item-wrapper{
        width:234vw;
        .date-item{
            float:left;
            line-height:44px;
            text-align:center;
            width:33.33vw;
            scroll-behavior:none;
        }
    }
`

export const CinemaMenuWrapper=styled.div`
    z-index:30;
    height: 40px;
    width:100%;
    line-height:40px;
    border-bottom:solid 1px #E7E7E7;
    display:flex;
    justify-content:space-around;
`
export const CinemaMenuItemWrapper=styled.div`
    background:white;
    position:relative;
    color: #777;
    width:33.3%;
    text-align:center;
    font-size: 13px;
    &:not(:last-of-type):after{
        content: '';
        position: absolute;
        top: 10px;
        right: 0px;
        bottom: 10px;
        border-right: solid 1px #EAEAEA;
    }
    div.menu-btn{
        &.active-btn{
            color:#e54847;
            span.pull-list-btn{
                top: 14px;
                border: 4px solid transparent;
                border-bottom-color:#e54847;
            }
        }
        span.pull-list-btn{
            text-align: center;
            line-height: 40px;
            position: absolute;
            top: 18px;
            width: 0;
            height: 0;
            margin-left: 4px;
            border: 4px solid transparent;
            border-top-color: #b0b0b0;
        }
    }
`

export const LayerWrapper=styled.div`
    width:100vw;
    height:100vh;
    background: rgba(0,0,0,.3);
    position:absolute;
    top:0;
    left:0;
`
export const PullListWrapper=styled.div`
    width:100vw;
    max-height:${props=>props.height};
    overflow:auto;
    background:#fff;
    position:relative;
    top:323px;
    left:0;
`

export const CinameListWrapper=styled.section`
    flex:1;
    overflow:auto;
`
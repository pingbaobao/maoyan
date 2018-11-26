
import styled from 'styled-components'
export const CinemaWrapper=styled.div`
    display:flex;
    flex-direction:column;
    height: 100vh;
` 
export const CinameBarWrapper = styled.div`
    z-index:30;
    padding: 0 15px;
    height: 44px;
    width: 100%;
    font-size: 15px;
    line-height: 44px;
    color: #777;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background: #f5f5f5;
    div.location{
        span.location-check{
            margin-left:3px;
            font-size:12px;

        }
    }
    div.search{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 28px;
        font-size: 13px;
        flex:1;
        color: #b2b2b2;
        margin-left: 18px;
        border: .5px solid #e6e6e6;
        border-radius: 5px;
        background:#fff;
    }
`
export const CinameListWrapper=styled.section`
    flex:1;
    overflow:auto;
`
export const CinemaMenuWrapper=styled.div`
    z-index:30;
    height: 40px;
    width:100%;
    line-height:40px;
    border-bottom:solid 1px #F7F7F7;
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

export const PullListWrapper=styled.div`
    width:100vw;
    max-height:${props=>props.height};
    overflow:auto;
    background:#fff;
    position:relative;
    top:135px;
    left:0;
`
export const LayerWrapper=styled.div`
    width:100vw;
    height:100vh;
    background: rgba(0,0,0,.3);
    position:absolute;
    top:0;
    left:0;
`
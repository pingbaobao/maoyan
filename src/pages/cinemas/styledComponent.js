
import styled from 'styled-components'
export const CinemaWrapper=styled.div`
    display:flex;
    flex-direction:column;
    height: 100vh;
` 
export const CinameBarWrapper = styled.div`
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
`
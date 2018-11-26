
import styled from 'styled-components'
export const HeaderWrapper = styled.div`
    height: 1.373333rem;
    padding:0 0 .026667rem 0;
    width: 100%;
    background: #e54847;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 0rem .10rem;
    .left, .right, .center {
        padding-bottom:.053333rem;
        color: #fff;
        font-size: .48rem;
    }
    .left,.right{
        width:.8rem;
        text-align:center;
    }
    .center{
        flex:1;
        text-align:center;
    }
    .left{
        div{
            font-size:.746667rem;
        }
    }
`

import styled from 'styled-components'
export const HeaderWrapper = styled.div`
    height: 51.5px;
    padding:0 0 1px 0;
    width: 100%;
    background: #e54847;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 0rem .10rem;
    .left, .right, .center {
        padding-bottom:2px;
        color: #fff;
        font-size: .48rem;
    }
    .left,.right{
        width:30px;
        text-align:center;
    }
    .center{
        flex:1;
        text-align:center;
    }
    .left{
        div{
            font-size:28px;
        }
    }
`
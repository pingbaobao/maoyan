import styled from 'styled-components'

export const LoginWrapper=styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    width:100%;
`


export const MenuBarWrapper =styled.div`
    background:#fff;
    padding-left: .2rem;
    padding-right: .2rem;
    border-bottom: .08rem solid #d6d6d6;
    text-align:center;
    display:flex;
    justify-content:space-around;
    div.login-kind-btn{
        width: 50%;
        padding-top: .28rem;
        padding-bottom: .2rem;
        color: inherit;
        height: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        &.active{
            color: #df2d2d;
        }
        &.active:after{
            content: '';
            position: absolute;
            left: 0px;
            bottom: -.08rem;
            right: 0px;
            border-bottom: .08rem solid #df2d2d;
        }
    }
`
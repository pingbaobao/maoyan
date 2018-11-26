import React,{Component} from 'react' 
import styled from 'styled-components'

class Account extends Component{
    render(){
        return(
            <AccountWrapper>
                <form>
                    <div className="account input-block">
                        <input placeholder=" 账户名/手机号/Email" type="text"/>
                    </div>
                    <div className="password input-block">
                        <input placeholder=" 请输入您的密码" type="password"/>
                    </div>
                    <div className="login-btn">登录</div>
                </form>
            </AccountWrapper>
        )
    }
}

const AccountWrapper =styled.section`
    div.input-block{
        border-bottom:solid 1px #e2e2e2;
        width:100%;
        background:#fff;
        padding: .28rem .2rem;
        input{
            border:none;
            outline:none; 
            width:100%;
            height:30px;
            border-radius:3px;
            padding:0 8px;
            &:focus{
                background:#ECECEC;
            }
        }
    }
    div.login-btn{
        height: 47px;
        line-height: 47px;
        font-size: 20px;
        display: block;
        margin: 10px 10px;
        text-align: center;
        background-color: #df2d2d;
        border-radius: 3px;
        color: #fff;
    }
`
export default Account;
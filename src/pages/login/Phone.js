import React,{Component} from 'react' 
import styled from 'styled-components'

class Phone extends Component{
    constructor(){
        super()
        this.state={
            isPhone:false,
            isGetCode:false
        }
        this.checkPhone=this.checkPhone.bind(this)
        this.getCode=this.getCode.bind(this)
    }
    render(){
        return(
            <PhoneWrapper>
                <form>
                    <div className="account input-block">
                        <input onKeyUp={this.checkPhone} placeholder=" 请输入手机号" type="text"/>
                        <div 
                        onClick={this.getCode}
                        className={this.state.isPhone?"getcode active":"getcode"}
                        >获取验证码</div>
                    </div>
                    <div className="password input-block"  >
                        <input 
                         disabled={!this.state.isGetCode}
                        placeholder=" 请输入短信验证码" 
                        type="password"
                        />
                    </div>
                    <div className="login-btn">登录</div>
                </form>
            </PhoneWrapper>
        )
    }
    checkPhone(e){
        let reg=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if(reg.test(e.target.value)){
            this.setState({
                isPhone:true
            })
        }else{
            this.setState({
                isPhone:false
            })
        }
    }
    getCode(){
        if(this.state.isPhone){
            this.setState({
                isGetCode:true
            })
        }
    }
}
const PhoneWrapper =styled.section`
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
    div.account{
        display:flex;
        input{
            margin-right:10px;
        }
        div.getcode{
            width:100px;
            height: 30px;
            background-color: #dcdcdc;
            color: #999;
            border: 0;
            line-height:30px;
            text-align:center;
            border-radius:3px;
            &.active{
                height: 28px;
                border: 1px solid #df2d2d;
                color: #df2d2d;
                background-color: #fff;
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
export default Phone;
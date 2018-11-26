import React,{Component} from 'react' 
import Header from '@components/common/header'
import {Redirect,Switch,Route} from 'react-router-dom'

import MenuBar from './MenuBar'
import Phone from './Phone'
import Account from './Account'
import Footer from './Footer'
import {LoginWrapper} from './styledComponent'

class Login extends Component{
    constructor(){
        super()
        this.state={
            loginType:{
                active:'account',
                type:[
                    {id:1,title:"美团账号登录",path:'account'},
                    {id:2,title:"手机验证登录",path:'phone'}
                ]
            }
        }
    }
    render(){
        return(
            <LoginWrapper>
                <Header icon={<div className='iconfont icon-jiantou1' onClick={()=>this.props.history.go(-1)}></div>}>
                    猫眼电影
                </Header>
                <MenuBar loginType={this.state.loginType}></MenuBar>
                <Switch>
                    <Redirect from="/login" exact to="/login/account"></Redirect>
                    <Route path="/login/phone" exact component={Phone}></Route>
                    <Route path="/login/account" exact component={Account} ></Route>
                </Switch>
                <Footer></Footer>
            </LoginWrapper>
        )
    }
}
export default  Login;
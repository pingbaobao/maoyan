import React,{Component} from 'react' 
import uuid from 'uuid'
import { withRouter} from 'react-router-dom'

import {MenuBarWrapper} from  './styledComponent'
class MenuBarItem extends Component{
    render(){
        let {info,selected}=this.props
        return (
            <div 
            onClick={this.props.handelBtn.bind(null,info.path)}
            className={(info.path===selected)?'login-kind-btn active':'login-kind-btn'} >
                {info.title}
            </div>
        )
    }
}


class MenuBar extends Component{
    constructor(props){
        super(props);
       let _location=this.props.location.pathname;
       if(_location==='/login')  _location='/login/account'
        this.state={
            selected:_location,
            loginKinds:[
                {title:'美团账号登录',id:uuid(),path:'/login/account'},
                {title:'手机验证登录',id:uuid(),path:'/login/phone'}
            ]
        }
        this.handelBtn=this.handelBtn.bind(this)
    }
    render(){
        return(
            <MenuBarWrapper>
                {
                    this.state.loginKinds.map(item=>{
                        return <MenuBarItem
                         info={item} 
                         selected={this.state.selected}
                         handelBtn={this.handelBtn} 
                         key={item.id} />
                    })
                }
            </MenuBarWrapper>
        )
    }
    handelBtn(_path){
        if(this.state.selected!==_path){
            this.setState({
                selected:_path
            })
            this.props.history.replace(_path);
        }
    }
}
export default withRouter(MenuBar);
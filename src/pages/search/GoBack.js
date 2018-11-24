import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
class GoBack extends Component{
    constructor(props){
        super()
        this.handel=this.handel.bind(this)
    }
    render(){
        return <div onClick={this.handel} className="iconfont icon-jiantou1"/>
    }
    handel(){
        this.props.history.push('/moives/hot')
    }
}
export default withRouter(GoBack)
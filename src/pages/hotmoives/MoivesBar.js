import React,{Component} from 'react' 
import {MoivesBarWrapper} from './styledComponent'
import uuid from 'uuid'
import { withRouter} from 'react-router-dom'
class MoiveKind extends Component{
    render(){
        return(
           <div className="moives-kind-btn active">
               {this.props.info.title}
           </div>
        )
    }
}
class MoivesBar extends Component{
    constructor(){
        super();
        this.state={
            moivesKinds:[
                {title:'正在热映',id:uuid(),active:true},
                {title:'即将上映',id:uuid(),active:false}
            ]
        }
        this.handel=this.handel.bind(this)
    }
    render(){
        return(
            <MoivesBarWrapper>
                <div className="location">
                    北京
                    <span className="location-check iconfont icon-jiantou-copy-copy"></span>
                </div>
                <div className="moive-kind">
                    {
                        this.state.moivesKinds.map(item=>{
                            return   <MoiveKind info={item} key={item.id} ></MoiveKind>
                        })
                    }
                </div>
                <div className="search" onClick={this.handel} >
                    <span className="iconfont icon-artboard9-copy"></span>
                </div>
            </MoivesBarWrapper>
        )
    }
    handel(){
        this.props.history.push('/search')
    }
}
export default withRouter(MoivesBar);
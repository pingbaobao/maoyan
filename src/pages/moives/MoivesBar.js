import React,{Component} from 'react' 
import {MoivesBarWrapper} from './styledComponent'
import uuid from 'uuid'
import { withRouter} from 'react-router-dom'
class MoiveKind extends Component{
    render(){
        let {info,selected}=this.props;
        return(
           <div 
            className={info.path===selected?'moives-kind-btn active':'moives-kind-btn'}
            onClick={this.props.handelMoiveKind.bind(null,info.path)}
           >
               {info.title}
           </div>
        )
    }
}
class MoivesBar extends Component{
    constructor(props){
        super(props);
       let _location=this.props.location.pathname;
       if(_location==='/moives')  _location='/moives/hot'
        this.state={
            selected:_location,
            moivesKinds:[
                {title:'正在热映',id:uuid(),active:true,path:'/moives/hot'},
                {title:'即将上映',id:uuid(),active:false,path:'/moives/coming'}
            ]
        }
        this.handelSearch=this.handelSearch.bind(this)
        this.handelMoiveKind=this.handelMoiveKind.bind(this)
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
                            return   <MoiveKind key={item.id} info={item} selected={this.state.selected} handelMoiveKind={this.handelMoiveKind} ></MoiveKind>
                        })
                    }
                </div>
                <div className="search" onClick={this.handelSearch} >
                    <span className="iconfont icon-artboard9-copy"></span>
                </div>
            </MoivesBarWrapper>
        )
    }
    handelMoiveKind(_path){
        if(this.state.selected!==_path){
            this.props.history.push(_path);
            this.setState({
                selected:_path
            })
        }
       
    }
    handelSearch(){
        this.props.history.push('/search')
    }
}
export default withRouter(MoivesBar);
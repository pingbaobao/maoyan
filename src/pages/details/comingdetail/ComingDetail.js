import React,{Component} from 'react' 
import urlObj from 'url'
import ajax from '@util/axios'

import Header from '@components/common/header'
import MoiveInfo from './MoiveInfo'
import Introduction from './Introduction'
import Actors from './Actors'
import Footer from './Footer'
import {ComingDetailWrapper} from './styledComponent'

class ComingDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            id:urlObj.parse(this.props.location.search,true).query.id,
            moiveInfo:[],
            actor:[],
            dra:""
        }
    }
    async componentWillMount(){
        let _moiveInfo=await ajax({
            url:`my/ajax/detailmovie?movieId=${this.state.id}`,
        });
        this.setState({
            moiveInfo:_moiveInfo.detailMovie,
            actor:_moiveInfo.detailMovie.photos,
            dra:_moiveInfo.detailMovie.dra,  
        })
    }
    render(){
        console.log(this.state.actor)
        return(
            <ComingDetailWrapper>
                <Header 
                    icon={<div className='iconfont icon-jiantou1' onClick={()=>this.props.history.go(-1)}></div>}>
                    {this.state.moiveInfo.nm}
                </Header>
                <MoiveInfo moiveInfo={this.state.moiveInfo}></MoiveInfo>
                <Introduction  dra={this.state.dra}></Introduction>
                <Actors actor={this.state.actor}></Actors>
                <Footer></Footer>
            </ComingDetailWrapper>
        )
    }
}
export default ComingDetail;
import React,{Component} from 'react' 
import {withRouter} from "react-router-dom"
import ajax from '@util/axios'
import urlObj from 'url'

import Loading from '@components/common/loading'
import Header from '@components/common/header'
import {HotDetailWrapper} from './styledComponent'
import MoiveInfo from './MoiveInfo'
import DateBar from './DateBar'
import CinemaMenu from './CinemaMenu'
import CinameList from './CinameList'
import NoCiname from './NoCinema'
import Layer from './Layer'

class HotDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            id:urlObj.parse(this.props.location.search,true).query.id,
            dateBar:[],
            moiveInfo:[],
            cinemas:[],
            render:false
        }
    }
    async componentWillMount(){
        let _result=await ajax({
            url:"my/ajax/movie?forceUpdate=1543143120752",
            method: 'post',
            data: {
                movieId:` ${this.state.id}`,
                day: 2018-11-25,
                offset: 0,
                limit: 20,
                districtId: -1,
                lineId: -1,
                hallType: -1,
                brandId: -1,
                serviceId: -1,
                areaId: -1,
                stationId: -1,
                item:"" ,
                updateShowDay: true,
                reqId: 1543143117738,
                cityId: 1
            }
        });
        this.setState({
            dateBar:_result.showDays.dates,
            cinemas:_result.cinemas,
            render:true
        })
        let _moiveInfo=await ajax({
            url:`my/ajax/detailmovie?movieId=${this.state.id}`,
        });
        this.setState({
            moiveInfo:_moiveInfo.detailMovie
        })
    }
    render(){
        if(this.state.render){
            return(
                <>
                    <HotDetailWrapper>
                        <Header 
                            icon={<div className='iconfont icon-jiantou1' onClick={()=>this.props.history.go(-1)}></div>}>
                            {this.state.moiveInfo.nm}
                        </Header>
                        <MoiveInfo moiveInfo={this.state.moiveInfo}></MoiveInfo>
                        <DateBar dateBar={this.state.dateBar}></DateBar>
                        <CinemaMenu></CinemaMenu>
                        {
                            this.state.cinemas.length>0?<CinameList cinemas={this.state.cinemas}></CinameList>:<NoCiname/>
                        }
                        
                    </HotDetailWrapper>
                    {/* <Layer></Layer> */}
                </>
            )
        }else{
            return <Loading></Loading>
        }        
    }
}
export default withRouter(HotDetail);
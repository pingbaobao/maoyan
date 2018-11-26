import React,{Component} from 'react' 

import ajax from '@util/axios'

import {CinameListWrapper} from './styledComponent'
import CinameItem from './CinameItem'

class CinameList extends Component{
    constructor(props){
        super(props);
        this.state={
            cinameDate:[]
        }
    }
    async componentWillMount(){
        let _result = await ajax({url:'my/ajax/cinemaList?day=2018-11-25&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1543127677238&cityId=1'})
        this.setState({
            cinameDate:_result.cinemas
        })
    }
    render(){
        return(
            <CinameListWrapper>
                {
                    this.state.cinameDate.map(item=>{
                        return <CinameItem key={item.id} info={item}></CinameItem>
                    })
                }
               
            </CinameListWrapper>
        )
    }
}
export default CinameList;
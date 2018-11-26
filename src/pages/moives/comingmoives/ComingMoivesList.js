import React,{Component} from 'react' 

import ajax from '@util/axios'
import {dateClassify} from '@util/handelDate'

import {ComingMoivesListWrapper} from '../styledComponent'
import ComingMoivesItem from './ComingMoivesItem'
import WishMoives from './WishMoives'

class ComingMoivesList extends Component{
    constructor(props){
        super(props)
        this.state={
            comoingList:[]
        }
    }
    async componentWillMount(){
        let _result=await ajax({url:"/my/ajax/comingList?ci=1&token=&limit=10"})
        this.setState({
            comoingList:_result.coming
        })
    }
    render(){
        let _infoList=dateClassify(this.state.comoingList)
        return(
            <ComingMoivesListWrapper>
                <WishMoives></WishMoives>
                {
                    _infoList.map(item=>{
                        return  <ComingMoivesItem info={item} key={item.id} />
                    })
                }
               
            </ComingMoivesListWrapper>
        )
    }
}
export default ComingMoivesList;
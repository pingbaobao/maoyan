import React,{Component} from 'react' 
import {HotMoivesListWrapper} from '../styledComponent'
import MoiveItem from './HotMoiveItem'
import ajax from '@util/axios'
class HotMoivesList extends Component{
    constructor(props){
        super()
        this.state={
            movieList:[]
        }
    }
    async componentWillMount(){
        let _result=await ajax({url:"/my/ajax/movieOnInfoList?token="})
        this.setState({
            movieList:_result.movieList
        })
    }
    render(){
        return(
            <HotMoivesListWrapper>
                <section>
                    {
                        this.state.movieList.map(item=>{
                            return <MoiveItem key={item.id} info={item}></MoiveItem>
                        })
                    }
                </section>
            </HotMoivesListWrapper>
        )
    }
}
export default HotMoivesList;
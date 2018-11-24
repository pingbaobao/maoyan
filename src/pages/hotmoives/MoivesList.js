import React,{Component} from 'react' 
import {MoivesListWrapper} from './styledComponent'
import MoiveItem from './MoiveItem'
import axios from 'axios'
class MoivesList extends Component{
    constructor(props){
        super()
        this.state={
            movieList:[]
        }
    }
    async componentWillMount(){
        let _result=await axios.get('/my/ajax/movieOnInfoList?token=')
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
        this.setState({
            movieList:_result.data.movieList
        })
    }
    render(){
        return(
            <MoivesListWrapper>
                <section>
                    {
                        this.state.movieList.map(item=>{
                            return <MoiveItem key={item.id} info={item}></MoiveItem>
                        })
                    }
                </section>
            </MoivesListWrapper>
        )
    }
}
export default MoivesList;
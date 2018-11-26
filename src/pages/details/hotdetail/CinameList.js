import React,{Component} from 'react' 
import {CinameListWrapper} from './styledComponent'
import CinameItem from './CinameItem'

class CinameList extends Component{
    render(){
        return(
            <CinameListWrapper>
                {
                    this.props.cinemas.map(item=>{
                        return <CinameItem key={item.id} info={item}></CinameItem>
                    })
                }
               
            </CinameListWrapper>
        )
    }
}
export default CinameList;
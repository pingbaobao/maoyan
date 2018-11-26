import React,{Component} from 'react' 

import PullList from './PullList'
import {LayerWrapper} from './styledComponent'
class Layer extends Component{
    render(){
        return(
        <LayerWrapper>
            <PullList></PullList>
        </LayerWrapper>
        )
    }
}
export default Layer;
import React,{Component} from 'react'
import {SearchWrapper} from './styledComponent' 
import Header from '@components/common/header'
import GoBack from './GoBack'
class Search extends Component{
    render(){
        return(
            <SearchWrapper>
                <Header icon={<GoBack/>}>猫眼电影</Header>
            </SearchWrapper>
        )
    }
}
export default Search;
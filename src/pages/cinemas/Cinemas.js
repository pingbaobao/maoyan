import React,{Component} from 'react' 

import Header from '@components/common/header'
import CinameBar from './CinameBar'
import CinemaMenu from './CinemaMenu'
import {CinemaWrapper} from './styledComponent'
import FooterBar from '@components/main/footer'
import CinameList from './CinemaList'
import Layer from './Layer'

class Cinemas extends Component{
    constructor(props){
        super(props);
        this.state={
            menuActive:0
        }
        this.handelMenuBar=this.handelMenuBar.bind(this)
    }
    render(){
        return(
            <>
                <CinemaWrapper>
                    <Header>影院</Header>
                    <CinameBar></CinameBar>
                    <CinemaMenu  menuActive={this.state.menuActive} handelMenuBar={this.handelMenuBar}></CinemaMenu>
                    <CinameList/>
                    <FooterBar></FooterBar>
                </CinemaWrapper>
                {
                    this.state.menuActive? <Layer></Layer>:''
                }
            </>
        )
    }
    handelMenuBar(_id){
        if(this.state.menuActive!==_id){
            this.setState({
                menuActive:_id
            })
        }
    }
}
export default Cinemas;
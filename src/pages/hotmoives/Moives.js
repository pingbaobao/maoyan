import React,{Component} from 'react' 
import Header from '@components/common/header'
import FooterBar from '@components/main/footer'
import MoivesBar from './MoivesBar'
import MoivesList from './MoivesList'
import {MoivesWrapper}from './styledComponent'
class Moives extends Component{
    render(){
        return(
            <MoivesWrapper>
                <Header>猫眼电影</Header>
                <MoivesBar></MoivesBar>
                <MoivesList></MoivesList>
                <FooterBar></FooterBar>
            </MoivesWrapper>
        )
    }
}
export default Moives;
import React,{Component} from 'react' 
import {Redirect,Switch,Route} from 'react-router-dom'

import Header from '@components/common/header'
import FooterBar from '@components/main/footer'

import MoivesBar from './MoivesBar'
import HotMoivesList from './hotmoives/HotMoivesList'
import ComingMoivesList from './comingmoives/ComingMoivesList'
import {MoivesWrapper}from './styledComponent'
class Moives extends Component{
    render(){
        return(
            <MoivesWrapper>
                <Header>猫眼电影</Header>
                <MoivesBar></MoivesBar>
                <Switch>
                    <Redirect from="/moives" exact to="/moives/hot"></Redirect>
                    <Route path="/moives/hot" exact component={HotMoivesList}></Route>
                    <Route path="/moives/coming" exact component={ComingMoivesList}></Route>
                </Switch>
                <FooterBar></FooterBar>
            </MoivesWrapper>
        )
    }
}
export default Moives;
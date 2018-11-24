import React,{Component} from 'react' 
import Header from '@components/common/header'
import FooterBar from '@components/main/footer'
import {CinameBarWrapper,CinemaWrapper} from './styledComponent'
import CinameList from './CinemaList'
function CinameBar(){
    return (
        <>
            <div className="location">
            北京
            <span className="location-check iconfont icon-jiantou-copy-copy"></span>
            </div>
            <div className="search">
                <span className="iconfont icon-artboard9-copy"></span>
                <span>&nbsp; 搜影院</span>
            </div>
        </>
    )
}
class Cinemas extends Component{
    render(){
        return(
            <CinemaWrapper>
                <Header>影院</Header>
                <CinameBarWrapper>
                    <CinameBar></CinameBar>
                </CinameBarWrapper>
                <CinameList/>
                <FooterBar></FooterBar>
            </CinemaWrapper>
            
        )
    }
}
export default Cinemas;
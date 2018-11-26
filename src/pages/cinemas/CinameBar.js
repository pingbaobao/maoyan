import React , { Component } from 'react'
import {CinameBarWrapper} from './styledComponent'
class  CinameBar extends Component{
    render(){
        return (
            <CinameBarWrapper>
                <div className="location">
                北京 
                <span className="location-check iconfont icon-jiantou-copy-copy"></span>
                </div>
                <div className="search">
                    <span className="iconfont icon-artboard9-copy"></span>
                    <span>&nbsp; 搜影院</span>
                </div>
            </CinameBarWrapper>
        )
    }
}
export default CinameBar;
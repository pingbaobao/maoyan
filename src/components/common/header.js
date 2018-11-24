import React,{Component} from 'react' 
import {HeaderWrapper} from '@components/common/styledComponent'
class Header extends Component{
    render(){
        return(
            <>
                <HeaderWrapper>
                    <div className = "left">{this.props.icon}</div>
                    <div className = "center">{this.props.children}</div>
                    <div className = "right">{this.props.rightContent}</div>
                </HeaderWrapper>
            </>
        )
    }
}
export default Header;
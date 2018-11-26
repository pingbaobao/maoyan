import React,{Component} from 'react' 
import {CinemaMenuItemWrapper} from './styledComponent'
class CinemaMenuItem extends Component{
    render(){
        let {info}=this.props;
        let  {menuActive} =this.props;
        return(
            
           <CinemaMenuItemWrapper>
              <div 
                className ={menuActive===info.id?'active-btn menu-btn':'menu-btn'}
               >
                {info.title}
                <span className="pull-list-btn"></span>
              </div>
           </CinemaMenuItemWrapper> 
        )
    }
}
export default CinemaMenuItem;
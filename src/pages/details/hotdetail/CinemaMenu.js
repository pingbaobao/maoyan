import React,{Component} from 'react' 

import CinemaMenuItem from './CinameMenuItem'
import {CinemaMenuWrapper} from './styledComponent'
class CinemaMenu extends Component{
    constructor(props){
        super(props)
        this.state={
            menu:[
                {id:1,title:"全城"},
                {id:2,title:"品牌"},
                {id:3,title:"特色"}
            ]
        }
    }
    render(){
        return(
            <CinemaMenuWrapper>
                {
                    this.state.menu.map(item=><CinemaMenuItem
                        handelMenuBar={this.props.handelMenuBar}
                        menuActive={this.props.menuActive}
                        key={item.id}
                        info={item}
                        />)
                }
            </CinemaMenuWrapper>
        )
    }
}
export default CinemaMenu;
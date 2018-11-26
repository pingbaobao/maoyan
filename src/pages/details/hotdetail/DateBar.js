import React,{Component} from 'react'

import {getDay} from '@util/getDay'

import {DateBarWrapper} from './styledComponent'

class DateBarItem extends Component{
   
    render(){ 
        let _date=getDay(this.props.info.date)
        return(
            <div className="date-item">
                {_date}
            </div>
        )
    }
}


class DateBar extends Component{
    render(){
        return(
            <DateBarWrapper>
                <div className="date-item-wrapper">
                    {
                        this.props.dateBar.map(item=> <DateBarItem key={item.date} info={item}/>)
                    }
                   
                </div>
            </DateBarWrapper>
        )
    }
}
export default DateBar;
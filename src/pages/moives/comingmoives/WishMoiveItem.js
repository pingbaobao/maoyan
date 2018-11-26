import React,{Component} from 'react' 
import qs from 'querystring'
import {withRouter} from 'react-router-dom'

import {WishMoivesItemWrapper} from '../styledComponent'
import handelImage from '@util/handelImage'
import {removeWeek} from '@util/handelDate'
class WishMoivesItem extends Component{
    render(){
        let {info}=this.props;
        let _img=handelImage(info.img,"170.230");
        let _date=removeWeek(info.comingTitle)
        return(
            <WishMoivesItemWrapper onClick={this.goDetail.bind(this,info.id)}>
                <div className="moives-image">
                    <img alt='ss' src={_img}></img>
                    <span className="wish">{info.wish}人想看</span>
                    <div className="heart">
                         <span></span>
                    </div>
                </div>
                
                <p className="moives-title">{info.nm}</p>
                <p className="moives-date">{_date}</p>
            </WishMoivesItemWrapper>
        )
    }
    goDetail(_id){
        this.props.history.push({
            pathname:"/comingdetail",
            search:'?'+qs.stringify({id:_id})
        })
    }
}
export default withRouter(WishMoivesItem);
import React, { Component } from 'react'
import uuid from 'uuid'
import * as FooterStyled from './styledComponent'
import { withRouter} from 'react-router-dom'
class ItemBar extends Component{
    render(){
      return (
        <FooterStyled.FooterItem>
          <div className={this.props.selectedTab===this.props.info.selected?"checked":""} onClick={this.props.goTo.bind(null,this.props.info.selected)}>
            <div className={this.props.info.icons+" footer-icon"}></div>
            <div className="footer-font">{this.props.info.title}</div>
          </div>
        </FooterStyled.FooterItem>
      )
    }
}
class FooterBar extends Component {
  constructor(props) {
    super(props);
    this._path=this.props.match.path
    if(this._path==='/moives')  this._path='/moives/hot'
    this.state = {
      selectedTab: this._path,
      tabs: [
        { id: uuid(), title: '电影', selected: '/moives/hot', icons:  'iconfont icon-74' },
        { id: uuid(), title: '影院', selected: '/cinemas',icons: 'iconfont icon-yingyuanA' },
        { id: uuid(), title: '我的', selected: '/login',icons: 'iconfont icon-wode' },
    ]
    };
    this.goTo=this.goTo.bind(this);
  }
  render (){
    return (
      <FooterStyled.FooterWrapper>
          {
            this.state.tabs.map(item=><ItemBar key={item.id} info={item} goTo={this.goTo}  selectedTab={this.state.selectedTab} ></ItemBar>)
          }
      </FooterStyled.FooterWrapper>
    )
  }
  goTo(_selected){
      if(this.state.selectedTab!==_selected){
          this.setState({
            selectedTab:_selected
          })
          this.props.history.push(_selected);
      }
  }
}

export default withRouter(FooterBar);
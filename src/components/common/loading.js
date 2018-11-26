import  styled from 'styled-components'
import React,{Component} from 'react' 
class Loading extends Component {
  render() {
    return (
      <LoadingWrapper>
            <div className="position-wrapper">
                <img alt="*" src="/image/loading.gif"/>
                <div>正在加载...</div>
            </div>
      </LoadingWrapper>
    );
  }
}
export default Loading;
const LoadingWrapper=styled.div`
    width:100%;
    height:100%;
    background:#fff;
    div.position-wrapper{
        width:100px;
        height:60px;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
        div{
          text-align:center;
        }
    }
`
import React,{Component} from 'react' 
import styled from 'styled-components'
class NoCinema extends Component{
    render(){
        return(
            <NoCinemaWrapper>
                <div className="img-block">
                    <img alt='图片' src="image/nocinema.png" />
                    <div className="text">暂无符合条件的影院</div>
                </div>
                
            </NoCinemaWrapper>
        )
    }
}

const NoCinemaWrapper=styled.div`
    div.img-block{
        width: 50%;
        padding-top: 20%;
        margin: auto;
        font-size: 14px;
        color: #777;
        img{
            display: block;
            width: 40%;
            margin: auto;
        }
        div.text{
            text-align:center;
        }
    }
`

export default NoCinema;
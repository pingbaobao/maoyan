import React,{Component} from 'react' 
import styled from 'styled-components'


class Introduction extends Component{
    constructor(){
        super()
        this.state={
            showAll:false
        }
        this.showAll= this.showAll.bind(this)
    }
    render(){
        return(
        <IntroductionWrapper>
             <section className="section-expander" >
                <div className="text-expander-content-wrapper" >
                    <div className="buy-tickets">特惠购票</div>
                    <div className={this.state.showAll?'text-expander-content active':'text-expander-content'} >
                        <p>{this.props.dra}</p>
                    </div>
                    <div  className= "text-expander-button" >
                        <i  
                        onClick={this.showAll}
                        className={this.state.showAll?"iconfont icon-jiantou-copy active":"iconfont icon-jiantou-copy"}
                        ></i>
                    </div>
                </div>
            </section>
        </IntroductionWrapper>
        )
    }
    showAll(){
        this.setState({
            showAll:!this.state.showAll
        })
    }
}

const IntroductionWrapper=styled.div`
    .section-expander{
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin: .2rem 0;
    position: relative;
    z-index:33;
    margin-top: 0 !important;
    padding: .3rem .3rem 0 .3rem;
    background: #fff;
    color: #555;
    div.text-expander-content-wrapper{
        cursor: pointer;
        background-color: white;
        font-size:.4rem;
        div.buy-tickets{
            margin: 0 0 .2rem;
            padding: .2rem;
            cursor: pointer;
            font-size: 16px;
            text-align: center;
            border-radius: 4px;
            line-height: 1;
            background: #e54847;
            color: #fff;
            text-decoration: none;
        }
        div.text-expander-content{
            max-height: 1.546667rem;
            margin: 0;
            line-height: .533333rem;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
            overflow: hidden;
            p{
                margin: 0;
            }
        }
        div.text-expander-content.active{
            max-height: 100rem;
        }
        .text-expander-button{
            color: #aaa;
            text-align: center;
            height: .44rem;
            .iconfont{
                font-size: 1.2em;
                line-height: 1.2em;
                display: inline;
                vertical-align: middle;
                color: #aaa;
                text-align: center;
            }
        }
        .iconfont.active{
            display: block;
            transform: rotate(180deg);
        }
    }
}
`

export default Introduction;
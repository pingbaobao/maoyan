import React,{Component} from 'react' 
import styled from 'styled-components'

import handelImage from '@util/handelImage'
class MoiveInfo extends Component{
    render(){
        let {moiveInfo:info}=this.props;
        if(info.img){
             var _img=handelImage((info.img))
        }
        let styleBg={background:`url(${_img})`}
        return(
            <MoiveInfoWrapper>
                <div className="movie-filter"></div>
                <div className="bg" style={styleBg} ></div>
                <div className="info">
                    <img alt='*' src={_img}/>
                    <div className="content">
                        <div className="title"> {info.nm}</div>
                        <div className="title-en-name">{info.enm}</div>
                        <div className="score">{(info.sc/1).toFixed(1)}
                            <span className="snum">  ({((info.snum)/10000).toFixed(1)}万人评)</span>
                        </div>
                        <div className="type">
                            <span>{info.cat} </span>
                            {
                                info.version? <div className="type-group"></div>:''
                            }
                        </div>
                        <div className="src">{info.src}/{info.dur}分钟</div>
                        <div className="pubDesc">{info.pubDesc}</div>
                    </div>
                    <div className="comment">
                        <span className="iconfont icon-arrow-right-copy-copy-copy"></span>
                    </div>
                </div>
            </MoiveInfoWrapper>
        )
    }
}


const MoiveInfoWrapper =styled.section`
    overflow:hidden;
    position: relative;
    height: 188px;
    width: 100%;
    div.movie-filter{
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: #333;
    }
    div.bg{
        height: 188px;
        width: 100%;
        filter: blur(16px);
        background-size:cover;
        background-repeat: no-repeat;
        opacity: .55;
        z-index: -1;
        overflow:hidden;
        position:absolute;
    }
    div.info{
        height: 150px;
        padding: 19px 15px 19px 15px;
        display:flex;
        color:#fff;
        justify-content:space-between;
        img{
            width: 110px;
            height: 150px;
        }
        div.content{
            overflow-x: hidden;
            margin-left: 12.5px;
            height:150px;
            line-height:1;
            color: #fff;
            flex:1;
            div.title{
                font-size: 20px;
                margin-top: 2px;
                font-weight: 700;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            div.title-en-name{
                margin-top: 10px;
                font-size: 12px;
                color: #fff;
                opacity: .8;
            }
            div.score{
                font-size: 18px;
                font-weight: 700;
                color: #fc0;
                margin-top: 11px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                span.snum{
                    margin-top: 10px;
                    font-size: 12px;
                    color: #fff;
                    opacity: .8;
                }
            }
            div.type{
                margin-top: 10px;
                font-size: 12px;
                color: #fff;
                opacity: .8;
                display:flex;
                div.type-group{
                    margin-left:5px;
                    width: 42px;
                    height:13px;
                    opacity: .85;
                    line-height: 1;
                    background:url(/image/hv3d.png);
                    background-size:100%;
                }
            }
            div.src,div.pubDesc{
                margin-top: 10px;
                font-size: 12px;
                color: #fff;
                opacity: .8;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
        div.comment{
            width:20px;
            line-height:150px;
            span.iconfont{
                font-size:22px;
            }
        }
    }
`
export default MoiveInfo;
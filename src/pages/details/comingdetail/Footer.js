import React,{Component} from 'react' 
import styled from 'styled-components'

class Footer extends Component{
    render(){
        return(
            <FooterWrapper>
                <section className="film-actor-footer">
                    <div className="download-btn">
                        下载猫眼电影，查看更多电影信息
                    </div>
                    <div className="footer-misc" >
                        <div className="copyright">
                            <span >
                                <span >© 猫眼电影 客服电话: </span>
                                <a href="*" >1010-5335</a>
                            </span>
                        </div>
                        <p className="icp" >
                            <a href="http://www.miibeian.gov.cn" className="link"  >
                                <span >京ICP备16022489号-1</span>
                            </a>
                            <span >&nbsp;</span>
                            <a href="http://www.beian.gov.cn" className="link" >
                                <span >京公网安备11010502030881号</span>
                            </a>
                        </p>
                        <p className="sankuai" >
                            <a href="*" className="link">
                                <span >北京猫眼文化传媒有限公司</span>
                            </a>
                        </p>
                    </div>
                </section>
            </FooterWrapper>
        )
    }
}
const FooterWrapper =styled.div`
    .film-actor-footer {
        margin-top: 0.32rem;
        .download-btn {
            display: block;
            margin: 0.266667rem;
            padding: 0.266667rem;
            text-align: center;
            border-radius: 4px;
            line-height: 1;
            background: #e54847;
            color: #fff;
            text-decoration: none;
            cursor: pointer;
            font-size: 16px;
        }
    }
.footer-misc{
    text-align: center;
    .copyright{
        a{
                color: #e54847;
            }
    }
    .icp{
        margin-top: .266667rem;
        a{
            color: #9e9e9e;
            font-size: .32rem;
        }
    }
    .sankuai{
        margin-top: .266667rem;
        padding-bottom: .533333rem;
        a{
            color: #9e9e9e;
            font-size: .346667rem;
        }
    }
}
`
export default Footer;
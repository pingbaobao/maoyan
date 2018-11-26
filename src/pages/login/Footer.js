import React,{Component} from 'react' 
import styled from 'styled-components'

class Footer extends Component{
    render(){
        return(
            <FooterWrapper>
                <div className="others">
                    <span>立即注册</span>
                    <span>找回密码</span>
                </div>
                <div className="copyright">
                    © 猫眼电影 客服电话：
                    <a data-evt="ft/hotline" href="tel:4006705335">400-670-5335</a>
                </div>
            </FooterWrapper>
        )
    }
}

const FooterWrapper =styled.section`
    div.others{
        padding:0 10px;
        display:flex;
        justify-content:space-between;
        color: #df2d2d;
    }
    div.copyright{
        text-align:center;
        a{
            color: #df2d2d;
        }
    }
`

export default Footer;
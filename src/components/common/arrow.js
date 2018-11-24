import styled from 'styled-components'
const ArrowDown=styled.div`
    display: inline-block;
    position: absolute;
    top: 18px;
    width: 0;
    height: 0;
    margin-left: 4px;
    border: 4px solid transparent;
    border-top-color: #b0b0b0;
`
const ArrowUp=styled.div`
    display: inline-block;
    position: absolute;
    top: 18px;
    width: 0;
    height: 0;
    margin-left: 4px;
    border: 4px solid transparent;
    border-bottom-color: #e54847;
    text-align: center;
    line-height: 40px;
`
  
export default {
    ArrowDown,
    ArrowUp
}
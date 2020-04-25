import React, {Component} from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component{
    render(){
        return (
            <Wrapper href="https://sambrros.com">
                <img src={logo} width="50" heigth="50" alt="sambarros.com"/>
            </Wrapper>

        )
    }
}
export default Logo

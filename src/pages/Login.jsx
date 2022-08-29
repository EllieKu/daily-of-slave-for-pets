import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 45vh;
`

const Input = styled.input`
  margin-inline: 6px;
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
`


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: 'eli52583'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({account: event.target.value})
  }

  render() {
    return (
      <Container>
        <label htmlFor="account">帳號</label>
        <Input
          value={this.state.account}
          onChange={this.handleChange}
          name="account">
        </Input>
        <Link to={`/${this.state.account}`}>登入</Link>
      </Container>
    )
  }
}

export default Login
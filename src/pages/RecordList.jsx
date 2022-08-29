import React from "react";
// import styled from 'styled-components';
import Nav from "../components/Nav";
import Card from "../components/RecordList/Card";
import Icon from '../components/common/IconList';
import axios from "../axios";

class RecordList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
    this.handleFilter = this.handleFilter.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.putListAmend = this.putListAmend.bind(this)
    this.getList = this.getList.bind(this)
    this.deleteListDelete = this.deleteListDelete.bind(this)
    this.cardSave = this.cardSave.bind(this)
    this.cardDelete = this.cardDelete.bind(this)
  }
  
  componentDidMount() {
    this.getList()
  }

  handleFilter() {
    console.log('filter')
  }

  handleAdd() {
    console.log('add')
  }

  getList() {
    const url = window.location.pathname

    axios({
      url,
      method: 'get',
    })
      .then(response => {
    this.setState({
          list: response.data,
        })
      }).catch(error => {
        console.log(error)
    })
  }

  putListAmend() { // put api to amend record item
    console.log('putListAmend')
  }

  deleteListDelete() {
    console.log('deleteListDelete')
  }

  cardSave(item) {
    const newList = this.state.list.map((event) => {
      if (event.id === item.id) return item
      return event
    })
    this.setState({
      list: newList
    })
  }

  cardDelete(item) {
    const newList = this.state.list.filter((event) => {
      return event.id !== item.id
    })
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div>
        <Nav>
          <div onPointerDown={this.handleFilter}>
            <Icon name="filter" />  
          </div>
          <div onPointerDown={this.handleAdd}>
            <Icon name="plus" />  
          </div>
        </Nav>
        {
          this.state.list.map(item =>
            <Card
              key={item.id}
              event={item}
              eventSave={this.cardSave}
              eventDelete={this.cardDelete} />
          )
        }
      </div>
    )
  }
}

export default RecordList
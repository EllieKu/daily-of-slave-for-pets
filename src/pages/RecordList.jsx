import React from "react";
// import styled from 'styled-components';
import Nav from "../components/Nav";
import Card from "../components/RecordList/Card";
import BoxEdit from "../components/RecordList/BoxEdit";
import Icon from '../components/common/IconList';

const list = [
  {
    id: 1,
    iconName: 'pills',
    name: '內驅',
    time: '2022-06-28',
    note: '我是備註'
  },
  {
    id: 2,
    iconName: 'bath',
    name: '洗澡',
    time: '2022-06-30',
    note: ''
  }
]

class RecordList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // boxEditVisible: true
      boxEditVisible: false
    }
    this.handleFilter = this.handleFilter.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.displayBoxEdit = this.displayBoxEdit.bind(this)
    this.itemDelete = this.itemDelete.bind(this)
  }

  handleFilter() {
    console.log('filter')
  }

  handleAdd() {
    console.log('add')
  }

  displayBoxEdit(boolean) {
    this.setState({
      boxEditVisible: boolean
    })
  }

  itemDelete() {
    console.log('itemDelete')
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
          this.state.boxEditVisible ?
            <BoxEdit
              displayBoxEdit={this.displayBoxEdit}
              itemDelete={this.itemDelete}/> :
            null
        }
        {
          list.map(item =>
            <Card key={item.id} event={item} displayBoxEdit={this.displayBoxEdit}/>)
        }
      </div>
    )
  }
}

export default RecordList
import React from "react";
// import styled from 'styled-components';
import Nav from "../components/Nav";
import icon_plus from '../images/plus-solid.svg';
import icon_filter from '../images/filter-solid.svg';
import Card from "../components/RecordList/Card";
import BoxEdit from "../components/RecordList/BoxEdit";

const list = [
  {
    id: 1,
    name: '內驅',
    time: '2022-06-28',
    note: '我是備註'
  },
  {
    id: 2,
    name: '洗澡',
    time: '2022-06-30',
    note: ''
  }
]

class RecordList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boxEditVisible: true
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
          <img
            src={icon_filter}
            alt="icon_filter"
            onPointerDown={this.handleFilter} />
          <img
            src={icon_plus}
            alt="icon_plus"
            onPointerDown={this.handleAdd}/>
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
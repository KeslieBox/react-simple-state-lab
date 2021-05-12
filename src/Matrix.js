import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    console.log('v:', vals)
    return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    console.log(this)
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
  Matrix.defaultProps = {
    values: (() => {
      const row = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
      const array = []
      for(let i = 0; i <= 10; i++){
        return array.push(row)
      }
    })
  }
}

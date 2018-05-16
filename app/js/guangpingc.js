import React from 'react'
export default class guangpingc extends React.Component {
  componentWillMount () {
    console.log(this.props)
  }

  render () {
    return (
      <div>C页面,参数:{this.props.match.params.param}</div>
    )
  }
}

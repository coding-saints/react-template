import React from 'react'
import {render} from 'react-dom'
import './index.scss'

export default class App extends React.Component {

  render() {
    return <div className="example">hi, look at me I work.</div>
  }
}

render(
    <App />,
    document.getElementById('root')
)

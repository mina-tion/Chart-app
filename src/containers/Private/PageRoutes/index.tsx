import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../Main'
import Table from '../Table'


const PrivatePages: React.FC = () => {
  
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/table" component={Table} />
    </Switch>
  )
}

export default PrivatePages

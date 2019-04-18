import React, { Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Page404 from '../components/errorPages/Page404'
import App from './App'

const redirectToDashboard = () => <Redirect to="/app/dashboard" push={true} />

export default function Page() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact={true} path="/" render={redirectToDashboard} />
          <Route path="/app" component={App} />
          <Route component={Page404} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

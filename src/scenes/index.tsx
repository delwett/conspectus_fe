import React, { Suspense, ReactElement } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from '@/components/Layout'
import NotFound from '@/scenes/NotFound'

export default function RootScene(): ReactElement {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Switch>
          <Redirect exact from="/" to="/board" />
          <Route path="/board">
            <div>board</div>
          </Route>
          <Route path="/login">
            <div>login</div>
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  )
}

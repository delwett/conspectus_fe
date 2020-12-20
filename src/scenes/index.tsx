import React, { Suspense, ReactElement } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from '@/components/Layout'
import Login from '@/scenes/Login'
import Board from '@/scenes/Board'
import NotFound from '@/scenes/NotFound'

export default function RootScene(): ReactElement {
  return (
    <Layout isAuthorized>
      <Suspense fallback={null}>
        <Switch>
          <Redirect exact from="/" to="/board" />
          <Route path="/login" component={Login} />
          <Route path="/board" component={Board} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  )
}

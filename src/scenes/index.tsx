import React, { Suspense, ReactElement } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import useActiveUser from '@/hooks/useActiveUser'
import AuthorizedRoute from '@/containers/AuthorizedRoute'
import Layout from '@/components/Layout'
import Login from '@/scenes/Login'
import Board from '@/scenes/Board'
import NotFound from '@/scenes/NotFound'

export default function RootScene(): ReactElement {
  const { activeUser } = useActiveUser()

  return (
    <Layout isAuthorized={Boolean(activeUser)}>
      <Suspense fallback={null}>
        <Switch>
          {activeUser ? <Redirect exact from="/login" to="/board" /> : null}
          <Redirect exact from="/" to="/board" />
          <Route exact path="/login" component={Login} />
          <AuthorizedRoute exact path="/board" component={Board} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  )
}

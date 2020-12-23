import React, { ReactElement } from 'react'
import { Route, Redirect, RouteProps } from 'react-router'
import useActiveUser from '@/hooks/useActiveUser'
import { CircularProgress } from './styles'

export default function AuthorizedRoute(props: RouteProps): ReactElement {
  const { component: Component, children, render, ...rest } = props
  const { activeUser, loading } = useActiveUser()
  const isAuthorized = Boolean(activeUser)

  return (
    <Route
      {...rest}
      render={routeProps => {
        if (loading) return <CircularProgress size="80px" />
        if (!isAuthorized) return <Redirect to="/login" />

        if (children) return typeof children === 'function' ? children(routeProps) : children
        if (render) return render(routeProps)
        if (Component) return <Component {...routeProps} />

        return null
      }}
    />
  )
}

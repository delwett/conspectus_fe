import React, { ReactElement, ReactNode } from 'react'
import { ActiveUserProviderQuery } from '@/__generated__/ActiveUserProviderQuery.graphql'
import { graphql, useQuery } from 'relay-hooks'
import ActiveUserContext from './context'

type ActiveUserProviderProps = {
  children: ReactNode
}

export { ActiveUserContext }
export type { ActiveUserContext as ActiveUserContextType } from './context'

export default function ActiveUserProvider(props: ActiveUserProviderProps): ReactElement {
  const { children } = props

  const { props: data, error, retry } = useQuery<ActiveUserProviderQuery>(activeUserQuery)

  const value = {
    activeUser: data?.getCurrentUser ?? null,
    loading: !error && !props,
    error,
    retry
  }

  return <ActiveUserContext.Provider value={value}>{children}</ActiveUserContext.Provider>
}

export const activeUserQuery = graphql`
  query ActiveUserProviderQuery {
    getCurrentUser {
      id
      firstName
      lastName
      email
    }
  }
`

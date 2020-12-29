import React, { ReactElement } from 'react'
import { CircularProgress } from '@material-ui/core'
import { graphql, useQuery } from 'relay-hooks'
import { BoardQuery } from '@/__generated__/BoardQuery.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'
import MeetingData from './components/MeetingData'
import TasksList from './components/TasksList'
import MeetingControls from './components/MeetingControls'
import { Container } from './styles'

export default function Board(): ReactElement {
  const { showToast } = useToasts()

  const { props: data, error, retry } = useQuery<BoardQuery>(getCurrentBoard, {}, { fetchPolicy: 'network-only' })
  const isLoading = !data && !error

  if (error) {
    showToast(asErrorMessage(error), { variant: 'error' })
  }

  return (
    <Container maxWidth="md">
      {isLoading || !data ? (
        <CircularProgress />
      ) : (
        <>
          <MeetingData board={data.getCurrentBoard} />
          <TasksList board={data.getCurrentBoard} onListChanged={retry} />
          <MeetingControls board={data.getCurrentBoard} onCompleted={retry} />
        </>
      )}
    </Container>
  )
}

export const getCurrentBoard = graphql`
  query BoardQuery {
    getCurrentBoard {
      id
      ...MeetingData_board
      ...TasksList_board
      ...MeetingControls_board
    }
  }
`

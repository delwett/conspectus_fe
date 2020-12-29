import React, { ReactElement, useCallback } from 'react'
import { isPast } from 'date-fns'
import { Button } from '@material-ui/core'
import { graphql, useFragment, useMutation } from 'relay-hooks'
import { MeetingControls_board$key } from '@/__generated__/MeetingControls_board.graphql'
import { MeetingControlsCompleteMutation } from '@/__generated__/MeetingControlsCompleteMutation.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'
import { Container } from './styles'

type MeetingControlsProps = {
  board: MeetingControls_board$key
  onCompleted: () => void
}

export default function MeetingControls(props: MeetingControlsProps): ReactElement | null {
  const { board, onCompleted } = props

  const { meetingDate: meetingDateValue } = useFragment(boardFragment, board)
  const meetingDate = new Date(meetingDateValue)

  const [completeMeeting, { loading }] = useMutation<MeetingControlsCompleteMutation>(completeMeetingMutation)

  const { showToast } = useToasts()

  const handleClick = useCallback(async () => {
    await completeMeeting({
      variables: {},
      onError: error => {
        showToast(asErrorMessage(error), { variant: 'error' })
      },
      onCompleted: () => {
        onCompleted()
        showToast('Meeting date has been updated', { variant: 'success' })
      }
    })
  }, [completeMeeting, onCompleted, showToast])

  if (isPast(meetingDate)) {
    return (
      <Container>
        <Button color="secondary" variant="contained" size="large" disabled={loading} onClick={handleClick}>
          Complete meeting
        </Button>
      </Container>
    )
  }

  return null
}

export const boardFragment = graphql`
  fragment MeetingControls_board on Board {
    meetingDate
  }
`

const completeMeetingMutation = graphql`
  mutation MeetingControlsCompleteMutation {
    completeMeeting
  }
`

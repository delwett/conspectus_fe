import React, { ReactElement, useCallback } from 'react'
import { isToday, isPast, isFuture } from 'date-fns'
import { Typography } from '@material-ui/core'
import { graphql, useFragment, useMutation } from 'relay-hooks'
import { MeetingData_board$key } from '@/__generated__/MeetingData_board.graphql'
import { MeetingDataChangeMutation } from '@/__generated__/MeetingDataChangeMutation.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import toISODate from '@/utils/to-iso-date'
import formatDate from '@/utils/format-date'
import useToasts from '@/hooks/useToast'
import { Container, DatePicker } from './styles'

type MeetingDataProps = {
  board: MeetingData_board$key
}

export default function MeetingData(props: MeetingDataProps): ReactElement {
  const { board } = props

  const { meetingDate: meetingDateValue } = useFragment(boardFragment, board)
  const meetingDate = new Date(meetingDateValue)

  const [updateDate, { loading }] = useMutation<MeetingDataChangeMutation>(updateMeetingDateMutation)

  const { showToast } = useToasts()

  const handleDateChange = useCallback(
    async (date: Date | null) => {
      if (!date) return

      await updateDate({
        variables: { input: { date: toISODate(date) } },
        onError: error => {
          showToast(asErrorMessage(error), { variant: 'error' })
        },
        onCompleted: () => {
          showToast('Meeting date has been updated', { variant: 'success' })
        }
      })
    },
    [updateDate, showToast]
  )

  return (
    <Container>
      {isToday(meetingDate) ? (
        <Typography variant="h6">Today is meeting</Typography>
      ) : (
        <>
          {isPast(meetingDate) ? (
            <Typography variant="h6">Meeting started on: {formatDate(meetingDate)}</Typography>
          ) : null}
          {isFuture(meetingDate) ? (
            <>
              <Typography variant="h6">Next meeting is: </Typography>
              <DatePicker
                value={meetingDate}
                format="MM/dd/yyyy"
                disablePast
                autoOk
                disabled={loading}
                onChange={handleDateChange}
              />
            </>
          ) : null}
        </>
      )}
    </Container>
  )
}

export const boardFragment = graphql`
  fragment MeetingData_board on Board {
    meetingDate
  }
`

const updateMeetingDateMutation = graphql`
  mutation MeetingDataChangeMutation($input: UpdateMeetingDateInput!) {
    updateMeetingDate(updateMeetingDateInput: $input) {
      id
      meetingDate
    }
  }
`

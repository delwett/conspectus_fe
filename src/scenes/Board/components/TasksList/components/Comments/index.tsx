import React, { ReactElement } from 'react'
import { Comment } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import { graphql, useFragment } from 'relay-hooks'
import { Comments_task$key } from '@/__generated__/Comments_task.graphql'
import { Container, Item } from './styles'

type CommentsProps = {
  task: Comments_task$key
}

export default function Comments(props: CommentsProps): ReactElement {
  const { task } = props
  const { comments } = useFragment(taskFragment, task)

  return (
    <Container>
      {comments.map(comment => (
        <Item key={comment.id}>
          <Comment />
          <Typography title={comment.text} variant="subtitle1" noWrap>
            {comment.text}
          </Typography>
        </Item>
      ))}
    </Container>
  )
}

export const taskFragment = graphql`
  fragment Comments_task on Task {
    comments {
      id
      text
    }
  }
`

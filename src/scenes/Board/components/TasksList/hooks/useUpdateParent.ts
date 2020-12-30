import { useCallback } from 'react'
import { graphql, useMutation } from 'relay-hooks'
import type { useUpdateParentMutation as UseUpdateParentMutation } from '@/__generated__/useUpdateParentMutation.graphql'
import asErrorMessage from '@/api/utils/as-error-message'
import useToasts from '@/hooks/useToast'

type UseUpdateParentParams = {
  onUpdated: () => void
}

type UpdateValues = { id: string; parentId: string | null }

type UseUpdateParentReturnValue = {
  updateParent: (values: UpdateValues) => Promise<void>
  loading: boolean
}

export default function useUpdateParent(params: UseUpdateParentParams): UseUpdateParentReturnValue {
  const { onUpdated } = params

  const { showToast } = useToasts()
  const [mutation, { loading }] = useMutation<UseUpdateParentMutation>(updateTaskParentMutation)

  const updateParent = useCallback(
    async (input: UpdateValues) => {
      await mutation({
        variables: { input },
        onError: error => {
          showToast(asErrorMessage(error), { variant: 'error' })
        },
        onCompleted: () => {
          showToast('Task parent has been updated', { variant: 'success' })
          onUpdated()
        }
      })
    },
    [mutation, showToast, onUpdated]
  )

  return { updateParent, loading }
}

const updateTaskParentMutation = graphql`
  mutation useUpdateParentMutation($input: UpdateTaskParentInput!) {
    updateTaskParent(updateTaskParentInput: $input) {
      id
    }
  }
`

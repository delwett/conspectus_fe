import { useDrop, DropTargetMonitor, DragElementWrapper } from 'react-dnd'
import useUpdateParent from './useUpdateParent'
import type { DraggableItem } from '../types'

type UseDropTaskParams = {
  parentId: string | null
  canDrop: (item: DraggableItem) => boolean
  onDropped: () => void
}

type CollectedProps = {
  isOver: boolean
  isAllowed: boolean
}

function collect(monitor: DropTargetMonitor): CollectedProps {
  return {
    isOver: monitor.isOver({ shallow: true }),
    isAllowed: monitor.canDrop()
  }
}

export default function useDropTask(params: UseDropTaskParams): [CollectedProps, DragElementWrapper<any>] {
  const { parentId, canDrop, onDropped } = params

  const { updateParent } = useUpdateParent({ onUpdated: onDropped })

  async function drop(item: DraggableItem, monitor: DropTargetMonitor): Promise<void> {
    if (monitor.didDrop()) return

    await updateParent({ id: item.id, parentId })
  }

  const [collectedProps, $ref] = useDrop({
    accept: 'task',
    drop,
    canDrop,
    collect
  })

  return [collectedProps, $ref]
}

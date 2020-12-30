import { useDrag, DragSourceMonitor, DragElementWrapper, DragSourceOptions } from 'react-dnd'
import type { DraggableItem } from '../types'

type UseDragTaskParams = {
  id: string
  canDrag: boolean
}

type CollectedProps = {
  isDragging: boolean
}

function collect(monitor: DragSourceMonitor): CollectedProps {
  return {
    isDragging: monitor.isDragging()
  }
}

export default function useDragTask(
  params: UseDragTaskParams
): [CollectedProps, DragElementWrapper<DragSourceOptions>] {
  const { id, canDrag } = params

  const item: DraggableItem = {
    type: 'task',
    id
  }

  const [collectedProps, $ref] = useDrag({
    item,
    collect,
    canDrag
  })

  return [collectedProps, $ref]
}

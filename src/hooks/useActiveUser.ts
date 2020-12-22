import { useContext } from 'react'
import { ActiveUserContext, ActiveUserContextType } from '@/containers/ActiveUserProvider'

export default function useActiveUser(): ActiveUserContextType {
  return useContext(ActiveUserContext)
}

import { createContext } from 'react'
import { ActiveUser } from './types'

export type ActiveUserContext = {
  activeUser: ActiveUser | null
  loading: boolean
  error: Error | null
  retry: () => void
}

export default createContext<ActiveUserContext>({
  activeUser: null,
  loading: false,
  error: null,
  retry: () => console.error('ActiveUserContext is not initialized')
})

import React, { ReactElement, useCallback, useState } from 'react'
import {
  Box,
  CircularProgress,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery
} from '@material-ui/core'
import { Edit, VpnKey, Person } from '@material-ui/icons'
import { breakpoints } from '@/theme'
import useToasts from '@/hooks/useToast'
import useActiveUser from '@/hooks/useActiveUser'
import { Button } from './styles'

export default function Profile(): ReactElement {
  // const { user, loading } = useActiveUser()

  const afterSmall = useMediaQuery(breakpoints.up('sm'))
  const { showToast } = useToasts()

  const [$menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)

  const handleButtonClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget)
  }, [])

  const handleMenuClose = useCallback(() => {
    setMenuAnchor(null)
  }, [])

  const handleMenuClick = useCallback(() => {
    showToast('Under development', { variant: 'warning' })
    setMenuAnchor(null)
  }, [showToast])

  if (false) return <CircularProgress color="inherit" size="20px" />

  return (
    <Box>
      {afterSmall ? (
        <Button aria-haspopup="true" color="inherit" size="large" onClick={handleButtonClick}>
          {/* Hi, {user?.firstName ?? ''} */}
        </Button>
      ) : (
        <IconButton aria-label="profile" aria-haspopup="true" color="inherit" onClick={handleButtonClick}>
          <Person />
        </IconButton>
      )}
      <Menu
        anchorEl={$menuAnchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={Boolean($menuAnchor)}
        getContentAnchorEl={null}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClick}>
          <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit profile" />
        </MenuItem>
        <MenuItem onClick={handleMenuClick}>
          <ListItemIcon>
            <VpnKey fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Change password" />
        </MenuItem>
      </Menu>
    </Box>
  )
}

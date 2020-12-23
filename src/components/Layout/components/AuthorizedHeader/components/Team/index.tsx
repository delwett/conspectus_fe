import React, { ReactElement, useCallback, useState } from 'react'
import { Box, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, useMediaQuery } from '@material-ui/core'
import { Add, List, People } from '@material-ui/icons'
import { breakpoints } from '@/theme'
import useToasts from '@/hooks/useToast'
import UsersListModal from './components/UsersListModal'
import { Button } from './styles'

export default function Team(): ReactElement {
  const afterSmall = useMediaQuery(breakpoints.up('sm'))
  const { showToast } = useToasts()

  const [$menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)

  const [isUsersListModalOpen, setUsersListModalVisibility] = useState(false)

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

  const handleUsersListMenuClick = useCallback(() => {
    setUsersListModalVisibility(true)
    setMenuAnchor(null)
  }, [])

  const handleUsersListModalClose = useCallback(() => {
    setUsersListModalVisibility(false)
  }, [])

  return (
    <Box>
      {afterSmall ? (
        <Button aria-haspopup="true" color="inherit" size="large" onClick={handleButtonClick}>
          Team management
        </Button>
      ) : (
        <IconButton aria-label="team management" aria-haspopup="true" color="inherit" onClick={handleButtonClick}>
          <People />
        </IconButton>
      )}
      <Menu
        elevation={1}
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
            <Add fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Add user" />
        </MenuItem>
        <MenuItem onClick={handleUsersListMenuClick}>
          <ListItemIcon>
            <List fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Users list" />
        </MenuItem>
      </Menu>
      <UsersListModal isOpen={isUsersListModalOpen} onClose={handleUsersListModalClose} />
    </Box>
  )
}

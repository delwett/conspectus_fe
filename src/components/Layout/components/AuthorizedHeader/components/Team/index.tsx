import React, { ReactElement, useCallback, useState } from 'react'
import { Box, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, useMediaQuery } from '@material-ui/core'
import { Add, List, People } from '@material-ui/icons'
import { breakpoints } from '@/theme'
import Dialog from '@/components/Dialog'
import InviteUserContent from './components/InviteUserContent'
import UsersListContent from './components/UsersListContent'
import { Button } from './styles'

export default function Team(): ReactElement {
  const afterSmall = useMediaQuery(breakpoints.up('sm'))

  const [$menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)

  const [isUsersListDialogOpen, setUsersListDialogVisibility] = useState(false)
  const [isAddUserDialogOpen, setAddUserDialogVisibility] = useState(false)

  const handleButtonClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget)
  }, [])

  const handleMenuClose = useCallback(() => {
    setMenuAnchor(null)
  }, [])

  const handleAddUserMenuClick = useCallback(() => {
    setAddUserDialogVisibility(true)
    setMenuAnchor(null)
  }, [])

  const handleUsersListMenuClick = useCallback(() => {
    setUsersListDialogVisibility(true)
    setMenuAnchor(null)
  }, [])

  const handleDialogClose = useCallback(() => {
    setAddUserDialogVisibility(false)
    setUsersListDialogVisibility(false)
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
        <MenuItem onClick={handleAddUserMenuClick}>
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
      <Dialog isOpen={isAddUserDialogOpen} title="Invite user" onClose={handleDialogClose}>
        <InviteUserContent onInvited={handleDialogClose} />
      </Dialog>
      <Dialog isOpen={isUsersListDialogOpen} title="Users list" onClose={handleDialogClose}>
        <UsersListContent />
      </Dialog>
    </Box>
  )
}

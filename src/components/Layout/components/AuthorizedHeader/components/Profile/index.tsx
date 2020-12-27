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
import useActiveUser from '@/hooks/useActiveUser'
import Dialog from '@/components/Dialog'
import UpdateProfileContent from './components/UpdateProfileContent'
import ChangePasswordContent from './components/ChangePasswordContent'
import { Button } from './styles'

export default function Profile(): ReactElement {
  const { activeUser, loading } = useActiveUser()

  const [isUpdateProfileDialogOpen, setUpdateProfileDialogVisibility] = useState(false)
  const [isChangePasswordDialogOpen, setChangePasswordDialogVisibility] = useState(false)

  const afterSmall = useMediaQuery(breakpoints.up('sm'))

  const [$menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)

  const handleButtonClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget)
  }, [])

  const handleMenuClose = useCallback(() => {
    setMenuAnchor(null)
  }, [])

  const handlePasswordChangeClick = useCallback(() => {
    setChangePasswordDialogVisibility(true)
    setMenuAnchor(null)
  }, [])

  const handleUpdateProfileClick = useCallback(() => {
    setUpdateProfileDialogVisibility(true)
    setMenuAnchor(null)
  }, [])

  const handleDialogClose = useCallback(() => {
    setUpdateProfileDialogVisibility(false)
    setChangePasswordDialogVisibility(false)
  }, [])

  if (loading) return <CircularProgress color="inherit" size="20px" />

  return (
    <Box>
      {afterSmall ? (
        <Button aria-haspopup="true" color="inherit" size="large" onClick={handleButtonClick}>
          Hi, {activeUser?.firstName ?? ''}
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
        <MenuItem onClick={handleUpdateProfileClick}>
          <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit profile" />
        </MenuItem>
        <MenuItem onClick={handlePasswordChangeClick}>
          <ListItemIcon>
            <VpnKey fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Change password" />
        </MenuItem>
      </Menu>
      <Dialog isOpen={isUpdateProfileDialogOpen} title="Edit profile" onClose={handleDialogClose}>
        <UpdateProfileContent onUpdated={handleDialogClose} />
      </Dialog>
      <Dialog isOpen={isChangePasswordDialogOpen} title="Change password" onClose={handleDialogClose}>
        <ChangePasswordContent onChanged={handleDialogClose} />
      </Dialog>
    </Box>
  )
}

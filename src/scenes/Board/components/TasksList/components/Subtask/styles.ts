import { styled } from '@linaria/react'
import { rgba } from 'polished'
import { themeBase } from '@/theme'

export const Container = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  cursor: move;

  &:hover {
    background-color: ${rgba(themeBase.palette.primary.main, 0.1)};
  }

  &.is-dragging {
    background-color: ${rgba(themeBase.palette.primary.main, 0.1)};
  }
`

export const Entity = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`

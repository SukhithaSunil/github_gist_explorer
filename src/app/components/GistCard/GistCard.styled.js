import styled from 'styled-components'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'


export const CardContentDiv = styled(CardContent)`
  padding-bottom: 10px;
`

export const GistLink = styled(Link)`
  color: darksalmon;
`

export const Description = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`


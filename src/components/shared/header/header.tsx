import { makeStyles } from '@material-ui/core'
import * as React from 'react'

// local imports
import styles from './styles'

const useStyles = makeStyles(styles)

const Header: React.FC = () => {
  const classes = useStyles()

  return <div className={classes.header}></div>
}

export default Header

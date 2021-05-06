import { Grid } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

const GridItem: React.FC = (props) => {
  const { children } = props

  return <Grid item>{children}</Grid>
}

GridItem.propTypes = {
  children: PropTypes.node
}

export default GridItem

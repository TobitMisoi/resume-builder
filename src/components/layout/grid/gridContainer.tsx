import { Grid } from '@material-ui/core'
import * as React from 'react'
import PropTypes from 'prop-types'

const GridContainer: React.FC = (props) => {
  const { children } = props

  return <Grid container>{children}</Grid>
}

GridContainer.propTypes = {
  children: PropTypes.node
}

export default GridContainer

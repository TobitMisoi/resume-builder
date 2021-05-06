import React from 'react'

import PropTypes from 'prop-types'
import { Card } from '@material-ui/core'

type Props = {
  children: React.ReactNode
}

const CardHeader: React.FC<Props> = (props) => {
  const { children } = props

  return <Card>{children}</Card>
}

CardHeader.propTypes = {
  children: PropTypes.node
}

export default CardHeader

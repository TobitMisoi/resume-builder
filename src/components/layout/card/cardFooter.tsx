import { Card } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  children: React.ReactNode
}

const CardFooter: React.FC<Props> = (props) => {
  const { children } = props

  return <Card>{children}</Card>
}

CardFooter.propTypes = {
  children: PropTypes.node
}

export default CardFooter

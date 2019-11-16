import React from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'

const Target = () => {
  return (
    <div className='target d-flex'>
      <Cell title='Cal.' value='0' />
      <Cell title='Prot.' value='0' />
      <Cell title='Fat' value='0' />
      <Cell title='Carb.' value='0' />
    </div>
  )
}

Target.propTypes = {

}

export default Target;
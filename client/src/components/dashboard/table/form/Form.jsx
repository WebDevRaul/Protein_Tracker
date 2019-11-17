import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import Set from './Set';
import Calc from './Calc';

const Form = () => {
  const [show, setShow] = useState({ btn: false, set: false, calc: true });
  const { btn, set, calc } = show;

  return (
    <>
      { btn && <Buttons show={show} setShow={setShow} /> }
      { set && <Set show={show} setShow={setShow} /> }
      { calc && <Calc show={show} setShow={setShow} /> }
    </>
  )
}

Form.propTypes = {

}

export default Form;
import React, { useState } from 'react';
import Buttons from './Buttons';
import Set from './Set';
import Calc from './Calc';

const Form = () => {
  const [show, setShow] = useState({ btn: true, set: false, calc: false });
  const { btn, set, calc } = show;

  return (
    <>
      { btn && <Buttons show={show} setShow={setShow} /> }
      { set && <Set show={show} setShow={setShow} /> }
      { calc && <Calc show={show} setShow={setShow} /> }
    </>
  )
}

export default Form;
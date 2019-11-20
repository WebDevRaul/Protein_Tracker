import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Card = ({ data: { title, items  } }) => {
  return (
    <section>
      <div className="card mb-3">
        <div className="card-header border border-primary text-center">
          <h5 className='mb-0 text- text-capitalize'>{title}</h5>
        </div>
        <div className='border border-top-0 border-success'>
          <ul className="list-group list-group-flush">
            <Item 
              item={{ name: 'Name', qty:'Qty', type:'.', cal:'Cal', prot:'Prot', fat:'Fat', carb: 'Carb', icon:'no' }}
            />
            {
              items.map((i,index)=> <Item key={index} item={i} />)
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card;
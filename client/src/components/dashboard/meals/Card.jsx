import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Card = ({ title, item }) => {
  return (
    <section>
      <div className="card">
        <div className="card-header border border-primary text-center">
          <h5 className='mb-0 text- text-capitalize'>{title}</h5>
        </div>
        <div className='border border-top-0 border-success'>
          <ul className="list-group list-group-flush">
            <Item 
              item={{ name: 'Name', qty:'Qty', type:'.', cal:'Cal', prot:'Prot', fat:'Fat', carb: 'Carb', icon:'no' }} 
            />
            {
              item.map((i,index)=> <Item key={index} item={i} />)
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  item: PropTypes.array.isRequired
}

export default Card;
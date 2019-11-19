import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Card = ({ title, item, onDelete }) => {
  return (
    <section>
      <div className="card">
        <div className="card-header border border-primary text-center">
          <h5 className='mb-0 text- text-capitalize'>{title}</h5>
        </div>
        <div className='border border-top-0 border-success'>
          <ul className="list-group list-group-flush">
            {
              item.map((i,index)=> <Item key={index} item={i} onDelete={onDelete} />)
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

Card.propTypes = {

}

export default Card;
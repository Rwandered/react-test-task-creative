import React from 'react';
import PropTypes from 'prop-types';
import s from './Relationships.module.scss';


const Relationships = ( { relationships } ) => {

  const { first_name, last_name, middle_name } = relationships.attributes

  return (
    <div className={s.flat__relationships} >
      <p>Есть вопросы?</p>
      <span>{ last_name } { first_name } { middle_name } </span>
    </div>
  )
}

Relationships.propTypes = {
  relationships: PropTypes.object.isRequired
}

export default Relationships
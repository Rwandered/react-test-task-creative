import React from 'react';
import FlatPhoto from '../FlatPhoto/FlatPhoto';
import Relationships from '../Relationships/Relationships';
import FlatHeader from '../FlatHeader/FlatHeader';
import FlatInfo from '../FlatInfo/FlatInfo';
import PropTypes from 'prop-types';
import s from './FlatCard.module.scss';


const FlatCard = ( { flat } ) => {

  const { attributes } = flat

  return (
    <div className={s.apartments__flat}>
      <div className={s.flat__wrapper}>
        <FlatPhoto/>
        <FlatHeader attributes={ attributes }/>
        <FlatInfo attributes={ attributes }/>
        <Relationships relationships={ flat.relationships } />
      </div>
    </div>
  )
}

FlatCard.propTypes = {
  flat: PropTypes.object.isRequired
}

export default FlatCard
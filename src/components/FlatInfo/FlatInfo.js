import React from 'react';
import PropTypes from 'prop-types';
import s from './FlatInfo.module.scss'


const FlatInfo = ( {attributes} ) => {

  const { address } = attributes

  return (
    <div className={s.flat__info}>
      <div className={s.flat__area}>
        <p className={s.flat__area__param}>{ attributes.rooms }-комн. квартира</p>
        <p className={s.flat__area__param}>{ attributes.area } { attributes.unit } </p>
      </div>
      <div className={s.flat__address}>
        <p>{ address.city } ул. { address.street } д. { address.house } кв. { address.room }</p>
      </div>
    </div>
  )
}

FlatInfo.propTypes = {
  attributes: PropTypes.object.isRequired
}

export default FlatInfo
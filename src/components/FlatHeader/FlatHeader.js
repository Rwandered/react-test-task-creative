import React, {useState} from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import s from './FlatHeader.module.scss'

const FlatHeader = ( {attributes} ) => {

  const [isLiked, setLike] = useState( false)

  const handleSetLike = (event) => {
    event.preventDefault()
    setLike(!isLiked)
  }

  return (
    <div className={s.flat__header}>
      <span className={s.flat__title}>{ attributes.title }</span>
      <span
        className={ cn( s.flat__logo, { [s.flat__logo_liked ] : isLiked } )}
        onClick={ handleSetLike }
      >
        <svg
          viewBox="0 0 24 24"
          className={s.flat__logo_like}>
          <path
            d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z">
          </path>
        </svg>
      </span>
    </div>
  )
}

FlatHeader.propTypes = {
  attributes: PropTypes.object.isRequired
}

export default FlatHeader
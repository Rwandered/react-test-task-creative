import React, {useEffect, useState} from 'react';
import FlatCard from '../FlatCard/FlatCard';
import s from './ApartmentsList.module.scss';
import inputData from '../../entities.json';

const ApartmentsList = () => {

  const [apartments, setApartments] = useState([])

  const getApartments = () => {
    const { response } = inputData
    setTimeout( () => {
      setApartments(response)
    }, 1000)
  }

  useEffect( () => {
    getApartments()
  }, [])

  if(apartments.length === 0)  {
    return <h3>Loading...</h3>
  }
  return (
    <div className={s.apartments__row}>
      {
       apartments.map( (flat) => (
          <FlatCard
            key={flat.id}
            flat={ flat }
          />
        ))
      }
    </div>
  )
}

export default ApartmentsList

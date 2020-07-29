import React from 'react';
import ApartmentsList from './components/ApartmentsList/ApartmentsList';
import s from './App.module.scss';


const App = () => {
  return (
   <div className={ s.apartments}>
      <div className={s.apartments__wrapper}>
        <ApartmentsList/>
      </div>
   </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { restaurant } from './model/restaurant';

let data:restaurant = {
  name: 'very nice',
  cartegory: 'beef',
  address: {
    city: '대전',
    detail: '구봉로 개맛집',
    zipcode: 131232,
  },
  menu:[{name:'떡볶이',price:3000},{name: '마라탕',price:8000}],
}
const App:React.FC=() => {
  return (
    <div className="App">
      <Store info={data}/>
    </div>
  );
}

export default App;

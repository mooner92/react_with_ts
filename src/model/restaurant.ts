/*
let data = {
  name: 'very nice',
  cartegory: 'beef',
  address: {
    city: '대전',
    detail: '구봉로 개맛집',
    zipcode: 131232,
  },
  menu:[{name:'떡볶이',price:3000},{name: '마라탕',price:8000}],
}
*/

export type restaurant ={
    name : string;
    cartegory : string;
    address:Address;
    menu:Menu[];
}

export type Address={
    city:string,
        detail:string,
        zipcode:number,
}

export type Menu={
    name:string,
        price:number,
}
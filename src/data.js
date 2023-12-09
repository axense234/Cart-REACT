export const items = [
  {
    id: 1,
    img: "https://res.cloudinary.com/birthdayreminder/image/upload/v1702120544/58ac4b940aaa10546adf2706_bimytr.png",
    name: "Samsung Galaxy S8",
    price: 399.99,
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/birthdayreminder/image/upload/v1702120544/xiami-redmi-note-2_yktdcm.jpg",
    name: "Google Pixel",
    price: 499.99,
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/birthdayreminder/image/upload/v1702120544/58aefac1c869e092af51ee68_cgpdkz.png",
    name: "Xiaomi Redmi Note 2",
    price: 699.99,
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/birthdayreminder/image/upload/v1702120544/res_ed48a27113839d71272bcbe7961c0013_xf37ku.jpg",
    name: "Samsung Galaxy S7",
    price: 599.99,
  },
];

export const defaultState = {
  cartItems: items,
  cartSize: items.length,
  totalCost: items.reduce((total, item) => total + item.price, 0),
};

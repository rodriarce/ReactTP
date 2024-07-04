const dataJson = `
[
  {
    "name": "Wireless Mouse",
    "description": "A high-precision wireless mouse with ergonomic design and long battery life.",
    "price": 29.99,
    "id": 0
  },
  {
    "name": "Bluetooth Headphones",
    "description": "Noise-cancelling Bluetooth headphones with 20 hours of playtime and comfortable ear pads.",
    "price": 79.99,
    "id": 1
  },
  {
    "name": "Mechanical Keyboard",
    "description": "A durable mechanical keyboard with customizable RGB backlighting and tactile switches.",
    "price": 99.99,
    "id": 2
  },
  {
    "name": "4K Monitor",
    "description": "A 27-inch 4K UHD monitor with ultra-thin bezels and HDR support for stunning visuals.",
    "price": 349.99,
    "id": 3
  }
]
`;

  export const getDataObject = () => 
    {
        return JSON.parse(dataJson);
    }
let productsCont = document.querySelector('.products');

const products = [
	{
		id: 1,
		name: 'Fresh hot pepper',
		price: 2000,
		img: 'pepper.jpg',
	},
	{
		id: 2,
		name: 'Fresh hot pepper',
		price: 2000,
		img: 'tomato.jpg',
	},
	{
		id: 3,
		name: 'Fresh hot pepper',
		price: 2000,
		img: 'coton.jpg',
	},
	{
		id: 4,
		name: 'Fresh hot pepper',
		price: 2000,
		img: 'okra-seed.jpg',
	},
	{
		id: 5,
		name: 'Fresh hot pepper',
		price: 2000,
		img: 'pepper.jpg',
	},
	{
		id: 6,
		name: 'Fresh hot pepper',
		price: 2000,
		img: 'tomato.jpg',
	},
	{
		id: 7,
		name: 'Fresh hot pepper',
		price: 2000,
		img: 'coton.jpg',
	},
	{
		id: 8,
		name: 'Fresh hot pepper',
		price: 2000,
		img: 'okra-seed.jpg',
	},
];

products.map((product) => {
	productsCont.innerHTML += `
      <div class="product-card">
         <img
            class="product-card-img"
            src="./images/products/${product.img}"
            alt="${product.name}"
         />
         <h3>${product.name}</h3>
         <p>sold per rubber</p>
         <h4>&#8358; <span>${product.price}</span></h4>
         <button class="snipcart-add-item btn btn-1"
            data-item-id="${product.id}"
            data-item-price="${product.price}"
            data-item-image="./images/products/${product.img}"
            data-item-name="${product.name}">
            ADD TO CART
         </button>
      </div>
      `;
});

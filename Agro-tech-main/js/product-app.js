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
		name: 'Fresh tomatoes',
		price: 22000,
		img: 'tomato.jpg',
	},
	{
		id: 3,
		name: 'Fresh Coton-wool',
		price: 2000,
		img: 'coton.jpg',
	},
	{
		id: 4,
		name: 'Dry Okro seeds',
		price: 2000,
		img: 'okra-seed.jpg',
	},
	{
		id: 5,
		name: 'Big size cow',
		price: 2000,
		img: 'cow.jpg',
	},
	{
		id: 6,
		name: 'Vegetable oil',
		price: 2000,
		img: 'oil.jpg',
	},
	{
		id: 7,
		name: 'Fresh Maize',
		price: 2000,
		img: 'Maize.jpg',
	},
	{
		id: 8,
		name: 'Raw groundnut',
		price: 10000,
		img: 'Nut.jpg',
	},
    {
		id: 9,
		name: 'Beans',
		price: 2000,
		img: 'beans.jpg',
	},
	{
		id: 10,
		name: 'Fresh Carrots',
		price: 22000,
		img: 'carrot.jpg',
	},
	{
		id: 11,
		name: 'Wheat',
		price: 2000,
		img: 'Wheat.jpg',
	},
	{
		id: 12,
		name: 'Fresh Onions',
		price: 5000,
		img: 'onions.jpg',
	},
	{
		id: 13,
		name: 'Big size cow',
		price: 2000,
		img: 'cow.jpg',
	},
	{
		id: 14,
		name: 'Vegetable oil',
		price: 2000,
		img: 'oil.jpg',
	},
	{
		id: 15,
		name: 'Fresh Maize',
		price: 2000,
		img: 'Maize.jpg',
	},
	{
		id: 16,
		name: 'Raw groundnut',
		price: 10000,
		img: 'Nut.jpg',
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

function login() {
	window.location.href="./login.html";
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.querySelector('.products');
    li = ul.querySelector('.product-card');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
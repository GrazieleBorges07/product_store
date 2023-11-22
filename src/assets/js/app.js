import { Product } from "./product.js";

const productsList = new Product();

function addProduct(){
    let description = document.getElementById('description').value;
    let price = document.getElementById('price_unity').value;
    let quantity = document.getElementById('quantity').value;

    console.log(description);

    let newProduct = {
        id: productsList.generateProductId(),
        description: description,
        price: Number(price),
        quantity: Number(quantity),
    }

    productsList.addProduct(newProduct);
    updateTable();
}

function deleteProduct(id){
    const confirmDelete = confirm(`Você realmente deseja excluir o item de CÓDIGO:${id}`);
    if(confirmDelete){
        productsList.deleteProduct(id);
        updateTable();
    }
}

function updateTable(){
    const tableBody = document.querySelector('#product_list tbody');

    tableBody.innerHTML = '';
    const products = productsList.getAllProducts();
    console.log(products);

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    products.forEach( product => {
        const row = document.createElement('tr');

        row.innerHTML =`
            <td>${product.id}</td>
            <td>${product.description}</td>
            <td>${formatter.format(product.price)}</td>
            <td>${product.quantity}</td>
            <td id="actions">
                <button data-product-id="${product.id}" type="button" class="">Editar</button>
                <button data-product-id="${product.id}" type="button" class="deleteBtn">Deletar</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

updateTable();

const formProduct = document.getElementById('product_form');

formProduct.addEventListener('submit', function (event){
    event.preventDefault();

    addProduct();
});

const actions = document.getElementById('product_list');
let productId;

actions.addEventListener('click', function(event){
    const target = event.target;

    if(target.classList.contains('deleteBtn')){
        productId = target.dataset.productId;
        deleteProduct(productId);
    }
})
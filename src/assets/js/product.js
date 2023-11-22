class Product{
    constructor(){
        this.products = [
            {
                id: this.generateProductId(),
                description: 'Tokyo Revengers - Vol. 1, de Ken Wakui (2022)',
                price: 20.50,
                quantity: 10,
            },
            {
                id: this.generateProductId(),
                description: 'Demon Slayer - Kimetsu No Yaiba: Vol. 1, de Koyoharu Gotouge (2020)',
                price: 30.50,
                quantity: 25,
            },
            {
                id: this.generateProductId(),
                description: 'Mo Dao Zu Sei: O Fundador da Cultivação Demoníaca, de Mo Xiang Tong Xiu (2022)',
                price: 17.00,
                quantity: 10,
            },
            {
                id: this.generateProductId(),
                description: 'One Piece 3 em 1: Vol. 1, de Elichiro Oda (2022)',
                price: 17.00,
                quantity: 15,
            },
            {
                id: this.generateProductId(),
                description: 'Demon Slayer: Kimetsu No Yaiba: Vol. 9, de Koyoharu Gotouge (2022)',
                price: 23.00,
                quantity: 20,
            },
            {
                id: this.generateProductId(),
                description: 'Attack on Titan - Hajime Isayama (2023)',
                price: 16.50,
                quantity: 10,
            },
        ];
    }

    addProduct(product){
        this.products.push(product);
    }

    getAllProducts(){
        return this.products;
    }

    getProductId(id){
        return this.products.find(product => Number(product.id) === Number(id));
    }

    updateProduct(id, updateProduct){
        const index = this.products.findIndex(product => Number(product.id) === Number(id));

        if(index !== -1){
            this.products[index] = {...this.products[index], ...updateProduct}
        }
    }

    deleteProduct(id){
        return this.products = this.products.filter(product => Number(product.id) !== Number(id));
    }

    generateProductId(){
        return Math.floor(Math.random() * 1000) + 1;
    }

}

export { Product };
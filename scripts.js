var products = [{
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Batata Frita",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salada",
        "price": 2.79,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coca Cola",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Água",
        "price": 1.49,
        "active": false,
        "quantity": 1
    }
    //,{ Se eu quiser adicionar mais elementos
    //     "photo": "img/water.png",
    //     "name": "Água2",
    //     "price": 1.49,
    //     "active": false,
    //     "quantity": 1
    // }
];

const selfServiceMachine = {
    data() { //Obj de dados do nosso objeto
        return { //retorna um obj
            products: window.products

        }
    },
    methods: {
        total() {
            let total = 0
            this.products.forEach(function(item) {
                if (item.active) {
                    total += item.quantity * item.price
                }
            })
            return total.toFixed(2)
        }
    }
}

Vue.createApp(selfServiceMachine).mount('#app')
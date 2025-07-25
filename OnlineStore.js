let Products = [{ProductName: "side mirror", Stock: 10, Price: 600.00},
    {ProductName: "Decals", Stock: 15, Price: 150.00},
    {ProductName: "Tire", Stock: 10, Price: 1500.00},
    {ProductName: "JvtPipe", Stock: 12, Price: 6000.00}
];
let MinimumStock = 5;

function stockAlert() {

    let hasLowStock = false;

    Products.forEach(product => {
        if (product.Stock < MinimumStock) {
            console.log(`\nLow Stock: ${product.ProductName} - Only ${product.Stock} left`);
            hasLowStock = true;
        }
    });

    
}

function Purchase(productname, quatity){
    let product = Products.find(p => p.ProductName === productname);

    if(product.Stock >= quatity){
        let UpdatedStock = product.Stock - quatity;
        let TotalPrice = product.Price * quatity;

        console.log("\nUpdated Stock: " + UpdatedStock);
        console.log("Total Cost: " + TotalPrice.toFixed(2));
    }else if(!product){
        console.log("Product Not Found");
    }else{
        console.log(`Not enough stock for ${product.ProductName}. Only ${product.Stock} left.`);
    }

    
}

function ProductList(){
    Products.forEach(prolist => {
        console.log("\nProduct Name: "+ prolist.ProductName + " Stock: " + prolist.Stock + " Price: " + prolist.Price.toFixed(2));
    });
}

ProductList();

stockAlert();


Purchase("Tire", 5);
Purchase("Decals", 5);
Purchase("SideMirror", 10); 

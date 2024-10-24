class AddToCartLocators{
     productFromList (productName){   // If we use "async" here then we need to add "await" in the addTocartActions.js
        return $(`//a[contains(@href,'')]/span[contains(text(),'${productName}')]`);
    }

    productSize(num){
   //   return $(`//a[@href="#" and contains(text(),"S")]`);
        return $(`(//ul[contains(@class,'variant-option-list')]/li)[${num}]`);
    }

    get productColor(){
        return $(`//a[@href="#" and contains(text(),"Black")]`);
    }

    get inputproductQty(){
        return $("//input[@name='qty']");
    }

    get buttonAddtoCart(){
        return $("//button[contains(.,'ADD TO CART')]");
    }

    get buttonViewCartFromModal(){
        return $("//a[@class='add-cart-popup-button']");
    }

    get PriceFromProductPage(){
        return $("//span[@class='sale-price']");
    }

     
}

module.exports = new AddToCartLocators();
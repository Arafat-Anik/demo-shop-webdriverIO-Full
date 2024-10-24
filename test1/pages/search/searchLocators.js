class SearchLocators {
    get searchIcon()
    {
        return $("//a[contains(@class,'search-icon')]");
    }

    get searchInput(){
        return $("//input[@placeholder='Search']");
    }

   // productList(number) {
   //     return $("//div[contains(@class,'product-name')])");
   // }
    productList(number){  
        return $(`(//div[contains(@class,'product-name')])[${number}]`);   //Which number of the product, $$ 2 $ means List ber kora
    }

}

module.exports = new SearchLocators();
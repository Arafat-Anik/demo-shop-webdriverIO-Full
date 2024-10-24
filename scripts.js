//const { $ } = require("execa");
const productName = "Nike react phantom run flyknit 2"; // We can use this for many field
describe (" Demo evershop site automation", () => {
    it ("Successfully Product add into cart", async() => {
        await browser.url("https://demo.evershop.io/");
        await $("//a[@class='search-icon']").click();
        await $("//input[@placeholder='Search']").setValue("Nike");
        //await $("//input[@placeholder='Search']").setValue(Key.ENTER);
        await browser.keys("Enter");
        await $(`//a[contains(@href, '182')]/span[contains(text(),'${productName}')]`).click();
        await $(`//a[@href="#" and contains(text(),"S")]`).click();
        await browser.pause(3000);
        await $(`//a[@href="#" and contains(text(),"Black")]`).click();
        await browser.pause(3000);
       // await $("//input [@name='qty']").sendKeys(2);
       // await $("//input [@name='qty']").clear();      //No needed CLear Previous Value
        await $("//input [@name='qty']").setValue(2); 
        await $("//button[contains(.,'ADD TO CART')]").click();
       // await $("//span[contains(text(),'ADD TO CART')]")).click();             // we can select by text
        await browser.pause(4000); // Wait for View cart Action
        await $("//a[@class='add-cart-popup-button']").click(); 
        await browser.pause(4000);
        await $("//a[contains(.,'CHECKOUT')]").click(); 
      //  await $(By.xpath("//input[@name ='email']").clear(); 
      //  await $("//input[@name ='email']").click(); 
        await $("//input[@placeholder='Email']").click(); 
        await $("//input[@placeholder='Email']").setValue("arafat@gmail.com"); 
        await $("//button[contains(.,'Continue to shipping')]").click(); 
    
        await browser.pause(5000);               // 5 Sec wait
        await browser.quit();

    })
});
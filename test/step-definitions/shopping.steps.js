console.log("LOADING STEP DEFINITIONS");
import { Given, When, Then } from '@wdio/cucumber-framework'; 

import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js'

Given(/^Saya berada di halaman Login$/, async () => {
    // Karena aplikasi otomatis terbuka di halaman Login (dari Desired Capabilities),
    // kita bisa membiarkan langkah ini kosong, atau menambahkan jeda sebentar.
    await driver.pause(1000);
});

When(/^Saya login menggunakan username "([^"]*)" dan password "([^"]*)"$/, async (username, password) => {
    // Kata di dalam tanda kutip otomatis menjadi variabel username & password
    await LoginPage.login(username, password);
});

When(/^Saya mencari produk "([^"]*)" dan menambahkannya ke keranjang$/, async (productName) => {
    // Memanggil fungsi UiScrollable dari POM Inventory
    await InventoryPage.scrollToProductAndClick(productName);
    await InventoryPage.addToCartAndOpen();
});

Then(/^Saya harus melihat produk tersebut berada di dalam keranjang belanja$/, async () => {
    // Validasi akhir
    await CartPage.productTitle.waitForDisplayed({ timeout: 5000 });
    const isProductInCart = await CartPage.productTitle.isDisplayed();
    expect(isProductInCart).toBe(true);
});
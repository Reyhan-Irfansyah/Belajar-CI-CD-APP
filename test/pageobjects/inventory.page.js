class InventoryPage {
    
    // Locators
    get btnCart() { return $('~test-Cart'); }

    // Actions
    async scrollToProductAndClick(productName) {
        // Scroll di halaman daftar produk
        const productLocator = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${productName}")`;
        await $(productLocator).click();
    }

    async addToCartAndOpen() {
        // PERBAIKAN: Scroll ke bawah di halaman detail produk sampai menemukan teks "ADD TO CART", lalu klik!
        const addToCartLocator = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("ADD TO CART")`;
        await $(addToCartLocator).click();

        // Setelah berhasil ditambahkan, klik icon keranjang di pojok kanan atas
        await this.btnCart.click();
    }
}

export default new InventoryPage();
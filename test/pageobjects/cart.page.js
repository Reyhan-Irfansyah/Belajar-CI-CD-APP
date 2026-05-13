class CartPage {
    
    // Locator khusus untuk teks judul produk di dalam keranjang
    get productTitle() { 
        // Menggunakan XPath untuk mencari elemen teks. 
        // (XPath dipakai jika elemen tidak punya Accessibility ID)
        return $('//*[@text="Sauce Labs Onesie"]'); 
    }

}

export default new CartPage();
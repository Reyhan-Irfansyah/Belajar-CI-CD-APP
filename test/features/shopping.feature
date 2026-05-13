Feature: Swag Labs E2E Shopping Flow

  Scenario: Harus berhasil menambahkan produk ke keranjang dan memvalidasinya
    Given Saya berada di halaman Login
    When Saya login menggunakan username "standard_user" dan password "secret_sauce"
    And Saya mencari produk "Sauce Labs Onesie" dan menambahkannya ke keranjang
    Then Saya harus melihat produk tersebut berada di dalam keranjang belanja
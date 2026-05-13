class LoginPage {
    // Kumpulan Elemen
    get inputUsername () { return $('~test-Username'); }
    get inputPassword () { return $('~test-Password'); }
    get btnLogin () { return $('~test-LOGIN'); }
    // get btnLogin () { return $('~test-LOGIN-SALAH'); } // Sengaja disalahkan

    // Fungsi Login
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

export default new LoginPage();
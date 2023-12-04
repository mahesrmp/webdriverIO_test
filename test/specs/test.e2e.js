const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const RegisterPage = require('../pageobjects/register.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.openLogin()

        await LoginPage.login('gilang@gmail.com', 'gilanglang1')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})

// describe('My Register application', () => {
//     it('should register with valid credentials', async () => {
//         await RegisterPage.open()

//         await RegisterPage.register('edu', 'edu@gmail.com', 'edudu11111', 'edudu11111')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

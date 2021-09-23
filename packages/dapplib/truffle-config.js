require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender spot gravity rotate magic alcohol coral light army gauge'; 
let testAccounts = [
"0xa14ba5918c6092dd323d886ccc7117dd4f19dc44901e5068c0143b44d6a943ea",
"0x6fa7c16ec5980675c8aea01d47e47beaa4dd1fb6e52463fadc4f71b627f2cb83",
"0xedca40a12fea0a4699ea37cf3aaa9cd18698a4cdd7ed4c784c50f2f000cf7424",
"0x0edee573ddce19464ee99b79365c9297cdcaa85e195b42c34e5fc432355e1d33",
"0x56653741e7c8083fbb6963b684af145e848274fa16b1928eb5f9aef7ca40b27f",
"0x96db66645ad8131c5c8b8fd4d671d09dff318cf7fe0380c34cd7b11236eb9ed8",
"0x3c87497765faaf668bf72804424fbd0c09f6385877ddc62e9967fde3a97bdb24",
"0xd5e1a51e5ad2f38fc7f9f6aabddda617bd404dafcadea957ad602c12cd4c59ea",
"0x518dab405b49ff31b75dc9400c37d71bb3992033a9c5fe3d6feb4a53a239c76a",
"0xfbf984e2189a030080ab0718ff911d4fb93120b613eed594ac634901bc92dd7d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


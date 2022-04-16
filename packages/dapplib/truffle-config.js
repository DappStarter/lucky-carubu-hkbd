require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture stomach radar six proof inside light army gauge'; 
let testAccounts = [
"0x11f1d7393735769859738594eaa343472570a13062ca7bbcf385e7159b8af355",
"0x86c66c077b5ed5e596e73d91e0564ae991f0379dc0771cfd27ce0af46d26ab0f",
"0xbb7e390535dda7aa7336c108dc262342beb548fe5025d5ccf2dbba0bb866c10e",
"0xa945de2098e0cbfafe6f7029219eca19d6a1a1ec8a34e6cab141f6a9c4732c3b",
"0x3087548bf454f8228064cf95e7fa507aeef83ea046c02f1f2de1108e4a654722",
"0x5bdd1537ae93c1c1160228392f14e84297ef436622c19cca7c5c4da05eec9204",
"0xf9cbaf1abadc7db4cb3999b5b19aed3cfbdb57ed77dc020c5c0e634784e17856",
"0xa20412b51162a3c359947fb3e0264ccc0bd0f5100fc89c855ca8f4444b69c0be",
"0xd59339b83fb7d36962cdc3651716454d055a73a1d021d1e7d8ddb9bbf3abb06f",
"0xfb572f9278c59c5459326e2e32cecb25b2d2d17dc5999336e51b2e3cdbc7358d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


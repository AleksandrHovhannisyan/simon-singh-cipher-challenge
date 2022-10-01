/* Stage 2: Caesar Shift Cipher: https://simonsingh.net/cryptography/cipher-challenge/the-ciphertexts/stage-2/ */
const ciphertext = `MHILY LZA ZBHL XBPZXBL MVYABUHL HWWPBZ JSHBKPBZ JHLJBZ
KPJABT HYJHUBT LZA ULBAYVU`;

// Had to brute force this one... Looks like it's in Latin, not English, so frequency analysis didn't work so well.
// Right shift of 19: https://cryptography-algorithms.netlify.app/ciphers/caesar/output/?message=MHILY+LZA+ZBHL+XBPZXBL+MVYABUHL+HWWPBZ+JSHBKPBZ+JHLJBZ%0D%0A%0D%0AKPJABT+HYJHUBT+LZA+ULBAYVU&shift=19&key=&alphabet=abcdefghijklmnopqrstuvwxyz&operation=decipher

// Solution: faber est suae quisque fortunae appius claudius caecus dictum arcanum est neutron

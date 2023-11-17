import CryptoJS from 'crypto-js'; // Import CryptoJS library (install via npm/yarn)

// Function to encrypt and encode the access token before storage
const encryptAndStoreToken = (accessToken) => {
  // Your encryption key (keep this secure, never expose it)
  const encryptionKey = 'YourSecretEncryptionKey'; // Replace with a strong key

  // Encrypt the access token using CryptoJS AES encryption
  const encryptedToken = CryptoJS.AES.encrypt(accessToken, encryptionKey).toString();

  // Encode the encrypted token to a format suitable for storage (e.g., Base64)
  const encodedToken = btoa(encryptedToken);

  // Store the encoded token in sessionStorage
  sessionStorage.setItem('encryptedAccessToken', encodedToken);
};

// Function to decrypt and retrieve the access token
const retrieveAndDecryptToken = () => {
  const encodedToken = sessionStorage.getItem('encryptedAccessToken');

  if (encodedToken) {
    // Decode the token from storage
    const encryptedToken = atob(encodedToken);

    // Your encryption key (must match the key used for encryption)
    const encryptionKey = 'YourSecretEncryptionKey'; // Replace with the same key used for encryption

    // Decrypt the token using CryptoJS AES decryption
    const decryptedToken = CryptoJS.AES.decrypt(encryptedToken, encryptionKey).toString(CryptoJS.enc.Utf8);

    // Use the decrypted token
    return decryptedToken;
  }

  return null; // Return null if no token found
};

export { encryptAndStoreToken, retrieveAndDecryptToken };
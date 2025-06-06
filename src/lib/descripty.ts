import CryptoJS from 'crypto-js'

async function decryptPassword(encryptedText: string): Promise<string> {
  try {
    
    // key para decripty
    const KEY: string = 'D6F3Efeq3v5PQdsTMuSl472F3AvJqMqS'

    // Base64
    const combined: CryptoJS.lib.WordArray = CryptoJS.enc.Base64.parse(encryptedText)

    // Extrair IV (primeiros 16 bytes = 4 words)
    const iv: CryptoJS.lib.WordArray = CryptoJS.lib.WordArray.create(combined.words.slice(0, 4))

    // texto criptografado
    const encryptedBytes: CryptoJS.lib.WordArray = CryptoJS.lib.WordArray.create(combined.words.slice(4))

    //  descriptografia
    const decrypted: CryptoJS.lib.WordArray = CryptoJS.AES.decrypt(
      CryptoJS.lib.CipherParams.create({ ciphertext: encryptedBytes }),
      CryptoJS.enc.Utf8.parse(KEY),
      {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    )
    // Converter para string
    return decrypted.toString(CryptoJS.enc.Utf8)
  } catch (e: unknown) {
    console.error('Erro ao descriptografar:', e)
    throw new Error(`Falha na descriptografia: ${e instanceof Error ? e.message : 'Erro desconhecido'}`)
  }
}

export default decryptPassword
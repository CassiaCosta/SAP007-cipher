const cipher = {
  encode: function(offset, string) {
    if(string == "" || string == null || offset == "" || offset == null){ 
      alert("Insira um deslocamento e texto válidos!");  
      throw new TypeError("Some informations are missing:", "cipher.js", 4);
    }
    let encodedMessage = "";
    for (let i = 0; i < string.length; i++) {
      let code = string.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        encodedMessage += String.fromCharCode((code - 65 + offset) % 26 + 65);
      } else if ( code >= 97 && code <= 122) {
        encodedMessage += String.fromCharCode((code - 97 + offset) % 26 + 97);
      } else if (code >= 123 && code <= 254) {
        encodedMessage += String.fromCharCode((code - 123 + offset) % 123 + 123);
      } else if (string.charCodeAt(i) == 32) {
        encodedMessage += string.charAt(i);
      }
    }
    return encodedMessage;
  },

  
  decode: function(offset, string) {
    if(string == "" || string == null || offset == "" || offset == null){ 
      alert("Insira um deslocamento e texto válidos!");  
      throw new TypeError("Some informations are missing:", "cipher.js", 25);
    }
    let decodedMessage = "";
    for (let i = 0; i < string.length; i++) {
      const code = string.charCodeAt(i);
      if(code >= 65 && code <=90) {
        decodedMessage += String.fromCharCode((code - 90 - offset) % 26 + 90);
      } else if(code >= 97 && code <= 122) {
        decodedMessage += String.fromCharCode((code - 97 - offset) % 26 + 97);
      } else if (code >= 123 && code <= 254) {
        decodedMessage += String.fromCharCode((code - 123 - offset % 123) % 123 + 123);
      } else if(string.charCodeAt(i) == 32) {
        decodedMessage += string.charAt(i);
      }
    }
    return decodedMessage;
  }
};

export default cipher;
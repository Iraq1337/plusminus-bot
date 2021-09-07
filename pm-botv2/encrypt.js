var crypto = require('crypto');
var getkey = (() => {
    var hash = crypto.createHash('sha512');
    data = hash.update('SgZ7QlO6dQfyJwU76A4xTSvJunLmUWk0', 'utf-8');
    var gen_hash = data.digest('hex');
    var key = gen_hash.toString().substring(0,32)
    return key.toString().toUpperCase();
});
var encrypt = ((discordid) => {
    let cipher = crypto.createCipheriv('aes-256-cbc', getkey(), "198r8ZoZ0EGtM29y");
    let encrypted = cipher.update(discordid, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
});
var decrypt = ((encrypted) => {
    let decipher = crypto.createDecipheriv('aes-256-cbc', getkey(), "198r8ZoZ0EGtM29y");
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    return (decrypted + decipher.final('utf8'));
});

module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;
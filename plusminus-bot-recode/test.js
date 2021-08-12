const axios = require('axios');
const options = {
    method: 'POST',
    headers: { 'discordid' : '509073024503250944' },
    data: "plusminus-bot-api",
    url: 'https://auth.plusminus.vip/reset',
};
axios(options).then(plusminus =>{
    console.log(plusminus.data)
})
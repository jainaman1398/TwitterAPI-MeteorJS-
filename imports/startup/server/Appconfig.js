const Twit=require('twit');

console.log("yoy");

export default Appconfig= new Twit({
    consumer_key:    'yTxUCmkAdCLLNjwxprtjW79aa',
    consumer_secret:      'uGkAJa5D77MGTgX7dvpfi3bhVnsrSSxuU9MVpjTJTPKlBEuP8s',
    access_token:         '3385793577-DRLsCWXDqCHLBkFO3xNKngQb0DkG4uBM78MWfcj',
    access_token_secret:  '3XKOom25p6FsKck2jmaI4FUrAtoXav6YTMl03EIXIaup5',
    app_only_auth:         true,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
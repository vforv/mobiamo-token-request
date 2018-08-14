const Paymentwall = require('paymentwall');
const md5 = require('md5');
const axios = require('axios');

const key = '';

const payload = {
    uid: "user_1",
    sign_version: 2,
    ts: Date.now(),
    key,
    evaluation: 1
};

const sign = Paymentwall.WidgetSignature.calculateSignature(payload, key, 2);

// const signMd5 = md5('key=87e526c8dd08ec62a1f214ceae645ca2sign_version=2ts=1532593501uid=user_187e526c8dd08ec62a1f214ceae645ca2');

const payloadWithSign = {
    ...payload,
    sign: sign
};

axios.post('https://api.paymentwall.com/api/mobiamo/token', payloadWithSign)
    .then((result) => {
        console.log(result.data)
    })
    .catch((error) => {
        console.log(error)
    })
<?php
$params = array(
        'key' => '7ce334db7f80370de14c5b9933c46269',
        'sign_version' => '2',
        'ts' => '1532593501',
        'evaluation' => '1'
);

$private_key = '87e526c8dd08ec62a1f214ceae645ca2';

ksort($params);        // sort parameters in alphabetical order

$baseString = '';
foreach ($params as $key => $value) {
    $baseString .= $key . '=' . ($value === false ? '0' : $value);
}

$baseString .= $private_key;
$sign = MD5($baseString);
echo $sign;
$params['sign'] .= $sign;

$url = 'https://api.paymentwall.com/api/payment-systems/?' . http_build_query($params);
$payment_systems = json_decode(file_get_contents($url));
?>
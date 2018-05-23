var express = require('express');

var path = require('path');
var bodyParser = require('body-parser');
var url = require('url');
var app = express();

var sampleArray = [{"id":"e8d93020-ecd3-468b-8347-e41ca79e50b5","first_name":"Madge","last_name":"Beevor","birth_date":"08/24/1980","credit_card":"3046116334704822","iban":"MK41 807W 3OI0 Y0LE C96","currency":"Euro","credit_card_type":"diners-club-carte-blanche","balance":"9263.59"},
{"id":"b43995c3-48af-40a6-b0a4-f71806cedad9","first_name":"Emlynne","last_name":"Ickovitz","birth_date":"04/07/1987","credit_card":"3568075518246061","iban":"GT61 D6KI 4Q0I GUYI SSOE ULQ2 O5DB","currency":"Zloty","credit_card_type":"jcb","balance":"9024.59"},
{"id":"7cf3d992-c044-4c48-acbc-178f9cd55379","first_name":"Piper","last_name":"Boylan","birth_date":"09/09/1992","credit_card":"3550924846088168","iban":"IT21 B464 5487 1474 KTJI QTMR 9UN","currency":"Dong","credit_card_type":"jcb","balance":"700.90"},
{"id":"4a429719-869d-4dc0-8e5d-701ab44a3460","first_name":"Russ","last_name":"Leveritt","birth_date":"07/12/1988","credit_card":"5641825917153607","iban":"CH75 3404 6XCC TQMT W43P P","currency":"Zloty","credit_card_type":"switch","balance":"6344.16"},
{"id":"dbe28f2b-8050-4c50-9d68-a5ec11511c22","first_name":"Natty","last_name":"Dumbrill","birth_date":"04/12/1986","credit_card":"3585446687674699","iban":"PT49 8919 8296 3193 8832 4825 1","currency":"Yuan Renminbi","credit_card_type":"jcb","balance":"6513.43"},
{"id":"53a162a6-54a1-4536-b828-eac7b5550026","first_name":"Che","last_name":"Raddon","birth_date":"07/16/1981","credit_card":"5100175587219054","iban":"DE49 1734 8575 7641 3255 87","currency":"Real","credit_card_type":"mastercard","balance":"9056.50"},
{"id":"9ad03efc-24a5-4981-add3-911b26b49e42","first_name":"Judd","last_name":"Parlatt","birth_date":"02/06/1992","credit_card":"6762576419456653","iban":"DK09 8325 8235 8510 82","currency":"Euro","credit_card_type":"maestro","balance":"3297.15"},
{"id":"e276001d-5a9f-485e-a08f-7b4b7b12eae1","first_name":"Salvidor","last_name":"Gianneschi","birth_date":"10/07/1998","credit_card":"5345767468702292","iban":"TN65 0649 2192 3960 7761 8562","currency":"Yuan Renminbi","credit_card_type":"mastercard","balance":"7804.78"},
{"id":"fcc42681-16ba-4673-81bb-219fafa68ab5","first_name":"Dimitry","last_name":"Lorens","birth_date":"02/19/1998","credit_card":"3017038678627633","iban":"CH43 1601 6KUR GBW2 FNDU F","currency":"Peso","credit_card_type":"diners-club-carte-blanche","balance":"1443.46"},
{"id":"a4c3c897-0111-44ac-a57f-25067209f625","first_name":"Haroun","last_name":"Saxon","birth_date":"10/07/1999","credit_card":"5602256225555522","iban":"FR73 4555 9905 27NG 7IOK NS4B F49","currency":"Rupee","credit_card_type":"bankcard","balance":"9473.66"},
{"id":"fe76eb5e-23b2-41ed-95a0-651f207fc7fc","first_name":"Hal","last_name":"Willingam","birth_date":"03/20/1996","credit_card":"3571473289839823","iban":"MD65 ZCM5 YOZF EZXC AETF KKAP","currency":"Ruble","credit_card_type":"jcb","balance":"5076.26"},
{"id":"53cc4e7e-f511-45c0-9e98-99d058d47ebf","first_name":"Kerby","last_name":"McGibbon","birth_date":"03/04/1978","credit_card":"4905485641112350","iban":"AD21 6837 2510 G3YZ RZYV YEZD","currency":"Colon","credit_card_type":"switch","balance":"1082.23"},
{"id":"2e01cf2b-6dce-426b-a493-8b48e4344930","first_name":"Fleur","last_name":"MacAdie","birth_date":"07/27/1978","credit_card":"4295233896739333","iban":"LT61 6570 6825 1699 1667","currency":"Ruble","credit_card_type":"visa","balance":"1800.74"},
{"id":"c61afd69-a2fa-4363-ade5-2b772c43cdbf","first_name":"Donall","last_name":"Riply","birth_date":"08/20/1976","credit_card":"2018658010069853","iban":"ME43 5670 6717 7250 2871 65","currency":"Yuan Renminbi","credit_card_type":"diners-club-enroute","balance":"4540.67"},
{"id":"97703b5c-a25d-4d82-a3dc-9ad62e3e3950","first_name":"Wilhelmine","last_name":"Cockrell","birth_date":"03/27/1983","credit_card":"3535662931549708","iban":"RO17 SLUA XO44 AUJW JOFP ENYJ","currency":"Hryvnia","credit_card_type":"jcb","balance":"4486.31"},
{"id":"468423be-c53a-40bc-bbb9-2574e7aa9b18","first_name":"Eddie","last_name":"Hilbourne","birth_date":"05/09/1971","credit_card":"3564481750992947","iban":"AD65 3761 6351 14VY VYZE XSQM","currency":"Real","credit_card_type":"jcb","balance":"8785.76"},
{"id":"fa627d0f-beb7-4ca3-8516-d2b78e019c61","first_name":"Wolfie","last_name":"Pickworth","birth_date":"10/24/1979","credit_card":"6333112318300246","iban":"MD64 8YZ6 DHJS F5TK A8AF 5CRD","currency":"Ngultrum","credit_card_type":"switch","balance":"7266.14"},
{"id":"42e913ed-36c1-4a77-98fe-85f6722c4744","first_name":"Lionello","last_name":"Battersby","birth_date":"04/30/1982","credit_card":"3746226139438014","iban":"PT85 1420 4543 0450 2159 7515 3","currency":"Yuan Renminbi","credit_card_type":"americanexpress","balance":"5141.55"},
{"id":"65c2160a-019d-455d-aae0-af27d8e8c7cb","first_name":"Oberon","last_name":"Beane","birth_date":"03/08/1972","credit_card":"3584852347534770","iban":"DK52 6495 4931 7812 54","currency":"Rupiah","credit_card_type":"jcb","balance":"8238.08"},
{"id":"9eee6ef5-bd34-47f8-a94a-b6e91bf3b542","first_name":"Cissy","last_name":"Menichelli","birth_date":"01/07/1988","credit_card":"3535911898393521","iban":"GE82 MM26 0080 2075 0352 12","currency":"Euro","credit_card_type":"jcb","balance":"8214.11"},
{"id":"0f6426c3-3ed5-4dbd-a465-1808f37c0364","first_name":"Riobard","last_name":"Chattaway","birth_date":"10/04/1982","credit_card":"30180663075178","iban":"CY30 6985 8123 KRL3 4XQF 7UBA M07P","currency":"Real","credit_card_type":"diners-club-carte-blanche","balance":"8834.99"},
{"id":"7d80b118-ca27-4dad-9dc5-ad34399370fc","first_name":"Eulalie","last_name":"Rainger","birth_date":"05/15/1991","credit_card":"4913421446588994","iban":"AT51 5351 8296 9639 0941","currency":"Yuan Renminbi","credit_card_type":"visa-electron","balance":"9407.98"},
{"id":"d28f1cad-84bb-40ad-887b-561245a6b2e0","first_name":"Roch","last_name":"Ayerst","birth_date":"12/30/1995","credit_card":"3550627075585297","iban":"GT33 PBO1 HEFQ UAWT LW5Q PRU7 LDR4","currency":"Rupiah","credit_card_type":"jcb","balance":"3715.68"},
{"id":"3b772842-ee41-4e4a-850a-ad1eb5aae9ea","first_name":"Frieda","last_name":"Carruth","birth_date":"05/22/1994","credit_card":"5602232677030303","iban":"LB24 0486 VLUO 8HEI UY98 OQU1 YCXS","currency":"Dollar","credit_card_type":"china-unionpay","balance":"4591.15"},
{"id":"0be545f2-7e25-474b-b755-9c908d4e6ac0","first_name":"James","last_name":"Nafziger","birth_date":"09/01/1973","credit_card":"2014341661544334","iban":"FR47 4231 1336 75XM 6B65 N9BB V62","currency":"Peso","credit_card_type":"diners-club-enroute","balance":"355.99"},
{"id":"cedec005-18b8-47d3-9a6d-4050926f239f","first_name":"Conrade","last_name":"Wagon","birth_date":"12/04/1989","credit_card":"3561284332864037","iban":"IS07 1826 7657 8953 2742 3062 51","currency":"Euro","credit_card_type":"jcb","balance":"4925.93"},
{"id":"44fdbb2b-458a-4901-83d0-dbde58e3551f","first_name":"Craggie","last_name":"Ebbin","birth_date":"10/28/1976","credit_card":"5602239723297946","iban":"ME15 0076 9238 6986 5004 39","currency":"Franc","credit_card_type":"bankcard","balance":"3224.82"},
{"id":"e264b987-86a5-44b6-ac00-39245ad764c2","first_name":"Constance","last_name":"Curl","birth_date":"10/06/1971","credit_card":"3008858681265254","iban":"PS46 BDVC F6OX IDBI J57U GOTN F214 R","currency":"Rupiah","credit_card_type":"diners-club-carte-blanche","balance":"6168.89"},
{"id":"a6cafbe3-c131-4ffa-b146-c067a30c9d56","first_name":"Charil","last_name":"Senecaut","birth_date":"04/07/1991","credit_card":"6706463993193531","iban":"FI39 2007 8971 4211 69","currency":"Yen","credit_card_type":"laser","balance":"6238.39"},
{"id":"e5ff8607-708b-40d1-996a-e968ad436096","first_name":"Mallorie","last_name":"Behneke","birth_date":"08/17/1980","credit_card":"3021493787772933","iban":"PS89 YPFY MZJV 1YWS VSZR K5DX FTQC X","currency":"Yen","credit_card_type":"diners-club-carte-blanche","balance":"3812.07"},
{"id":"ad5dd9bb-de38-4822-9b51-a96a42a0294b","first_name":"Babita","last_name":"Dennett","birth_date":"05/21/1998","credit_card":"3543182089577567","iban":"SE62 9475 0607 7282 7668 2497","currency":"Lek","credit_card_type":"jcb","balance":"9069.84"},
{"id":"dc4914fe-3c56-4ad9-944a-d059335e266d","first_name":"Veda","last_name":"Evison","birth_date":"01/15/1978","credit_card":"4903546908738513","iban":"BH36 UUXS WDVI K0GT F6SA S4","currency":"Peso","credit_card_type":"switch","balance":"2709.74"},
{"id":"144862b5-8fec-4a89-b283-72bbe4f62968","first_name":"Taryn","last_name":"Beagrie","birth_date":"01/29/1972","credit_card":"3544063094569790","iban":"PS71 EAIG 2JTO NJSR FIKH UTCT IYMB Y","currency":"Rupiah","credit_card_type":"jcb","balance":"9903.78"},
{"id":"7e4c1924-47e3-4b0c-96e4-c7eb73671fd2","first_name":"Gilberta","last_name":"Crudge","birth_date":"05/04/1996","credit_card":"3569552295333709","iban":"FR53 0044 5929 77UB VEPA ZWAU A82","currency":"Real","credit_card_type":"jcb","balance":"3085.85"},
{"id":"55cf2f27-c3dc-4ec1-9323-5ad7d8c0a342","first_name":"Reinhold","last_name":"Ceci","birth_date":"08/24/1984","credit_card":"2018000909960593","iban":"LI29 5736 173X BARI RWMJ E","currency":"Sol","credit_card_type":"diners-club-enroute","balance":"1173.61"},
{"id":"f0a2f69e-7213-4a6d-8318-d350f383f5ab","first_name":"Lilia","last_name":"Christley","birth_date":"06/28/1986","credit_card":"3045721831919833","iban":"GL73 8458 2604 2483 98","currency":"Ruble","credit_card_type":"diners-club-carte-blanche","balance":"949.10"}];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname));

/* GET customers */ 
app.get('/api/getCustomers', function(req,res) {
  res.json(sampleArray);
});

app.get('/api/getCustomer', function(req,res) {
  
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log('this is single customer:', query.customer);
  var customer = sampleArray.find((elem) => {return elem.first_name === query.customer});
  //console.log('customer:', customer);
  res.json(customer);
});

app.post('/api/checkCCNo', function(req,res) {
  let ccNo = req.body.ccNo;
  console.log('ccNo', ccNo);
  let ccRegex = new RegExp('^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$');
  let isValid = ccRegex.test(ccNo);
  //console.log('ccNo isValid', isValid);
  let response = {
    ccno: ccNo,
    isValid: isValid
  }
  res.json(response);
});

app.post('/api/checkIban', function(req,res) {
  let iban = req.body.iban;
  console.log('iban', iban);
  let ibanRegex = new RegExp('^[A-Z]{2}(?:\s*[0-9a-zA-Z]\s*){20}$');
  let isValid = ibanRegex.test(iban);
  //console.log('iban isValid', isValid);
  let response = {
    iban: iban,
    isValid: isValid
  }
  res.json(response);
});

app.get('/api/customer', function(req,res){
  console.log('customer.get');
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  if (query.customer){
    let customer = {};
    customer = sampleArray.find(function(elem){
      return elem.first_name === query.customer;
    });
    res.json(customer);
  }else{
    res.json(sampleArray);
  }
})

app.post('/api/customer', function(req,res){
  console.log('customer.post');
  let response = {}
  res.json(response);
})

app.put('/api/customer', function(req,res){
  console.log('customer.put');
  let response = {}
  res.json(response);
})

app.delete('/api/customer', function(req,res){
  console.log('customer.delete');
  let response = {}
  res.json(response);
})

/* GET home page. */
app.get('/*', function(req, res, next) {
  //Path to your main file
  res.status(200).sendFile(path.join(__dirname+'/index.html')); 
});

let port = 3000;
app.listen(port, function(){
  console.log('App is running and listening on port:', port);
});

module.exports = app;

var InfoContract = artifacts.require("InfoContract");

module.exports = async function(callback) {

   let info = await InfoContract.at('0xe0aa92b7834a5a808adc1f8922a84deb52e08f47');
   let ret = await info.getInfo();
   console.log(ret);


    callback();
}
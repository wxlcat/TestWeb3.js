var InfoContract = artifacts.require("InfoContract");

module.exports = async function(callback) {

   let info = await InfoContract.at('0xf91f6e268e7b06af58af94ba4e1b1f1e96f5c721');

   let ret = await info.getInfo();
   console.log('getInfo\n', ret);

   ret = await info.setInfo('b', '2', {privateFor:["cmDojDwyBbzL8KyARJuTYxInTI4p3yI84qJ62e6z1h8="], gas:900000, gasPrice:0});
   console.log('setInfo\n', ret);

   ret = await info.getInfo();
   console.log('getInfo\n', ret);


    callback();
}
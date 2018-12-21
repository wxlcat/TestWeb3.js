var InfoContract = artifacts.require("InfoContract");

module.exports = async function(callback) {

   let info = await InfoContract.at('0xf91f6e268e7b06af58af94ba4e1b1f1e96f5c721');
   let ret = await info.getInfo();
   console.log(ret);

    callback();
}
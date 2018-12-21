var InfoContract = artifacts.require("./InfoContract");

module.exports = (deployer) => {

    deployer.then(async ()=>{
        let ic = await deployer.deploy(InfoContract, "wxl", 30, {privateFor:["cmDojDwyBbzL8KyARJuTYxInTI4p3yI84qJ62e6z1h8="]});
    });    
}

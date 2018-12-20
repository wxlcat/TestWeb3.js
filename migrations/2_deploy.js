var InfoContract = artifacts.require("./InfoContract");

module.exports = (deployer) => {

    deployer.then(async ()=>{
        let ic = await deployer.deploy(InfoContract, "wxl", 30);
    });    
}

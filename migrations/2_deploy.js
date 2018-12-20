var InfoContract = artifacts.require("./InfoContract");

module.exports = (deployer) => {

    deployer.then(async ()=>{
        let ic = await deployer.deploy(InfoContract, "wxl", 30, {privateFor:["BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo="]});
    });    
}

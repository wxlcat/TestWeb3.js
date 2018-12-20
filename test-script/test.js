module.exports = (callback) => {

    web3.eth.getBlock(5, (error, ret)=>{
        console.log(ret);
    });

    callback();
}
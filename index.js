// web3.js 0.20.x
window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
        web3js = new Web3(web3.currentProvider);
        console.log("use currentProvider")
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        console.log("use localhost");
    }
})   

function loaded() {       

    var Address = "0x83e3fcff666afc0834e9ec06222b4c8e3e39f078"; // age indexed
    var info;

    $.getJSON("build/contracts/InfoContract.json", "", (data)=>{
        info = web3js.eth.contract(data.abi).at(Address);
    });    
    
    $("#getInfo").click(function (){
        info.getInfo.call({from:'0x5492C0300A995BB498b1731b335dD7E84a279306'}, 
            (error, result) => {
                if(!error) {
                    console.log(result);
                }
                else{
                    console.error(error);
                }
            }
        )
    });

    $("#setInfo").click(function (){
        let name = $("#name").val();
        let age = $("#age").val();
        info.setInfo.sendTransaction(name, age, {from:"0x5492C0300A995BB498b1731b335dD7E84a279306"}, (error, ret)=>{
            if(!error)
                console.log(ret);
            else
                console.warn(error);
        })
    });

    $("#getEvent_filter").click(()=>{

        var filter = web3js.eth.filter({
            fromBlock: 0, 
            toBlock: 'latest', 
            address: Address
        });

        filter.get((error,ret)=>{
            if(!error) {
                console.log(ret);
            }
            else{
                console.error(error);
            }
        });
    });

    $("#getEvent").click(()=>{

        var evt = info.allEvents({fromBlock: 0, toBlock: 'latest'});
        evt.get((error,ret)=>{
            if(!error) {
                console.log(ret);
            }
            else{
                console.error(error);
            }
        });
    });

    $("#watchEvent_filter").click(()=>{

        var filter = web3js.eth.filter({
            fromBlock: 0, 
            toBlock: 'latest', 
            address: Address
        });

        filter.watch((error,ret)=>{
            if(!error) {
                console.log(ret);
            }
            else{
                console.error(error);
            }
        });

    });

    $("#watchEvent").click(()=>{

        var evtSetInfo = info.SetInfo({_age:30});
        evtSetInfo.watch((error,ret)=>{
            if(!error) {
                console.log("ret", ret);
            }
            else{
                console.error("error", error);
            }
        });
    });


}
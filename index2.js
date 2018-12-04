// web3.js 1.0
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

    var Address = "0x50c50b33b6ceaf7e0ea2d0deb92b684407686cec"; // age indexed
    var info;

    $.getJSON("build/contracts/InfoContract.json", "", (data)=>{
        info = new web3js.eth.Contract(data.abi, Address);
        console.log("info", info);
    });    

    $("#getInfo").click(function (){
        info.methods.getInfo().call({from:'0x5492C0300A995BB498b1731b335dD7E84a279306'}, 
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
        info.methods.setInfo(name, age).send({from:"0x5492C0300A995BB498b1731b335dD7E84a279306"}, (error, ret)=>{
            if(!error)
                console.log(ret);
            else
                console.warn(error);
        })
    });

    $("#once").click(()=>{

        info.once('SetInfo', {fromBlock: 0}, (error, ret)=>{
            if(!error) {
                console.log(ret);
            }
            else{
                console.error(error);
            }
        });

    });

    $("#events").click(()=>{

        var evt = info.events.SetInfo({fromBlock: 0}, (error, ret)=>{
            if(!error) {
                console.log(ret);
            }
            else{
                console.error(error);
            } 
        });
        console.log(evt);
    });

    $("#allEvents").click(()=>{

        info.events.allEvents({fromBlock: 0}, (error, ret)=>{
            if(!error) {
                console.log(ret);
            }
            else{
                console.error(error);
            } 
        });

    });


}
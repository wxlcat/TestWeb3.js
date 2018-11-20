window.addEventListener('load', function() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
})   

function loaded() {              

    var abi = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_name",
                    "type": "string"
                },
                {
                    "name": "_age",
                    "type": "uint256"
                }
            ],
            "name": "setInfo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getInfo",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];

    var info = new web3js.eth.Contract(abi, "0x6ee95b5891d8c4fe1ba580b6f6115731925d534c");
    
    $("#setInfo").click(function (){
        info.methods.setInfo($("#name").val(), $("#age").val()).send({from: '0x5dca0fD7dc428fF7Af36513696CeaF6970312d65'}).then(
            function(receipt) {
                console.log(receipt);
            }
        );
    });

    $("#getInfo").click(function (){
        info.methods.getInfo().call(
            {from: '0x5dca0fD7dc428fF7Af36513696CeaF6970312d65'}, 
            function(error, result) {
                if(!error) {
                    console.log(result);
                }
                else{
                    console.error(error);
                }
            }
        )
    });
}
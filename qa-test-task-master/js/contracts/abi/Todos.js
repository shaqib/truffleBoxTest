const TodosAbi = 
    [
        {
            "constant": false,
            "inputs": [],
            "name": "kill",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "caddress",
                    "type": "address"
                }
            ],
            "name": "get_coinBalance",
            "outputs": [
                {
                    "name": "",
                    "type": "int32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_contract",
                    "type": "address"
                },
                {
                    "name": "_tf",
                    "type": "bool"
                }
            ],
            "name": "set_ContractAddress",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                },
                {
                    "name": "_change",
                    "type": "int32"
                }
            ],
            "name": "set_TodosBalance",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint16"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint16"
                }
            ],
            "name": "Transfer",
            "type": "event"
        }
    ]; 

module.exports = {TodosAbi}; 
export const erc20ABI = [
    // balanceOf
    {
        "constant":true,
        "inputs":[{"name":"_owner", "type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance", "type":"uint256"}],
        "type":"function",
    },
    // decimals
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8",
            },
        ],
        "payable": false,
        "type": "function",
    },
    {
        "constant": true,
        "inputs": [
            {"name": "_owner", "type": "address"},
            {"name": "_spender", "type": "address"},
        ],
        "name": "allowance",
        "outputs": [
            {"name": "", "type": "uint256"},
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
    },
    {
        "constant": false,
        "inputs": [
            {"name": "_spender", "type": "address"},
            {"name": "_value", "type": "uint256"},
        ],
        "name": "approve",
        "outputs": [
            {"name": "", "type": "bool"},
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
    },
];

export const peggyABI = [
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_peggyId",
                "type": "bytes32",
            },
            {
                "internalType": "uint256",
                "name": "_powerThreshold",
                "type": "uint256",
            },
            {
                "internalType": "address[]",
                "name": "_validators",
                "type": "address[]",
            },
            {
                "internalType": "uint256[]",
                "name": "_powers",
                "type": "uint256[]",
            },
        ],
        "stateMutability": "nonpayable",
        "type": "constructor",
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_tokenContract",
                "type": "address",
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_sender",
                "type": "address",
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "_destination",
                "type": "bytes32",
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256",
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_eventNonce",
                "type": "uint256",
            },
        ],
        "name": "SendToHubEvent",
        "type": "event",
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_tokenContract",
                "type": "address",
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_sender",
                "type": "address",
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "_destination",
                "type": "bytes32",
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256",
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_eventNonce",
                "type": "uint256",
            },
        ],
        "name": "SendToMinterEvent",
        "type": "event",
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_batchNonce",
                "type": "uint256",
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_token",
                "type": "address",
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_eventNonce",
                "type": "uint256",
            },
        ],
        "name": "TransactionBatchExecutedEvent",
        "type": "event",
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_newValsetNonce",
                "type": "uint256",
            },
            {
                "indexed": false,
                "internalType": "address[]",
                "name": "_validators",
                "type": "address[]",
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "_powers",
                "type": "uint256[]",
            },
        ],
        "name": "ValsetUpdatedEvent",
        "type": "event",
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_erc20Address",
                "type": "address",
            },
        ],
        "name": "lastBatchNonce",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256",
            },
        ],
        "stateMutability": "view",
        "type": "function",
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenContract",
                "type": "address",
            },
            {
                "internalType": "bytes32",
                "name": "_destination",
                "type": "bytes32",
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256",
            },
        ],
        "name": "sendToHub",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenContract",
                "type": "address",
            },
            {
                "internalType": "bytes32",
                "name": "_destination",
                "type": "bytes32",
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256",
            },
        ],
        "name": "sendToMinter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address",
            },
        ],
        "name": "state_lastBatchNonces",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256",
            },
        ],
        "stateMutability": "view",
        "type": "function",
    },
    {
        "inputs": [],
        "name": "state_lastEventNonce",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256",
            },
        ],
        "stateMutability": "view",
        "type": "function",
    },
    {
        "inputs": [],
        "name": "state_lastValsetCheckpoint",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32",
            },
        ],
        "stateMutability": "view",
        "type": "function",
    },
    {
        "inputs": [],
        "name": "state_lastValsetNonce",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256",
            },
        ],
        "stateMutability": "view",
        "type": "function",
    },
    {
        "inputs": [],
        "name": "state_peggyId",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32",
            },
        ],
        "stateMutability": "view",
        "type": "function",
    },
    {
        "inputs": [],
        "name": "state_powerThreshold",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256",
            },
        ],
        "stateMutability": "view",
        "type": "function",
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "_currentValidators",
                "type": "address[]",
            },
            {
                "internalType": "uint256[]",
                "name": "_currentPowers",
                "type": "uint256[]",
            },
            {
                "internalType": "uint256",
                "name": "_currentValsetNonce",
                "type": "uint256",
            },
            {
                "internalType": "uint8[]",
                "name": "_v",
                "type": "uint8[]",
            },
            {
                "internalType": "bytes32[]",
                "name": "_r",
                "type": "bytes32[]",
            },
            {
                "internalType": "bytes32[]",
                "name": "_s",
                "type": "bytes32[]",
            },
            {
                "internalType": "uint256[]",
                "name": "_amounts",
                "type": "uint256[]",
            },
            {
                "internalType": "address[]",
                "name": "_destinations",
                "type": "address[]",
            },
            {
                "internalType": "uint256[]",
                "name": "_fees",
                "type": "uint256[]",
            },
            {
                "internalType": "uint256",
                "name": "_batchNonce",
                "type": "uint256",
            },
            {
                "internalType": "address",
                "name": "_tokenContract",
                "type": "address",
            },
        ],
        "name": "submitBatch",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "_newValidators",
                "type": "address[]",
            },
            {
                "internalType": "uint256[]",
                "name": "_newPowers",
                "type": "uint256[]",
            },
            {
                "internalType": "uint256",
                "name": "_newValsetNonce",
                "type": "uint256",
            },
            {
                "internalType": "address[]",
                "name": "_currentValidators",
                "type": "address[]",
            },
            {
                "internalType": "uint256[]",
                "name": "_currentPowers",
                "type": "uint256[]",
            },
            {
                "internalType": "uint256",
                "name": "_currentValsetNonce",
                "type": "uint256",
            },
            {
                "internalType": "uint8[]",
                "name": "_v",
                "type": "uint8[]",
            },
            {
                "internalType": "bytes32[]",
                "name": "_r",
                "type": "bytes32[]",
            },
            {
                "internalType": "bytes32[]",
                "name": "_s",
                "type": "bytes32[]",
            },
        ],
        "name": "updateValset",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
    },
];

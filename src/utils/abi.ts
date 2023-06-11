const attendifyAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "poap",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "eventName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "eventSymbol",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "eventUri",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "organizer",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "venue",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "link",
				"type": "string"
			}
		],
		"name": "createdEvents",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "poap",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "collector",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "eventUri",
				"type": "string"
			}
		],
		"name": "favouritePrezents",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "poap",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "collector",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "eventUri",
				"type": "string"
			}
		],
		"name": "mintedPrezents",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "contract Attendify",
				"name": "prezent",
				"type": "address"
			}
		],
		"name": "claimPrezent",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "eventName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "eventSymbol",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "eventUri",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "organizer",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "venue",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "link",
				"type": "string"
			}
		],
		"name": "createEvent",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract Attendify",
				"name": "prezent",
				"type": "address"
			}
		],
		"name": "favouritePrezent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract Attendify",
				"name": "prezent",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "prezentBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract Attendify",
				"name": "prezent",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "viewPoap",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default attendifyAbi;

//this file include the abi and contract address
const contractAddress ="0x426Ae45C7f3557f3e1C4144Ea6c85be292f7FDca"
const abi =[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "message",
        "type": "string"
      }
    ],
    "name": "NewUpdate",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "getCar",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "vehicleOwner",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "numberPlate",
            "type": "string"
          },
          {
            "internalType": "uint16",
            "name": "yearManufac",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "lifetimeLimit",
            "type": "uint16"
          },
          {
            "internalType": "string",
            "name": "insepectionReportN",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "insepectionValidUntil",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "typeOf",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "mark",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "modelCode",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "chassicNum",
            "type": "uint256"
          }
        ],
        "internalType": "struct Lock.Vehicle[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "Numberplate",
        "type": "string"
      }
    ],
    "name": "getVehicleInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "vehicleOwner",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "numberPlate",
            "type": "string"
          },
          {
            "internalType": "uint16",
            "name": "yearManufac",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "lifetimeLimit",
            "type": "uint16"
          },
          {
            "internalType": "string",
            "name": "insepectionReportN",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "insepectionValidUntil",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "typeOf",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "mark",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "modelCode",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "chassicNum",
            "type": "uint256"
          }
        ],
        "internalType": "struct Lock.Vehicle",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "numberPlates",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "NumberPlate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "VehicleOwner",
        "type": "string"
      },
      {
        "internalType": "uint16",
        "name": "YearManufac",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "LifetimeLimit",
        "type": "uint16"
      },
      {
        "internalType": "string",
        "name": "InsepectionReportN",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "InsepectionValidUntil",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Typeof",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Mark",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "ModelCode",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ChassicNum",
        "type": "uint256"
      }
    ],
    "name": "storeVehicle",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "vehicles",
    "outputs": [
      {
        "internalType": "string",
        "name": "vehicleOwner",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "numberPlate",
        "type": "string"
      },
      {
        "internalType": "uint16",
        "name": "yearManufac",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "lifetimeLimit",
        "type": "uint16"
      },
      {
        "internalType": "string",
        "name": "insepectionReportN",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "insepectionValidUntil",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "typeOf",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "mark",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "modelCode",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "chassicNum",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

export { contractAddress, abi }
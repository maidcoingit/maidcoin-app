"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockMasterChef__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class MockMasterChef__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_sushi, _devaddr, _sushiPerBlock, _startBlock, _bonusEndBlock, overrides) {
        return super.deploy(_sushi, _devaddr, _sushiPerBlock, _startBlock, _bonusEndBlock, overrides || {});
    }
    getDeployTransaction(_sushi, _devaddr, _sushiPerBlock, _startBlock, _bonusEndBlock, overrides) {
        return super.getDeployTransaction(_sushi, _devaddr, _sushiPerBlock, _startBlock, _bonusEndBlock, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MockMasterChef__factory = MockMasterChef__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract MockSushiToken",
                name: "_sushi",
                type: "address",
            },
            {
                internalType: "address",
                name: "_devaddr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_sushiPerBlock",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_startBlock",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_bonusEndBlock",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Deposit",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "EmergencyWithdraw",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Withdraw",
        type: "event",
    },
    {
        inputs: [],
        name: "BONUS_MULTIPLIER",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_allocPoint",
                type: "uint256",
            },
            {
                internalType: "contract IERC20",
                name: "_lpToken",
                type: "address",
            },
            {
                internalType: "bool",
                name: "_withUpdate",
                type: "bool",
            },
        ],
        name: "add",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "bonusEndBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_devaddr",
                type: "address",
            },
        ],
        name: "dev",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "devaddr",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
        ],
        name: "emergencyWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_from",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_to",
                type: "uint256",
            },
        ],
        name: "getMultiplier",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "massUpdatePools",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
        ],
        name: "migrate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "migrator",
        outputs: [
            {
                internalType: "contract IMigratorChef",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
        ],
        name: "pendingSushi",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "poolInfo",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "lpToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "allocPoint",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "lastRewardBlock",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "accSushiPerShare",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "poolLength",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_allocPoint",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "_withUpdate",
                type: "bool",
            },
        ],
        name: "set",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IMigratorChef",
                name: "_migrator",
                type: "address",
            },
        ],
        name: "setMigrator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "startBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "sushi",
        outputs: [
            {
                internalType: "contract MockSushiToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "sushiPerBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalAllocPoint",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
        ],
        name: "updatePool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "userInfo",
        outputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "rewardDebt",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405260006008553480156200001657600080fd5b5060405162001b4e38038062001b4e8339810160408190526200003991620000d3565b620000443362000083565b600180546001600160a01b039687166001600160a01b031991821617909155600280549590961694169390931790935560045560035560095562000144565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600080600060a08688031215620000ec57600080fd5b8551620000f9816200012b565b60208701519095506200010c816200012b565b6040870151606088015160809098015196999198509695945092505050565b6001600160a01b03811681146200014157600080fd5b50565b6119fa80620001546000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c8063630b5ba1116100de5780638da5cb5b11610097578063b0bcf42a11610071578063b0bcf42a14610370578063d49e77cd14610379578063e2bbb1581461038c578063f2fde38b1461039f57600080fd5b80638da5cb5b146103055780638dbb1e3a1461031657806393f1a40b1461032957600080fd5b8063630b5ba1146102b457806364482f79146102bc578063715018a6146102cf5780637cd07e47146102d75780638aa28550146102ea5780638d88a90e146102f257600080fd5b80631eaaa0451161014b578063454b060811610125578063454b06081461027257806348cd4cb11461028557806351eb05a61461028e5780635312ea8e146102a157600080fd5b80631eaaa0451461023757806323cf31181461024c578063441a3e701461025f57600080fd5b8063081e3eda146101935780630a087903146101aa5780631526fe27146101d557806317caf6f114610212578063195426ec1461021b5780631aed65531461022e575b600080fd5b6006545b6040519081526020015b60405180910390f35b6001546101bd906001600160a01b031681565b6040516001600160a01b0390911681526020016101a1565b6101e86101e3366004611746565b6103b2565b604080516001600160a01b03909516855260208501939093529183015260608201526080016101a1565b61019760085481565b610197610229366004611778565b6103f6565b61019760035481565b61024a6102453660046117a8565b610576565b005b61024a61025a3660046116ef565b6106cc565b61024a61026d3660046117ea565b610718565b61024a610280366004611746565b610860565b61019760095481565b61024a61029c366004611746565b610ac8565b61024a6102af366004611746565b610ce8565b61024a610d8a565b61024a6102ca36600461180c565b610db5565b61024a610e64565b6005546101bd906001600160a01b031681565b610197600a81565b61024a6103003660046116ef565b610e9a565b6000546001600160a01b03166101bd565b6101976103243660046117ea565b610f02565b61035b610337366004611778565b60076020908152600092835260408084209091529082529020805460019091015482565b604080519283526020830191909152016101a1565b61019760045481565b6002546101bd906001600160a01b031681565b61024a61039a3660046117ea565b610f68565b61024a6103ad3660046116ef565b611073565b600681815481106103c257600080fd5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b039092169350919084565b6000806006848154811061040c5761040c61198b565b600091825260208083208784526007825260408085206001600160a01b038981168752935280852060049485029092016003810154815492516370a0823160e01b8152309681019690965290965091949193919216906370a082319060240160206040518083038186803b15801561048357600080fd5b505afa158015610497573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bb919061175f565b90508360020154431180156104cf57508015155b1561053b5760006104e4856002015443610f02565b90506000610517600854610511886001015461050b6004548761110e90919063ffffffff16565b9061110e565b90611121565b905061053661052f846105118464e8d4a5100061110e565b859061112d565b935050505b610569836001015461056364e8d4a5100061051186886000015461110e90919063ffffffff16565b90611139565b9450505050505b92915050565b6000546001600160a01b031633146105a95760405162461bcd60e51b81526004016105a090611889565b60405180910390fd5b80156105b7576105b7610d8a565b600060095443116105ca576009546105cc565b435b6008549091506105dc908561112d565b600855604080516080810182526001600160a01b0394851681526020810195865290810191825260006060820181815260068054600181018255925291517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f600490920291820180546001600160a01b031916919096161790945593517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d40840155517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d418301555090517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d4290910155565b6000546001600160a01b031633146106f65760405162461bcd60e51b81526004016105a090611889565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b60006006838154811061072d5761072d61198b565b60009182526020808320868452600782526040808520338652909252922080546004909202909201925083111561079b5760405162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b60448201526064016105a0565b6107a484610ac8565b60006107d2826001015461056364e8d4a510006105118760030154876000015461110e90919063ffffffff16565b90506107de3382611145565b81546107ea9085611139565b80835560038401546108079164e8d4a5100091610511919061110e565b60018301558254610822906001600160a01b03163386611296565b604051848152859033907ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689060200160405180910390a35050505050565b6005546001600160a01b03166108af5760405162461bcd60e51b815260206004820152601460248201527336b4b3b930ba329d1037379036b4b3b930ba37b960611b60448201526064016105a0565b6000600682815481106108c4576108c461198b565b60009182526020822060049182020180546040516370a0823160e01b815230938101939093529093506001600160a01b0316919082906370a082319060240160206040518083038186803b15801561091b57600080fd5b505afa15801561092f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610953919061175f565b600554909150610970906001600160a01b038481169116836112f9565b60055460405163ce5494bb60e01b81526001600160a01b038481166004830152600092169063ce5494bb90602401602060405180830381600087803b1580156109b857600080fd5b505af11580156109cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f09190611729565b6040516370a0823160e01b81523060048201529091506001600160a01b038216906370a082319060240160206040518083038186803b158015610a3257600080fd5b505afa158015610a46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6a919061175f565b8214610aa75760405162461bcd60e51b815260206004820152600c60248201526b1b5a59dc985d194e8818985960a21b60448201526064016105a0565b83546001600160a01b0319166001600160a01b039190911617909255505050565b600060068281548110610add57610add61198b565b9060005260206000209060040201905080600201544311610afc575050565b80546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b158015610b3f57600080fd5b505afa158015610b53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b77919061175f565b905080610b8957504360029091015550565b6000610b99836002015443610f02565b90506000610bc0600854610511866001015461050b6004548761110e90919063ffffffff16565b6001546002549192506001600160a01b03908116916340c10f199116610be784600a611121565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610c2d57600080fd5b505af1158015610c41573d6000803e3d6000fd5b50506001546040516340c10f1960e01b8152306004820152602481018590526001600160a01b0390911692506340c10f199150604401600060405180830381600087803b158015610c9157600080fd5b505af1158015610ca5573d6000803e3d6000fd5b50505050610cd3610cc88461051164e8d4a510008561110e90919063ffffffff16565b60038601549061112d565b60038501555050436002909201919091555050565b600060068281548110610cfd57610cfd61198b565b60009182526020808320858452600782526040808520338087529352909320805460049093029093018054909450610d42926001600160a01b03919091169190611296565b8054604051908152839033907fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959060200160405180910390a360008082556001909101555050565b60065460005b81811015610db157610da181610ac8565b610daa8161195a565b9050610d90565b5050565b6000546001600160a01b03163314610ddf5760405162461bcd60e51b81526004016105a090611889565b8015610ded57610ded610d8a565b610e3082610e2a60068681548110610e0757610e0761198b565b90600052602060002090600402016001015460085461113990919063ffffffff16565b9061112d565b6008819055508160068481548110610e4a57610e4a61198b565b906000526020600020906004020160010181905550505050565b6000546001600160a01b03163314610e8e5760405162461bcd60e51b81526004016105a090611889565b610e98600061141d565b565b6002546001600160a01b03163314610ee05760405162461bcd60e51b81526020600482015260096024820152686465763a207775743f60b81b60448201526064016105a0565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60006003548211610f2357610f1c600a61050b8486611139565b9050610570565b6003548310610f3657610f1c8284611139565b610f1c610f4e6003548461113990919063ffffffff16565b610e2a600a61050b8760035461113990919063ffffffff16565b600060068381548110610f7d57610f7d61198b565b60009182526020808320868452600782526040808520338652909252922060049091029091019150610fae84610ac8565b805415610ff1576000610fe3826001015461056364e8d4a510006105118760030154876000015461110e90919063ffffffff16565b9050610fef3382611145565b505b8154611008906001600160a01b031633308661146d565b8054611014908461112d565b80825560038301546110319164e8d4a5100091610511919061110e565b6001820155604051838152849033907f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159060200160405180910390a350505050565b6000546001600160a01b0316331461109d5760405162461bcd60e51b81526004016105a090611889565b6001600160a01b0381166111025760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105a0565b61110b8161141d565b50565b600061111a82846118f8565b9392505050565b600061111a82846118d6565b600061111a82846118be565b600061111a8284611917565b6001546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801561118957600080fd5b505afa15801561119d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c1919061175f565b9050808211156112585760015460405163a9059cbb60e01b81526001600160a01b038581166004830152602482018490529091169063a9059cbb906044015b602060405180830381600087803b15801561121a57600080fd5b505af115801561122e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611252919061170c565b50505050565b60015460405163a9059cbb60e01b81526001600160a01b038581166004830152602482018590529091169063a9059cbb90604401611200565b505050565b6040516001600160a01b03831660248201526044810182905261129190849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526114a5565b8015806113825750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561134857600080fd5b505afa15801561135c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611380919061175f565b155b6113ed5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016105a0565b6040516001600160a01b03831660248201526044810182905261129190849063095ea7b360e01b906064016112c2565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b03808516602483015283166044820152606481018290526112529085906323b872dd60e01b906084016112c2565b60006114fa826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166115779092919063ffffffff16565b8051909150156112915780806020019051810190611518919061170c565b6112915760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016105a0565b6060611586848460008561158e565b949350505050565b6060824710156115ef5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016105a0565b843b61163d5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105a0565b600080866001600160a01b03168587604051611659919061183a565b60006040518083038185875af1925050503d8060008114611696576040519150601f19603f3d011682016040523d82523d6000602084013e61169b565b606091505b50915091506116ab8282866116b6565b979650505050505050565b606083156116c557508161111a565b8251156116d55782518084602001fd5b8160405162461bcd60e51b81526004016105a09190611856565b60006020828403121561170157600080fd5b813561111a816119a1565b60006020828403121561171e57600080fd5b815161111a816119b6565b60006020828403121561173b57600080fd5b815161111a816119a1565b60006020828403121561175857600080fd5b5035919050565b60006020828403121561177157600080fd5b5051919050565b6000806040838503121561178b57600080fd5b82359150602083013561179d816119a1565b809150509250929050565b6000806000606084860312156117bd57600080fd5b8335925060208401356117cf816119a1565b915060408401356117df816119b6565b809150509250925092565b600080604083850312156117fd57600080fd5b50508035926020909101359150565b60008060006060848603121561182157600080fd5b833592506020840135915060408401356117df816119b6565b6000825161184c81846020870161192e565b9190910192915050565b602081526000825180602084015261187581604085016020870161192e565b601f01601f19169190910160400192915050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156118d1576118d1611975565b500190565b6000826118f357634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561191257611912611975565b500290565b60008282101561192957611929611975565b500390565b60005b83811015611949578181015183820152602001611931565b838111156112525750506000910152565b600060001982141561196e5761196e611975565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b038116811461110b57600080fd5b801515811461110b57600080fdfea2646970667358221220a81f6f3cefdf19517686f6087af06dc0d42523229bc3a8ee070e8c712302419064736f6c63430008050033";
//# sourceMappingURL=MockMasterChef__factory.js.map
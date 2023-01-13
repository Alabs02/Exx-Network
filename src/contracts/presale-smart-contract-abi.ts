export const presaleContractABI = [
  {
    inputs: [
      { internalType: "uint256", name: "buyUnit", type: "uint256" },
      { internalType: "uint256", name: "hardcap", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "bnbAmount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "tokenAmount", type: "uint256" }
    ],
    name: "AdminWithdrawal",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "buyer", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmouunt",
        type: "uint256"
      },
      { indexed: false, internalType: "uint256", name: "bnbAmount", type: "uint256" }
    ],
    name: "Bought",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "claimer", type: "address" },
      { indexed: false, internalType: "uint256", name: "Precent", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "tokenAmount", type: "uint256" }
    ],
    name: "Claimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "endTime", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "_raisedBNB", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "tokenLeft", type: "uint256" }
    ],
    name: "PresaleEnded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "startTime", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "Percent", type: "uint256" },
      {
        indexed: false,
        internalType: "uint256",
        name: "TotalPercent",
        type: "uint256"
      }
    ],
    name: "VestingSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "withdrawer", type: "address" },
      { indexed: false, internalType: "uint256", name: "tokenAmount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "bnbAmount", type: "uint256" }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "starttime", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "_hardcap", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "tokenAmount", type: "uint256" }
    ],
    name: "presaleStarted",
    type: "event"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "PeriodtoPercent",
    outputs: [
      { internalType: "uint256", name: "percent", type: "uint256" },
      { internalType: "uint256", name: "startTime", type: "uint256" },
      { internalType: "uint256", name: "vestingCount", type: "uint256" },
      { internalType: "uint256", name: "MaxClaim", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "Vesting",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "VestingCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "WithdrawRemainingFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "admin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "bnbunit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "boughtTokens",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "emergencyWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "endPresale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "hardCap",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "maxPercent",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "presaleEnd",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "presaleStart",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "raisedBNB",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "StartTime", type: "uint256" },
      { internalType: "uint256", name: "Percentage", type: "uint256" }
    ],
    name: "setVesting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "spentBNB",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "startPresale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "token",
    outputs: [{ internalType: "contract IERC20Upgradeable", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];

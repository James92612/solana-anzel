import { devnet } from '../constants/cluster';

export const CLUSTER_API = devnet;
export const CLUSTER = 'devnet';


export const POOLTYPES = [
  {days: 7, fee: 1, minAmount: 20, apy: 2},
  {days: 30, fee: 1, minAmount: 100, apy: 20},
  {days: 90, fee: 1, minAmount: 500, apy: 80},
  {days: 180, fee: 1, minAmount: 1000, apy: 400},
  {days: 365, fee: 1, minAmount: 2000, apy: 1020},
]
export const APY = [104.28, 243.33, 324.44, 811.11, 1020];
export const REWARDS = [75000/2, 150000/2 , 300000/2 , 375000/2 , 600000/2];
export const MAX = [36713.28671/2, 43689.32039/2, 70680.62827/2, 41158.53659/2, 53571.42857/2];
export const DAY_TIME = 10;
export const DECIMAL = 1000000000;
export const VAULT_SEEDS = 'rewards vault';
export const POOL_SIGNER_SEEDS = 'pool signer';
export const POOLSEEDS = 'pool';
export const POOL_DATA_SEEDS = 'pool data';
export const REWARD_TOKEN_MINT = 'GnBw4qZs3maF2d5ziQmGzquQFnGV33NUcEujTQ3CbzP3';
export const TOTAL_REWARD = 10000
// this value is related to current contract
export const PROGRAM_ID = '6Pf6bCr94Y8UFwDWneMbyWNUDtv9LRowVwGR9DzKUACD';
export const VAULT_PDA = "BLUv1xR7Sh29BEMEMrNPW4cFqdxyKbYL89qfFSxqDnAG";
export const REWARD_TOKEN_ACCOUNT = "25oBEHwCMsvSDLqJZCA1uvXVfhaYqWfKPiFpkmgU67ua";
export const BASE_URL = "http://localhost:5000/api/staking";
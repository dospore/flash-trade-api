import { Connection, PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program } from '@project-serum/anchor';

import { wallet } from './wallet';

import PERPETUALS_IDL from "../types/idl/perpetuals.json";

// ProgramId and PoolAddress copied from https://github.com/flash-trade/Dev-Flash-UI/blob/FlashUI/src/utils/PoolConfig.json
const PERPETUALS_PROGRAM_ID = new PublicKey("FastuHRd9PRiuKGy2dHgH4zcSRjARKnPcHiQZnxpR5fD")
const POOL_ADDRESS = new PublicKey("C8b3A5vcYjkYAT29z9oaa2PiEvvA6qerLEgZJ8Eg3PSE");

const network_url = "https://api.devnet.solana.com";

const connection = new Connection(network_url, {
  commitment: "processed",
});

const provider = new AnchorProvider(connection, wallet, {
  commitment: "processed",
  skipPreflight: true,
});

const perpetual_program = new Program(
  // @ts-ignore
  PERPETUALS_IDL,
  PERPETUALS_PROGRAM_ID,
  provider
);

export {
  connection,
  provider,
  perpetual_program,
  POOL_ADDRESS
}

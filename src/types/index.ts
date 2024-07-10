import { BN } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";

export interface Token {
    custody: PublicKey;
    targetRatio: BN;
    minRatio: BN;
    maxRatio: BN;
}

export interface Pool {
    name: string;
    tokens: Token[];
    aumUsd: BN;
    bump: number;
    lpTokenBump: number;
    inceptionTime: BN;
}

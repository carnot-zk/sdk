import { PublicKey } from "@solana/web3.js";
import {
  CARNOT_SEED_GLOBAL,
  CARNOT_SEED_MARKET,
  CARNOT_SEED_TRADER_VAULT_TOKEN,
  CARNOT_SEED_VAULT,
} from "../constants/seeds";

export function findCarnotGlobalStatePda(
  programId: PublicKey,
): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(CARNOT_SEED_GLOBAL)],
    programId,
  );
}

export function findCarnotVaultStatePda(
  programId: PublicKey,
): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(CARNOT_SEED_VAULT)],
    programId,
  );
}

/** SPL token vault PDA for pooled trader margin (seed: `trader_vault_token`). */
export function findCarnotTraderVaultTokenPda(
  programId: PublicKey,
): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(CARNOT_SEED_TRADER_VAULT_TOKEN)],
    programId,
  );
}

export function findCarnotMarketStatePda(
  marketId: Uint8Array,
  programId: PublicKey,
): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(CARNOT_SEED_MARKET), Buffer.from(marketId)],
    programId,
  );
}

import express from 'express';
import { Pool } from './types';
import { connection, perpetual_program, POOL_ADDRESS } from './utils/program';

const app = express()
const port = 3000

app.get('/weights', async (req, res) => {
  let tokens: { token: string, targetRatio: string, minRatio: string, maxRatio: string  }[] = [];
  try {
    const accountInfo = await connection.getAccountInfo(POOL_ADDRESS)
    if (accountInfo) {

      const poolData = perpetual_program.coder.accounts.decode<Pool>('Pool', accountInfo.data);
      tokens = poolData.tokens.map((token) => ({
        token: token.custody.toString(),
        targetRatio: token.targetRatio.toString(),
        minRatio: token.minRatio.toString(),
        maxRatio: token.maxRatio.toString(),
      }))
    }

    res.json({ tokens });

  } catch (err) {
    console.error("Error", err);
    res.status(404).json({ status: "Failed to fetch token weights" })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

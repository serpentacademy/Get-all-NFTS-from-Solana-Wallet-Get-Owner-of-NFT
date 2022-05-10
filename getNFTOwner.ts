// EgupsjW5iKCUFB2bbif97Fdxy9wHB4PG6hPUvCPE9mhi, 9z2VcpCKMvc6kp4fiyEiGnYehxhHv4wqtZ4i5UbQYjb5 owner
//8Xqy1mJK5v9iXV52ZDqXRNjPSM6iQBqxQ6mjCf54MuaY
import {Connection, PublicKey} from '@solana/web3.js';
  (async () => {
      const connection = new Connection('https://api.mainnet-beta.solana.com');
      const tokenMint = '8Xqy1mJK5v9iXV52ZDqXRNjPSM6iQBqxQ6mjCf54MuaY';

      const largestAccounts = await connection.getTokenLargestAccounts(new PublicKey(tokenMint));
      const largestAccountInfo = await connection.getParsedAccountInfo(largestAccounts.value[0].address);
      console.log(largestAccountInfo );
      console.log(largestAccountInfo.value.data["parsed"].info.owner);


  
  })();
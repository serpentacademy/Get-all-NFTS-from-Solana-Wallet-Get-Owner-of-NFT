import { Connection } from '@metaplex/js'; 
import { Metadata } from '@metaplex-foundation/mpl-token-metadata';

(async () => {
  const connection = new Connection('mainnet-beta');
  const ownerPublickey = '9SuDMwgmCFP8CEmBELScujDd9dqVZxBkA15VCV1nFkT4';
  const nftsmetadata = await Metadata.findDataByOwner(connection, ownerPublickey);

  console.log(nftsmetadata)

  let counter: number = nftsmetadata.length;
  console.log("counter: "+counter);

  let counterI= 0;
  for (var i in nftsmetadata){
  console.log(nftsmetadata[i].mint);
  counterI+=1;
  }
  /*
  {
     MetadataData {
    key: 4,
    updateAuthority: '9SuDMwgmCFP8CEmBELScujDd9dqVZxBkA15VCV1nFkT4',
    mint: 'ANf44K4fLaD4heoKvTXzAfQorktH6XVKpGmwy9CQu2Xs',
    data: MetadataDataData {
      name: 'Lion Punk King',
      symbol: 'NFTPro',
      uri: 'https://www.arweave.net/5H1NMgzOvyAZWGzBgLFx27z-tYSInjimYbAC9bIWKLM?ext=json',
      sellerFeeBasisPoints: 700,
      creators: [Array]
    },
    primarySaleHappened: 0,
    isMutable: 1,
    editionNonce: 255,
    tokenStandard: undefined,
    collection: undefined,
    uses: undefined
  },
  MetadataData {
    key: 4,
    updateAuthority: '9SuDMwgmCFP8CEmBELScujDd9dqVZxBkA15VCV1nFkT4',
    mint: '2ofgix8pr8eALYrxzQ31UAWyi9XU9sCJBJZdJub49ZwR',
    data: MetadataDataData {
      name: 'Ape Bird Punk GOD',
      symbol: 'NFTPro',
      uri: 'https://www.arweave.net/vPDq-tNr91seOWrXNNU0RJ1O9rAxZWOrN50gYyevCoA?ext=json',
      sellerFeeBasisPoints: 700,
      creators: [Array]
    },
    primarySaleHappened: 0,
    isMutable: 1,
    editionNonce: 255,
    tokenStandard: undefined,
    collection: undefined,
    uses: undefined
  }
  */
})();
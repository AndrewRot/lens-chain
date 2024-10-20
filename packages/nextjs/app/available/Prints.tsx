"use client";

import { useEffect, useState } from "react";
// import Image from "next/image";
// import { MyNFTCard } from "./MyNFTCard";
import { useAccount } from "wagmi";
import {NFTCard} from "../collection/_components/NFTCard";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

// Assuming you have a separate NFTCard component

const Prints = () => {
  const { address: connectedAddress, isConnected } = useAccount();

  const [allNFTs, setAllNFTs] = useState([]);
  // const [nfts, setNfts] = useState([]);

  const { data: nextTokenId } = useScaffoldReadContract({
    contractName: "YourCollectible",
    functionName: "nextTokenId",
    watch: true,
  } as any);

  useEffect(() => {
    const fetchAllNFTs = async () => {
      if (!nextTokenId) return;

      const nfts = [];
      const totalTokens = Number(nextTokenId);

      for (let index = 0; index < totalTokens; index++) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const token = await useScaffoldReadContract({
          contractName: "YourCollectible",
          functionName: "getTokenByIndex",
          args: [index], // Only index is needed
        } as any);

        nfts.push(token);
      }
      setAllNFTs(nfts);
    };

    fetchAllNFTs();
  }, [nextTokenId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      {allNFTs.map((nft, index) => (
        <NFTCard key={index} nft={nft} />
      ))}
    </div>
  );
};

export default Prints;

import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x9bc72b9ad70f99fd385c664fABDCA2DC8f8139b7",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Adidas Originals: Into The Metaverse",
        description: "This NFT will give you access to BruhDAO!",
        image: readFileSync("scripts/assets/adidas_originals_nft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
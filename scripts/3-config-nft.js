import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x43921121267c53d03dDf2867425B0e54A233D54a",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Review Pass",
        description: "This NFT will give you access to ReviewDAO!",
        image: readFileSync("scripts/assets/logo.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
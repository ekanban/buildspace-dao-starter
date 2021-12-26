import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0xE7c994Dde05eD2eD4c8032907A92531a5777cA13");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "BruhDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "BRUH",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();

// token address: 0xDe96133A5BF11961e117e345c4112B4C811f47B7
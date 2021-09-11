// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Deploy token contract
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed();

  console.log("Token address:", token.address);

  //deploy aave contract
  const Aave = await ethers.getContractFactory("Aave");
  const aave = await Aave.deploy();
  await aave.deployed();

  console.log("Aave address:", aave.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(token, aave);
}

function saveFrontendFiles(token, aave) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ Token: token.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("Token");

  fs.writeFileSync(
    contractsDir + "/Token.json",
    JSON.stringify(TokenArtifact, null, 2)
  );

  fs.writeFileSync(
    contractsDir + "/contract-address-aave.json",
    JSON.stringify({ Aave: aave.address }, undefined, 2)
  );

  const AaveArtifact = artifacts.readArtifactSync("Aave");

  fs.writeFileSync(
    contractsDir + "/Aave.json",
    JSON.stringify(AaveArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

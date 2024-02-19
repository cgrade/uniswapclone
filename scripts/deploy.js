
const hre = require("hardhat");

async function main() {

  const sig = await hre.ethers.getSigners(0)
  console.log(sig[1].address);

}
 
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

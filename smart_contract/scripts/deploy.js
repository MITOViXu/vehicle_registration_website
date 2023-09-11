const hre = require('ethers')


async function main() {
  const Vehicle = await ethers.getContractFactory("Lock");

  // Start deployment, returning a promise that resolves to a contract object
  const _Vehicle = await Vehicle.deploy();
  console.log("Contract address:" + _Vehicle.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
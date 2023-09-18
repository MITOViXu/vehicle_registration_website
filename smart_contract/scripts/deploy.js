const hre = require('ethers')


async function main() {
<<<<<<< HEAD
  const Vehicle = await ethers.getContractFactory("Lock");
=======
 const Vehicle = await ethers.getContractFactory("Lock");
>>>>>>> e83ef4ad0d4f71409f779373c1bc974470afd8c7

  // Start deployment, returning a promise that resolves to a contract object
  const _Vehicle = await Vehicle.deploy();
  console.log("Contract address:" + _Vehicle.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
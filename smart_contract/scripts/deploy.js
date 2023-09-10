
async function main() {
 const Vehicle = await ethers.getContractFactory("Vehicle");

 const _Vehicle = await Vehicle.deploy();
 console.log("Contract address:" + _Vehicle.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
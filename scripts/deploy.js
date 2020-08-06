const {deploy1820} = require('./deploy_1820');

async function main() {
  let buidlerEvm = false;
  // This is just a convenience check
  if (network.name === 'buidlerevm') {
    buidlerEvm = true;
    console.warn(
      'You are trying to deploy a contract to the Buidler EVM network, which' +
        ' gets automatically created and destroyed every time. Use the Buidler' +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    'Deploying the contracts with the account:',
    await deployer.getAddress()
  );

  console.log('Account balance:', (await deployer.getBalance()).toString());

  if (buidlerEvm) {
    await deploy1820(deployer);
  }

  const PPBToken = await ethers.getContractFactory('PPBToken');
  const ppbToken = await PPBToken.deploy();
  await ppbToken.deployed();

  console.log('PPBToken address:', ppbToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

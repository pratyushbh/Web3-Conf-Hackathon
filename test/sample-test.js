const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Campaign", function () {
  it("Should return the Campaign", async function () {
    const Fund = await hre.ethers.getContractFactory("Campaign");
    const fund = await Fund.deploy();
    await fund.deployed();

    const setGreetingTx = await fund.CreateCampaign(10000);
    // wait until the transaction is mined
    await setGreetingTx.wait();
    console.log(fund.mapped());
  });
});

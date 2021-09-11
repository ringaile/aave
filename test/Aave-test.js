const { expect } = require("chai");
const chai = require('chai');
const numberToBN = require('number-to-bn');
const { network } = require("hardhat");

describe("Aave", function () {
    let Aave;
    let aave;
    let owner;
    let addr1;
    let addr2;
    let addr3;
    let addrs;

    beforeEach(async function () {
        // Get the ContractFactory and Signers here.
        Aave = await ethers.getContractFactory("Aave");
        [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
        
        // To deploy our contract, we just have to call Token.deploy() and await
        // for it to be deployed(), which happens onces its transaction has been
        // mined.
        aave = await Aave.deploy();
        console.log("hel" 
        + aave)
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
          console.log(aave.owner)
          expect(await aave.owner()).to.equal(owner.address);
        });
      });

});
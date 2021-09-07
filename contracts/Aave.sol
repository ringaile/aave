//SPDX-License-Identifier: Unlicense
pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@aave/protocol-v2/contracts/interfaces/ILendingPoolAddressesProvider.sol";
import "@aave/protocol-v2/contracts/interfaces/ILendingPool.sol";

contract Aave{

    ILendingPoolAddressesProvider lendingPoolAddressesProvider;
    ILendingPool lendingPool;

    constructor() public{
        // check the latest address from here: https://docs.aave.com/developers/deployed-contracts/deployed-contracts                                                         
        lendingPoolAddressesProvider = ILendingPoolAddressesProvider(0x88757f2f99175387aB4C6a4b3067c77A695b0349);
        lendingPool = ILendingPool(lendingPoolAddressesProvider.getLendingPool());
    }

    function deposit(address _token, uint _amount) external {
        IERC20 token = IERC20(_token);

        // Input variables
        uint16 referral = 0;

        token.approve(address(lendingPool), _amount);
        lendingPool.deposit(_token, _amount, address(this), referral);
    }
}
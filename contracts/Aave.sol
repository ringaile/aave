//SPDX-License-Identifier: Unlicense
pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@aave/protocol-v2/contracts/interfaces/ILendingPoolAddressesProvider.sol";
import "@aave/protocol-v2/contracts/interfaces/ILendingPool.sol";
import './interfaces/IUniswapV2Router02.sol';

contract Aave{

    ILendingPoolAddressesProvider lendingPoolAddressesProvider;
    ILendingPool lendingPool;
    IUniswapV2Router02 uniswapV2Router02;

    constructor() public{
        // check the latest address from here: https://docs.aave.com/developers/deployed-contracts/deployed-contracts                                                         
        lendingPoolAddressesProvider = ILendingPoolAddressesProvider(0x88757f2f99175387aB4C6a4b3067c77A695b0349);
        lendingPool = ILendingPool(lendingPoolAddressesProvider.getLendingPool());

        // the address found here: https://docs.uniswap.org/protocol/V2/reference/smart-contracts/router-02
        uniswapV2Router02 = IUniswapV2Router02(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D);
    }

    function deposit(address _token, uint _amount) external {
        IERC20 token = IERC20(_token);

        // Input variables
        uint16 referral = 0;

        token.approve(address(lendingPool), _amount);
        lendingPool.deposit(_token, _amount, address(this), referral);
    }

    function withdraw(address _token, uint _amount) external payable{
        lendingPool.withdraw(_token, _amount, address(this));

        uniswapV2Router02.addLiquidityETH{value: msg.value}(
                _token,
                _amount,
                1,
                1,
                address(this),
                block.timestamp + 1000
        );
    }
}
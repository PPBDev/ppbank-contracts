// SPDX-License-Identifier: MIT

import '@openzeppelin/contracts/token/ERC777/ERC777.sol';

pragma solidity ^0.6.0;

contract PPBToken is ERC777 {
    constructor () public ERC777("PPBToken", "PPB", new address[](0)) {
        _mint(msg.sender, 21e9 * 10e18, "", "");
    }
}
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import { BinarySearch } from './libs/BinarySearch.sol';

contract Searcher {
    function search(uint256[] calldata _arr, uint256 _searchVal) public pure returns (bool) {
        bool result = BinarySearch.search(_arr, _searchVal, 1, _arr.length) != BinarySearch.MAX_INT; 
        return result;
    }


    function searchIdx(uint256[] calldata _arr, uint256 _searchVal) public pure returns (uint256) {
        return BinarySearch.search(_arr, _searchVal, 1, _arr.length);
    }
}
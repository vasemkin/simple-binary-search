// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


library BinarySearch {
    uint256 constant public MAX_INT = 2**256 - 1;

    function search(uint256[] calldata _arr, uint256 _searchVal, uint256 _lPtr, uint256 _rPtr) public pure returns (uint256) {
        uint256 arrLength = _rPtr - _lPtr + 1;
        uint256 midIndex = (_lPtr + _rPtr) / 2;

        if (_arr[_rPtr - 1] < _searchVal) {
            return MAX_INT;
        }

        if (arrLength == 1) {
            return _arr[midIndex] == _searchVal ? midIndex : MAX_INT;
        }
        
        if (_arr[midIndex] == _searchVal) {
            return midIndex;
        }

       return _arr[midIndex] < _searchVal 
            ? search(_arr, _searchVal, midIndex, _rPtr)
            : search(_arr, _searchVal, _lPtr, midIndex);
    }
}
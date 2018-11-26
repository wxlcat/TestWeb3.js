pragma solidity ^0.4.24;

contract InfoContract {
    string name;
    uint age;

    constructor(string _name, uint _age) public {
        name = _name;
        age = _age;
    }
    
    function setInfo(string _name, uint _age) public {
        name = _name;
        age = _age;
    }
    
    function getInfo() public view returns (string, uint) {
        return (name, age);
    }
}
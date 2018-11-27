pragma solidity ^0.4.24;

contract InfoContract {
    string public name;
    uint public age;

    event SetInfo(address _sender, string _name, uint indexed _age);

    constructor(string _name, uint _age) public {
        name = _name;
        age = _age;
    }
    
    function setInfo(string _name, uint _age) public {
        name = _name;
        age = _age;
        emit SetInfo(msg.sender, _name, _age);
    }
    
    function getInfo() public view returns (string, uint) {
        return (name, age);
    }
}
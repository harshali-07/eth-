// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface IERC20 {
    function totalSupply() external view returns (uint);
    function balanceOf(address account) external view returns (uint);
    function transfer(address recipient, uint amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint value);
}

contract ERC20 is IERC20 {
    uint public totalSupply;
    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;
    string public name;
    string public symbol; 
    uint8 public decimals;
    
    constructor (string memory _name,string memory _symbol,uint256 _initialSupply,uint8 _decimals) public {
        name= _name;
        symbol= _symbol;
        decimals= _decimals;
        mint(_initialSupply);
    }

    function transfer(address recipient, uint amount) external returns (bool) {
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function mint(uint amount) internal {
        balanceOf[msg.sender] += amount;
        totalSupply += amount;
        emit Transfer(address(0), msg.sender, amount);
    }

    function burn(uint amount) external {
        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        emit Transfer(msg.sender, address(0), amount);
    }
}

contract Parent {

    ERC20 public childContract; 

    function createChild(string memory _name, string memory _symbol,uint256 _initialSupply, uint8 _decimals) public returns(ERC20) {
       childContract = new ERC20(_name, _symbol, _initialSupply,_decimals); // creating new contract inside another parent contract
       return childContract;
    }
}  
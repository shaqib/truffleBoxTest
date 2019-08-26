pragma solidity ^0.5.8;


contract Todos {
    mapping (uint256 => bytes32) internal todos;
    uint256 internal currentIdx = 0;

    function addTodo(bytes32 todo) public {
        todos[currentIdx] = todo;
        currentIdx = currentIdx + 1;
    }

    function removeTodo(uint256 idx) public {
        delete todos[idx];
    }

    function getTodos() public view returns (bytes32[] memory) {
        bytes32[] memory todosArr = new bytes32[](currentIdx);
        for (uint256 i = 0; i < currentIdx; i++) {
            todosArr[i] = todos[i];
        }
        return todosArr;
    }
}

## Prerequisites.

Node.js 10

The project is implemented as a node.js project and uses Selenium to test the Add Todo and Remove Todo functionality of the App.
As well there is an automation process implemented, that deploys solidity smart contracts to the Ethereum network by using the developer framework truffle. During the automation process all addresses of the deployed contracts are automatically written into a file, that can be used in the in other files for the interaction with the Ethereum network. These address are stored in:

. \js\contracts\addresses\addresses.js

How to perform the automation:

1.)	Run .\init_ganache.bat

The init_ganache.bat automatically install all dependencies

Then it will Run the ganache

The init_ganache.bat will automatically Run the App

The init_ganache.bat process deploys the smart contracts that are located in

.\contracts

and writes all contract addresses into

. \js\contracts\addresses\addresses.js

The init_ganache.bat will then run the test and verify the expected results

Note:- Need to configure the Metamask account to have the amount in wallet
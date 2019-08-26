@echo off
  
del /F /Q .\build\contracts\*.*

del /F /Q .\js\contracts\addresses\addresses.js
@echo
  break>".\js\contracts\addresses\addresses.js"

@echo var addresses = {> .\js\contracts\addresses\addresses.js

call npm install
start ganache-cli 
call truffle.cmd migrate --network development --reset
start  npm run start
call truffle.cmd test

@(
echo.
echo. 
echo };
echo.
echo exports.addresses = addresses;
) >> .\js\contracts\addresses\addresses.js

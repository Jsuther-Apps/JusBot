@echo off

color 4
echo  Installing/Updating modules
call npm i

echo All modules are on the latest version

echo Starting JusBot

color 2
call node .

echo Starting

echo started

readkey
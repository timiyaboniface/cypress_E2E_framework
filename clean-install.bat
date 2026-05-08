@echo off
echo Cleaning old dependencies...
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul
echo Installing dependencies...
npm install
echo Verifying Cypress...
npx cypress verify
echo Done.
pause

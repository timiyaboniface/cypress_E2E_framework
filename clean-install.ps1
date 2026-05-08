Write-Host "Cleaning old dependencies..."
if (Test-Path node_modules) { Remove-Item node_modules -Recurse -Force }
if (Test-Path package-lock.json) { Remove-Item package-lock.json -Force }
Write-Host "Installing dependencies..."
npm install
Write-Host "Verifying Cypress..."
npx cypress verify
Write-Host "Done. Run tests with: npm test"

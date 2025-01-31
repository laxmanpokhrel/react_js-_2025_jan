
# Install npm
# Install Dependencies
`npm install`
# Run Fake API
`npm install -g json-server`
`json-server --watch db.json --port 3000`

# API 
Get Provinces:
GET http://localhost:3000/provinces

Get Districts by Province:
Example for Province 1:
GET http://localhost:3000/districts?provinceId=1

Get Municipalities by District:
Example for Morang District:
GET http://localhost:3000/municipalities?districtId=1
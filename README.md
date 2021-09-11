# Aave deposit / withdraw project

This project allows:
1. to deposit funds to Aave, and then 
2. to withdraw deposits from Aave and provide liquidity of the same token in a Uniswap pool

## Installation

Download the project and run 

```bash
npm i
```

## Compile

```bash
npx hardhat compile
```

## Run a project

Run a local node:
```bash
npx hardhat node
```

Deploy the contract on the local node:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

Run frontend:
```bash
cd fronted/
npm start
```

Contract Kovan address: 0xb135D1210a795dFe90EF3FCc231BF23D69A67c74

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)


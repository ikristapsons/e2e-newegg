### Setup
- yarn install
### Run tests
- yarn test

### Notes:
- Selector method for all elements: CSS
- try/catch for banner code thrown out as promotion ended
- Running headless Chrome, if necessary otherwise delete following lines in wdio.conf.js under capabilities:
        <!-- "goog:chromeOptions": {
            args: ['--headless'] 
        }, -->
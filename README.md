# Everlasting Wardrobe Front End Work Guide

## Start
To start this project, clone this repository to your local use
```
git clone
```
Install dependencies:
```
yarn install
```
Start
```
yarn start
```

## Development
### Component Design
* Decide where to put the component,
* Split UI into Container and Component.
* Build from basic component and make sure it is responsive and fully tested, ideally, all changeable invariants in the component should come from a parent container. [responsive Web Design](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)

* Build Container and decide data source.

### Test Driven Development
[Create-react-app test guide ](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
[Jest](https://jestjs.io/docs/en/getting-started)
[Enzyme](https://airbnb.io/enzyme/docs/api/)

* Write Smoke tests
* Write full rendering tests
* Write acceptance tests to mock user behaviors [Acceptance Testing](https://www.viget.com/articles/acceptance-testing-react-apps-with-jest-and-nightmare/) Or [end to end testing](https://blog.logrocket.com/end-to-end-testing-react-apps-with-puppeteer-and-jest-ce2f414b4fd7)

Some articles about Testing
```
https://hackernoon.com/testing-your-frontend-code-part-i-introduction-7e307eac4446
https://www.creativebloq.com/how-to/an-introduction-to-frontend-testing
```

### Commit
* Commit to personal branch and send pull request.

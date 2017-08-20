# Contributing guide

I'm excited to have you helping out. Thank you so much for your time 😄

### Contributing

#### Understanding the codebase
`redocx` uses [officegen](https://github.com/Ziv-Barber/officegen) to generate the documents. So before you start working on adding a new feature or fixing a bug, take a look at the officegen [documentation](https://github.com/Ziv-Barber/officegen/blob/master/manual/README-docx.md) and [examples](https://github.com/Ziv-Barber/officegen/blob/master/examples/make_docx.js). This will make things easier for you. Also if you need any more help on using officegen and regarding it's documentation, ask me. I am at [NTulswani](https://twitter.com/NTulswani) on Twitter

#### Setting up the environment

Considering you've forked and cloned the repo on your system, switch to the directory and install the dependencies.

```
cd redocx
npm install
```

#### Submitting pull requests

* Create a new branch for the new feature: git checkout -b new-feature
* Make your changes.
* Test everything with `npm run test`.
* Run `npm run lint` to check the syntax errors.
* Commit your changes: git commit -m 'Added some new feature'
* Push to the branch: git push origin new-feature
* Submit a pull request with full remarks documenting your changes.

#### Test the changes locally

You can test your changes locally in the [demo](../demo) folder. Make your changes to [`word.js`](../demo/word.js) and run `npm run example`. This will render your views and components to `docx`.


That's it! I am excited to see your pull request.

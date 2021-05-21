# Funny Words API

An node.js API offering a list of over 2,000 clean, funy child friendly words organised by word type.

Return a JSON object with lists of words by category.

Deployed on [Heroku](https://funnywords.herokuapp.com/api/words/.)

Used by the ['MadLibz'](https://madlibzapp.netlify.app/) generator app and the ['Tic Tac Words'] app(https://tictacwords.netlify.app/).

## Usage

To retrieve all the words send a GET request to https://funnywords.herokuapp.com/api/words/.

For example in Javascript you can use this function to get all the words.

```
async function apiCaller() {
    const wordPromise = await fetch("https://funnywords.herokuapp.com/api/words/")
    const randWords = await wordPromise.json()
    return randWords
  }
```

To only get specific types of words append the relevant code (see the full list below).

For example, adding the code '21' will only return general adverbs.

```
https://funnywords.herokuapp.com/api/words/21
```

## Word Types

Each [word type](https://en.wikipedia.org/wiki/Part_of_speech) is organised with a numerical ID.

|   |   |   |   |   |
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
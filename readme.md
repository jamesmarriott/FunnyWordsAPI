# Funny Words API
A simple node API offering a list of over 2,000 clean, fun words organised by word type.

The API returns a JSON object with lists of words by category.

Deployed on [Heroku](https://funnywords.herokuapp.com/api/words/.)

Used by the ['MadLibz'](https://madlibzapp.netlify.app/) generator app and the ['Tic Tac Words'](https://tictacwords.netlify.app/) app.


## Usage
To retrieve all the words send a GET request to https://funnywords.herokuapp.com/api/words/.

For example in Javascript you can use an async function to get all the words.

```
async function apiCaller() {
    const wordPromise = await fetch("https://funnywords.herokuapp.com/api/words/")
    const randWords = await wordPromise.json()
    return randWords
}
```

To only get specific types of words append the relevant code (see the full list below) to the request.

For example, adding the code ['21'](https://funnywords.herokuapp.com/api/words/21) will only return general adverbs.

```
https://funnywords.herokuapp.com/api/words/21
```


## Word Types
Each [word type](https://en.wikipedia.org/wiki/Part_of_speech) is organised with a numerical ID as follows


| Sub-ID | Description             |
| ------ | ----------------------- |
| 11     | Adjective-General       |
| 12     | Adjective-Number        |
| 13     | Adjective-Color         |
| 21     | Adverb-General          |
| 22     | Adverb-Time             |
| 31     | Noun-Thing              |
| 32     | Noun-Thing(plural)      |
| 33     | Noun-Person             |
| 34     | Noun-Person(plural)     |
| 35     | Noun-Place(common)      |
| 36     | Noun-Place(proper)      |
| 37     | Noun-Animal             |
| 38     | Noun-Animal(plural)     |
| 39     | Noun-BodyPart           |
| 310    | Noun-BodyPart(plural)   |
| 41     | Verb-Present            |
| 42     | Verb-Present(he/she/it) |
| 43     | Verb-Present(-ing)      |
| 44     | Verb-Past               |
| 46     | Verb-Modal              |
| 51     | Exclamation-General     |

So sending a GET request to https://funnywords.herokuapp.com/api/words/44 will just return past tense verbs.


### Issues
Currently the present and past partciples are missing. Requesting the following ids will return nothing.

| Sub-ID | Description             |
| ------ | ----------------------- |
| 45     | Verb-PresentPart        |
| 47     | Verb-PastPart           |


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License
[MIT](https://choosealicense.com/licenses/mit/)
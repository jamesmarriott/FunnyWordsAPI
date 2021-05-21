# Funny Words API

A list of over 2,000 child friendly, clean words organised by word type.

Deployed on Heroku at https://funnywords.herokuapp.com/api/words/.

Used by the 'MadLibz' generator app https://madlibzapp.netlify.app/ and the 'Tic Tac Words' https://tictacwords.netlify.app/.

## USAGE

Send a GET request to 

```
async function apiCaller() {
    const wordPromise = await fetch("https://funnywords.herokuapp.com/api/words/")
    const randWords = await wordPromise.json()
    setRandWordList(randWords)
  }
```


##S
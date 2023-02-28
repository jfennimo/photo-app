// Your code here.

const fetchAndShowTweets = async (searchTerm, callBack) => {
    // retrieve tweets of interest
    const url = `https://www.apitutor.org/twitter/simple/1.1/search/tweets.json?q=${searchTerm}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // and when they return, invoke callback function
    // with the returned data (list of tweets) as an argument
    // callBack(data);
}

const printTwitterUsers = listOfTweets => {
    listOfTweets.forEach(tweet => {
        console.log(tweet.screen_name);
    })
}

fetchAndShowTweets('dogs', printTwitterUsers);
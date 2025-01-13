const fetchURL = "https://swapi.py4e.com/api/people/";

const getPeoplePromise = url => {
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      };
    });
};

const getPeopleAsync = async url => {
  const getRequest = await fetch(url);
  const data = await getRequest.json();

  return {
    count: data.count,
    results: data.results
  };
};

// console.log(getPeoplePromise(fetchURL));
console.log(getPeopleAsync(fetchURL));

module.exports = {
  getPeoplePromise,
  getPeopleAsync
};

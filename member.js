function skillsMember() {
  return fetch('https://api.github.com/users/ryansmith94/repos')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });
}
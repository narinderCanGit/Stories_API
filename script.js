const button = document.getElementById("submit_button");
const container = document.getElementById("container");

const random_button = document.getElementById("random_submit_button");
const random_container = document.getElementById("random_container");

const api_key = "npwoAYUoW1DgOL3ijFiGrl3Bfiwuwjm7";

button.addEventListener("click", stories);
random_button.addEventListener("click", randomStories);

function stories(e) {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${api_key}`,
    true
  );

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = "";
      let count = 1;

      if (response.status === "OK") {
        response.results.forEach(function (story) {
          if (count <= 5) {
            output += `<li>${story.abstract}</li>`;
            count++;
          }
        });
      } else {
        output += "<li>Something went wrong</li>";
      }

      document.querySelector("#container").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}

//Random stories

function randomStories(e) {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${api_key}`,
    true
  );

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = "";
      let count = 1;

      if (response.status === "OK") {
        response.results.forEach(function (story) {
          let data =
            response.results[
              Math.floor(Math.random() * response.results.length)
            ].abstract;
          if (count <= 5) {
            output += `<li>${data}</li>`;
            count++;
          }
        });
      } else {
        output += "<li>Something went wrong</li>";
      }
      document.querySelector("#container_random").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}

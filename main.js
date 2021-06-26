const input = document.querySelector("#NumberInput");
const p = document.querySelector(".fact p");
const fact = document.querySelector(".fact");

// With XMLHttpRequest (Method1)

HttpRequest = () => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (
      request.readyState === 4 &&
      !input.value == "" &&
      request.status === 200
    ) {
      fact.style.display = "block";
      p.innerHTML = request.responseText;
    } else if (input.value == "") {
      fact.style.display = "none";
    }
  });
  request.open("GET", `http://numbersapi.com/${input.value}`);
  request.send();
};

// With FetchApi (Method2)

FetchApi = () => {
  fetch(`http://numbersapi.com/${input.value}`)
    .then((responseText) => {
      return responseText.text();
    })
    .then((data) => {
      if (!input.value == "") {
        fact.style.display = "block";
        p.innerHTML = data;
      } else {
        fact.style.display = "none";
      }
    })
    .catch((err) => console.log(err));
};

input.addEventListener("input", FetchApi);

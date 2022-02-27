//fetch all corgi photo
async function corgiPhoto() {
  const response = await fetch("https://dog.ceo/api/breed/corgi/images");
  const data = await response.json();
  getCorgiPhoto(data.message);
  newCorgiPhoto(data.message);
  randomCorgiPhoto(data.message);
}

corgiPhoto();

//show all corgi photo in sequence
function getCorgiPhoto(photos) {
  document.getElementById("corgi-box").innerHTML = `

  ${Object.values(photos)
    .map(function (corgi) {
      return `<img src='${corgi}' />`;
    })
    .join("")}
  `;
}

//click to see each corgi photo in sequence
function newCorgiPhoto(photo) {
  let currentPosition = 0;

  document.getElementById("singleCorgiPhoto").innerHTML = `
  <img src='${photo[currentPosition]}' />
    `;

  document.getElementById("btn").addEventListener("click", function () {
    if (currentPosition < photo.length - 1) {
      document.getElementById("singleCorgiPhoto").innerHTML = `
  <img src='${photo[currentPosition + 1]}' />
    `;
      currentPosition++;
    } else {
      currentPosition = 0;

      document.getElementById("singleCorgiPhoto").innerHTML = `
    <img src='${photo[currentPosition]}' />
      `;
      currentPosition++;
    }
  });
}

//click to see random corgi photo
function randomCorgiPhoto(photo) {
  let random = () => {
    let min = 0;
    let max = photo.length + 1;
    return Math.floor(Math.random() * (max - min) + min);
  };

  document.getElementById("randomCorgiPhoto").innerHTML = `
  <img src='${photo[random()]}'/>
  `;

  document.getElementById("btn-random").addEventListener("click", function () {
    document.getElementById("randomCorgiPhoto").innerHTML = `
    <img src='${photo[random()]}'/>
    `;
  });
}

//fetch random breed doggy photo

document.getElementById("btn-other-breed").addEventListener("click", randomDog);

function randomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(
      (data) =>
        (document.getElementById(
          "otherBreed"
        ).innerHTML = `<img src='${data.message}'/>`)
    );
}

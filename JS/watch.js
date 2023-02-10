let title = String(prompt("enter the anime title"));
let box = document.querySelector(".list");
let url = `https://gogoanime2.p.rapidapi.com/anime-details/${title.replace(
  " ",
  "-"
)}`;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0cd36d720cmsha08c21833644722p1ed12ejsnadfb5be146d0",
    "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
  },
};
async function getApi(url) {
  const response = await fetch(url, options);
  var data = await response.json();
  showData(data);
}
function showData(data) {
  let d = data.episodesList;
  //   console.log(d);
  for (i = 0; i < d.length; i++) {
    console.log(d[d.length - i - 1]);
    let ep = document.createElement("span");
    let link = document.createElement("a");
    link.setAttribute("href", `${d[d.length - i - 1].episodeUrl}`);
    link.innerText = `episode ${i + 1}`;
    ep.appendChild(link);
    box.appendChild(ep);
  }
}
getApi(url);

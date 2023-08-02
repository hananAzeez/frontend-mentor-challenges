const projects = [
  {
    id: 1,
    name: "qr-code-component",
    repo: "https://github.com/hananAzeez/frontend-mentor-challenges/tree/master/qr-code-component",
  },
  {
    id: 2,
    name: "age-calculator-app",
    repo: "https://github.com/hananAzeez/frontend-mentor-challenges/tree/master/age-calculator-app",
  },
  {
    id: 3,
    name: "nft-preview-card-component",
    repo: "https://github.com/hananAzeez/frontend-mentor-challenges/tree/master/nft-preview-card-component-main",
  },
  {
    id: 4,
    name: "interactive-comments-section",
    repo: "https://github.com/hananAzeez/frontend-mentor-challenges/tree/master/nft-preview-card-component-main",
  },
];

const list = document.getElementById("list");

projects.forEach(({ name, repo, id }, i) => {
  const listItem = document.createElement("li");
  console.log(1);

  id === 4 ?
  (listItem.innerHTML = `
		<a href="/${name}/index.html">
      <div class="image">
			  <img src="/${name}/design/desktop-design.jpg" alt="${name}" />
      </div>
      <div class="text">
			  <p>${formatProjectName(name)}</p>
        <a href="${repo}" class="repo" blank>Github repo</a>
      </div>
		</a>
	`) :
  (listItem.innerHTML = `
		<a href="/${name}/index.html">
      <div class="image">
			  <img src="/${name}/design/desktop-design.jpg" alt="${name}" />
      </div>
      <div class="text">
			  <p>${formatProjectName(name)}</p>
        <a href="${repo}" class="repo" blank>Github repo</a>
      </div>
		</a>
	`) 


  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

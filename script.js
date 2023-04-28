const projects = [
  {
    name: "qr-code-component",
    repo: "https://github.com/hananAzeez/frontend-mentor-challenges/tree/master/qr-code-component-main",
  },
  {
    name: "age-calculator-app",
  },
];

const list = document.getElementById("list");

projects.forEach(({ name, repo }, i) => {
  const listItem = document.createElement("li");
  console.log(1);

  listItem.innerHTML = `
		<a href="/${name}/index.html">
      <div class="image">
			  <img src="/${name}/design/desktop-design.jpg" alt="${name}" />
      </div>
      <div class="text">
			  <p>${formatProjectName(name)}</p>
        <a href="${repo}" class="repo" blank>Github repo</a>
      </div>
		</a>
	`;

  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

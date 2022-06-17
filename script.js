let total_population = 0;
towns.forEach(town => {
	if (town.name[0] === 'S') document.getElementById("s_towns").innerHTML += `<li>${town.name}</li>`;
	total_population += town.population;
});
document.getElementById("total_population").innerText = total_population.toLocaleString();
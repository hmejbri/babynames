const router = require("express").Router();
const pool = require("./database");
const fs = require("fs");
const axios = require("axios");

router.get("/api/ajoutNoms", async function (req, res) {
	fs.readFile(
		"C:/Users/houss/OneDrive/Bureau/j2ee projet/names.html",
		"utf8",
		async (err, data) => {
			if (err) {
				console.error(err);
				return;
			}

			const restriction = [
				"",
				"Mme",
				"Oueslati",
				"Nas",
				"Mohammed Haifa",
				"Im&#xE8;ne",
				"Med",
			];

			var start = 0;
			while (data.indexOf(`href="forenames/`, start) > -1) {
				var index1 = data.indexOf(`href="forenames/`, start);
				var index2 = data.indexOf(">", index1);
				var nom = data.substring(index2 + 1, data.indexOf(`<`, index2));

				if (!restriction.includes(nom)) {
					const options = {
						method: "GET",
						url: "https://api.genderize.io/?name=" + nom,
					};

					await axios.request(options).then(async function (response) {
						await pool.query(
							"INSERT INTO public.names(name, gender) VALUES ($1, $2)",
							[nom, response.data.gender == "male" ? "m" : "f"],
							async (err, result) => {
								if (err) {
									console.log(err.toString());
									res.sendStatus(400);
								}
							}
						);
					});
				}

				start = index2;
			}
		}
	);
});

router.post("/api/bestNames", (req, res) => {
	pool.query(`SELECT * FROM public.names`, [], async (err, result) => {
		if (err) {
			console.log(err.toString());
			res.sendStatus(400);
		} else {
			data = await get_best_names(result.rows, req.body.names, req.body.gender);
			res.status(200).send(data);
		}
	});
});

const get_best_names = async (data, names, gender) => {
	const top5NamesM = [];
	const top5NamesF = [];
	const name = [];
	names.map((value) => {
		for (character of value) {
			name.push(character);
		}
	});

	for (row of data) {
		if (gender == row.gender || gender == null) {
			var count = 0;

			for (character of name) {
				if (row.name.toUpperCase().indexOf(character.toUpperCase()) > -1) count++;
			}
			if (row.gender == "m")
				top5NamesM.push({ name: row.name, count: count - row.name.length });
			else top5NamesF.push({ name: row.name, count: count - row.name.length });
		}
	}

	await top5NamesM.sort(function compareFn(a, b) {
		if (a.count < b.count) return 1;
		else return -1;
	});

	await top5NamesF.sort(function compareFn(a, b) {
		if (a.count < b.count) return 1;
		else return -1;
	});

	return { males: top5NamesM.slice(0, 5), females: top5NamesF.slice(0, 5) };
};

module.exports = router;

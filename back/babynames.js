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

router.get("/api/produits", (req, res) => {
	pool.query(
		`INSERT into public.names(name, gender) values('houssem','m')`,
		[],
		async (err, result) => {
			if (err) {
				console.log(err.toString());
				res.sendStatus(400);
			} else {
				res.sendStatus(200);
			}
		}
	);
});

module.exports = router;

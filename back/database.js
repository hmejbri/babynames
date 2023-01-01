var pg = require("pg");
var client = new pg.Client(
	"postgres://vavbcoiw:n2Dcrzb98K6OYtyJr1yEJZEUZvlJZqTo@snuffleupagus.db.elephantsql.com/vavbcoiw"
);

client.connect(function (err) {
	if (err) {
		return console.error("could not connect to postgres", err);
	}
});

module.exports = client;

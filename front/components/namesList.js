import { Container, Grid, Typography } from "@material-ui/core";
import ProgressBar from "react-bootstrap/ProgressBar";

function NamesList({ gender }) {
	return (
		<Container maxWidth="xs">
			<center>
				<Typography variant="button">
					Pour {gender == "m" ? "un garçon" : "une fille"} :
				</Typography>
			</center>
			<br />
			<Grid container>
				<Grid item xs={6}>
					<Typography variant="button">Nom1</Typography>
				</Grid>
				<Grid item xs={6}>
					<ProgressBar
						animated
						now={90}
						label={"90%"}
						variant={gender == "m" ? "info" : "pinkBar"}
					/>
				</Grid>
			</Grid>
			<br />
			<Grid container>
				<Grid item xs={6}>
					<Typography variant="button">Nom1</Typography>
				</Grid>
				<Grid item xs={6}>
					<ProgressBar
						animated
						now={80}
						label={"80%"}
						variant={gender == "m" ? "info" : "pinkBar"}
					/>
				</Grid>
			</Grid>
			<br />
			<Grid container>
				<Grid item xs={6}>
					<Typography variant="button">Nom1</Typography>
				</Grid>
				<Grid item xs={6}>
					<ProgressBar
						animated
						now={70}
						label={"70%"}
						variant={gender == "m" ? "info" : "pinkBar"}
					/>
				</Grid>
			</Grid>
			<br />
			<Grid container>
				<Grid item xs={6}>
					<Typography variant="button">Nom1</Typography>
				</Grid>
				<Grid item xs={6}>
					<ProgressBar
						animated
						now={70}
						label={"70%"}
						variant={gender == "m" ? "info" : "pinkBar"}
					/>
				</Grid>
			</Grid>
			<br />
			<Grid container>
				<Grid item xs={6}>
					<Typography variant="button">Nom1</Typography>
				</Grid>
				<Grid item xs={6}>
					<ProgressBar
						animated
						now={70}
						label={"70%"}
						variant={gender == "m" ? "info" : "pinkBar"}
					/>
				</Grid>
			</Grid>
		</Container>
	);
}

export default NamesList;

import { Container, Grid, Typography } from "@material-ui/core";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { FacebookIcon, FacebookMessengerIcon, FacebookShareCount, TwitterIcon } from "react-share";
import Loading from "../components/loading";
import NamesList from "../components/namesList";

export default function Resultat() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	});

	return (
		<div>
			<div className={loading ? "bgImage1" : "bgImage"}></div>
			<div className="bgContent">
				<Container maxWidth="md">
					{loading ? (
						<Paper
							className="Paper"
							elevation={16}
							style={{
								background: "rgba(222, 235 , 251, 0.8)",
								height: "50vh",
							}}
						>
							<div className="main">
								<Loading />
							</div>
						</Paper>
					) : (
						<Paper
							className="Paper"
							elevation={16}
							style={{
								background: "rgba(222, 235 , 251, 0.8)",
							}}
						>
							<br />
							<Grid container>
								<Grid item xs={12} md={6}>
									<NamesList gender={"m"} />
								</Grid>
								<Grid item xs={12} md={6}>
									<NamesList gender={"f"} />
								</Grid>
							</Grid>

							<hr />
							<div>
								<Typography variant="button">Partager votre résultat :</Typography>
								&nbsp;&nbsp;
								<FacebookIcon size={25} round={true} />
								&nbsp;&nbsp;
								<FacebookMessengerIcon size={25} round={true} />
								&nbsp;&nbsp;
								<TwitterIcon size={25} round={true} />
							</div>
							<br />
						</Paper>
					)}
				</Container>
			</div>
		</div>
	);
}

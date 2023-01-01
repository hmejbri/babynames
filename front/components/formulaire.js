import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Button, Container } from "@material-ui/core";
import Card from "react-bootstrap/Card";

export default function Formulaire({ backgroundColor, textColor, secondaryColor }) {
	return (
		<div>
			<Paper className={"Paper"} elevation={16} style={{ background: "rgba(0, 0, 0,0)" }}>
				<Container style={{ paddingTop: "3em" }}>
					<Typography
						className="divElevation"
						variant="h3"
						color={textColor}
						style={{
							background: backgroundColor,
							borderRadius: "0.3em",
							fontFamily: "georgia",
							paddingBottom: "5px",
						}}
					>
						Obtenir un nom pour votre{" "}
						<div
							style={{
								fontWeight: "bold",
								color: secondaryColor,
								display: "inline",
								fontStyle: "oblique",
							}}
						>
							bébé
						</div>{" "}
						avec notre{" "}
						<div
							style={{
								fontWeight: "bold",
								color: secondaryColor,
								display: "inline",
							}}
						>
							algorithme intelligent.
						</div>
					</Typography>
					<hr style={{ color: backgroundColor }} />
					<Grid container>
						<Grid item xs={12} md={6} lg={4}>
							<Card
								className="card"
								style={{
									width: "18rem",
									height: "25rem",
									backgroundColor: backgroundColor,
									fontFamily: "georgia",
								}}
							>
								<Card.Img
									variant="top"
									src="https://g.foolcdn.com/editorial/images/519984/new-parents-holding-newborn-baby-mom-dad-father-mother.jpg"
								/>
								<Card.Body>
									<Card.Title style={{ color: textColor, fontWeight: "bold" }}>
										En utilisant les noms des parents
									</Card.Title>
									<hr />
									<Card.Text style={{ color: textColor }}>
										Vous pouvez obtenir un nom pour votre bébé en utilisant les
										noms des parents pour une correspondance parfaite.
									</Card.Text>
								</Card.Body>
							</Card>
						</Grid>

						<Grid item xs={12} md={6} lg={4}>
							<Card
								className="card"
								style={{
									width: "18rem",
									height: "25rem",
									backgroundColor: backgroundColor,
									fontFamily: "georgia",
								}}
							>
								<Card.Img
									variant="top"
									src="https://www.kidz-village.ac.th/wp-content/uploads/2020/09/experience-min.jpg"
								/>
								<Card.Body>
									<Card.Title style={{ color: textColor, fontWeight: "bold" }}>
										En utilisant des autres noms.
									</Card.Title>
									<hr />
									<Card.Text style={{ color: textColor }}>
										Vous pouvez obtenir un nom pour votre bébé qui ressemble à
										n'importe quel autre nom(s).
									</Card.Text>
								</Card.Body>
							</Card>
						</Grid>

						<Grid item xs={1}>
							<div className="vl"></div>
						</Grid>

						<Grid
							item
							xs={12}
							md={6}
							lg={3}
							className="divElevation"
							style={{
								background: backgroundColor,
								borderRadius: "1em",
							}}
						>
							<center style={{ paddingTop: "20%" }}>
								<Typography
									variant="h3"
									color={textColor}
									style={{ fontFamily: "georgia", padding: "10px" }}
								>
									Qu'est-ce que vous attendez ?
								</Typography>
								<br />
								<hr />
								<br />
								<Button
									variant="contained"
									style={{ backgroundColor: textColor, color: backgroundColor }}
								>
									Commencer
								</Button>
							</center>
						</Grid>
					</Grid>
				</Container>
				<br />
			</Paper>
		</div>
	);
}

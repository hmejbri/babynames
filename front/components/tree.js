import * as React from "react";
import Paper from "@mui/material/Paper";
import { Container, Zoom, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const useStyles = makeStyles({
	inputSizeNumber: {
		width: 50,
	},
	inputSize: {
		width: 100,
	},
});

export default function Tree({ backgroundColor, textColor, secondaryColor }) {
	var classes = useStyles();
	const [children, setChildren] = React.useState(0);

	const handleChange = async (e) => {
		if (e.target.value > 9) {
			const firstNb = e.target.value.toString()[0];
			e.target.value = +firstNb;
		}

		if (e.target.value == "") setChildren(0);
		else setChildren(e.target.value);
	};

	return (
		<center>
			<Paper
				className={"Paper"}
				elevation={16}
				style={{
					background: "rgba(0, 0, 0,0)",
					marginTop: "1em",
					width: "80%",
					height: "80vh",
				}}
			>
				<Container
					style={{
						background: backgroundColor,
						paddingTop: "3em",
						margin: 0,
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						borderRadius: "0.3em",
						fontFamily: "georgia",
						paddingBottom: "5px",
						width: "60%",
					}}
					className="divElevation"
					color={textColor}
				>
					<Timeline position="alternate">
						<Zoom in={true} style={{ transitionDelay: "100ms" }}>
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot
										sx={{
											backgroundColor: secondaryColor,
										}}
									/>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent style={{ color: textColor, fontWeight: "bold" }}>
									Je m'appelle{" "}
									<TextField
										style={{ width: 100 }}
										sx={{ display: "inline" }}
										size="small"
									></TextField>
									.
								</TimelineContent>
							</TimelineItem>
						</Zoom>
						<Zoom in={true} style={{ transitionDelay: "200ms" }}>
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot
										sx={{
											backgroundColor: secondaryColor,
										}}
									/>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent style={{ color: textColor, fontWeight: "bold" }}>
									<Select
										labelId="demo-simple-select-standard-label"
										id="demo-simple-select-standard"
										value={1}
										style={{ color: textColor, fontWeight: "bold" }}
										/* onChange={handleChange} */
									>
										<MenuItem value={1} selected>
											Mon mari
										</MenuItem>
										<MenuItem value={2}>Ma femme</MenuItem>
									</Select>{" "}
									S'appelle{" "}
									<TextField
										style={{ width: 100 }}
										sx={{ display: "inline" }}
										size="small"
									></TextField>
									.
								</TimelineContent>
							</TimelineItem>
						</Zoom>
						<Zoom in={true} style={{ transitionDelay: "300ms" }}>
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot
										sx={{
											backgroundColor: secondaryColor,
										}}
									/>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent style={{ color: textColor, fontWeight: "bold" }}>
									Mon bébé est&nbsp;&nbsp;
									<Select
										labelId="demo-simple-select-standard-label"
										id="demo-simple-select-standard"
										value={1}
										style={{ color: textColor, fontWeight: "bold" }}
										/* onChange={handleChange} */
									>
										<MenuItem value={1} selected>
											Un garcon
										</MenuItem>
										<MenuItem value={2}>Une fille</MenuItem>
									</Select>
									.
								</TimelineContent>
							</TimelineItem>
						</Zoom>
						<Zoom in={true} style={{ transitionDelay: "400ms" }}>
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot
										sx={{
											backgroundColor: secondaryColor,
										}}
									/>
								</TimelineSeparator>
								<TimelineContent style={{ color: textColor, fontWeight: "bold" }}>
									J'ai déja{" "}
									<TextField
										style={{ width: 50 }}
										sx={{ display: "inline" }}
										size="small"
										type="number"
										InputProps={{
											inputProps: {
												max: 3,
												min: 0,
											},
										}}
										onChange={handleChange}
									></TextField>{" "}
									enfants.
								</TimelineContent>
							</TimelineItem>
						</Zoom>
						{Array.from({ length: children }, (_, i) => i + 1).map((value) => {
							return (
								<Zoom
									in={true}
									style={{ transitionDelay: 100 * (value + 1) + "ms" }}
									key={value}
								>
									<TimelineItem>
										<TimelineSeparator>
											<TimelineDot color="primary" />
										</TimelineSeparator>
										<TimelineContent
											style={{
												color: textColor,
												fontWeight: "bold",
												fontSize: 13,
											}}
										>
											Mon {value == 1 ? value + "ér" : value + "éme"} enfant
											s'appelle
											<TextField
												style={{ width: 100 }}
												sx={{ display: "inline" }}
												size="small"
												helperText="Non obligatoire"
												type="number"
												onChange={handleChange}
											></TextField>
											.
										</TimelineContent>
									</TimelineItem>
								</Zoom>
							);
						})}
					</Timeline>
				</Container>
				<br />
			</Paper>
		</center>
	);
}

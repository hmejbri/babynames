import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { BoxLoading } from "react-loadingg";

export default function Loading() {
	const x1 = ".";
	const x2 = "..";
	const x3 = "...";
	const [points, setPoints] = useState("");
	const [color, setColor] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			if (points == "") setPoints(x1);
			else if (points == x1) {
				setColor(color == 1 ? 0 : 1);
				setPoints(x2);
			} else if (points == x2) setPoints(x3);
			else setPoints("");
		}, 500);
	});

	return (
		<div>
			<div style={{ marginTop: "3em" }}>
				<BoxLoading
					size="large"
					speed={0.6}
					color={color == 1 ? "rgba(126, 177, 241, 1)" : "rgba(214, 66, 186, 1)"}
				/>
			</div>

			<Typography variant="h6" style={{ paddingLeft: 20, paddingRight: 20 }}>
				À LA RECHERCHE D'UN NOM POUR VOTRE BÉBÉ{points}
			</Typography>
		</div>
	);
}

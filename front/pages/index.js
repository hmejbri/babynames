import { Container } from "@material-ui/core";
import Formulaire from "../components/formulaire";
import Questions from "../components/questions";

export default function Home() {
	const backgroundColor = "#D5F5F1";
	const textColor = "#67567D";
	const secondaryColor = "#FF955E";

	return (
		<div>
			<div className="bgImage"></div>
			<div className="bgContent">
				<Container>
					<Formulaire
						backgroundColor={backgroundColor}
						textColor={textColor}
						secondaryColor={secondaryColor}
					></Formulaire>
				</Container>
			</div>
		</div>
	);
}

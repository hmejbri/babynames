import { Container } from "@material-ui/core";
import Tree from "../components/tree";

export default function Questions() {
	const backgroundColor = "#D5F5F1";
	const textColor = "#67567D";
	const secondaryColor = "#FF955E";

	return (
		<div>
			<div className="bgImage"></div>
			<div className="bgContent">
				<Container>
					<Tree
						backgroundColor={backgroundColor}
						textColor={textColor}
						secondaryColor={secondaryColor}
					></Tree>
				</Container>
			</div>
		</div>
	);
}

import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import renderer from "react-test-renderer";

describe("Cards component", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Card />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("renders the UI as expected", () => {
		const tree = renderer
			.create(
				<div className="List-cards">
					{props.cards.map((card) => <Card key={card.id} title={card.title} content={card.content} />)}
					<button type="button" className="List-add-button">
						+ Add Random Card
					</button>
				</div>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

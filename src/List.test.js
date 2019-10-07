import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import renderer from "react-test-renderer";

describe("List component", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<List />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("renders the UI as expected", () => {
		const tree = renderer
			.create(
				<div className="App-list">
					{store.lists.map((list) => (
						<List key={list.id} header={list.header} cards={list.cardIds.map((id) => store.allCards[id])} />
					))}
				</div>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

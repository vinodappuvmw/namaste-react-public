const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" },
    [React.createElement("h1", {}, "Header1"), React.createElement("h1", {}, "Header2")]),
React.createElement("div", { id: "child2" },
    [React.createElement("h1", {}, "Header3"), React.createElement("h1", {}, "Header4")])]);
    console.log(parent);
const heading = React.createElement("h1", {}, "Heading React!!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
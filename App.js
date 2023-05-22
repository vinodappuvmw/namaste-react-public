/***
 * <div>
 *      div
 *          h1
 *          h1
 *      div
 *          h2
 *          h2
 * </div>
 * 
 */

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div",
    { id: "sub-parent-1" },
    [React.createElement("h1", {}, "H1 header 1"),
    React.createElement("h1", {}, "H1 header 2")]), React.createElement("div",
        { id: "sub-parent2" },
        [React.createElement("h2", {}, "H1 header 1"),
        React.createElement("h2", {}, "H1 header 2")])]);



const heading = React.createElement(
    "h1", { id: "heading", xyz: "abc" },
    "Hello wold react!!"
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading);
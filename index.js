const heading = React.createElement("div", { class: "heading", xyz: "lorem" }, [
  React.createElement("div", { class: "child-1" }, [
    React.createElement("h1", {}, "Hello H1"),
    React.createElement("h2", {}, "Hello H2"),
  ]),
  React.createElement("div", { class: "child-2" }, [
    React.createElement("h3", {}, "Hello H3"),
    React.createElement("h4", {}, "Hello H4"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

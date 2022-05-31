// returns a simple icon
// decided to build a component for it because I needed something to snapshot test that doesnt need/have props
// black (Unfavorited) icon
export default function Unfavorite() {
  return <i title="Add favorite" className="fa-solid fa-heart heartLogo" />;
}

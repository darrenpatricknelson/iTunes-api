// returns a simple icon
// decided to build a component for it because I needed something to snapshot test that doesnt need/have props
// Red (Favorited) icon
export default function Favorite() {
  return (
    <i
      title="Remove favorite"
      className="fa-solid fa-heart heartLogo heartLogoTrue"
    />
  );
}

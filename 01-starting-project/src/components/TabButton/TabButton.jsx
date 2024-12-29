export default function TabButton({ children }) {
  function handleClick() {
    console.log("HEllo word");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}

type props = {
  name?: string;
};
function Greet({ name }: props) {
  return <div>Hello {name}</div>;
}

export default Greet;

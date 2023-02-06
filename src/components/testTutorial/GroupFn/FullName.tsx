type props = {
  fullName?: string;
};

function FullName(props: props) {
  return <div>Hi {props.fullName}</div>;
}

export default FullName;

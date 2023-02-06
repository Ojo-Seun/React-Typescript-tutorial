import React, { useState } from "react";
import "./App.css";
import IsAuth from "./auth/IsAuth";
import ProfilePage from "./auth/ProfilePage";
import PassingPropsTypes from "./ClassComponent/PassingPropsTypes";
import ArrayType from "./components/ArrayType";
import ChildrenComponet from "./components/ChildrenComponet";
import ChildrenText from "./components/ChildrenText";
import FunctionAsProp from "./components/FunctionAsProp";
import GenericType from "./components/GenericType";
import Greeting from "./components/Greeting";
import HandleEvent from "./components/HandleEvent";
import InputEvent from "./components/InputEvent";
import ObjectType from "./components/ObjectType";
import StyleAsProps from "./components/StyleAsProps";
import Application from "./components/testTutorial/Application/Application";
import CustomCounter from "./components/testTutorial/UseCounter/CustomCounter";
import Counter from "./components/testTutorial/UserEvent/Counter";
import Users from "./components/testTutorial/Users/Users";
import UnionType from "./components/UnionType";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const person = {
    Fname: "Code",
    Lname: "Brain",
  };

  const names = [
    { Fname: "Ojo", Lname: "Seun" },
    { Fname: "Code", Lname: "Brain" },
    { Fname: "We", Lname: "Can" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input === "") return;
    setItems([...items, input]);
  };

  const style = {
    border: "1px solid purple",
    padding: "5px",
    width: "20rem",
    margin: "auto",
  };

  const delItem = (id: number) => {
    items.splice(id, 1);

    setItems([...items]);
  };

  return (
    <div className="App">
      {/* <Greeting name='Seun' isLogin={true} />
      <ObjectType name={person}/>
      <UnionType status='Loading' />
      <ArrayType names={names} />
      <HandleEvent />
      <FunctionAsProp handleClick={(event)=>console.log(event)}/>
      <ChildrenText>Children is text</ChildrenText>
      <ChildrenComponet><ChildrenText>Component child call component</ChildrenText></ChildrenComponet>
      <InputEvent value={input} handleChange={handleChange} handleClick={handleClick} />
      <GenericType items={items} delItem={delItem} />
      <StyleAsProps style={style} />
      <PassingPropsTypes message='Count is' />
      <IsAuth isAuth={false} children={<ProfilePage name='PROFILE'/>}/> */}

      {/* <Application />
      <CustomCounter /> */}
      <Users />
    </div>
  );
}

export default App;

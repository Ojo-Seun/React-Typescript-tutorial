import React from "react";

type namePropsType = {
  name: string;
};

function ProfilePage({ name }: namePropsType) {
  return <div>Profile Page name is {name}</div>;
}

export default ProfilePage;

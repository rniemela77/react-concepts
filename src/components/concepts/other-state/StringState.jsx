import { useState } from "react";

const StringState = () => {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(20);
  const [birthday, setBirthday] = useState("1990-01-01");
  const [isMarried, setIsMarried] = useState(false);

  return (
    <div>
      {name} is a {age} year old, born on {birthday}, and {isMarried ? "is" : "is not"} married.

      <p>Name: {name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <p>Age: {age}</p>
      <input type="range" min="0" max="100" value={age} onChange={(e) => setAge(e.target.value)} />

      <p>Birthday: {birthday}</p>
      <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />

      <p>Is Married: {isMarried ? "Yes" : "No"}</p>
      <input type="checkbox" checked={isMarried} onChange={(e) => setIsMarried(e.target.checked)} />
    </div>
  );
};

export default StringState;
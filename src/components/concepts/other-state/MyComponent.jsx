import { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(20);
  const [isMarried, setIsMarried] = useState(false);

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <br />

      <label htmlFor="yearsExperience">Age:</label>
      <input id="yearsExperience" type="range" min="1" max="100" value={age} onChange={(e) => setAge(e.target.value)} />

      <br />

      <label htmlFor="isMarried">Is Married:</label>
      <input id="isMarried" type="checkbox" checked={isMarried} onChange={(e) => setIsMarried(e.target.checked)} />

      <hr />

      <p>{name} is a {age} year old who {isMarried ? "is" : "is not"} married.</p>
    </div>
  );
};

export default MyComponent;
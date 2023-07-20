import React, { useState } from "react";
import LogIn from "../component/LogInComp";
import SignUp from "../component/Signup";
import MyContext from "../hooks/MyContext";

function Rejester({ visibale, onClose }) {
  // translate between login and sign
  const [translate, setTranslate] = useState(false);

  const [value, setValue] = useState(null);

  if (!visibale) return null;
  console.log(value);

  return (
    <div>
      <MyContext.Provider value={{ value, setValue }}>
        {!value ? (
          <LogIn onClose={onClose} translate={translate} />
        ) : (
          <SignUp onClose={onClose} translate={translate} />
        )}
      </MyContext.Provider>
    </div>
  );
}

export default Rejester;

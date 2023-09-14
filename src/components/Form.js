import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  return (
    <>
      <div className=" w-96 mx-auto my-20 items-center bg-stone-200 p-14 border-2 rounded-2xl">
        <form action="" onSubmit={submitForm}>
          <div className="w-full p-4 h-24 ">
            <label className="text-xl " htmlFor="">
              Email
            </label>
            <input
              className="h-10 w-full p-2 border border-neutral-500 rounded-lg"
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full p-4  h-24  ">
            <label className="text-xl" htmlFor="">
              password
            </label>
            <input
              className="h-10 w-full p-2 border border-neutral-500 rounded-lg"
              type="password"
              name="password"
              id="pasword"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="border border-neutral-500 rounded-lg h-12 my-6 px-4 mx-4 hover:bg-sky-100">
            submit
          </button>
        </form>
      </div>


        <div className=" w-3/5  mx-auto py-6 items-center bg-stone-200  p-2 border-2 rounded-2xl">
          {allEntry.map((curElem) => {
            return (
              <div className=" bg-stone-200 flex flex-row">
                <p className="mx-14 py-2">{curElem.email}</p>
                <p className="mx-20 py-2">{curElem.password}</p>z
                
              </div>
            );
          })}
       </div>
    </>
  );
};

export default Form;

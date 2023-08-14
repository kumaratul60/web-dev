import React from "react";

const Contact = () => {
  return (
    <div className="w-6/12 m-auto p-4 text-center">
      <h1 className="font-bold text-2xl ">Contact</h1>
      <form>
        <input
          type="text"
          className="p-2 m-2 border black bg-gray-200 rounded-md"
          placeholder="name"
        />
        <input
          type="text"
          className="p-2 m-2 border black bg-gray-200 rounded-md"
          placeholder="massage"
        />
        <button className="p-2 m-2 border black bg-slate-200 rounded-lg">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

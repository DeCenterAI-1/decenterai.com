import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Demo = () => {
  return (
    <main className="bg-primary_13 h-screen flex items-center">
      <div className="w-[50%] m-auto ">
        <h1 className="font-logirentBold text-center text-3xl text-primary_1">
          AI Infrastructure For Model Training
        </h1>
        <form className="font-archivo">
          <label htmlFor="name">Model name</label>
          <input
            type="text"
            placeholder="Enter Model name"
            className="rounded-md bg-primary_8 text-primary_1 p-2 w-full border-none focus:ring-0 focus:border-none outline-none"
          />

          <p className="text-primary_1 mt-4">
            Upload working directory of notebook
          </p>
          <div className="bg-primary_8 rounded-md h-28 p-2 flex">
            <div className="w-[50%] h-full flex space-x-10 items-center text-primary_1">
              <AiOutlineCloudUpload size={40} />
              <div>
                <p className="font-semibold text-lg">Drag and drop file here</p>
                <p className="font-thin text-sm">Limit 1GB per file.zip</p>
              </div>
            </div>

            <div className="w-[50%] h-full flex justify-end items-center text-primary_1">
              <input
                type="file"
                accept=".zip"
                className=" text-primary_1 rounded-xl mt-4 bg-primary_13  border border-primary_8 py-4 px-2"
              />
            </div>
          </div>

          <div className="bg-primary_11 rounded-md h-12 p-2 text-primary_1 mt-4 flex items-center ">
            Input archive not found using sample.
          </div>

          <p className="text-primary_1 mt-4">Select a notebook</p>
          <select className="rounded-md bg-primary_8 text-primary_1 p-4 cursor-pointer w-full border-none focus:ring-0 focus:border-none outline-none">
            <option value="">Select </option>
          </select>

          <button
            type="submit"
            className=" text-primary_1 rounded-xl mt-4 bg-primary_13  border border-primary_8 py-4 px-6"
          >
            Execute
          </button>
        </form>
      </div>
    </main>
  );
};

export default Demo;
import { useDispatch, useSelector } from "react-redux";
import {
  addValueCounter,
  decrementCounter,
  incrementCounter,
} from "./features/counterSlice";
import { useState } from "react";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [inputNumber, setInputNumber] = useState(10);

  return (
    <div className="h-screen bg-black flex justify-center items-center flex-col gap-5">
      <h1 className="text-white font-medium text-4xl">Counter: </h1>
      <h1 className="text-blue-600 font-medium text-4xl">{counter}</h1>
      <div className="flex gap-8">
        <button
          onClick={() => dispatch(incrementCounter())}
          className="text-pink-600 font-medium text-4xl border p-3 mx-auto border-blue-400 rounded-lg"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrementCounter())}
          className="text-pink-600 font-medium text-4xl border p-3 mx-auto border-blue-400 rounded-lg"
        >
          -
        </button>
      </div>
      <div className="text-gray-400 font-semibold">
        <h1>Add Number : </h1>
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(Number(e.target.value))}
        />
        <button
          className="text-blue-600 font-medium bg-gray-200 text-lg px-2 py-1 rounded-lg ml-4"
          onClick={() => dispatch(addValueCounter(inputNumber))}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

import Controls from "./components/controls";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold underline text-lime-500 place-items-center text-center">
          Welcome to
          <br />
          OmniDex
        </h1>
      </div>
      <br />
      <div className="p-1 bg-gray-400 rounded-3xl sm:w-1/2 ">
        <div className="h-96 bg-black rounded-3xl flex justify-around items-center flex-col">
          <div className="p-20 w-4/5 bg-lime-600 rounded-3xl"></div>
          <Controls />
        </div>
      </div>
    </>
  );
}

export default App;

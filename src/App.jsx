import Card from "./components/Card";
import AddTask from "./components/AddTask";
import db from "../db.json";
function App() {
  // console.log(db.data);

  return (
    <>
      <h1 className="text-red-600 text-2xl font-bold text-center my-5">
        Task Management Application
      </h1>
      <AddTask />
      <div className="grid w-[90%] justify-between gap-20 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {db.data.map((ele) => (
          <Card {...ele} key={ele.id} />
        ))}
      </div>

      {/* <Card /> */}
    </>
  );
}

export default App;

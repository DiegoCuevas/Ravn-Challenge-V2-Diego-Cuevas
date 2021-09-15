import AllPeople from "./table/allPeople"
function App() {
  return (
    <div className="h-screen overflow-y-hidden">
      <div className="bg-black text-white text-base py-3 px-8">
        Ravn Star Wars Registry
      </div>
      <AllPeople></AllPeople>
    </div>
  );
}

export default App;


import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
function App() {
  return  (
    <div className="flex flex-col justify-center items-center bg-green-200 h-100">
      <h1>Assignment 6 </h1>
      <SearchBar />
      <UserList />
    </div>
  );
}

export default App;

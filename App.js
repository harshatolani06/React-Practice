import './App.css';

const data =[
  {name: "Harsha", age: 23, gender: "Women"},
  {name: "Chandan", age: 29, gender: "Male"},
  {name: "shraddha", age: 21, gender: "Women"},

]

function App(){

  return(
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val,key)=>{
          return (
            <tr key = {key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
            </tr>
          )

          
        })}
      </table>
    </div>
  );

}
export default App;


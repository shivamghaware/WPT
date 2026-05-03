import { useEffect, useState } from "react"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Home() {
  const [emps, setEmps] = useState([]);
  const [emp, setEmp] = useState({ id: 0, name: "", address: "" });

  useEffect(() => {
    var someArray = [
      { id: 1, name: "shivam", address: "pune" },
      { id: 2, name: "annirudh", address: "ahmednagar" },
      { id: 3, name: "abhishesk", address: "Nashik" },
      { id: 4, name: "Krishna", address: "Nashik" },
      { id: 5, name: "Pawan", address: "Washim" }
    ]
    setEmps(someArray);
  }, [])

  const remove=(id)=>{
    var copy=[...emps];
    var filteredArr=copy.filter((e)=>{
      return e.id!=id;
    })
    setEmps(filteredArr);
  }

  const onTextChange=(args)=>{
    var copyOfEmp={...emp};
    copyOfEmp[args.target.name]=args.target.value;
    setEmp(copyOfEmp);
  }

  const addRecord=()=>{
    var copyOfEmps=[...emps];
    var copyOfEmp={...emp};
    copyOfEmps.push(copyOfEmp);
    setEmps(copyOfEmps);
    serEmp({ id: 0, name: "", address: ""});
  }


  return (
    <>
      <div className="container">
        <hr />
          <label>ID</label>
          <input type="text" name="id" className="form-control" value={emp.id} onChange={onTextChange}/>
        <hr />
          <label>Name</label>
          <input type="text" name="name" className="form-control" value={emp.name} onChange={onTextChange}/>
        <hr />
        <label>Address</label>
          <input type="text" name="address" className="form-control" value={emp.address} onChange={onTextChange}/>
        <hr />
        <button className="btn btn-primary" onClick={addRecord}>Add Record</button>
        <hr />



        <hr />
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                emps.map((e) => {
                  return (
                    <tr key={e.id}>
                      <td>{e.id}</td>
                     <td>{e.name}</td>
                     <td>{e.address}</td>
                     <td>
                        <button className="btn btn-danger" onClick={()=>{remove(e.id)}}>delete</button>
                     </td>
                    </tr>
                  );
                })
              }
            </tbody>

          </table>
        </div>
      </div>
    </>
  )
}

export default Home

import { useEffect, useState } from "react"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Home() {
  const [emp, setEmp] = useState({ id: "", name: "", address: "" });
  const [emps, setEmps] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    var initialArr = [
      { id: 1, name: "shivam", address: "pune" },
      { id: 2, name: "annirudh", address: "ahmednagar" },
      { id: 3, name: "abhishesk", address: "Nashik" },
      { id: 4, name: "Krishna", address: "Nashik" },
      { id: 5, name: "Pawan", address: "Washim" }
    ]
    setEmps(initialArr);
  }, [])


  var remove = (id) => {
    var copyOfEmps = emps.filter((e) => {
      return e.id != id
    })
    setEmps(copyOfEmps);
  }

  var append = () => {
    var copyOfEmp = { ...emp };
    var copyOfEmps = [...emps];
    copyOfEmps.push(copyOfEmp);
    setEmps(copyOfEmps);
    setEmp({ id: "", name: "", address: "" });
  }

  var onTextChange = (args) => {
    var copyOfEmp = { ...emp };
    copyOfEmp[args.target.name] = args.target.value;
    setEmp(copyOfEmp);
  }


  var update = (e) => {
    setEmp(e);
  }

  var updateRecord = () => {
    var copyOfEmps = [...emps];
    copyOfEmps.map((e) => {
      if (e.id == emp.id) {
        e.id = emp.id;
        e.name = emp.name;
        e.address = emp.address;
      }
    })
    setEmps(copyOfEmps);
    setEmp({ id: "", name: "", address: "" });
  }

  var onSearchTextChange = (args) => {
    var copySearchText = args.target.value;
    setSearchText(copySearchText);
  }


  return (
    <>
      <div className="container">
        <h3>Employee</h3>
        <hr />
        <label>Id</label>
        <input className="form-control" type="text" name="id" value={emp.id} onChange={onTextChange} />
        <br />
        <label>Name</label>
        <input className="form-control" type="text" name="name" value={emp.name} onChange={onTextChange} />
        <br />
        <label>Address</label>
        <input className="form-control" type="text" name="address" value={emp.address} onChange={onTextChange} />
        <hr />
        <button className="btn btn-primary" onClick={append} >Add Record</button>
        <button className="btn btn-warning" onClick={updateRecord} >Update Current Record</button>
        <hr />
        <label>Search</label>
        <input className="form-control" type="text" name="searchText" value={searchText} onChange={onSearchTextChange}></input>
        <hr />
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                emps.map((e) => {
                  if (searchText != "") {
                    if (e.address.includes(searchText)) {
                      return (
                        <tr key={e.id}>
                          <td>{e.id}</td>
                          <td>{e.name}</td>
                          <td>{e.address}</td>
                          <td>
                            <button className="btn btn-danger" onClick={() => { remove(e.id) }}>delete</button>
                            <span>  </span>
                            <button className="btn btn-warning" onClick={() => { update(e) }}>update</button>
                          </td>
                        </tr>
                      );
                    }
                  } else {
                    return (
                      <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.address}</td>
                        <td>
                          <button className="btn btn-danger" onClick={() => { remove(e.id) }}>delete</button>
                          <span>  </span>
                          <button className="btn btn-warning" onClick={() => { update(e) }}>update</button>
                        </td>
                      </tr>
                    );
                  }
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

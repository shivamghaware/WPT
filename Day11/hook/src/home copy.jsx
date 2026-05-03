import { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [emps, setEmps] = useState([]);
  const [emp, setEmp] = useState({ id: 0, name: "", address: "" });

  useEffect(() => {
    const someArray = [
      { id: 1, name: "shivam", address: "pune" },
      { id: 2, name: "annirudh", address: "ahmednagar" },
      { id: 3, name: "abhishesk", address: "Nashik" },
      { id: 4, name: "Krishna", address: "Nashik" },
      { id: 5, name: "Pawan", address: "Washim" }
    ];
    setEmps(someArray);
  }, []);

  const remove = (id) => {
    const filteredArr = emps.filter((e) => e.id != id);
    setEmps(filteredArr);
  };

  const onTextChange = (args) => {
    const copyOfEmp = { ...emp };
    copyOfEmp[args.target.name] = args.target.value;
    setEmp(copyOfEmp);
  };

  const addRecord = () => {
    if (!emp.id || !emp.name || !emp.address) {
      alert("Please fill out all fields.");
      return;
    }

    const copyOfEmps = [...emps];
    const copyOfEmp = { ...emp };
    copyOfEmps.push(copyOfEmp);
    setEmps(copyOfEmps);
    setEmp({ id: 0, name: "", address: "" });
  };

  return (
    <>
      <div className="container mt-4">
        <h2>Employee Management</h2>
        <hr />
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input type="number" name="id" className="form-control" value={emp.id} onChange={onTextChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" value={emp.name} onChange={onTextChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input type="text" name="address" className="form-control" value={emp.address} onChange={onTextChange} />
        </div>
        
        <button className="btn btn-primary" onClick={addRecord}>Add Record</button>
        <hr />

        <div className="table-responsive">
          <table className="table table-bordered table-striped text-center">
            <thead className="table-dark">
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
                        <button className="btn btn-danger btn-sm" onClick={() => { remove(e.id) }}>
                          Delete
                        </button>
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
  );
}

export default Home;
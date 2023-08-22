import { useReducer, useState,useEffect } from "react";

export default function CustomerRegistration()
{
    const init={

        fname:"",
        lname:"",
        contactno:"",
        emailid:"",
        cityid:0,
        areaid:0,
        roleid:1,
        questionid:0,
        answer:"",
        userid:"",
        password:""
    };
    const reducer=(state,action) =>
    {
        switch(action.type)
        {
            case"update":
            return {...state,[action.fld]:action.value,};
            case "reset":
              return init;
        }
    }

    
    const[info,dispatch]=useReducer(reducer,init)
    const [allarea,setAllarea]=useState([]);
    const [allcities, setAllcities] = useState([]);
    const [allques, setAllques] = useState([]);
   

    const senddata = (e) => {
      e.preventDefault();
      const reqOptions = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(info),
      };
      fetch("http://localhost:8080/registercustomer", reqOptions)
        .then((resp) => {
          resp.json();
          console.log(resp.status);
          if (resp.status === 200) {
            //resp.json();
            alert("Registration Successful...!");
            
          } else {
            alert("Registration Failed.");
            window.location.reload();
          }
        })
        .catch((e) => {
          console.log(e);
          alert("Registration Failed.");
          window.location.reload();
        });
    };


      const getAreas = (id) => {
        fetch("http://localhost:8080/getAreaByCityId?id=" + id)
          .then((resp) => resp.json())
          .then((a) => setAllarea(a));
      }; 
    
      useEffect(() => {
        fetch("http://localhost:8080/getCities")
          .then((resp) => resp.json())
          .then((c) => setAllcities(c));
    
         fetch("http://localhost:8080/getQuestions")
          .then((resp) => resp.json())
          .then((q) => setAllques(q)); 
      }, []); 
      

    
      return (
        <div style={{ backgroundColor: "white" }}
        className="container-fluid p-3 mb-3 text-black shadow rounded-4">
            <div className="container-fluid">
                <form>
                    <table className="tatble table table-striped">
                        <thead>
                        <tr>
                            <th colSpan={2}>
                                <h3>Customer Registration</h3><hr />
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className="form-gropu">
                                <td>
                                    <label>First Name:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="text"
                                    id="fname"
                                    placeholder="Enter first name"
                                    value={info.fname.value}
                                    onChange={(e)=>{dispatch({type:"update",fld:"fname",value:e.target.value})}}
                                     />
                                </td>
                            </tr>
                            <tr className="form-gropu">
                                <td>
                                    <label>Last Name:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="text"
                                    id="lname"
                                    placeholder="Enter last name"
                                    value={info.fname.value}
                                    onChange={(e)=>{dispatch({type:"update",fld:"lname",value:e.target.value})}}
                                     />
                                </td>
                            </tr>
                            <tr className="form-gropu">
                                <td>
                                    <label>Contact no:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="text"
                                    id="contactno"
                                    placeholder="Enter Contact number"
                                    value={info.fname.value}
                                    onChange={(e)=>{dispatch({type:"update",fld:"contactno",value:e.target.value})}}
                                     />
                                </td>
                            </tr>
                            <tr className="form-gropu">
                                <td>
                                    <label>Email ID:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="email"
                                    id="emailid"
                                    placeholder="Enter Emailid"
                                    value={info.fname.value}
                                    onChange={(e)=>{dispatch({type:"update",fld:"emailid",value:e.target.value})}}
                                     />
                                </td>
                                </tr>
                                <tr className="form-group">
                <td>
                  <label htmlFor="cityid"> Select City</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="cityid"
                    name="cityid"
                    onChange={(e) => {
                        getAreas(e.target.value);
                      dispatch({
                        type: "update",
                        fld: "cityid",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {allcities.map((city) => {
                      return (
                        <option value={city.id} key={city.id}>
                          {city.city}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="areaid"> Select Area</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="areaid"
                    name="areaid"
                    onChange={(e) => {
                      dispatch({
                        type: "update",
                        fld: "areaid",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {allarea.map((area) => {
                      return (
                        <option value={area.id} key={area.id}>
                          {area.area}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="questionid"> Select Security Question</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="questionid"
                    name="questionid"
                    onChange={(e) => {
                      dispatch({
                        type: "update",
                        fld: "questionid",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {allques.map((q) => {
                      return (
                        <option value={q.id} key={q.id}>
                          {q.question}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr className="form-gropu">
                                <td>
                                    <label>Answer:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="text"
                                    id="answer"
                                    placeholder="Enter the answer"
                                    value={info.answer.value}
                                    onChange={(e)=>{dispatch({type:"update",fld:"answer",value:e.target.value})}}
                                     />
                                </td>
                            </tr>
                            <tr className="form-gropu">
                                <td>
                                    <label>User ID:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="text"
                                    id="userid"
                                    placeholder="Enter userid"
                                    value={info.userid.value}
                                    onChange={(e)=>{dispatch({type:"update",fld:"userid",value:e.target.value})}}
                                     />
                                </td>
                            </tr>
                            <tr className="form-gropu">
                                <td>
                                    <label>Password:</label>
                                </td>
                                <td>
                                    <input className="form-control" 
                                    type="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={info.password.value}
                                    onChange={(e)=>{dispatch({type:"update",fld:"password",value:e.target.value})}}
                                     />
                                </td>
                            </tr>
                             <tr className="form-group">
                <td>
                  <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    onClick={(e) => {
                      senddata(e);
                    }}
                    
                  >
                    Submit
                  </button>
                </td>
                <td>
                  <button
                    type="reset"
                    className="btn btn-primary mb-3"
                    onClick={() => {
                      dispatch({ type: "reset" });
                    }}
                  >
                    clear
                  </button>
                </td>
              </tr>
            
             </tbody>

                    </table>
                </form>

            </div>
            <p>{JSON.stringify(info)}</p>
        </div>
      )
  }
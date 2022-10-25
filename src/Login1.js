import React, { useEffect, useState } from "react";
import axios from "axios";

function Login1() {
  const [Active, setActive] = useState()


  const [UserType, setuserType] = useState("")


  const [Remarks, setremarks] = useState("")
  const [Api_user, setapi_user] = useState("")


  const [Datas, setDatas] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiVVNFUl9DTElFTlRfUkVTT1VSQ0UiXSwicm9sZSI6IlN1cGVyQWRtaW4iLCJwaG9uZSI6IjkxNDI1MTc3MzMiLCJ1c2VyX25hbWUiOiJuYWJlZWwiLCJzY29wZSI6WyJzY29wZSJdLCJpZCI6MjEsImV4cCI6MTY2NjY5ODEzMiwiYXV0aG9yaXRpZXMiOlsiU3VwZXJBZG1pbiJdLCJqdGkiOiIxMTAxMWExMy0wNDIxLTQzMTAtYjk4Yy1jZmJkZWNmYmFmZGEiLCJlbWFpbCI6Im5hYmVlbC50QGdqZ2xvYmFsc29mdC5jb20iLCJjbGllbnRfaWQiOiJnb2t1bGFtIiwidXNlcm5hbWUiOiJuYWJlZWwifQ.J6mAWG5PE8hCQ_tQaVhsv8wN99hZ6NBstkv6cHua0pQ"
      
      
      
      }`,
    },
  };


  function add(e) {
    e.preventDefault();
    axios
      .post(
        "http://194.195.113.218:8090/paymento/internal/1.0/usertyperegister",
        {
          
          userType: UserType,
          active: Active,
          remarks:Remarks ,
          api_user:Api_user,
        },
        config
      )
      .then(() => {
        console.log("jcdnb");
      });
  }
  // function edt(id,act,remrk,usertyp,api_user){


  //   localStorage.setItem("id",id)
  //   localStorage.setItem("userType",usertyp)
  //   localStorage.setItem(" active",act)
  //   localStorage.setItem("remarks",remrk)
  //   localStorage.setItem("api_user",api_user)
  //   setremarks(localStorage.getItem(" remarks"))
  //   console.log(Remarks);



  //   axios
  //     .put(
  //       `http://194.195.113.218:8090/paymento/internal/1.0/getallusertypes/${id}`,{


  //       },
        
  //       config
  //     )
  //     .then((res) => {
  //      console.log("edited")
  //     });


  // }

  useEffect(() => {
    axios
      .get(
        "http://194.195.113.218:8090/paymento/internal/1.0/getallusertypes",
        
        config
      )
      .then((res) => {
        setDatas(res.data.data);
      });
  }, []);
  console.log(Datas);

  return (
    <div>


<br></br>
<div class="form-check">
  <label>active</label>
  <input class="form-check-input"   onChange={(e) => {
    e.target.checked==true ? setActive("Y"):setActive("N")
          
        }} type="checkbox" value="" id="flexCheckChecked" />
        {console.log(Active)}

</div>
     

<br></br>

       <input placeholder="usertype"
        type="text"
        onChange={(e) => {
          setuserType(e.target.value);
        }}
      ></input>
      <br></br>

<input placeholder="remarks"
        type="text" value={Remarks}
        onChange={(e) => {
          setremarks(e.target.value);
        }}
      ></input>


      
  
      <br></br>

<div class="form-check">
  <label>api user</label>
  <input class="form-check-input"   onChange={(e) => {
    e.target.checked==true ? setapi_user("Y"):setapi_user("N")
          
        }} type="checkbox" value="" id="flexCheckChecked" />
        {console.log(Api_user)}

</div>


    


      {console.log(Active)}
      <button onClick={add}>submit</button>

      {
        <table class="table">
          <thead>
            <tr>
              
              <th scope="col">STATUS</th>
              <th scope="col">remarks</th>
              <th scope="col">userType</th>
              
            </tr>
          </thead>
          <tbody>
            {Datas.map((res) => {
              return (
                <>
             
                  <tr>
                    
                    <td>{res.active ==="N" ? "INACTIVE":"ACTIVE"   }</td>
                    <td>{res.remarks}</td>
                    <td>{res.userType}</td>
                    {/* <td onClick={()=>{edt(res.id,res.active,res.remarks,res.userType,res.api_user)}}>edit</td> */}
                    
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      }
    </div>
  );
}

export default Login1;

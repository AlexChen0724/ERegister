import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
export const AddMember = () => {
  let navigate = useNavigate();
  const [MemberName, setMemberName] = useState("");
  const [MemberAge, setMemberAge] = useState("");

  const AddMemberEvent = (e) => {
    e.preventDefault();
    let URL = `https://localhost:7073/People`;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 0,
        name: MemberName,
        age: Number(MemberAge),
      }),
    };

    fetch(URL, requestOptions)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate("/ViewMembers");
        }
        if (response.status === 400) {
          window.alert("Your name should contain letter e or E");
        }
      })
      .catch((err) => {
        window.alert("Cannot Add Now");
      });
  };

  return (
    <div className="AddMember">
      <form action="" className="form_member">
        <h1>E Society</h1>
        <div component="form" autoComplete="off" className="box_wrapper">
          <TextField
            id="member_name"
            label="Member Name"
            variant="outlined"
            value={MemberName}
            onChange={(e) => {
              setMemberName(e.target.value);
            }}
          />
          <TextField
            id="member_age"
            label="Member Age"
            variant="outlined"
            value={MemberAge}
            onChange={(e) => {
              setMemberAge(e.target.value);
            }}
          />
          <Button
            variant="contained"
            className="member_button"
            onClick={AddMemberEvent}
          >
            Add Member
          </Button>

          <Button
            variant="outlined"
            className=" view_button"
            onClick={(e) => {
              navigate("/ViewMembers");
            }}
          >
            View Members
            <RemoveRedEyeIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

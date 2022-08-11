import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export const ViewMembers = () => {
  const [guest, setguest] = useState([]);

  const GetPeople = () => {
    let URL = `https://localhost:7073/People`;

    fetch(URL, {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())

      .then((json) => {
        console.log(json);
        setguest(json);
      });
  };
  const DeleteRow = (id) => {
    console.log(id);

    let URL = `https://localhost:7073/People?id=${id}`;

    fetch(URL, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          window.alert("Row Deletd");
          window.location.reload();
        }
      })
      .catch((err) => {
        window.alert("Row Not Delete");
        window.location.reload();
      });
  };

  useEffect(() => {
    GetPeople();
  }, []);
  return (
    <div className="ViewMembers">
      <div className="top_area">
        <h1>View Memebers</h1>
        <Link to="/">Add Member</Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 600 }}>ID</TableCell>
              <TableCell align="center" style={{ fontWeight: 600 }}>
                NAME
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 600 }}>
                AGE
              </TableCell>
              <TableCell align="right" style={{ fontWeight: 600 }}>
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {guest.map((EachGuest) => (
              <TableRow
                key={EachGuest?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {EachGuest?.id}
                </TableCell>
                <TableCell align="center">{EachGuest?.name}</TableCell>
                <TableCell align="center">{EachGuest?.age}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    onClick={(e) => {
                      DeleteRow(EachGuest?.id);
                    }}
                  >
                    <DeleteIcon className="delete_icon" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

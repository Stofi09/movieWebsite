import React , { useState, useEffect }from 'react'
import MaterialTable from "material-table";
import {getAdminList,postAdmin,updateAdmin,deleteAdmin} from "./axios/Axios";
import axios from 'axios';

const AdminTable = () => {

   
    const [data, setData] = useState([]);
    const [response2, setResponse2] = useState();
    const [selectedRows, setSelectedRows] = useState([])
    const [admin, setAdmin] = useState({
        adminId: 2,
        name: "",
      });

    const columns = [
        {
          title: "Id",
          field: "id",
          editable: false,
        },
        {
          title: "Name",
          field: "name",
          validate: rowData => {
            if (rowData.name === undefined || rowData.name === "") {
              return "Required"
            } return true
          } 
        },
      ];
     
      useEffect(() => {
        if(admin.name === ""){
          console.log("empty eq.")
        }else{
          postAdmin(admin,setResponse2);
        console.log(admin);
        }
      }, [admin]);


      useEffect(() => {
        getAdminList()
          .then((data) => {
            console.log(data)
            setData(data.data)
          })
          .catch(function (ex) {
            console.log(ex);
          });
      }, []);


;


      const title = "Admin list: "
    return (
        <div className="equipmentTable">
        <MaterialTable
          title= {title}
          data={data}
          columns={columns}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                setAdmin((prevState) => ({
                  ...prevState, // copy all other field/                       // copy all the fields of the object
                  name: newRow.name, // overwrite the value of the field to update
                }));
                console.log(newRow.name);
                setTimeout(() => {
                  getAdminList()
                  .then((data) => {
                    setData(data.data);
                  })
                  .catch(function (ex) {
                    console.log(ex);
                  });
                  resolve();
                }, 2000);
              }),
              onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                const index = selectedRow.tableData.id;
                deleteAdmin(selectedRow.id);
                const updatedRows = [...data];
                updatedRows.splice(index, 1);
                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
              onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
                  const index = oldRow.tableData.id;
                  console.log(updatedRow);
                  updateAdmin(updatedRow);
                  const updatedRows = [...data];
                  updatedRows[index]=updatedRow;
                  setTimeout(() => {
                      setData(updatedRows);
                      resolve();
                    }, 2000);
            })
          }}
          onSelectionChange={(rows) => setSelectedRows(rows)}
          options={{
            pageSize: 10,
            pageSizeOptions: [5, 10,15, 20, 30 ,50, 75, 100 ],
            toolbar: true,
            paging: true,
            // save and cancel icon moved to the right side, columns are aligned
            actionsColumnIndex: -1,
            //adding new rows on the top instead of the bottom
            addRowPosition: "first",
          }}
        />
      </div>
    )
}

export default AdminTable
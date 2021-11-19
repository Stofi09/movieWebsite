import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { getMovieList, postMovie, deleteMovie, updateMovie} from "./axios/Axios";
import { Select, MenuItem, Menu } from "@material-ui/core";
import Video from "./Video";
import YoutubeVideo from "./YoutubeVideo";

// Return two table in if statements => editable/ not editable
const MovieTable = () => {
    const [data, setData] = useState([]);
    const [response2, setResponse2] = useState();
    const [movie, setMovie] = useState({
      adminId : 2,
      title: "",
      available:true,
      genre  : ""
    });
  
    const Genres = ["FICTION","FORKIDS","NONFICTION","SCIENCE","BIOGRAPHY"]

    const columns = [
      {
        title: "Title",
        field: "title"
      },
      {
        title: "Genre",
        field: "genre",
        editComponent:({value, rowData}) => (
          <Select value={value}>
             {Genres.map((country) => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
          </Select>
        )
      },
      {
        title: "Available",
        field: "available",
        type:"boolean"
      },{
        title:"Proba",
        render:rowData=><YoutubeVideo/>}
    ];  
     
    useEffect(() => {
      if(movie.name === ""){
        console.log("empty eq.")
      }else{
        postMovie(movie,setResponse2);
      console.log(movie);
      }
    }, [movie]);

    useEffect(() => {
      getMovieList()
        .then((data) => {
          console.log(data)
          setData(data.data)
        })
        .catch(function (ex) {
          console.log(ex);
        });
    }, []);
    return (
      <div>
        <MaterialTable
          title="Movies"
          data={data}
          columns={columns}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                setMovie((prevState) => ({
                  ...prevState, // copy all other field/                       // copy all the fields of the object
                  title: newRow.title, // overwrite the value of the field to update
                  genre: newRow.genre
                }));
                console.log(newRow);
                setTimeout(() => {
                  getMovieList()
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
                deleteMovie(selectedRow.id);
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
                  updateMovie(updatedRow);
                  const updatedRows = [...data];
                  updatedRows[index]=updatedRow;
                  setTimeout(() => {
                      setData(updatedRows);
                      resolve();
                    }, 2000);
            })
            }}
            options={{
          // save and cancel icon moved to the right side, columns are aligned
          actionsColumnIndex: -1,
          //adding new rows on the top instead of the bottom
          addRowPosition: "first",
        }}
        />
      </div>
    );
  };
  export default MovieTable;
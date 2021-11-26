import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { getMovieList} from "./axios/Axios";
import YoutubeVideo from "./YoutubeVideo";

// Return two table in if statements => editable/ not editable
const UnEditableMovieTable = () => {
    const [data, setData] = useState([]);
    

    const columns = [
      {
        title: "Title",
        field: "title"
      },
      {
        title: "Genre",
        field: "genre"
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
  export default UnEditableMovieTable;
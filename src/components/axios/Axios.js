
import React from 'react'
import axios from "axios";


/*Admin*/ 
const GET_ALL_ADMIN = "http://ec2-3-145-32-74.us-east-2.compute.amazonaws.com:8080/admin/all";
const POST_ADMIN = "http://ec2-3-145-32-74.us-east-2.compute.amazonaws.com:8080/admin/add";
const UPDATE_ADMIN = "http://ec2-3-145-32-74.us-east-2.compute.amazonaws.com:8080/admin/update";
const DELETE_ADMIN = "http://ec2-3-145-32-74.us-east-2.compute.amazonaws.com:8080/admin/delete/"

const getAdminList = () => {
    return axios.get(GET_ALL_ADMIN);
  };

const postAdmin = (admin,setResponse2) => {
  return axios.post(POST_ADMIN, admin).then((response) => {
    setResponse2(response.data);
  });
}

const updateAdmin = (updatedadmin) => {
  return axios.put(UPDATE_ADMIN, updatedadmin)
  .then((response) => {
      console.log(response);
    });
}

const deleteAdmin = (id) => {
  return  axios
  .delete(DELETE_ADMIN + id)
  .then((response) => {
    console.log(response);
  });
}


/*Movies*/

const GET_ALL_MOVIES = "http://ec2-18-119-128-27.us-east-2.compute.amazonaws.com:8080/movie/all"
const POST_MOVIE = "http://ec2-18-119-128-27.us-east-2.compute.amazonaws.com:8080/movie/add";
const DELETE_MOVIE = "http://ec2-18-119-128-27.us-east-2.compute.amazonaws.com:8080/movie/delete/"
const UPDATE_MOVIE = "http://ec2-18-119-128-27.us-east-2.compute.amazonaws.com:8080/movie/update";

const getMovieList = () => {
  return axios.get(GET_ALL_MOVIES);
};

const postMovie = (movie,setResponse2) => {
  return axios.post(POST_MOVIE, movie).then((response) => {
    setResponse2(response.data);
  });
}

const deleteMovie = (id) => {
  return  axios
  .delete(DELETE_MOVIE + id)
  .then((response) => {
    console.log(response);
  });
}

const updateMovie = (updatedMovie) => {
  return axios.put(UPDATE_MOVIE, updatedMovie)
  .then((response) => {
      console.log(response);
    });
}

/*Member */

const GET_ALL_MEMBERS = "http://ec2-3-145-32-74.us-east-2.compute.amazonaws.com:8080/member/all"
const POST_MEMBER = "http://ec2-3-145-32-74.us-east-2.compute.amazonaws.com:8080/member/add";
const DELETE_MEMBER = "http://ec2-3-145-32-74.us-east-2.compute.amazonaws.com:8080/member/delete/"
const UPDATE_MEMBER = "http://ec2-3-145-32-74.us-east-2.compute.amazonaws.com:8080/member/update";

const getMemberList = () => {
  return axios.get(GET_ALL_MEMBERS);
};

const postMember = (member,setResponse2) => {
  return axios.post(POST_MEMBER, member).then((response) => {
    setResponse2(response.data);
  });
}

const deleteMember = (id) => {
  return  axios
  .delete(DELETE_MEMBER + id)
  .then((response) => {
    console.log(response);
  });
}

const updateMember = (updatedMember) => {
  return axios.put(UPDATE_MEMBER, updatedMember)
  .then((response) => {
      console.log(response);
    });
}

  export {
    getAdminList,
    postAdmin,
    updateAdmin,
    deleteAdmin,
    getMovieList,
    postMovie,
    deleteMovie,
    updateMovie,
    getMemberList,
    postMember,
    deleteMember,
    updateMember
}
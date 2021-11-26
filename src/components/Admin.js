import React from 'react'
import AdminTable from './AdminTable';
import MemberTable from './MemberTable';
import MovieTable from "./MovieTable";

const Admin = () => {
    return (
        <div>
         <MovieTable/>
        <AdminTable/>
        <MemberTable/>
        </div>
    )
}

export default Admin;

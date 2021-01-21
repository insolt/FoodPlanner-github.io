import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";
import Nav from "../Nav";

import "../../../scss/components/MealsApp/PlansList/PlansList.scss";

const PlansList = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/db')
            .then(res => {
                if (res.ok) {
                    return res
                } 
                throw new Error(res.status);
                // console.log(res);
            })
            .then(resp => resp.json())
            .then(res => setData(res))
            .catch(err => console.log(err));
    }, []);

    const handleClickEdit = (e) => {
        console.log(e.target)
    }

    const handleClickRemove = (e) => {
        console.log(e.target)
    }
    
    return(
        <>
        <Header />
            <div className="app">
                <Nav />
                <section className="plans_list">
                    <div className="plans_list_view">
                        <div className="plans_list_header">
                            <h1 className="plans_list_title">PLANS LIST</h1>
                            <Link to="/addplan"><i className="fas fa-plus-square"></i></Link>
                        </div>
                        <div className="plans_list_body">
                            <table className="plans_table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>DESCRIPTION</th>
                                        <th>WEEK</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(!data) ? (
                                        <tr><td><p className="meal">Ladowanie danych</p></td></tr>
                                        ) : (
                                        data.Michal.plans.map((el, i) => (
                                            <tr key={el.id}>
                                                <td>{el.id}</td>
                                                <td>{el.planName}</td>
                                                <td>{el.planDescription}</td>
                                                <td>{el.weekNumber}</td>
                                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                                            </tr>
                                        )))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PlansList;
import React from 'react';

const EmployeeDetail = ({employee}) => {
    // props.employee is our employee model
    const { name, email, phone, avatar } = employee;
    return (
        <div className="thumbnail">
            <img src={avatar} alt={name} />
            <div className="caption">
                <h3>{name}</h3>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>
            </div>
        </div>
    )
};

export default EmployeeDetail;
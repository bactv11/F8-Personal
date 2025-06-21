import StudentItem from "./studentitem.jsx";
import React from "react";
const StudentList =({stdList}) => {
    return (
        <div>
            {stdList.map(studentE => (
                <StudentItem key={studentE.id} name={studentE.name} age={studentE.age} major={studentE.major} />
            ))}
        </div>
    )
}
export default StudentList;
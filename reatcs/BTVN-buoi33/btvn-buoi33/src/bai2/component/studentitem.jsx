import React from "react";

const StudentItem = ({name, age,major}) => {
    return (
        <div>
            <div style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>
                <strong>Tên:</strong> {name} - <strong>Tuổi:</strong> {age} - <strong>Nghành:</strong> {major}
            </div>
        </div>
    )
}
export default StudentItem
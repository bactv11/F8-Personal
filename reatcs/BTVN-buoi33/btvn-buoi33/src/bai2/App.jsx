import React, { useState } from 'react';
import { StudentList } from './component';

function App() {
        const [students, setStudents] = useState(
        [
            { id: 1, name: 'Nguyễn Văn An', age: 20, major: 'CNTT' },
            { id: 2, name: 'Lê Thị Bích', age: 21, major: 'Marketing' },
            { id: 3, name: 'Trần Quốc Cường', age: 22, major: 'Kế toán' }
        ])

    return (
        <div>
            <h2>Danh sách Học Sinh</h2>
            <StudentList stdList={students} />
        </div>
    );
}

export default App;

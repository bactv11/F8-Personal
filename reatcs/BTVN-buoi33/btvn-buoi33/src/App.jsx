
import React, { Suspense, useState } from 'react';

const Bai1 = React.lazy(() => import('./bai1/App.jsx'));
const Bai2 = React.lazy(() => import('./bai2/App.jsx'));
const Bai3 = React.lazy(() => import('./bai3/App.jsx'));

function App() {
    const [selectedLesson, setSelectedLesson] = useState(null);

    const renderLesson = () => {
        switch (selectedLesson) {
            case 'bai1':
                return <Bai1 />;
            case 'bai2':
                return <Bai2 />;
            case 'bai3':
                return <Bai3 />;
            default:
                return <p>Chọn bài để bắt đầu </p>;
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Chọn bài học</h1>
            <div style={{ marginBottom: '20px' }}>
                <button onClick={() => setSelectedLesson('bai1')}>Bài 1</button>{' '}
                <button onClick={() => setSelectedLesson('bai2')}>Bài 2</button>{' '}
                <button onClick={() => setSelectedLesson('bai3')}>Bài 3</button>
            </div>
            <Suspense fallback={<div>Đang tải bài học...</div>}>
                {renderLesson()}
            </Suspense>
        </div>
    );
}

export default App;

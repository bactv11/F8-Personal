import React, { useState } from 'react';

function CalculatorUI() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const Calculator = (itemClick) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) {
            setResult('Chỉ có thể nhập vào số!');
            return;
        }

        let getFun;
        switch (itemClick) {
            case '+': getFun = a + b; break;
            case '-': getFun = a - b; break;
            case '*': getFun = a * b; break;
            case '/': getFun = b === 0 ? 'Không chia cho 0' : a / b; break;
            default: getFun = 'Không có phép tính hợp lệ!';
        }
        setResult(getFun);
    };

    const onClear = () => {
        setNum1('');
        setNum2('');
        setResult('');
    };

    const styles = {
        container: {
            padding: '30px',
            maxWidth: '400px',
            margin: '50px auto',
            textAlign: 'center',
            backgroundColor: '#f4f4f4',
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        title: {
            marginBottom: '20px',
            color: '#333',
        },
        input: {
            width: '80%',
            padding: '10px',
            margin: '8px 0',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '6px',
        },
        buttonGroup: {
            marginTop: '15px',
        },
        button: {
            padding: '10px 20px',
            margin: '6px',
            fontSize: '18px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            borderRadius: '6px',
            transition: 'background-color 0.3s',
        },
        clearButton: {
            marginTop: '15px',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            backgroundColor: '#f44336',
            color: 'white',
            borderRadius: '6px',
            cursor: 'pointer',
        },
        result: {
            marginTop: '20px',
            fontSize: '18px',
            color: '#222',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Máy Tính Cơ Bản</h2>

            <input
                type="number"
                placeholder="Số thứ nhất"
                style={styles.input}
                value={num1}
                onChange={(inputNum1) => setNum1(inputNum1.target.value)}
            />
            <input
                type="number"
                placeholder="Số thứ hai"
                style={styles.input}
                value={num2}
                onChange={(inputNum2) => setNum2(inputNum2.target.value)}
            />

            <div style={styles.buttonGroup}>
                <button style={styles.button} onClick={() => Calculator('+')}>+</button>
                <button style={styles.button} onClick={() => Calculator('-')}>−</button>
                <button style={styles.button} onClick={() => Calculator('*')}>×</button>
                <button style={styles.button} onClick={() => Calculator('/')}>÷</button>
            </div>

            <div style={styles.result}>
                <strong>Kết quả:</strong> <span>{result === '' ? 'Chưa có kết quả' : result}</span>
            </div>

            <button style={styles.clearButton} onClick={onClear}>Clear</button>
        </div>
    );
}

export default CalculatorUI;

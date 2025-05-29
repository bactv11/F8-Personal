const sum = (a, b) => a + b
const minus = (a, b) => a - b
const times = (a, b) => a * b
const divide = (a, b) => a / b

const action = {
    '+': sum,
    '-': minus,
    '*': times,
    '/': divide
}

const getResult = (value) => {
    let result = null;
    let matched = false;

    Object.keys(action).forEach(o => {
        // Đếm số phép toán trong biểu thức (chỉ cho 1 phép)
        const check = value.split('').filter(char => Object.keys(action).includes(char)).length;

        if (value.includes(o) && check === 1) {
            const [a, b] = value.split(o);
            const numA = Number(a);
            const numB = Number(b);

            // Nếu không phải số hợp lệ, bỏ qua (ngăn lỗi như 3++4)
            if (isNaN(numA) || isNaN(numB)) {
                return;
            }

            // Không cho chia cho 0
            if (o === '/' && numB === 0) {
                alert('Không thể chia cho 0!');
                result = '';
                matched = true;
                return;
            }

            //  Tính toán cho phép số âm
            result = action[o](numA, numB);
            matched = true;
        }
    });

    return result;
}




const onclickBtn = (value) => {

    const screenRef = document.querySelector('.calculate-screen')

    if (value === '=') {
        screenRef.innerText = getResult(screenRef.innerText)
        return
    }
    //clear
    if (value === 'C') {
        screenRef.innerText = '';
        return
    }

    //Không cho bắt đầu bằng dấu phép tính (+ - * /)
    if (screenRef.innerText === '' && Object.keys(action).includes(value)) {
        return;
    }


    screenRef.innerText += value
}

export {onclickBtn}
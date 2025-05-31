
import { question } from "./const.js";
import { questionRef } from "./referances.js";

let currentIndex = 0; //  theo dõi vị trí câu hỏi hiện tại
let curQuestion = question[currentIndex];
let timerId = null;
const TIME_LIMIT = 30000; //30s
const startTimer = () => {
    if (timerId) clearTimeout(timerId); // Hủy timer cũ nếu có

    timerId = setTimeout(() => {
        if (!curQuestion.userAns) {
            const replay = confirm(" Hết giờ! Bạn có muốn chơi lại không?");
            if (replay) {
                currentIndex = 0;
                curQuestion = question[0];
                onShowQuestion();
            }
        }
    }, TIME_LIMIT);
};
const onShowQuestion = () => {
    curQuestion = question[currentIndex];
    const titleRef = document.querySelector(".question-title");
    titleRef.innerText = curQuestion.question;

    for (const key of ['a', 'b', 'c', 'd']) {
        const optionRef = questionRef.querySelector(`.question-option[value="${key}"]`);
        optionRef.innerText = `${key.toUpperCase()} : ${curQuestion[key]}`;
    }

    resetBackground();
    curQuestion.userAns = null;
    curQuestion.isCorrect = null;
    startTimer()
};
// money
let totalPrize = 0;
const updateTotalPrize = () => {
    const totalPrizeRef = document.getElementById("money");
    totalPrizeRef.innerText = ` Tổng tiền: ${totalPrize.toLocaleString()} VNĐ`;
};
// render level
const resetBackground = () => {
    questionRef.querySelectorAll('.question-option').forEach(ref => {
        ref.style.backgroundColor = '#fff';
    });
};

const addEvent = () => {
    for (const key of ['a', 'b', 'c', 'd']) {
        const answerRef = questionRef.querySelector(`.question-option[value="${key}"]`);
        answerRef.addEventListener('click', () => {
            curQuestion.userAns = key;

            // Highlight nhẹ khi chọn
            resetBackground();
            answerRef.style.backgroundColor = '#f0f0f0';
            clearTimeout(timerId);
        });
    }



    const checkBtn = document.querySelector(".check-btn");
    checkBtn.addEventListener("click", () => {
        // if (!curQuestion.userAns) {
        //     alert("Vui lòng chọn một đáp án trước!");
        //     return;
        // }

        curQuestion.isCorrect = curQuestion.userAns === curQuestion.conrectAns;
        resetBackground();

        if (curQuestion.isCorrect) {
            const correctRef = questionRef.querySelector(`.question-option[value="${curQuestion.conrectAns}"]`);
            correctRef.style.backgroundColor = 'lightgreen';

            const currentPrize = prizeMap[currentIndex + 1];
            totalPrize += currentPrize;
            updateTotalPrize();
            //  Sau 1s chuyển sang câu tiếp theo
            setTimeout(() => {
                currentIndex++;
                if (currentIndex < question.length) {
                    onShowQuestion();
                } else {
                    alert(" Bạn đã hoàn thành tất cả câu hỏi!");
                    return
                }
            }, 1000);
        } else {
            const userRef = questionRef.querySelector(`.question-option[value="${curQuestion.userAns}"]`);
            userRef.style.backgroundColor = 'salmon';

            const correctRef = questionRef.querySelector(`.question-option[value="${curQuestion.conrectAns}"]`);
            correctRef.style.backgroundColor = 'lightgreen';

            const playAgain = confirm("Bạn đã chọn sai! Bạn có muốn chơi lại không?");
            if (playAgain) {
                currentIndex = 0;
                curQuestion = question[0];
                onShowQuestion();
            }
        }
    });
};


addEvent();
onShowQuestion();

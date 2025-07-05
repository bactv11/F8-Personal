import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
} from '@mui/material';
import { questions } from './data/questions';
import ResultDialog from "./component/Dialog/ResultDialog.jsx"; // import danh sách câu hỏi

export default function QuizLayout() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timer, setTimer] = useState(30);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);

    const question = questions[currentQuestion];
    const optionLabels = ['A', 'B', 'C', 'D'];

    //  Đếm ngược 30s
    useEffect(() => {
        if (timer === 0 || selectedOption !== null) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer, selectedOption]);

    // Reset mỗi khi sang câu
    useEffect(() => {
        setTimer(30);
        setSelectedOption(null);
        setIsCorrect(null);
    }, [currentQuestion]);

    const onOptionClick = (option) => {
        if (selectedOption !== null) return;

        setSelectedOption(option);
        const correct = option === question.answer;
        setIsCorrect(correct);
        if (correct) setScore((prev) => prev + 1);
    };

    const onNextQuestion = () => {
        const next = currentQuestion + 1;
        if (next >= questions.length) {
            setShowResult(true);
        } else {
            setCurrentQuestion(next);
        }
    };

    const onRestartQuestion = () => {
        setCurrentQuestion(0);
        setScore(0);
        setTimer(30);
        setSelectedOption(null);
        setShowResult(false);
    };

    const getButtonStyles = (option) => {
        if (selectedOption === null) return {};

        if (option === question.answer) {
            return {
                borderColor: 'green',
                color: 'green',
            };
        }

        if (option === selectedOption) {
            return {
                borderColor: 'red',
                color: 'red',
            };
        }

        return {};
    };

    const renderOption = (option, index) => (
        <Button
            key={option}
            variant="outlined"
            sx={{
                width: '48%',
                height: 60,
                textAlign: 'left',
                pl: 2,
                justifyContent: 'flex-start',
                ...getButtonStyles(option),
            }}
            onClick={() => onOptionClick(option)}
        >
            <strong style={{ marginRight: 8 }}>{optionLabels[index]}.</strong> {option}
        </Button>
    );

    return (
        <>
            <Box
                sx={{
                    maxWidth: 500,
                    mx: 'auto',
                    marginTop: 5,
                    padding: 3,
                    border: '2px solid #ccc',
                    borderRadius: 2,
                    boxShadow: 2,
                    backgroundColor: '#fafafa',
                }}
            > <h1 style={{textAlign:"center"}}>Quiz App</h1>
                {/* Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <Typography variant="body1">
                        Câu: {currentQuestion + 1}/{questions.length}
                    </Typography>
                    <Typography
                        variant="body1"
                        color={timer <= 5 ? 'error.main' : 'text.primary'}
                    >
                        {timer}s
                    </Typography>
                    <Typography variant="body1">Điểm: {score}</Typography>
                </Box>

                {/* Question */}
                <Typography variant="h6" sx={{ marginBottom: 4 }}>
                    {question.question}
                </Typography>

                {/* Answer options */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    {renderOption(question.options[0], 0)}
                    {renderOption(question.options[1], 1)}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {renderOption(question.options[2], 2)}
                    {renderOption(question.options[3], 3)}
                </Box>

                {/* Feedback after answer */}
                {selectedOption !== null && (
                    <Typography
                        variant="subtitle1"
                        sx={{ marginTop: 3, color: isCorrect ? 'green' : 'red' }}
                    >
                        {isCorrect
                            ? ` Chính xác đáp án là: ${question.answer}`
                            : ` Sai rồi! Đáp án đúng là: ${question.answer}`}
                    </Typography>
                )}

                {/* Next button */}
                {selectedOption !== null && (
                    <Button
                        onClick={onNextQuestion}
                        variant="contained"
                        sx={{ marginTop: 4 }}
                        fullWidth
                    >
                        Câu tiếp
                    </Button>
                )}
            </Box>

            {/* Result dialog */}
            <ResultDialog
                open={showResult}
                score={score}
                total={questions.length}
                onRestart={onRestartQuestion}
            />
        </>
    );
}

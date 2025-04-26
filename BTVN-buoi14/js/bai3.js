/*
* */
const students = [
    { name: "An", class: "12A1", score: 8.5 },
    { name: "Bình", class: "12A1", score: 9.2 },
    { name: "Cường", class: "12A2", score: 7.5 },
    { name: "Dung", class: "12A2", score: 9.0 },
    { name: "Em", class: "12A3", score: 8.0 }
];
let classes = {};

for (let student of students) {
    if (!classes[student.class]) {
        classes[student.class] = [];
    }
    classes[student.class].push(student.score);
}
let result = [];

for (let className in classes) {
    let scores = classes[className];
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    let avg = total / scores.length;
    result.push({ class: className, avgScore: avg });
}
result.sort((a, b) => b.avgScore - a.avgScore);

for (let item of result) {
    console.log(`Lớp ${item.class}: Điểm trung bình ${item.avgScore.toFixed(2)}`);
}
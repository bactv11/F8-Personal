let n = 30       // So nguyen to can kiem tra
let soNguyenTo = true

if (n >= 2) {
    for (let i = 2; i < n ** (1 / 2); i++) {
        if (n % i === 0) {
            soNguyenTo = false;
            break
        }
    }
} else {
    soNguyenTo = false;
}

if (soNguyenTo) {
    console.log(n + " la so nguyen to")
} else {
    console.log(n + " khong la so nguyen to")
}
document.write("Hello");
console.log("Hello");
//Biến và Kiểu Dữ Liệu ( Khai báo biến )
var a= 2015;
let b= 2016;
const c= 2017;
console.log(a)
console.warn(b)
console.error(c)
// kiểu
const so_number = 10;
console.log(so_number);
const kieu_string="string";
console.log(kieu_string);
const kieu_boolean=false;
console.log(kieu_boolean);
const kieu_null=null;
console.log(kieu_null);
const kieu_undefined=undefined;
console.log(kieu_undefined);
// Toán tử số học
const tong=a+b;
const hieu=a-b;
const tich=a*b;
const thuong=a/b;
console.log('tong: ' +tong, 'hieu: ' +hieu, 'tich: ' +tich, 'thuong: ' +thuong);
const chiasodu = 10 % 3;
console.log("Chia số dư của 10 % 3 là: "+chiasodu);
const luythua =5**2;
console.log("lũy thừa của 5 là:" +luythua)
// toán tử tăng giảm
let tiento=2;
tiento++;
let hauto=1;
--hauto;
console.log("tiền tố :" +tiento, "hậu tố: " +hauto);
let tang = 1;
tang++;
let giam = 1;
giam--;
console.log("tăng: " +tang, "giảm: " +giam);
//
const string_cong_string="van"+"bac";
const string_tru_string="van"-"bac";
const string_nhan_string="van"*"bac";
const string_chia_string="van"/"bac";
console.log("string cộng với string: "+string_cong_string ,"\nstring trừ string: "+string_tru_string,
    "\nstring nhan string: "+string_nhan_string,  "\nstring chia string: "+string_chia_string);
//toan tu so sanh
let bang_nhau= 2 ==2;
let lon_hon= 5>2
let nho_hon= 2<5;
let khac= 2 != 2;
let nho_hon_or_bang= 2<=2;
let lon_hon_or_bang= 5>=2;
console.log("2 bằng 2"+bang_nhau,'\n5 lớn hơn 2:'+lon_hon, '\n2 nhỏ hơn 5:'+nho_hon,
    '\n2 khác 2: '+khac,'\n2 nhỏ hơn hoặc bằng 2: '+nho_hon_or_bang,'\n5 lớn hơn hoặc bằng 2: '+lon_hon_or_bang);
//nối chuôỗi
let string_ra_string= "van" + "bac";
console.log(string_ra_string);

let string_ra_boolen ='';
if (string_ra_boolen == ''){
    string_ra_boolen= true;
}else {
    string_ra_boolen= false;
}

let number_ra_boolean= 2;
if (number_ra_boolean >= 2){
    number_ra_boolean= true;
}else {
    number_ra_boolean= false;
}
let boolean_ra_string= true;
let bboolean_ra_string= String(boolean_ra_string);
console.log(bboolean_ra_string);
console.log('string ra boole nếu rỗng thì '+string_ra_boolen,
    '\n số ra boolen nếu số lớn hơn hoặc bằng 2 thì là '+number_ra_boolean);
//Number + String (ép kiểu ngầm định)
let num = 10;
let str = "5";
let result = num + str;
console.log(result);



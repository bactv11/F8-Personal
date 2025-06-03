
    const listImage = document.querySelector(".list-image");
    const img = document.getElementsByTagName("img")
    let current=0
    setInterval(()=>{
    //laasy vtri image đầu tiên
    let imgWidth = img[0].offsetWidth;
    //chuyển động
    listImage.style.transform=`translateX(${imgWidth * -1 * current}px)`;
  },4000)
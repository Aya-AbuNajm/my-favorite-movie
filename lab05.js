var starsOfMovie = prompt("Who you love more hazel or lancaster?");

while (starsOfMovie !=='hazel' && starsOfMovie !=='lancaster'){
starsOfMovie = prompt('you should choose one of hazel or lancaster ');
}
if (starsOfMovie === 'hazel'){
  starPic='<img src="https://s.abcnews.com/images/Nightline/140523_ntl_woodley_1250_16x9_992.jpg">'
  document.write('wonderful hazel'); 
}else if (starsOfMovie === 'lancaster'){
  starPic='<img src="https://s3obitbucket.s3-accelerate.amazonaws.com/obituary_image/cropped_f8ca55db.png">'
  document.write('Amazing Lancaster'); 
}

var imgNum=prompt('how much of imag you want to see ?');
for (var i=0;i<imgNum;i++){
  document.write(starPic);




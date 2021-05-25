canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_hieght=90;
backround_image="racing.gif";
rover_image_1="car1.png";
rover_image_2="images.png";
rover_x=10;
rover_y=10;
function add(){
    backround_imgtag=new Image();
    backround_imgtag.onload=uploadBackground;
    backround_imgtag.src=backround_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(backround_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_hieght);
}
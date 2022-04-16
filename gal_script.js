//number of photos in gallery
const img_num = 20;

//initializing and filling images array
var src_str = "images/gallery_images/gal_poto_1.jpg";
var images = [];

for (let i = 0; i < img_num; i++){
    src_str = src_str.slice(0,31)+(i+1)+".jpg";
    images[i] = src_str;
}

//Create Radio Buttons
for (let i = 0; i < img_num; i++){
    var r_btn = document.createElement('button');
    r_btn.classList.add('r-btn');
    r_btn.id = 'btn-'+(i+1);

    //setting the first radio button as 'active'
    if (i==0) { r_btn.classList.add('active-btn'); }

    document.getElementById('num-cont').appendChild(r_btn);
}
//Get All Radio Buttons
const rad_btns = document.querySelectorAll('.r-btn');

//init first photo of the gallery
var cur_photo = 0;

/* Previous Button */
function swapPrev(){

    //swap prev photo
    cur_photo = repeat(--cur_photo, 0, img_num-1);
    document.getElementById('img-viewer').src = images[cur_photo];

    
    changeActiveButton(rad_btns.item(cur_photo));
}

/* Next Button */
function swapNext(){

    //swap next photo
    cur_photo = repeat(++cur_photo, 0, img_num-1);
    document.getElementById('img-viewer').src = images[cur_photo];

    changeActiveButton(rad_btns.item(cur_photo));
}

/* Close Button */
function closeTab(){
    window.close();
}

//Math repeat function ^^
function repeat(number, start_const, end_const){
    if(number < start_const) { return end_const; }
    if (number > end_const) { return start_const; }
    return number;
}

/* Change active radio button on click */
rad_btns.forEach(element => {
    element.addEventListener('click', () => {

        //Jump to clicked image
        cur_photo = (element.id.slice(4, 6)) - 1;
        document.getElementById('img-viewer').src = images[cur_photo];

        changeActiveButton(element);
    });
});

//minimizing prev bullet button and maximizing the clicked one
function changeActiveButton(clicked_btn){
    for (let i = 0; i < img_num; i++){
        document.getElementById('btn-'+(i+1)).classList.remove('active-btn');
    }

    clicked_btn.classList.add('active-btn');
}

//switching language to the appropriate text
const close_btn = document.getElementById('close-btn');

if (document.cookie == 'english'){
    close_btn.textContent = 'Close';
}else {
    close_btn.textContent = 'Κλείσιμο';
}
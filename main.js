var images = [
   "https://i.postimg.cc/3NMB5JGv/WIN-20210505-14-07-12-Pro-2.jpg",
   "https://i.postimg.cc/qBLhdv2H/WIN-20210505-14-11-03-Pro-2.jpg",
   "https://i.postimg.cc/85ySt9f9/WIN-20210505-14-12-53-Pro-2.jpg"
];

var names = [
    "Usha",
    "Gopal",
   "Nivesh"
];

var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 5
    if ( i > numbers_of_family_member_in_array) {
        i = 0;
    }
    var updateImage = images[i];
    var updatenames = names[i];
    document.getElementById("family_member_image").src = updateImage;
    document.getElementById("family_member_name").innerHTML = updatenames;
}
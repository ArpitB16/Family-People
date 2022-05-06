var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://media.istockphoto.com/vectors/vector-illustration-indian-boy-vector-id588973320", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://openclipart.org/image/800px/301024", "https://mail.google.com/mail/u/0?ui=2&ik=d8565b33c4&attid=0.1&permmsgid=msg-f:1732066196514037630&th=1809890762ae5f7e&view=att&disp=safe&realattid=1809890379a6015be971", "https://mail.google.com/mail/u/0?ui=2&ik=d8565b33c4&attid=0.1&permmsgid=msg-f:1732066298035241426&th=1809891f05d101d2&view=att&disp=safe&realattid=1809891a1fa22522ad91"];
var names = ["Fmaily Book","Arpit Bhardwaj", "Ashok Kumar", "Satvik Bhardwaj", "Shanini Kumari", "Manju Rani", "Keshu Kacha"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

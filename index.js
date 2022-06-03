iid = document.getElementById('iid');
qrfirstname = document.getElementById('firstname');
qrlastname = document.getElementById('lastname');
fill = document.getElementById('fill');
group = document.getElementById('group');

qrinfo=document.getElementById('info');
document.getElementById("group").selectedIndex = -1;
document.getElementById("fill").selectedIndex = -1;


 

const qrCode = new QRCodeStyling({
    width: 170,
    height: 170,
    data: "Please enter the data and then try to scan me.",
    image: "",
    dotsOptions: {
        color: "#111",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#f3eff4",
    },
    type:"png",
    margin:5
  });


  function bgimg(){
    path=URL.createObjectURL(imag.files[0]);
    pfp.style.backgroundImage='url("'+path+'")';
   console.log(path)

 }

  const updateQrid = () => {
    newQrData = iid.value;
    qrCode.update({
      data: newQrData
    });
  };
  const updateQrfirstname = () => {
    newQrData = iid.value+qrfirstname.value;
    qrCode.update({
      data: newQrData
    });
     
  };
  const updateQrlastname = () => {
    newQrData = iid.value+qrfirstname.value+qrlastname.value;
    qrCode.update({
      data: newQrData
    });
    filename=qrfirstname.value+"  "+qrlastname.value+" QR's";
  };
  const updateQrfill = () => {
    newQrData = iid.value+qrfirstname.value+qrlastname.value+fill.value;
    qrCode.update({
      data: newQrData
    });
  };
  const updateQrgroup = () => {
    newQrData = iid.value+qrfirstname.value+qrlastname.value+fill.value+group.value;
    qrCode.update({
      data: newQrData
    });
  };
  const updateQrblank = () => {
    newQrData = "id:"+iid.value;
    qrCode.update({
      data: newQrData
    });
  };




function generate(){

document.getElementById('res').innerHTML=document.getElementById("firstname").value+" "+document.getElementById("lastname").value;
}

  const download = () => qrCode.download({name:filename,extension:"jpeg"});

qrCode.append(document.getElementById('canvas'));

var imag = document.getElementById('imag');
var pfp  = document.getElementById('photo');
/*
  function bgimg(){
     path=URL.createObjectURL(imag.files[0]);
     x='url('+path+')';
     y=path;
     document.getElementById('photo').src =y;
    console.log(path)

  }



  $(document).ready(function(){
    var element = $("#qrcode");

    $("#download").on('click', function(){

      html2canvas(element, {
        letterRendering: 1, allowTaint : true,onrendered: function(canvas) {
          var imageData = canvas.toDataURL("image/jpg");
          var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
          $("#download").attr("download", "image.jpg").attr("href", newData);
        }
      });

    });
  });

  function tss(){
    html2canvas(document.querySelector("#qrcode")).then(canvas => {
        document.body.appendChild(canvas)
    });
    
    }
    function screenshot(){
      var content = document.getElementById("qrcode");
      html2canvas(content).then(
          function(canvas){
             document.getElementById("myimage").appendChild(canvas);
             return Canvas2Image.saveAsPNG(canvas);
          }
      ).save()
  }
*/
  
  function generatePdf() {
    var fName=document.getElementById('lastname').value +" "+document.getElementById('firstname').value+" badge";
    var opt = {
margin:      0.1,
filename:     fName.toUpperCase()+'.pdf',
image:        { type: 'jpeg', quality: 0.98 },
jsPDF:        { unit: 'cm', format: 'a4', orientation: 'portrait' }
};
    const element = document.getElementById("qrcode");
    html2pdf().set(opt).from(element).save();
    console.log("walid")
  }
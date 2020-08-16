function copyElementText(id) {
  var text = document.getElementById(id).innerText;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
     function getWord(){
        var key1 = document.getElementById("11").value
         word=document.getElementById("10").value
         word = word.replace(/a/g,key1+"97").replace(/b/g,key1+"98").replace(/c/g,key1+"99").replace(/d/g,key1+"100").replace(/e/g,key1+"101").replace(/f/g,key1+"102").replace(/g/g,key1+"103").replace(/h/g,key1+"104").replace(/i/g,key1+"105").replace(/j/g,key1+"106").replace(/k/g,key1+"107").replace(/l/g,key1+"108").replace(/m/g,key1+"109").replace(/n/g,key1+"110").replace(/o/g,key1+"111").replace(/p/g,key1+"112").replace(/q/g,key1+"113").replace(/r/g,key1+"114").replace(/s/g,key1+"115").replace(/t/g,key1+"116").replace(/u/g,key1+"117").replace(/v/g,key1+"118").replace(/w/g,key1+"119").replace(/x/g,key1+"120").replace(/y/g,key1+"121").replace(/z/g,key1+"122")
         word = word.replace(/A/g,key1+"65").replace(/B/g,key1+"66").replace(/C/g,key1+"67").replace(/D/g,key1+"68").replace(/E/g,key1+"69").replace(/F/g,key1+"70").replace(/G/g,key1+"71").replace(/H/g,key1+"72").replace(/I/g,key1+"73").replace(/J/g,key1+"74").replace(/K/g,key1+"75").replace(/L/g,key1+"76").replace(/M/g,key1+"77").replace(/N/g,key1+"78").replace(/O/g,key1+"79").replace(/P/g,key1+"80").replace(/Q/g,key1+"81").replace(/R/g,key1+"82").replace(/S/g,key1+"83").replace(/T/g,key1+"84").replace(/U/g,key1+"85").replace(/V/g,key1+"86").replace(/W/g,key1+"87").replace(/X/g,key1+"88").replace(/Y/g,key1+"89").replace(/Z/g,key1+"90")
         word = word.replace(/ก/g,key1+"3585").replace(/ข/g,key1+"3586").replace(/ฃ/g,key1+"3587").replace(/ค/g,key1+"3588").replace(/ฅ/g,key1+"3589").replace(/ฆ/g,key1+"3590").replace(/ง/g,key1+"3591").replace(/จ/g,key1+"3592").replace(/ฉ/g,key1+"3593").replace(/ช/g,key1+"3594").replace(/ซ/g,key1+"3595").replace(/ฌ/g,key1+"3596").replace(/ญ/g,key1+"3597").replace(/ฎ/g,key1+"3598").replace(/ฏ/g,key1+"3599").replace(/ฐ/g,key1+"3600").replace(/ฑ/g,key1+"3601").replace(/ฒ/g,key1+"3602").replace(/ณ/g,key1+"3603").replace(/ด/g,key1+"3604").replace(/ต/g,key1+"3605").replace(/ถ/g,key1+"3606").replace(/ท/g,key1+"3607").replace(/ธ/g,key1+"3608").replace(/น/g,key1+"3609").replace(/บ/g,key1+"3610").replace(/ป/g,key1+"3611").replace(/ผ/g,key1+"3612").replace(/ฝ/g,key1+"3613").replace(/พ/g,key1+"3614").replace(/ฟ/g,key1+"3615").replace(/ภ/g,key1+"3616").replace(/ม/g,key1+"3617").replace(/ย/g,key1+"3618").replace(/ร/g,key1+"3619").replace(/ฤ/g,key1+"3620").replace(/ล/g,key1+"3621").replace(/ฦ/g,key1+"3622").replace(/ว/g,key1+"3623").replace(/ศ/g,key1+"3624").replace(/ษ/g,key1+"3625").replace(/ส/g,key1+"3626").replace(/ห/g,key1+"3627").replace(/ฬ/g,key1+"3628").replace(/อ/g,key1+"3629").replace(/ฮ/g,key1+"3630").replace(/ฯ/g,key1+"3631").replace(/ะ/g,key1+"3632").replace(/ั/g,key1+"3633").replace(/า/g,key1+"3634").replace(/ำ/g,key1+"3635").replace(/ิ/g,key1+"3636").replace(/ี/g,key1+"3637").replace(/ึ/g,key1+"3638").replace(/ื/g,key1+"3639").replace(/ุ/g,key1+"3640").replace(/ู/g,key1+"3641").replace(/ฺ/g,key1+"3642").replace(/฻/g,key1+"3643").replace(/฼/g,key1+"3644").replace(/฽/g,key1+"3645").replace(/฾/g,key1+"3646").replace(/฿/g,key1+"3647").replace(/เ/g,key1+"3648").replace(/แ/g,key1+"3649").replace(/โ/g,key1+"3650").replace(/ใ/g,key1+"3651").replace(/ไ/g,key1+"3652").replace(/ๅ/g,key1+"3653").replace(/ๆ/g,key1+"3654").replace(/็/g,key1+"3655").replace(/่/g,key1+"3656").replace(/้/g,key1+"3657").replace(/๊/g,key1+"3658").replace(/๋/g,key1+"3659").replace(/์/g,key1+"3660").replace(/ํ/g,key1+"3661").replace(/๎/g,key1+"3662").replace(/๏/g,key1+"3663").replace(/๐/g,key1+"3664").replace(/๑/g,key1+"3665").replace(/๒/g,key1+"3666").replace(/๓/g,key1+"3667").replace(/๔/g,key1+"3668").replace(/๕/g,key1+"3669").replace(/๖/g,key1+"3670").replace(/๗/g,key1+"3671").replace(/๘/g,key1+"3672").replace(/๙/g,key1+"3673")
         document.getElementById("hello").innerHTML=word}
     function solveWord(){
        key1= document.getElementById("11").value
         Count = document.getElementById("10").value
         word = document.getElementById("10").value
         var i=0;
         Count = (Count.split("1").length - 1)+(Count.split("2").length - 1)+(Count.split("3").length - 1)+(Count.split("4").length - 1)+(Count.split("5").length - 1)+(Count.split("6").length - 1)+(Count.split("7").length - 1)+(Count.split("8").length - 1)+(Count.split("9").length - 1)+(Count.split("0").length - 1)
         console.log(Count)
         for (let i = 0; i <= Count; i++) {
              word = word.replace(key1+"65","A").replace(key1+"66","B").replace(key1+"67","C").replace(key1+"68","D").replace(key1+"69","E").replace(key1+"70","F").replace(key1+"71","G").replace(key1+"72","H").replace(key1+"73","I").replace(key1+"74","J").replace(key1+"75","K").replace(key1+"76","L").replace(key1+"77","M").replace(key1+"78","N").replace(key1+"79","O").replace(key1+"80","P").replace(key1+"81","Q").replace(key1+"82","R").replace(key1+"83","S").replace(key1+"84","T").replace(key1+"85","U").replace(key1+"86","V").replace(key1+"87","W").replace(key1+"88","X").replace(key1+"89","Y").replace(key1+"90","Z").replace(key1+"97","a")
              word = word.replace(key1+"98","b").replace(key1+"99","c").replace(key1+"100","d").replace(key1+"101","e").replace(key1+"102","f").replace(key1+"103","g").replace(key1+"104","h").replace(key1+"105","i").replace(key1+"106","j").replace(key1+"107","k").replace(key1+"108","l").replace(key1+"109","m").replace(key1+"110","n").replace(key1+"111","o").replace(key1+"112","p").replace(key1+"113","q").replace(key1+"114","r").replace(key1+"115","s").replace(key1+"116","t").replace(key1+"117","u").replace(key1+"118","v").replace(key1+"119","w").replace(key1+"120","x").replace(key1+"121","y").replace(key1+"122","z")
              word = word.replace(key1+"3585","ก").replace(key1+"3586","ข").replace(key1+"3587","ฃ").replace(key1+"3588","ค").replace(key1+"3589","ฅ").replace(key1+"3590","ฆ").replace(key1+"3591","ง").replace(key1+"3592","จ").replace(key1+"3593","ฉ").replace(key1+"3594","ช").replace(key1+"3595","ซ").replace(key1+"3596","ฌ").replace(key1+"3597","ญ").replace(key1+"3598","ฎ").replace(key1+"3599","ฏ").replace(key1+"3600","ฐ").replace(key1+"3601","ฑ").replace(key1+"3602","ฒ").replace(key1+"3603","ณ").replace(key1+"3604","ด").replace(key1+"3605","ต").replace(key1+"3606","ถ").replace(key1+"3607","ท").replace(key1+"3608","ธ").replace(key1+"3609","น").replace(key1+"3610","บ").replace(key1+"3611","ป").replace(key1+"3612","ผ").replace(key1+"3613","ฝ").replace(key1+"3614","พ").replace(key1+"3615","ฟ").replace(key1+"3616","ภ").replace(key1+"3617","ม").replace(key1+"3618","ย").replace(key1+"3619","ร").replace(key1+"3620","ฤ").replace(key1+"3621","ล").replace(key1+"3622","ฦ").replace(key1+"3623","ว").replace(key1+"3624","ศ").replace(key1+"3625","ษ").replace(key1+"3626","ส").replace(key1+"3627","ห").replace(key1+"3628","ฬ").replace(key1+"3629","อ").replace(key1+"3630","ฮ").replace(key1+"3630","ฮ").replace(key1+"3631","ฯ").replace(key1+"3632","ะ").replace(key1+"3633","ั").replace(key1+"3634","า").replace(key1+"3635","ำ").replace(key1+"3636","ิ").replace(key1+"3637","ี").replace(key1+"3638","ึ").replace(key1+"3639","ื").replace(key1+"3640","ุ").replace(key1+"3641","ู").replace(key1+"3642","ฺ").replace(key1+"3643","฻").replace(key1+"3644","฼").replace(key1+"3645","฽").replace(key1+"3646","฾").replace(key1+"3647","฿").replace(key1+"3648","เ").replace(key1+"3649","แ").replace(key1+"3650","โ").replace(key1+"3651","ใ").replace(key1+"3652","ไ").replace(key1+"3653","ๅ").replace(key1+"3654","ๆ").replace(key1+"3655","็").replace(key1+"3656","่").replace(key1+"3657","้").replace(key1+"3658","๊").replace(key1+"3659","๋").replace(key1+"3660","์").replace(key1+"3661","ํ").replace(key1+"3662","๎").replace(key1+"3663","๏").replace(key1+"3664","๐").replace(key1+"3665","๑").replace(key1+"3666","๒").replace(key1+"3667","๓").replace(key1+"3668","๔").replace(key1+"3669","๕").replace(key1+"3670","๖").replace(key1+"3671","๗").replace(key1+"3672","๘").replace(key1+"3673","๙")
             }
             document.getElementById("hello").innerHTML=word
             }
     function Randomy(){
         First = Math.floor(Math.random() * (122 - 41 + 1) + 41);
         Second = Math.floor(Math.random() * (122 - 41 + 1) + 41);
         Third = Math.floor(Math.random() * (122 - 41 + 1) + 41);
         Fourth = Math.floor(Math.random() * (122 - 41 + 1) + 41);
         var key1 = String.fromCharCode(First)+String.fromCharCode(Second)+String.fromCharCode(Third)+String.fromCharCode(Fourth)
         console.log(key1)       
         var V = document.getElementById("11")
         V.value = key1
        }
     
     function myFunction() {
          var copyText = document.getElementById("hello").innerHTML;
          copyText.select();
          copyText.setSelectionRange(0, 99999)
          document.execCommand("copy");
          alert("Already copied the text");
          }
      function focusing() {
        document.getElementById("hello").focus();
      }
      function changebackground(){
        var ID1 = "ii"
        var ID1 = document.getElementById("getpic").value
        console.log(ID1)
        if(ID1 == "")
        {
          return false;
        }
        ID1 = "url("+ID1+")" 
        document.getElementById("pic").style.backgroundImage = ID1;
      }
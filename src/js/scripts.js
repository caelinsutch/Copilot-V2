  var disp = document.getElementById('disp');
  var h = 00; // Define the Hours counter.
  var m = 00; // Define the Minutes Counter.
  var s = 00; // Define the Seconds Counter.
  var t;

  function toggleWarningAlert(){
      $("#warningAlert").fadeIn(1000);
  }

  function warningBannerOff(){
    $("#warningAlert").fadeOut(1000);
  }

  function toggleEndAlert(){
      $("#endAlert").fadeIn(1000);
  }

  function endAlertOff(){
      $("#endAlert").fadeOut(1000);
  }

  function startbanner() {
    $("#warningAlert").fadeOut(10);
    $("#endAlert").fadeOut(10);
  }

  //Timer Function
  function start() {
    clearInterval(t);
    document.getElementById('stop-btn').innerHTML = "STOP";
    t = setInterval(function() {
      if (s == 59) {
        if (m == 59) {
          h += 1;
          m = 00;
        } else m += 1; s = 0;
      } else if (s <= 8) {
        if (m >= 10) {
          mString = m;
        } else {
          mString = "0" + m.toString();
        }
        s += 01;
        sString = "0" + s.toString();
      } else if (s >= 9) {
        if (m >= 10) {
          mString = m;
        } else {
          mString = "0" + m.toString();
        }
        s += 01;
        sString = s.toString();
      }
      document.getElementById('disp').innerHTML = "0" + h + ":" + mString + ":" + sString;
      if (m == 13) {
        toggleWarningAlert();
      }
      if (m == 13 && s == 5) {
        warningBannerOff();
      }
      if (m == 15) {
        toggleEndAlert();
      }
    }, 1000);
    document.getElementById('start-btn').classList.add('shadow');
    document.getElementById('start-btn').classList.remove('shadow-sm');
  }

  function stop() {
    clearInterval(t);
    if (document.getElementById('stop-btn').innerHTML == "CLEAR") {
      //clearInterval(t);
      s = 0; // Reset the clock;
      m = 0;
      h = 0;
      sString = "00"
      mString = "00"
      document.getElementById('disp').innerHTML = "0" + h + ":" + mString + ":" + sString;
      document.getElementById('stop-btn').classList.remove('shadow');
      document.getElementById('stop-btn').classList.add('shadow-sm')

    } else {
    clearInterval(t);

    document.getElementById('stop-btn').innerHTML = "CLEAR";
    document.getElementById('start-btn').classList.remove('shadow');
    document.getElementById('start-btn').classList.add('shadow-sm');
    document.getElementById('stop-btn').classList.add('shadow');
    }
  };

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 83) {
         start();
      }
  });

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 68) {
         stop();
      }
  });

function liftBag() {
  console.log('LiftBag')
  $('#lock').removeClass('fa-lock');
  $('#lock').addClass('fa-unlock');
  $('#liftbag').addClass('shadow-lg');
  $('#liftbag').addClass('btn-info');
  $('#liftbag').removeClass('btn-danger');
};

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 76) {
       liftBag();
    }
});

function lowPowerOff() {
  lowpower.value = "OFF";
  console.log("Low Power " + lowpower.value);
  $('#lowpower').addClass('btn-danger')
  $('#lowpower').removeClass('btn-info')
  $('#lowpower').removeClass('shadow-lg');
  $('#lowpower').addClass('shadow-sm');
}

function highPowerOff() {
	highpower.value = "OFF";
	console.log("High Power " + highpower.value);
	$('#highpower').addClass('btn-danger')
  $('#highpower').removeClass('btn-info')
  $('#highpower').removeClass('shadow-lg');
  $('#highpower').addClass('shadow-sm');
}

function toggleHighPower(e){
    if (highpower.value=="OFF"){
				lowPowerOff();
        highpower.value = "ON";
        console.log("High Power " + highpower.value);
				$('#highpower').addClass('btn-info')
        $('#highpower').removeClass('btn-danger')
        $('#highpower').addClass('shadow-lg');
        $('#highpower').removeClass('shadow-sm');
        overRideSliders();
        }
    else {
      highPowerOff();
         }
   }

function toggleLowPower(e){
    if (lowpower.value=="OFF"){
				highPowerOff();
        lowpower.value = "ON";
        console.log("Low Power " + lowpower.value);
        $('#lowpower').addClass('btn-info')
        $('#lowpower').removeClass('btn-danger')
        $('#lowpower').addClass('shadow-lg');
        $('#lowpower').removeClass('shadow-sm');
        overRideSliders();
        }
    else {
        lowPowerOff();
         }
   };

   document.addEventListener("keydown", function (e) {
       if (e.keyCode === 189) {
          toggleHighPower(e);
   				overRideSliders(e);
       }
   });

   document.addEventListener("keydown", function (e) {
       if (e.keyCode === 187) {
          toggleLowPower(e);
   				overRideSliders(e);
       }
   });

   function overRideSliders(){
   	if (highpower.value=="ON"){
   		horizontal.value = 18;
   		vertical.value = 12;
   		rotational.value = 16;
   		showSlider1Value(horizontal.value);
   		showSlider2Value(vertical.value);
   		showSlider3Value(rotational.value);
   	} else if (lowpower.value=="ON"){
   		horizontal.value = 6;
   		vertical.value = 6;
   		rotational.value = 6;
   		showSlider1Value(horizontal.value);
   		showSlider2Value(vertical.value);
   		showSlider3Value(rotational.value);
   	}
   };

   function showSlider1Value(){
   	document.getElementById("Slider1").innerHTML=horizontal.value;
    adjustDials();
   }

   function showSlider2Value(){
   	document.getElementById("Slider2").innerHTML=vertical.value;
    adjustDials();
   }

   function showSlider3Value(){
   	document.getElementById("Slider3").innerHTML=rotational.value;
    adjustDials();
   }

   function adjustDials(){
     thrust2sens.value = vertical.value;
     thrust5sens.value = vertical.value;
     thrust1sens.value = horizontal.value;
     thrust3sens.value = horizontal.value;
     thrust4sens.value = horizontal.value;
     thrust6sens.value = horizontal.value;
     $('.dial')
        .trigger('change');
   }

function leftHandleTurnOff() {
  $('#lefthandleturn').val('disabled');
  $('#lefthandleturn').removeClass('shadow-lg');
  $('#lefthandleturn').addClass('shadow-sm');
  $('#lefthandleturn').removeClass('btn-info');
  $('#lefthandleturn').addClass('btn-danger');
}

function leftHandleTurnOn() {
  $('#lefthandleturn').val('enabled');
  $('#lefthandleturn').addClass('shadow-lg');
  $('#lefthandleturn').removeClass('shadow-sm');
  $('#lefthandleturn').addClass('btn-info');
  $('#lefthandleturn').removeClass('btn-danger');
}

function rightHandleTurnOff() {
  $('#righthandleturn').val('disabled');
  $('#righthandleturn').removeClass('shadow-lg');
  $('#righthandleturn').addClass('shadow-sm');
  $('#righthandleturn').removeClass('btn-info');
  $('#righthandleturn').addClass('btn-danger');
}

function rightHandleTurnOn() {
  $('#righthandleturn').val('enabled');
  $('#righthandleturn').addClass('shadow-lg');
  $('#righthandleturn').removeClass('shadow-sm');
  $('#righthandleturn').addClass('btn-info');
  $('#righthandleturn').removeClass('btn-danger');
}

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 48) {
       rightHandleTurnOn();
       leftHandleTurnOff();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 57) {
       rightHandleTurnOff();
       leftHandleTurnOn();
    }
});

function camera1Off() {
  camera1.value = "OFF";
  $('#camera1').addClass('btn-danger')
  $('#camera1').removeClass('btn-info')
  $('#camera1').removeClass('shadow-lg');
  $('#camera1').addClass('shadow-sm');
}

function camera2Off() {
  camera2.value = "OFF";
  $('#camera2').addClass('btn-danger')
  $('#camera2').removeClass('btn-info')
  $('#camera2').removeClass('shadow-lg');
  $('#camera2').addClass('shadow-sm');
}

function camera3Off() {
  camera3.value = "OFF";
  $('#camera3').addClass('btn-danger')
  $('#camera3').removeClass('btn-info')
  $('#camera3').removeClass('shadow-lg');
  $('#camera3').addClass('shadow-sm');
}

function camera4Off() {
  camera4.value = "OFF";
  $('#camera4').addClass('btn-danger')
  $('#camera4').removeClass('btn-info')
  $('#camera4').removeClass('shadow-lg');
  $('#camera4').addClass('shadow-sm');
}

function camera5Off() {
  camera5.value = "OFF";
  $('#camera5').addClass('btn-danger')
  $('#camera5').removeClass('btn-info')
  $('#camera5').removeClass('shadow-lg');
  $('#camera5').addClass('shadow-sm');
}

function camera6Off() {
  camera6.value = "OFF";
  $('#camera6').addClass('btn-danger')
  $('#camera6').removeClass('btn-info')
  $('#camera6').removeClass('shadow-lg');
  $('#camera6').addClass('shadow-sm');
}

function camera7Off() {
  camera7.value = "OFF";
  $('#camera7').addClass('btn-danger')
  $('#camera7').removeClass('btn-info')
  $('#camera7').removeClass('shadow-lg');
  $('#camera7').addClass('shadow-sm');
}

function camera8Off() {
  camera8.value = "OFF";
  $('#camera8').addClass('btn-danger')
  $('#camera8').removeClass('btn-info')
  $('#camera8').removeClass('shadow-lg');
  $('#camera8').addClass('shadow-sm');
}

function toggleCamera1(e){
    if (camera1.value=="OFF"){
				camera2Off();
        camera3Off();
        camera4Off();
        camera5Off();
        camera6Off();
        camera7Off();
        camera8Off();
        camera1.value = "ON";
        console.log("Camera 1 ON");
				$('#camera1').addClass('btn-info')
        $('#camera1').removeClass('btn-danger')
        $('#camera1').addClass('shadow-lg');
        $('#camera1').removeClass('shadow-sm');
        }
    else {
      camera1Off();
         }
   }


function toggleCamera2(e){
   if (camera2.value=="OFF"){
			 camera1Off();
       camera3Off();
       camera4Off();
       camera5Off();
       camera6Off();
       camera7Off();
       camera8Off();
       camera2.value = "ON";
       console.log("Camera 2 ON");
			 $('#camera2').addClass('btn-info')
       $('#camera2').removeClass('btn-danger')
       $('#camera2').addClass('shadow-lg');
       $('#camera2').removeClass('shadow-sm');
       }
   else {
     camera2Off();
        }
  }

function toggleCamera3(e){
    if (camera3.value=="OFF"){
				camera2Off();
        camera1Off();
        camera4Off();
        camera5Off();
        camera6Off();
        camera7Off();
        camera8Off();
        camera3.value = "ON";
        console.log("Camera 3 ON");
				$('#camera3').addClass('btn-info')
        $('#camera3').removeClass('btn-danger')
        $('#camera3').addClass('shadow-lg');
        $('#camera3').removeClass('shadow-sm');
        }
    else {
      camera3Off();
         }
   }


function toggleCamera4(e){
   if (camera4.value=="OFF"){
			 camera2Off();
       camera3Off();
       camera1Off();
       camera5Off();
       camera6Off();
       camera7Off();
       camera8Off();
       camera4.value = "ON";
       console.log("Camera 4 ON");
				$('#camera4').addClass('btn-info')
       $('#camera4').removeClass('btn-danger')
       $('#camera4').addClass('shadow-lg');
       $('#camera4').removeClass('shadow-sm');
       }
   else {
     camera4Off();
        }
  }

function toggleCamera5(e){
    if (camera5.value=="OFF"){
				camera2Off();
        camera3Off();
        camera4Off();
        camera1Off();
        camera6Off();
        camera7Off();
        camera8Off();
        camera5.value = "ON";
        console.log("Camera 5 ON");
				$('#camera5').addClass('btn-info')
        $('#camera5').removeClass('btn-danger')
        $('#camera5').addClass('shadow-lg');
        $('#camera5').removeClass('shadow-sm');
        }
    else {
      camera5Off();
         }
   }


function toggleCamera6(e){
   if (camera6.value=="OFF"){
				camera2Off();
       camera3Off();
       camera4Off();
       camera5Off();
       camera1Off();
       camera7Off();
       camera8Off();
       camera6.value = "ON";
       console.log("Camera 6 ON");
				$('#camera6').addClass('btn-info')
       $('#camera6').removeClass('btn-danger')
       $('#camera6').addClass('shadow-lg');
       $('#camera6').removeClass('shadow-sm');
       }
   else {
     camera6Off();
        }
  }

function toggleCamera7(e){
    if (camera7.value=="OFF"){
				camera2Off();function overRideSliders(){
	if (highpower.value=="ON"){
		horizontal.value = 8;
		vertical.value = 6;
		rotational.value = 8;
		showSlider1Value(horizontal.value);
		showSlider2Value(vertical.value);
		showSlider3Value(rotational.value);
	} else if (lowpower.value=="ON"){
		horizontal.value = 3;
		vertical.value = 3;
		rotational.value = 3;
		showSlider1Value(horizontal.value);
		showSlider2Value(vertical.value);
		showSlider3Value(rotational.value);
	}
};
        camera3Off();
        camera4Off();
        camera5Off();
        camera6Off();
        camera1Off();
        camera8Off();
        camera7.value = "ON";
        console.log("Camera 7 ON");
				$('#camera7').addClass('btn-info')
        $('#camera7').removeClass('btn-danger')
        $('#camera7').addClass('shadow-lg');
        $('#camera7').removeClass('shadow-sm');
        }
    else {
      camera7Off();
         }
   }


function toggleCamera8(e){
   if (camera8.value=="OFF"){
				camera2Off();
       camera3Off();
       camera4Off();
       camera5Off();
       camera6Off();
       camera7Off();
       camera1Off();
       camera8.value = "ON";
       console.log("Camera 8 ON");
				$('#camera8').addClass('btn-info')
       $('#camera8').removeClass('btn-danger')
       $('#camera8').addClass('shadow-lg');
       $('#camera8').removeClass('shadow-sm');
       }
   else {
     camera8Off();
        }
  }

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 49) {
         toggleCamera1();
      }
  });

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 50) {
         toggleCamera2();
      }
  });

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 51) {
         toggleCamera3();
      }
  });

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 52) {
         toggleCamera4();
      }
  });

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 53) {
         toggleCamera5();
      }
  });

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 54) {
         toggleCamera6();
      }
  });

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 55) {
         toggleCamera7();
      }
  });

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 56) {
         toggleCamera8();
      }
  });

  function thrustersOff() {
    thrusttoggle.value = "OFF";
    $('#thrusttoggle').addClass('btn-danger')
    $('#thrusttoggle').removeClass('btn-success')
    $('#thrusttoggle').removeClass('shadow-lg');
    $('#thrusttoggle').addClass('shadow-sm');
    allOff();
    backOff();
    vertOff();
    frontOff();
    if (lightMode.value == "OFF") {
      $('#thrustall').removeClass('btn-danger');
      $('#thrustback').removeClass('btn-danger');
      $('#thrustfront').removeClass('btn-danger');
      $('#thrustvert').removeClass('btn-danger');
      $('#thrustall').addClass('btn-dark');
      $('#thrustback').addClass('btn-dark');
      $('#thrustfront').addClass('btn-dark');
      $('#thrustvert').addClass('btn-dark');
    } else if (lightMode.value == "ON") {
      $('#thrustall').removeClass('btn-danger');
      $('#thrustback').removeClass('btn-danger');
      $('#thrustfront').removeClass('btn-danger');
      $('#thrustvert').removeClass('btn-danger');
      $('#thrustall').addClass('btn-light');
      $('#thrustback').addClass('btn-light');
      $('#thrustfront').addClass('btn-light');
      $('#thrustvert').addClass('btn-light');
    }
    document.getElementById('thrusttoggle').innerHTML = "Thrusters Disabled";
  }

  function frontOff() {
    thrustfront.value = "OFF";
    $('#thrustfront').addClass('btn-danger')
    $('#thrustfront').removeClass('btn-info')
    $('#thrustfront').removeClass('shadow-lg');
    $('#thrustfront').addClass('shadow-sm');
    document.getElementById('thrustfront').innerHTML = "Front Only Disabled";
  }

  function backOff() {
    thrustback.value = "OFF";
    $('#thrustback').addClass('btn-danger')
    $('#thrustback').removeClass('btn-info')
    $('#thrustback').removeClass('shadow-lg');
    $('#thrustback').addClass('shadow-sm');
    document.getElementById('thrustback').innerHTML = "Back Only Disabled";
  }

  function vertOff() {2
    thrustvert.value = "OFF";
    $('#thrustvert').addClass('btn-danger')
    $('#thrustvert').removeClass('btn-info')
    $('#thrustvert').removeClass('shadow-lg');
    $('#thrustvert').addClass('shadow-sm');
    document.getElementById('thrustvert').innerHTML = "Veritcal Only Disabled";
  }

  function allOff() {
    thrustall.value = "OFF";
    $('#thrustall').addClass('btn-danger')
    $('#thrustall').removeClass('btn-info')
    $('#thrustall').removeClass('shadow-lg');
    $('#thrustall').addClass('shadow-sm');
    document.getElementById('thrustall').innerHTML = "All Mode Disabled";
  }

function toggleThrusters(){
   if (thrusttoggle.value=="OFF"){
       thrusttoggle.value = "ON";
       console.log("Thrusters ON");
			 $('#thrusttoggle').addClass('btn-success')
       $('#thrusttoggle').removeClass('btn-danger')
       $('#thrusttoggle').addClass('shadow-lg');
       $('#thrusttoggle').removeClass('shadow-sm');
       if (lightMode.value == "OFF") {
         $('#thrustall').addClass('btn-danger');
         $('#thrustback').addClass('btn-danger');
         $('#thrustfront').addClass('btn-danger');
         $('#thrustvert').addClass('btn-danger');
         $('#thrustall').removeClass('btn-dark');
         $('#thrustback').removeClass('btn-dark');
         $('#thrustfront').removeClass('btn-dark');
         $('#thrustvert').removeClass('btn-dark');
       } else if (lightMode.value == "ON") {
         $('#thrustall').addClass('btn-danger');
         $('#thrustback').addClass('btn-danger');
         $('#thrustfront').addClass('btn-danger');
         $('#thrustvert').addClass('btn-danger');
         $('#thrustall').removeClass('btn-light');
         $('#thrustback').removeClass('btn-light');
         $('#thrustfront').removeClass('btn-light');
         $('#thrustvert').removeClass('btn-light');
       }
       document.getElementById('thrusttoggle').innerHTML = "Thrusters Enabled";
       }
   else {
     thrustersOff();
        }
  }

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 32) {
         toggleThrusters();
      }
  });

function toggleFront(){
   if (thrustfront.value=="OFF" && thrusttoggle.value=="ON"){
       thrustfront.value = "ON";
       allOff();
       backOff();
       vertOff();
       console.log("Front Only ON");
        $('#thrustfront').addClass('btn-info')
       $('#thrustfront').removeClass('btn-danger')
       $('#thrustfront').addClass('shadow-lg');
       $('#thrustfront').removeClass('shadow-sm');
       document.getElementById('thrustfront').innerHTML = "Front Only Enabled";
       }
   else {
     frontOff();
        }
  }

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 70) {
         toggleFront();
      }
  });

function toggleBack(){
   if (thrustback.value=="OFF" && thrusttoggle.value=="ON"){
       thrustback.value = "ON";
       allOff();
       frontOff();
       vertOff();
       console.log("Back Only ON");
        $('#thrustback').addClass('btn-info')
       $('#thrustback').removeClass('btn-danger')
       $('#thrustback').addClass('shadow-lg');
       $('#thrustback').removeClass('shadow-sm');
       document.getElementById('thrustback').innerHTML = "Back Only Enabled";
       }
   else {
     backOff();
        }
  }

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 66) {
         toggleBack();
      }
  });

function toggleVert(){
   if (thrustvert.value=="OFF" && thrusttoggle.value=="ON"){
       thrustvert.value = "ON";
       allOff();
       backOff();
       frontOff();
       console.log("Vertical Only ON");
        $('#thrustvert').addClass('btn-info')
       $('#thrustvert').removeClass('btn-danger')
       $('#thrustvert').addClass('shadow-lg');
       $('#thrustvert').removeClass('shadow-sm');
       document.getElementById('thrustvert').innerHTML = "Vertical Only Enabled";
       }
   else {
     vertOff();
        }
  }

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 86) {
         toggleVert();
      }
  });

function toggleAll(){
   if (thrustall.value=="OFF" && thrusttoggle.value=="ON"){
       thrustall.value = "ON";
       frontOff();
       backOff();
       vertOff();
       console.log("All Mode ON");
        $('#thrustall').addClass('btn-info')
       $('#thrustall').removeClass('btn-danger')
       $('#thrustall').addClass('shadow-lg');
       $('#thrustall').removeClass('shadow-sm');
       document.getElementById('thrustall').innerHTML = "All Mode Enabled";
       }
   else {
     allOff();
        }
  }

  document.addEventListener("keydown", function (e) {
      if (e.keyCode === 65) {
         toggleAll();
      }
  });

  function lightModeOff() {
    lightMode.value = "OFF";
    $('#lightMode').addClass('btn-info')
    $('#lightMode').removeClass('btn-dark')
    document.getElementById('lightMode').innerHTML = "Light Mode";
    document.body.style.backgroundColor="#272B30";
    document.body.style.color="#aaa";
    var targets = document.getElementsByClassName('card');
    var lightText = document.getElementsByClassName('text-light-simple');
    var mutedText = document.getElementsByClassName('text-muted-simple');
    var h1 = document.getElementsByTagName('h1');
    for( var i = 0; i < h1.length; i++ ) {
      h1[i].style.textShadow="-1px -1px 0 rgba(0, 0, 0, 0.3)";
      h1[i].style.color="rgb(170, 170, 170)";
    };
    var h2 = document.getElementsByTagName('h2');
    for( var i = 0; i < h2.length; i++ ) {
      h2[i].style.textShadow="-1px -1px 0 rgba(0, 0, 0, 0.3)";
    };
    var h3 = document.getElementsByTagName('h3');
    for( var i = 0; i < h3.length; i++ ) {
      h3[i].style.textShadow="-1px -1px 0 rgba(0, 0, 0, 0.3)";
    };
    var h4 = document.getElementsByTagName('h4');
    for( var i = 0; i < h4.length; i++ ) {
      h4[i].style.textShadow="-1px -1px 0 rgba(0, 0, 0, 0.3)";
    };
    var h5 = document.getElementsByTagName('h5');
    for( var i = 0; i < h5.length; i++ ) {
      h5[i].style.textShadow="-1px -1px 0 rgba(0, 0, 0, 0.3)";
      h5[i].style.color="rgb(170, 170, 170)";
    };
    var h6 = document.getElementsByTagName('h6');
    for( var i = 0; i < h6.length; i++ ) {
      h6[i].style.textShadow="-1px -1px 0 rgba(0, 0, 0, 0.3)";
    };
    for( var i = 0; i < mutedText.length; i++ ) {
      mutedText[i].style.color="#7A8288", "important";
    };
    for( var i = 0; i < lightText.length; i++ ) {
      lightText[i].style.color="#e9ecef";
    };
    for( var i = 0; i < targets.length; i++ ) {
      targets[i].style.backgroundColor="#32383e";
      targets[i].style.border="1px solid rgba(0, 0, 0, 0.6)";
    };
    $('#thrustall').addClass('btn-dark');
    $('#thrustback').addClass('btn-dark');
    $('#thrustfront').addClass('btn-dark');
    $('#thrustvert').addClass('btn-dark');
    $('#thrustall').removeClass('btn-light');
    $('#thrustback').removeClass('btn-light');
    $('#thrustfront').removeClass('btn-light');
    $('#thrustvert').removeClass('btn-light');
  }

  function toggleLightMode(){
      if (lightMode.value=="OFF"){
          lightMode.value = "ON";
          $('#lightMode').addClass('btn-dark')
          $('#lightMode').removeClass('btn-info')
          document.getElementById('lightMode').innerHTML = "Dark Mode";
          document.body.style.backgroundColor="#fff";
          document.body.style.color="#212529";
          var targets = document.getElementsByClassName('card');
          var lightText = document.getElementsByClassName('text-light-simple');
          var mutedText = document.getElementsByClassName('text-muted-simple');
          var h1 = document.getElementsByTagName('h1');
          for( var i = 0; i < h1.length; i++ ) {
            h1[i].style.textShadow="0px 0px 0 rgba(0, 0, 0, 0)";
            h1[i].style.color="rgb(39, 43, 48)";
          };
          var h2 = document.getElementsByTagName('h2');
          for( var i = 0; i < h2.length; i++ ) {
            h2[i].style.textShadow="0px 0px 0 rgba(0, 0, 0, 0)";
          };
          var h3 = document.getElementsByTagName('h3');
          for( var i = 0; i < h3.length; i++ ) {
            h3[i].style.textShadow="0px 0px 0 rgba(0, 0, 0, 0)";
          };
          var h4 = document.getElementsByTagName('h4');
          for( var i = 0; i < h4.length; i++ ) {
            h4[i].style.textShadow="0px 0px 0 rgba(0, 0, 0, 0)";
          };
          var h5 = document.getElementsByTagName('h5');
          for( var i = 0; i < h5.length; i++ ) {
            h5[i].style.textShadow="0px 0px 0 rgba(0, 0, 0, 0)";
            h5[i].style.color="rgb(39, 43, 48)";
          };
          var h6 = document.getElementsByTagName('h6');
          for( var i = 0; i < h6.length; i++ ) {
            h6[i].style.textShadow="0px 0px 0 rgba(0, 0, 0, 0)";
          };
          for( var i = 0; i < mutedText.length; i++ ) {
            mutedText[i].style.color="rgb(39, 43, 48)";
          };
          for( var i = 0; i < lightText.length; i++ ) {
            lightText[i].style.color="rgb(39, 43, 48)";
          };
          for( var i = 0; i < targets.length; i++ ) {
            targets[i].style.backgroundColor="#fff";
            targets[i].style.border="1px solid rgba(0, 0, 0, 0.125)";
          };
          $('#thrustall').addClass('btn-light');
          $('#thrustback').addClass('btn-light');
          $('#thrustfront').addClass('btn-light');
          $('#thrustvert').addClass('btn-light');
          $('#thrustall').removeClass('btn-dark');
          $('#thrustback').removeClass('btn-dark');
          $('#thrustfront').removeClass('btn-dark');
          $('#thrustvert').removeClass('btn-dark');
          }
      else {
          lightModeOff();
           }
     };

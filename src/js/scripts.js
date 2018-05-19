  var disp = document.getElementById('disp');
  var h = 00; // Define the Hours counter.
  var m = 00; // Define the Minutes Counter.
  var s = 00; // Define the Seconds Counter.
  var t;

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
  $('#lefthandleturn').addClass('btn-light');
}

function leftHandleTurnOn() {
  $('#lefthandleturn').val('enabled');
  $('#lefthandleturn').addClass('shadow-lg');
  $('#lefthandleturn').removeClass('shadow-sm');
  $('#lefthandleturn').addClass('btn-info');
  $('#lefthandleturn').removeClass('btn-light');
}

function rightHandleTurnOff() {
  $('#righthandleturn').val('disabled');
  $('#righthandleturn').removeClass('shadow-lg');
  $('#righthandleturn').addClass('shadow-sm');
  $('#righthandleturn').removeClass('btn-info');
  $('#righthandleturn').addClass('btn-light');
}

function rightHandleTurnOn() {
  $('#righthandleturn').val('enabled');
  $('#righthandleturn').addClass('shadow-lg');
  $('#righthandleturn').removeClass('shadow-sm');
  $('#righthandleturn').addClass('btn-info');
  $('#righthandleturn').removeClass('btn-light');
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
    document.getElementById('thrusttoggle').innerHTML = "Thrusters Disabled";
  }

  function frontOff() {
    thrustfront.value = "OFF";
    $('#thrustfront').addClass('btn-dark')
    $('#thrustfront').removeClass('btn-info')
    $('#thrustfront').removeClass('shadow-lg');
    $('#thrustfront').addClass('shadow-sm');
    document.getElementById('thrustfront').innerHTML = "Front Only Disabled";
  }

  function backOff() {
    thrustback.value = "OFF";
    $('#thrustback').addClass('btn-dark')
    $('#thrustback').removeClass('btn-info')
    $('#thrustback').removeClass('shadow-lg');
    $('#thrustback').addClass('shadow-sm');
    document.getElementById('thrustback').innerHTML = "Back Only Disabled";
  }

  function vertOff() {2
    thrustvert.value = "OFF";
    $('#thrustvert').addClass('btn-dark')
    $('#thrustvert').removeClass('btn-info')
    $('#thrustvert').removeClass('shadow-lg');
    $('#thrustvert').addClass('shadow-sm');
    document.getElementById('thrustvert').innerHTML = "Veritcal Only Disabled";
  }

  function allOff() {
    thrustall.value = "OFF";
    $('#thrustall').addClass('btn-dark')
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
       $('#thrustfront').removeClass('btn-dark')
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
       $('#thrustback').removeClass('btn-dark')
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
       $('#thrustvert').removeClass('btn-dark')
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
       $('#thrustall').removeClass('btn-dark')
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

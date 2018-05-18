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

function liftBag() {
  console.log('LiftBag')
  $('#lock').removeClass('fa-lock');
  $('#lock').addClass('fa-unlock');
  $('#liftbag').addClass('shadow-lg');
  $('#liftbag').addClass('btn-info');
  $('#liftbag').removeClass('btn-danger');
};

function lowPowerOff() {
  lowpower.value = "OFF";
  console.log("Low Power " + lowpower.value);
  $('#lowpower').addClass('btn-danger')
  $('#lowpower').removeClass('btn-info')
}

function highPowerOff() {
	highpower.value = "OFF";
	console.log("High Power " + highpower.value);
	$('#highpower').addClass('btn-danger')
  $('#highpower').removeClass('btn-info')
}

function toggleHighPower(e){
    if (highpower.value=="OFF"){
				lowPowerOff();
        highpower.value = "ON";
        console.log("High Power " + highpower.value);
				$('#highpower').addClass('btn-info')
        $('#highpower').removeClass('btn-danger')
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
        }
    else {
        lowPowerOff();
         }
   };

function toggleLeftTurn(e) {
  if (righthandleturn.value == enabled) {

  }
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

function camera1Off() {
  camera1.value = "OFF";
  $('#camera1').addClass('btn-danger')
  $('#camera1').removeClass('btn-info')
}

function camera2Off() {
  camera2.value = "OFF";
  $('#camera2').addClass('btn-danger')
  $('#camera2').removeClass('btn-info')
}

function camera3Off() {
  camera3.value = "OFF";
  $('#camera3').addClass('btn-danger')
  $('#camera3').removeClass('btn-info')
}

function camera4Off() {
  camera4.value = "OFF";
  $('#camera4').addClass('btn-danger')
  $('#camera4').removeClass('btn-info')
}

function camera5Off() {
  camera5.value = "OFF";
  $('#camera5').addClass('btn-danger')
  $('#camera5').removeClass('btn-info')
}

function camera6Off() {
  camera6.value = "OFF";
  $('#camera6').addClass('btn-danger')
  $('#camera6').removeClass('btn-info')
}

function camera7Off() {
  camera7.value = "OFF";
  $('#camera7').addClass('btn-danger')
  $('#camera7').removeClass('btn-info')
}

function camera8Off() {
  camera8.value = "OFF";
  $('#camera8').addClass('btn-danger')
  $('#camera8').removeClass('btn-info')
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
       }
   else {
     camera6Off();
        }
  }

function toggleCamera7(e){
    if (camera7.value=="OFF"){
				camera2Off();
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
       }
   else {
     camera8Off();
        }
  }

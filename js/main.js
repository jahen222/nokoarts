// ANIMATION IN CANVAS (WHITE + BLACK STRIPES)

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

ctx.font = 'bold 10pt Calibri';
ctx.fillStyle = 'blue';
ctx.fillText('Hello World!', 250, 100);
ctx.lineWidth = 4;

// confioguration variables
// space between each line
var lineSpacing = 30;

var lineColor = '#353535'; // RGBA supported, last value = alpha (between 0 and 1)

// line length is calculated based on distance between mouse position and the position of a point
// min and max are taken into account so the length of the line does not go below or above these values
var lineMinLength = 25;
var lineMaxLength = 10;

// multiplier of the length of the line, the length of the line is the distance between the mouse and the point at which a line starts
// e.g. if you cursor is at the top left and the point is at the bottom right, the distance will be 1, which is multiplied by this value
// this value will not exceed the min/max defined above
var lineLengthMultiplier = 20;

var lineWidth = 2;

// runtime variables
var width;
var height;
var linesX;
var linesY;
var mouseX;
var mouseY;

var onResize = function () {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    linesX = Math.floor((width - (lineSpacing / 2)) / lineSpacing);
    linesY = Math.floor((height - (lineSpacing / 2)) / lineSpacing);
    canvas.width = width;
    canvas.height = height;
};

var draw = function () {
	requestAnimationFrame(draw);

	if (mouseX == void 0 || mouseY == void 0) {
		return;
	}

	ctx.clearRect(0, 0, width, height);

	ctx.lineWidth = lineWidth;
	ctx.strokeStyle = lineColor;

    for (var x = 0; x < linesX; x++) {
        for (var y = 0; y < linesY; y++) {
			var screenX = (x * lineSpacing) + lineSpacing;
			var screenY = (y * lineSpacing) + lineSpacing;
			var angle = Math.atan2(screenY - mouseY, screenX - mouseX);
			var distance = Math.sqrt( (mouseX-screenX) * (mouseX-screenX) + (mouseY - screenY) * (mouseY - screenY) );

			var length = Math.min(Math.max(lineMinLength, distance / ((width + height) / 2) * lineLengthMultiplier), lineMaxLength);

			ctx.beginPath();
			ctx.moveTo(screenX, screenY);

			ctx.lineTo(
				screenX + length * Math.cos(angle),
				screenY + length * Math.sin(angle)
			);

            ctx.stroke();
        }
    }
};

window.addEventListener('resize', function () {
	onResize();
	draw();
});

canvas.addEventListener('mousemove', function (ev) {
	mouseX = ev.clientX;
	mouseY = ev.clientY;
});

onResize();

mouseX = width / 2;
mouseY = height / 2;

draw();


/************** ACORDION MENU*********************/

$(document).ready(function() {
    $(".accordion-list li").click(function(event) {
       clickedElement = $(this);
      if(!clickedElement.hasClass('visible')) {
        clickedElement.addClass('visible');
        clickedElement.siblings().removeClass('visible');
      } else if (clickedElement.hasClass('visible')) {
        clickedElement.removeClass('visible');
      }
    });
});

/************** MODAL CONTACT FORM*********************/

$(function(){$("#contactForm input,#contactForm textarea").jqBootstrapValidation({preventSubmit:!0,submitError:function(t,e,s){},submitSuccess:function(t,e){$("#btnSubmit").attr("disabled",!0),e.preventDefault();var s=$("input#name").val(),a=$("input#email").val(),n=$("input#phone").val(),c=$("textarea#message").val(),r=s;r.indexOf(" ")>=0&&(r=s.split(" ").slice(0,-1).join(" ")),$.ajax({url:"././mail/contact_me.php",type:"POST",data:{name:s,phone:n,email:a,message:c},cache:!1,success:function(){$("#btnSubmit").attr("disabled",!1),$("#success").html("<div class='alert alert-success'>"),$("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-success").append("<strong>Your message has been sent. </strong>"),$("#success > .alert-success").append("</div>"),$("#contactForm").trigger("reset")},error:function(){$("#success").html("<div class='alert alert-danger'>"),$("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-danger").append("<strong>Sorry "+r+", it seems that my mail server is not responding. Please try again later!"),$("#success > .alert-danger").append("</div>"),$("#contactForm").trigger("reset")}})},filter:function(){return $(this).is(":visible")}}),$('a[data-toggle="tab"]').click(function(t){t.preventDefault(),$(this).tab("show")})}),$("#name").focus(function(){$("#success").html("")});



/**************PORTFOLIO*********************/

//obligatory parallax effect
$(window).on('scroll', function(){
  $('.copy').css({
    'transform' : 'translatey('+ $(this).scrollTop()/3 + 'px)'
  });
})



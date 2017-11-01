"use strict";
$(function () {
    "use strict";
    console.log("file0x0011-0.0.1");
    var stdout = null;
    var canvas = null;
    var context = null;
    var println = function (str) {
        $("<div>").text(str).appendTo(stdout);
    };
    $(document).ready(function () {
        canvas = document.getElementById("MainClient");
        context = canvas.getContext("2d");
        stdout = document.getElementById("StdOut");
        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);
        var isUtc = false;
        $(canvas).dblclick(function () {
            isUtc = !isUtc;
        });
        var frame_count = 0;
        var t = 0.0;
        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);
        var loopPerFrame = function () {
            var w = canvas.width;
            var h = canvas.height;
            {
                context.fillStyle = "black";
                context.fillRect(0.0, 0.0, w, h);
                context.textAlign = "left";
                context.fillStyle = "white";
                context.fillText(frames_per_second, 12.0, 18.0, w - 24.0);
            }
            {
                var f = 13.0 / 2.0;
                var x = w / 2.0;
                var y = h / 2.0;
                context.fillStyle = "#202020";
                context.beginPath();
                context.ellipse(x, y, f, f, 0, 0, 2 * Math.PI);
                context.fill();
            }
            for (var ti = 0; 60 > ti; ti += 5) {
                var f = 5.0 / 2.0;
                if (ti % 15 === 0) {
                    f += 3.0 / 2.0;
                }
                var tt = Math.PI * 0.5 - Math.PI * 2.0 / 60.0 * ti;
                var x = w / 2.0 + 120.0 * Math.cos(tt);
                var y = h / 2.0 - 120.0 * Math.sin(tt);
                context.fillStyle = "#202020";
                context.beginPath();
                context.moveTo(x - f, y - f);
                context.lineTo(x - f, y + f);
                context.lineTo(x + f, y + f);
                context.lineTo(x + f, y - f);
                context.fill();
            }
            var ttt = new Date();
            var ss = ttt.getUTCSeconds();
            var mm = ttt.getUTCMinutes();
            var hh = ttt.getUTCHours();
            if (!isUtc) {
                ss = ttt.getSeconds();
                mm = ttt.getMinutes();
                hh = ttt.getHours();
            }
            {
                var tt = Math.PI * 0.5 - Math.PI * 2.0 / 60.0 * ss;
                var x = w / 2.0 + 120.0 * Math.cos(tt);
                var y = h / 2.0 - 120.0 * Math.sin(tt);
                var f = 5.0 / 2.0;
                context.fillStyle = "#87CEEB";
                context.beginPath();
                context.moveTo(x - f, y - f);
                context.lineTo(x - f, y + f);
                context.lineTo(x + f, y + f);
                context.lineTo(x + f, y - f);
                context.fill();
            }
            {
                var tt = Math.PI * 0.5 - Math.PI * 2.0 / 60.0 * (mm + ss / 60.0);
                var x = w / 2.0 + 90.0 * Math.cos(tt);
                var y = h / 2.0 - 90.0 * Math.sin(tt);
                var f = 8.0 / 2.0;
                context.fillStyle = "#96F2B9";
                context.beginPath();
                context.moveTo(x - f, y - f);
                context.lineTo(x - f, y + f);
                context.lineTo(x + f, y + f);
                context.lineTo(x + f, y - f);
                context.fill();
            }
            {
                var tt = Math.PI * 0.5 - Math.PI * 2.0 / 12.0 * (hh + (mm + ss / 60.0) / 60.0);
                var x = w / 2.0 + 60.0 * Math.cos(tt);
                var y = h / 2.0 - 60.0 * Math.sin(tt);
                var f = 13.0 / 2.0;
                context.fillStyle = "#F2E583";
                context.beginPath();
                context.moveTo(x, y - f);
                context.lineTo(x + f, y);
                context.lineTo(x, y + f);
                context.lineTo(x - f, y);
                context.fill();
            }
            {
                var s = ttt.toUTCString();
                if (!isUtc) {
                    s = ttt.toString();
                }
                context.fillStyle = "#d9b3ff";
                context.textAlign = "center";
                context.fillText(s, w / 2.0, h - 14.0, w - 24.0);
            }
            ++frame_count;
            t += 1.0 / 60;
        };
        var frames_per_second = null;
        var loopPerSecond = function () {
            var w = canvas.width;
            var h = canvas.height;
            if (null === frames_per_second) {
                frames_per_second = "?? FPS";
            }
            else {
                frames_per_second = frame_count.toString() + " FPS";
                frame_count = 0;
            }
        };
        loopPerSecond();
        loopPerFrame();
        var timerFrame = setInterval(loopPerFrame, 1000.0 / 60);
        var timerSecond = setInterval(loopPerSecond, 1000.0);
        println("Ready.");
    });
});
//# sourceMappingURL=file0x0011-0.0.1.js.map
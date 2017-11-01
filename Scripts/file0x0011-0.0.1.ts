"use strict";
$(function () {
    "use strict";
    console.log("file0x0011-0.0.1");

    let stdout = <HTMLElement>null;
    let canvas = <HTMLCanvasElement>null;
    let context = <CanvasRenderingContext2D>null;

    let println = function (str: string) {
        $("<div>").text(str).appendTo(stdout);
    };

    $(document).ready(function () {
        canvas = <HTMLCanvasElement>document.getElementById("MainClient");
        context = canvas.getContext("2d");
        stdout = <HTMLDivElement>document.getElementById("StdOut");

        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);

        let isUtc = false;

        $(canvas).dblclick(function () {
            isUtc = !isUtc;
        });

        let frame_count = 0;
        let t = 0.0;

        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);

        let loopPerFrame = function () {
            let w = canvas.width;
            let h = canvas.height;
            {
                context.fillStyle = "black";
                context.fillRect(0.0, 0.0, w, h);
                context.textAlign = "left";
                context.fillStyle = "white";
                context.fillText(frames_per_second, 12.0, 18.0, w - 24.0);
            }
            {
                let f = 13.0 / 2.0;
                let x = w / 2.0;
                let y = h / 2.0;
                context.fillStyle = "#202020";
                context.beginPath();
                context.ellipse(x, y, f, f, 0, 0, 2 * Math.PI);
                context.fill();
            }
            for (let ti = 0; 60 > ti; ti += 5) {
                let f = 5.0 / 2.0;
                if (ti % 15 === 0) {
                    f += 3.0 / 2.0;
                }
                let tt = Math.PI * 0.5 - Math.PI * 2.0 / 60.0 * ti;
                let x = w / 2.0 + 120.0 * Math.cos(tt);
                let y = h / 2.0 - 120.0 * Math.sin(tt);
                context.fillStyle = "#202020";
                context.beginPath();
                context.moveTo(x - f, y - f);
                context.lineTo(x - f, y + f);
                context.lineTo(x + f, y + f);
                context.lineTo(x + f, y - f);
                context.fill();
            }
            let ttt = new Date();
            let ss = ttt.getUTCSeconds();
            let mm = ttt.getUTCMinutes();
            let hh = ttt.getUTCHours();
            if (!isUtc) {
                ss = ttt.getSeconds();
                mm = ttt.getMinutes();
                hh = ttt.getHours();
            }
            {
                let tt = Math.PI * 0.5 - Math.PI * 2.0 / 60.0 * ss;
                let x = w / 2.0 + 120.0 * Math.cos(tt);
                let y = h / 2.0 - 120.0 * Math.sin(tt);
                let f = 5.0 / 2.0;
                context.fillStyle = "#87CEEB";
                context.beginPath();
                context.moveTo(x - f, y - f);
                context.lineTo(x - f, y + f);
                context.lineTo(x + f, y + f);
                context.lineTo(x + f, y - f);
                context.fill();
            }
            {
                let tt = Math.PI * 0.5 - Math.PI * 2.0 / 60.0 * (mm + ss / 60.0);
                let x = w / 2.0 + 90.0 * Math.cos(tt);
                let y = h / 2.0 - 90.0 * Math.sin(tt);
                let f = 8.0 / 2.0;
                context.fillStyle = "#96F2B9";
                context.beginPath();
                context.moveTo(x - f, y - f);
                context.lineTo(x - f, y + f);
                context.lineTo(x + f, y + f);
                context.lineTo(x + f, y - f);
                context.fill();
            }
            {
                let tt = Math.PI * 0.5 - Math.PI * 2.0 / 12.0 * (hh + (mm + ss / 60.0) / 60.0);
                let x = w / 2.0 + 60.0 * Math.cos(tt);
                let y = h / 2.0 - 60.0 * Math.sin(tt);
                let f = 13.0 / 2.0;
                context.fillStyle = "#F2E583";
                context.beginPath();
                context.moveTo(x, y - f);
                context.lineTo(x + f, y);
                context.lineTo(x, y + f);
                context.lineTo(x - f, y);
                context.fill();
            }
            {
                let s = ttt.toUTCString();
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
        let frames_per_second = <string>null;
        let loopPerSecond = function () {
            let w = canvas.width;
            let h = canvas.height;
            if (null === frames_per_second) {
                frames_per_second = "?? FPS";
            } else {
                frames_per_second = frame_count.toString() + " FPS";
                frame_count = 0;
            }
        };
        loopPerSecond();
        loopPerFrame();
        let timerFrame = setInterval(loopPerFrame, 1000.0 / 60);
        let timerSecond = setInterval(loopPerSecond, 1000.0);

        println("Ready.");
    });
});


(function () {
    var stage, textStage, form, input;
    var circles, circles1, circles2, textPixels, textFormed;
    var offsetX, offsetY, text;
    // var colors = ['#B2949D', '#FFF578', '#FF5F8D', '#37A9CC', '#188EB2'];
    var boxdata = document.querySelector('.cover_form');

    function init() {
        initStages();
        initForm();
        initText();
        initCircles();
        animate();
        addListeners();
    }

    // Init Canvas
    function initStages() {

        offsetX = (boxdata.clientWidth - 600) / 2;
        offsetY = (boxdata.clientHeight - 300) / 2;
        textStage = new createjs.Stage("text");
        textStage.canvas.width = 600;
        textStage.canvas.height = 200;

        stage = new createjs.Stage("stage");
        stage.canvas.width = boxdata.clientWidth;
        stage.canvas.height = boxdata.clientHeight;
    }

    function initForm() {
        form = document.getElementById('form');
        form.style.top = offsetY + 200 + 'px';
        form.style.left = offsetX + 'px';
        input = document.getElementById('inputText');
    }

    function initText() {
        text = new createjs.Text("t", "900 20px 'Barlow Condensed'", "#eee");
        text.textAlign = 'center';
        text.x = 300;

    }

    function initCircles() {
        circles = [];
        circles1 = [];
        circles2 = [];
        for (var i = 0; i < 250; i++) {
            //var circle = new createjs.Shape();
            var circle = new createjs.Text("1", "600 14px Barlow Condensed", "#b1b1b1");
            // text.x = 100;
            // text.textBaseline = "alphabetic";
            var r = 7;
            var x = boxdata.clientWidth * Math.random();
            var y = boxdata.clientHeight * Math.random();
            // var color = colors[Math.floor(i % colors.length)];
            var alpha = 0.2 + Math.random() * 0.5;
            //circle.alpha = alpha;
            circle.radius = r;
            // circle.graphics.beginFill(text).drawCircle(0, 0, r);
            circle.x = x;
            circle.y = y;
            circles.push(circle);
            stage.addChild(circle);
            circle.movement = 'float';
            tweenCircle(circle);

        }
        for (var i = 0; i < 250; i++) {
            //var circle = new createjs.Shape();
            var circle1 = new createjs.Text("0", "600 14px Barlow Condensed", "#bababa");
            // text.x = 100;
            // text.textBaseline = "alphabetic";
            var r = 7;
            var x = boxdata.clientWidth * Math.random();
            var y = boxdata.clientHeight * Math.random();
            // var color = colors[Math.floor(i % colors.length)];
            var alpha = 0.2 + Math.random() * 0.5;
            //circle1.alpha = alpha;
            circle1.radius = r;
            // circle.graphics.beginFill(text).drawCircle(0, 0, r);
            circle1.x = x;
            circle1.y = y;
            circles1.push(circle1);
            stage.addChild(circle1);
            circle1.movement = 'float';
            tweenCircle(circle1);
        }

        for (var i = 0; i < 300; i++) {
            //var circle = new createjs.Shape();
            var circle2 = new createjs.Text("", "600 14px Barlow Condensed", "#555555");
            // text.x = 100;
            // text.textBaseline = "alphabetic";
            var r = 7;
            var x = boxdata.clientWidth * Math.random();
            var y = boxdata.clientHeight * Math.random();
            // var color = colors[Math.floor(i % colors.length)];
            var alpha = 0.2 + Math.random() * 0.5;
            //circle1.alpha = alpha;
            circle2.radius = r;
            // circle.graphics.beginFill(text).drawCircle(0, 0, r);
            circle2.x = x;
            circle2.y = y;
            circles2.push(circle2);
            stage.addChild(circle2);
            circle2.movement = 'float';
            tweenCircle(circle2);
        }

    }


    // animating circles
    function animate() {
        stage.update();
        requestAnimationFrame(animate);
    }

    function tweenCircle(c, dir) {
        if (c.tween) c.tween.kill();
        if (dir == 'in') {
            // c.color = "#000000";
            //c.textBaseline = "alphabetic";


            c.tween = TweenLite.to(c, 1, {
                x: c.originX, y: c.originY, ease: Power1.easeInOut, alpha: 1, delay: 0, radius: 5, scaleX: 1.1, scaleY: 1.1, onStart: function () {
                    setTimeout(function () { c.color = "#00000"; }, 800);
                    // c.movement = 'jiggle';
                    //tweenCircle(c);
                }
            });
        } else if (dir == 'out') {

            c.tween = TweenLite.to(c, 0.8, {
                x: window.innerWidth * Math.random(), y: window.innerHeight * Math.random(), easel: { colorFilter: { redOffset: 102, greenOffset: 50 } }, ease: Quad.easeInOut, alpha: 0.2 + Math.random() * 0.5, scaleX: 1, scaleY: 1, onComplete: function () {
                    c.movement = 'float';
                    tweenCircle(c);
                }
            });
        } else {
            if (c.movement == 'float') {

                c.tween = TweenLite.to(c, 5 + Math.random() * 3.5, {
                    x: c.x + -100 + Math.random() * 200, y: c.y + -100 + Math.random() * 200, ease: Quad.easeInOut,
                    onComplete: function () {
                        tweenCircle(c);
                    }
                });
            } else {
                c.tween = TweenLite.to(c, 0.05, {
                    x: c.originX + Math.random() * 3, y: c.originY + Math.random() * 3, ease: Quad.easeInOut,
                    onComplete: function () {
                        tweenCircle(c);
                    }
                });
            }
        }
    }

    function tweenCircle2(c, dir) {
        if (c.tween) c.tween.kill();
        if (dir == 'in') {
            // c.color = "#000000";
            // c.text = "1";
            // c.textBaseline = "alphabetic";
            c.tween = TweenLite.to(c, 1, {
                x: c.originX, y: c.originY, ease: Power1.easeInOut, alpha: 1, radius: 5, scaleX: 1.1, scaleY: 1.1, onStart: function () {
                    setTimeout(function () { c.color = "#000000"; }, 800);


                    //c.movement = 'jiggle';
                    // tweenCircle2(c);

                }
            });
        } else if (dir == 'out') {
            c.tween = TweenLite.to(c, 0.8, {
                x: window.innerWidth * Math.random(), y: window.innerHeight * Math.random(), ease: Quad.easeInOut, alpha: 0.2 + Math.random() * 0.5, scaleX: 1, scaleY: 1, onComplete: function () {
                    c.movement = 'float';
                    tweenCircle2(c);
                }
            });
        } else {
            if (c.movement == 'float') {
                c.tween = TweenLite.to(c, 5 + Math.random() * 3.5, {
                    x: c.x + -100 + Math.random() * 200, y: c.y + -100 + Math.random() * 200, ease: Quad.easeInOut,
                    onComplete: function () {
                        tweenCircle2(c);
                    }
                });
            } else {
                c.tween = TweenLite.to(c, 0.05, {
                    x: c.originX + Math.random() * 3, y: c.originY + Math.random() * 3, ease: Quad.easeInOut,
                    onComplete: function () {
                        tweenCircle2(c);
                    }
                });
            }
        }
    }


    function tweenCircle3(c, dir) {
        if (c.tween) c.tween.kill();
        if (dir == 'in') {
            //  c.color = "#bababa";
            c.text = "1";

            // c.textBaseline = "alphabetic";
            c.tween = TweenLite.to(c, 1, {
                x: c.originX, y: c.originY, ease: Power1.easeInOut, alpha: 1, radius: 5, scaleX: 1.1, scaleY: 1.1, onStart: function () {
                    setTimeout(function () { c.color = "#000000"; }, 800);


                    //c.movement = 'jiggle';
                    // tweenCircle2(c);

                }
            });
        }

    }

    function formText() {
        for (var i = 0, l = textPixels.length; i < l; i++) {

            circles[i].originX = offsetX + textPixels[i].x;

            circles[i].originY = offsetY + textPixels[i].y;

            tweenCircle(circles[i], 'in');
        }
        textFormed = true;
        if (textPixels.length < circles.length) {
            for (var j = textPixels.length; j < circles.length; j++) {
                circles[j].tween = TweenLite.to(circles[j], 0.4, { alpha: 0.1 });
            }
        }
    }

    function formText2() {
        for (var i = 0, l = textPixels.length; i < l; i++) {

            circles1[i].originX = offsetX + textPixels[i].x;

            circles1[i].originY = offsetY + textPixels[i].y;

            tweenCircle2(circles1[i], 'in');
        }
        textFormed = true;
        if (textPixels.length < circles1.length) {
            for (var j = textPixels.length; j < circles1.length; j++) {
                circles1[j].tween = TweenLite.to(circles1[j], 0.4, { alpha: 0.1 });
            }
        }
    }


    function formText3() {
        for (var i = 0, l = textPixels.length; i < l; i++) {

            circles2[i].originX = offsetX + textPixels[i].x;

            circles2[i].originY = offsetY + textPixels[i].y;

            tweenCircle3(circles2[i], 'in');
        }
        textFormed = true;
        if (textPixels.length < circles2.length) {
            for (var j = textPixels.length; j < circles2.length; j++) {
                circles2[j].tween = TweenLite.to(circles2[j], 0.4, { alpha: 0.1 });
            }
        }
    }



    // event handlers
    function addListeners() {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (textFormed) {
                //explode();
                if (input.value != '') {
                    setTimeout(function () {
                        createText(input.value.toUpperCase());
                        createText2(input.value.toUpperCase());
                        createText3(input.value.toUpperCase());
                    }, 810);
                } else {
                    textFormed = false;
                }
            } else {
                createText(input.value.toUpperCase());
                createText2(input.value.toUpperCase());
                createText3(input.value.toUpperCase());
            }

        });
    }

    function createText(t) {
        var fontSize = 1000 / (t.length);
        if (fontSize > 160) fontSize = 50;
        text.text = t;
        text.font = "900 " + fontSize + "px 'Source Sans Pro'";
        text.textAlign = 'center';
        text.x = 290;
        text.y = (250 - fontSize) / 2;
        textStage.addChild(text);
        textStage.update();

        var ctx = document.getElementById('text').getContext('2d');
        var pix = ctx.getImageData(0, 0, 600, 200).data;
        textPixels = [];
        for (var i = pix.length; i >= 0; i -= 4) {
            if (pix[i] != 0) {
                var x = (i / 4) % 600;
                var y = Math.floor(Math.floor(i / 600) / 4);

                if ((x && x % 8 == 0) && (y && y % 8 == 0)) textPixels.push({ x: x, y: y });
            }
        }

        formText();
    }

    function createText2(t) {
        var fontSize = 1000 / (t.length);
        if (fontSize > 160) fontSize = 50;
        text.text = t;
        text.font = "900 " + fontSize + "px 'Source Sans Pro'";
        text.textAlign = 'center';
        text.x = 290;
        text.y = (250 - fontSize) / 2;
        textStage.addChild(text);
        textStage.update();

        var ctx = document.getElementById('text').getContext('2d');
        var pix = ctx.getImageData(0, 0, 600, 200).data;
        textPixels = [];
        for (var i = pix.length; i >= 0; i -= 4) {
            if (pix[i] != 0) {
                var x = (i / 4) % 600;
                var y = Math.floor(Math.floor(i / 600) / 4);

                if ((x && x % 8 == 0) && (y && y % 8 == 0)) textPixels.push({ x: x, y: y });
            }
        }

        formText2();
    }
    function createText3(t) {
        var fontSize = 1000 / (t.length);
        if (fontSize > 160) fontSize = 50;
        text.text = t;
        text.font = "900 " + fontSize + "px 'Source Sans Pro'";
        text.textAlign = 'center';
        text.x = 290;
        text.y = (250 - fontSize) / 2;
        textStage.addChild(text);
        textStage.update();

        var ctx = document.getElementById('text').getContext('2d');
        var pix = ctx.getImageData(0, 0, 600, 200).data;
        textPixels = [];
        for (var i = pix.length; i >= 0; i -= 4) {
            if (pix[i] != 0) {
                var x = (i / 4) % 600;
                var y = Math.floor(Math.floor(i / 600) / 4);

                if ((x && x % 8 == 0) && (y && y % 8 == 0)) textPixels.push({ x: x, y: y });
            }
        }

        formText3();
    }

    window.onload = function () { init() };
})();
var c = document.getElementById("matrix");
var ctx = c.getContext("2d");
fadeColor = "rgba(0, 0, 0, 0.2)";
ctx.scale(-1, 1);

ctx.fillStyle = "#050505";
ctx.fillRect(0, 0, c.width, c.height);

//making the canvas set to max size of spotlight image
c.height = 600;
c.width = 800;

var font_size = 24;
var columns = c.width / font_size; //number of columns for the rain

var allowedChars = ` 日ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ٢٣٤٥٦٨٩1234567890ABCDEF:.=*+-¦|_`;
allowedChars = allowedChars.split("");

var drops = [];
for (var x = 0; x < columns; x++)
    drops[x] = Math.floor(Math.random()*(-50)); //start at random y value

function draw() {
    ctx.fillStyle = fadeColor;
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "rgb(198,251,255)";
    ctx.font = font_size + "px arial";

    for (var i = 0; i < drops.length; i++) {
        var text = allowedChars[Math.floor(Math.random() * allowedChars.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }

}

setInterval(draw, 40);
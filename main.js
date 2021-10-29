function preload()
{
classifier = ml5.imageClassifier("DoodleNet")
}

function setup()
{
canvas = createCanvas(300, 300);
canvas.Center();
background('white');
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}

function clearCanvas()
{
    background('white');
}
function draw()
{
strokeWeight(13);
stroke(0);
if(mouseIsPressed)
{
    line(pmouseX, pmouseY, mouseX, mouseY);
}
}

function classifyCanvas()
{
    classifier.classify(canvas,gotresults)
}
function gotresult(error, results)
{
if(error)
{
    console.error(error)
}
console.log(results)
document.getElementById("label").innerHTML = "lable:" + results[0].lable;
document.getElementById("confidence").innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + "%";

utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis)
}

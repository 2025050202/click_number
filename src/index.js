import "./styles.css";

for (var num = 9; num > 0; num--) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  var function_name = "remove(" + num + ")";
  elm.setAttribute("onclick", function_name);
  document.getElementById("main").appendChild(elm);

  var left_pos = 10;
  var top_pos = 100;

  left_pos = left_pos + Math.floor(Math.random() * 400);
  top_pos = top_pos + Math.floor(Math.random() * 600);

  document.getElementById(num).style.left = "" + left_pos + "px";
  document.getElementById(num).style.top = "" + top_pos + "px";

  /*色をランダムに変更・丸の大きさをランダムに変更 */
  var color = Math.random().toString(16).slice(-6);
  var size = 60 + Math.floor(Math.random() * 100);

  document.getElementById(num).style.backgroundColor = "#" + color + "";
  document.getElementById(num).style.width = "" + size + "px";
  document.getElementById(num).style.height = "" + size + "px";
}

/*　９つの丸を消すまでの経過時間を表示する */
const startTime = Date.now();

var next = 1;
document.remove = function (id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next = next + 1;
  }
  if (id === 9) {
    const timeStamp = Date.now() - startTime;
    const time = Math.floor(timeStamp / 1000);
    var timeArea = document.getElementById("timeArea");
    timeArea.innerHTML = "TIME : 全部消すまで " + time + " 秒でした！";
  }
};

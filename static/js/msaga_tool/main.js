// 初期表示されたとき
window.onload = init;
function init() {
	skillButtonPress('細剣');
}

// スキルボタンがクリックされたとき
function skillButtonPress(selectSkillName) {

	// 画面クリア
	for (var i = 0; i < 24; i++) document.getElementById("waza" + i).value = "ーーー";
	document.getElementById("result1").innerHTML = "";
	document.getElementById("result2").innerHTML = "";
	document.getElementById("result3").innerHTML = "";
	document.getElementById("result4").innerHTML = "";
	
	// 技ボタンを作成
	var j = 0;
	for (var i = 0; i < 298; i++) {
	
		// 関係ないスキルの技はスキップ
		if (wazaArray[i][2] != selectSkillName) {
			continue;
		}
		
		// ボタン作成
		document.getElementById("waza" + j).type = "button";
		document.getElementById("waza" + j).value = wazaArray[i][1];
		if (wazaArray[i][3] == 'M') {
			document.getElementById("waza" + j).style = "width:30%;height:40px;background-color:#FFFFFF;"
		}
		if (wazaArray[i][3] == 'A') {
			document.getElementById("waza" + j).style = "width:30%;height:40px;background-color:#FFAAAA;"
		}
		if (wazaArray[i][3] == 'D') {
			document.getElementById("waza" + j).style = "width:30%;height:40px;background-color:#AAAAFF;"
		}
		if (wazaArray[i][3] == 'T') {
			document.getElementById("waza" + j).style = "width:30%;height:40px;background-color:#FFFFAA;"
		}
		j++;
	}
	
	// 使用しない技ボタンは非表示
	for (var i = j; i < 24; i++) {
		document.getElementById("waza" + i).style = "width:30%;height:40px;background-color:#FFFFFF;"
		document.getElementById("waza" + i).type = "hidden";
	}
	
}

// 技ボタンがクリックされたときの処理
function wazaButtonPress(wazaIndex) {

	// 選択されたスキルと技
	var s = document.getElementById("skillRadioButtons").skill.value; // 例:"小型剣"
	var w = document.getElementById("waza" + wazaIndex).value; // 例:"ハヤブサ斬り"

	var set;
	var outputStr1 = "";
	var outputStr2 = "";
	
	// 選択された技を閃くときの派生情報をsetに入れる
	set = new Set();
	for (var i = 0; i < 745; i++) {
		if (haseiArray[i][3] != w) continue; // 関係ない派生はスキップ
		if (haseiArray[i][4].indexOf(s) == -1) continue; // 関係ないスキルはスキップ
		set.add(new Array(haseiArray[i][1], haseiArray[i][2], haseiArray[i][3]));
	}
	
	// 通し番号順に露出
	for (var i = 0; i < 298; i++) {
		if (wazaArray[i][2] != s) {
			continue; // 関係ないスキルはスキップ
		}
		for (var v of set) {
			if(wazaArray[i][1] == v[0]){
				outputStr1 = outputStr1 + "[" + v[1] + "]" + v[0] + "<br>";
			}
		}
	}
	
	// 選択された技から閃くときの派生情報番号をsetに入れる
	set = new Set();
	for (var i = 0; i < 745; i++) {
		if (haseiArray[i][1] != w) continue; // 関係ない派生はスキップ
		if (haseiArray[i][4].indexOf(s) == -1) continue; // 関係ないスキルはスキップ
		set.add(new Array(haseiArray[i][1], haseiArray[i][2], haseiArray[i][3]));
	}
	
	// 通し番号順に露出
	for (var i = 0; i < 298; i++) {
		if (wazaArray[i][2] != s) {
			continue; // 関係ないスキルはスキップ
		}
		for (var v of set) {
			if(wazaArray[i][1] == v[2]){
				outputStr2 = outputStr2 + "[" + v[1] + "]" + v[2] + "<br>";
			}
		}
	}
	
	document.getElementById("result1").innerHTML = outputStr1;
	document.getElementById("result2").innerHTML = w;
	document.getElementById("result3").innerHTML = w;
	document.getElementById("result4").innerHTML = outputStr2;
	
}
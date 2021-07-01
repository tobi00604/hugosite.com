---
title: "ミンサガ 技ひらめき派生検索ツール"
draft: false
weight: 3
page_js : [
# "//localhost:1313/js/msaga_tool/main.js",
# "//localhost:1313/js/msaga_tool/main2.js",
# "//localhost:1313/js/msaga_tool/main3.js",
 "//epic-sammet-9285ed.netlify.app/js/msaga_tool/main.js",
 "//epic-sammet-9285ed.netlify.app/js/msaga_tool/main2.js",
 "//epic-sammet-9285ed.netlify.app/js/msaga_tool/main3.js",
]
---

ツールを作りました。
ゲーム「ロマンシングサガ ミンストレルソング」で、技ひらめきの派生元・派生先を検索できます。

<!--more-->

武器の分類と技を選択すると、その技の派生元・派生先が表示されます。  
[ ] 内の数字は派生難易度（ひらめきにくさ）です。

***

{{< scInner >}}

<form ID="skillRadioButtons">
<table border=0>
	<tr>
		<td width="90">
			<input type="radio" name="skill" value="細剣" onclick="skillButtonPress('細剣')" checked />細剣
		</td>
		<td width="90">
			<input type="radio" name="skill" value="小型剣" onclick="skillButtonPress('小型剣')" />小型剣
		</td>
		<td width="90">
			<input type="radio" name="skill" value="長剣" onclick="skillButtonPress('長剣')" />長剣
		</td>
		<td width="90">
			<input type="radio" name="skill" value="大型剣" onclick="skillButtonPress('大型剣')" />大型剣
		</td>
	</tr>
	<tr>
		<td>
			<input type="radio" name="skill" value="曲刀" onclick="skillButtonPress('曲刀')" />曲刀<br>
		</td>
		<td>
			<input type="radio" name="skill" value="片手斧" onclick="skillButtonPress('片手斧')" />片手斧
		</td>
		<td>
			<input type="radio" name="skill" value="棍棒" onclick="skillButtonPress('棍棒')" />棍棒
		</td>
		<td>
			<input type="radio" name="skill" value="両手大剣" onclick="skillButtonPress('両手大剣')" />両手大剣
		</td>
	</tr>
	<tr>
		<td>
			<input type="radio" name="skill" value="刀" onclick="skillButtonPress('刀')" />刀
		</td>
		<td>
			<input type="radio" name="skill" value="両手斧" onclick="skillButtonPress('両手斧')" />両手斧<br>
		</td>
		<td>
			<input type="radio" name="skill" value="杖" onclick="skillButtonPress('杖')" />杖
		</td>
		<td>
			<input type="radio" name="skill" value="打槍" onclick="skillButtonPress('打槍')" />打槍
		</td>
	</tr>
	<tr>
		<td>
			<input type="radio" name="skill" value="衝槍" onclick="skillButtonPress('衝槍')" />衝槍
		</td>
		<td>
			<input type="radio" name="skill" value="弓" onclick="skillButtonPress('弓')" />弓
		</td>
		<td>
			<input type="radio" name="skill" value="体術" onclick="skillButtonPress('体術')" />体術<br>
		</td>
		<td>
		</td>
	</tr>
</table>
</form>

<div>
<form ID="wazaButtons">
		<input type="hidden" ID="waza0"  value="" onclick="wazaButtonPress(0)" />
		<input type="hidden" ID="waza1"  value="" onclick="wazaButtonPress(1)" />
		<input type="hidden" ID="waza2"  value="" onclick="wazaButtonPress(2)" /><br>
		<input type="hidden" ID="waza3"  value="" onclick="wazaButtonPress(3)" />
		<input type="hidden" ID="waza4"  value="" onclick="wazaButtonPress(4)" />
		<input type="hidden" ID="waza5"  value="" onclick="wazaButtonPress(5)" /><br>
		<input type="hidden" ID="waza6"  value="" onclick="wazaButtonPress(6)" />
		<input type="hidden" ID="waza7"  value="" onclick="wazaButtonPress(7)" />
		<input type="hidden" ID="waza8"  value="" onclick="wazaButtonPress(8)" /><br>
		<input type="hidden" ID="waza9"  value="" onclick="wazaButtonPress(9)" />
		<input type="hidden" ID="waza10" value="" onclick="wazaButtonPress(10)" />
		<input type="hidden" ID="waza11" value="" onclick="wazaButtonPress(11)" /><br>
		<input type="hidden" ID="waza12" value="" onclick="wazaButtonPress(12)" />
		<input type="hidden" ID="waza13" value="" onclick="wazaButtonPress(13)" />
		<input type="hidden" ID="waza14" value="" onclick="wazaButtonPress(14)" /><br>
		<input type="hidden" ID="waza15" value="" onclick="wazaButtonPress(15)" />
		<input type="hidden" ID="waza16" value="" onclick="wazaButtonPress(16)" />
		<input type="hidden" ID="waza17" value="" onclick="wazaButtonPress(17)" /><br>
		<input type="hidden" ID="waza18" value="" onclick="wazaButtonPress(18)" />
		<input type="hidden" ID="waza19" value="" onclick="wazaButtonPress(19)" />
		<input type="hidden" ID="waza20" value="" onclick="wazaButtonPress(20)" /><br>
		<input type="hidden" ID="waza21" value="" onclick="wazaButtonPress(21)" />
		<input type="hidden" ID="waza22" value="" onclick="wazaButtonPress(22)" />
		<input type="hidden" ID="waza23" value="" onclick="wazaButtonPress(23)" /><br>
</form>
</div>

<table border=0>
	<tr>
		<td width="210" bgcolor="#CCFFCC">
			<div ID="result1"></div>
		</td>
		<td width="30">
			<center>⇒</center>
		</td>
		<td width="210" bgcolor="#AAFFAA">
			<div ID="result2"></div>
		</td>
	</tr>
	<tr>
		<td bgcolor="#AAFFAA">
			<div ID="result3"></div>
		</td>
		<td>
			<center>⇒</center>
		</td>
		<td bgcolor="#CCFFCC">
			<div ID="result4"></div>
		</td>
	</tr>
</table>

{{< /scInner >}}  

***

（参考サイト）  
[**・ミンサガ - 閃き派生表｜ちょい研究所**](http://tyoikenkyu.web.fc2.com/rsaga_m/data/hirameki.html)  

***


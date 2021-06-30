---
title: "サガフロ プログラム習得方法検索ツール"
draft: false
weight: 2
page_js : [
  "//epic-sammet-9285ed.netlify.app/js/pgList.js",
  "//epic-sammet-9285ed.netlify.app/js/jquery-1.10.2.min.js",
  "//epic-sammet-9285ed.netlify.app/js/jquery-ui-1.10.3.custom.min.js",
  "//epic-sammet-9285ed.netlify.app/js/sfmain.js",
  "//epic-sammet-9285ed.netlify.app/js/mecList.js"
]
---

ツールを作りました。
ゲーム「サガフロンティア リマスター」で、メカに新しくプログラムを習得させたいときに何の敵と戦えばいいか検索できます。

<!--more-->

メカのタイプのボタンをクリックすると、習得可能なプログラムが一覧表示されます。  
そこからプログラムをひとつ選んでクリックすると、そのプログラムの習得方法が表示されます。

***

{{< scSample3 >}}
<table>
	<tr>
		<td><div id="mecTable"></div></td>
	</tr>
</table>
{{< /scSample3 >}}  

{{< scSample3 >}}
<ul>

	<li style="display: inline-block; vertical-align: top;">
		<ul id="pgTable"></ul>
	</li>
	
	<li style="display: inline-block; vertical-align: top;">
		<table border="1" id="infoTable">
			<tr>
				<td colspan="2" align="center" id="pgTitle" bgcolor="#DDDDDD">
				</td>
			</tr>
			<tr>
				<td align="center" align="center" width="30px" bgcolor="#EEEEEE">
					A<br>枠
				</td>
				<td>
					<ul class="infoList" id="infoListA">
					</ul>
				</td>
			</tr>
			<tr>
				<td align="center" align="center" width="30px" bgcolor="#EEEEEE">
					B<br>枠
				</td>
				<td>
					<ul class="infoList" id="infoListB">
					</ul>
				</td>
			</tr>
			<tr>
				<td align="center" align="center" width="30px" bgcolor="#EEEEEE">
					C<br>枠
				</td>
				<td>
					<ul class="infoList" id="infoListC">
					</ul>
				</td>
			</tr>
			<tr>
				<td align="center" align="center" width="30px" bgcolor="#EEEEEE">
					D<br>枠
				</td>
				<td>
					<ul class="infoList" id="infoListD">
					</ul>
				</td>
			</tr>
			<tr>
				<td align="center" align="center" width="30px" bgcolor="#EEEEEE">
					自<br>己
				</td>
				<td>
					<ul class="infoList" id="infoListSelf">
					</ul>
				</td>
			</tr>
		</table>
	</li>
	
</ul>
{{< /scSample3 >}}  

***

（参考サイト）  
[**・プログラム - サガフロンティア リマスター | 神攻略wiki**](https://kamikouryaku.com/saga_frontier/?%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0)  
[**・学習一覧/SF1 - サガ用語辞典 Wiki***](https://wikiwiki.jp/sagadic/%E5%AD%A6%E7%BF%92%E4%B8%80%E8%A6%A7/SF1)  

***


$(function(){

	var clickedType;
	
	// 初期処理
	initNav();

	// 初期処理
	function initNav (arg) {
	
		$('#infoTable').css("display", "none");
	
		// メカ名ボタン配置
		for(var i = 0; i < mecList.length; i++){
		
			var id = "mec" + mecList[i].type;
			var name = "タイプ" + mecList[i].type + "" + mecList[i].name;
			var styleStr = "height:45px; margin-bottom:10px; margin-right:10px;";
			$('#mecTable').append('<button type="button" style="' + styleStr + '" id="' + id + '">' + name + '</button>');
			$('#' + id).css("border", "1px dashed #EE5522");
			$('#' + id).on('click', function (event) {
				clickMec(this.id);
			});
			
		}

	}
	
	// メカ名ボタンがクリックされたときの処理
	function clickMec (arg) {
	
		// クリックされたメカのボタンを強調
		for (var i = 0; i < mecList.length; i++) {
			$('#mec' + mecList[i].type).css("border", "1px dashed #EE5522");
		}
		$('#' + arg).css("border", "4px double #EE5522");

		// クリックされたメカのタイプ
		clickedType = arg.replace("mec", "");
	
		// プログラム名と詳細情報をいったんクリア
		$('#pgTable').empty();
		$('#infoTable').css("display", "none");
		
		// 各プログラム
		for(var i = 0; i < pgAllList.length; i++){
		
			var id = "pg" + i;
			
			// 所有者なら箇条書きにappend
			if (pgAllList[i].getType.indexOf(clickedType) != -1) {
				$('#pgTable').append('<li class="pgList" id="' + id + '">' + pgAllList[i].name + '</li>');
				$('#' + id).on('click', function (event) {
					clickPg(this);
				});

			}
			
		}
		$('#pgTable').css("line-height", "1.80").css("margin", "10px 30px 10px 0px");
		
	}
	
	// プログラム名がクリックされたときの処理
	function clickPg (arg) {

		// クリックされたプログラム名を強調
		$(".pgList").css("color", "");
		$(arg).css("color", "#EE5522");

		// 入手方法の箇条書きをいったんクリア
		$('#infoTable').css("display", "block");
		$("#infoListA").empty();
		$("#infoListB").empty();
		$("#infoListC").empty();
		$("#infoListD").empty();
		$("#infoListSelf").empty();
		$('#infoListA').css("display", "block");
		$('#infoListB').css("display", "block");
		$('#infoListC').css("display", "block");
		$('#infoListD').css("display", "block");
		$('#infoListSelf').css("display", "block");
		$("#infoListA").css("font-size", "80%").css("padding", "10px 30px 0px 20px");
		$("#infoListB").css("font-size", "80%").css("padding", "10px 30px 0px 20px");
		$("#infoListC").css("font-size", "80%").css("padding", "10px 30px 0px 20px");
		$("#infoListD").css("font-size", "80%").css("padding", "10px 30px 0px 20px");
		$("#infoListSelf").css("font-size", "80%").css("padding", "10px 30px 0px 20px");

		// クリックされたプログラム名
		var pgName = arg.innerText;

		// タイトル
		$('#pgTitle').css("line-height", "2.20");
		$('#pgTitle').empty();
		$('#pgTitle').append(pgName);

		// ドロップする敵を検索
		for(var i = 0; i < pgDropList.length; i++){
			if (pgDropList[i].dropA == pgName) {
				$("#infoListA").append('<li>' + pgDropList[i].enemy + '</li>');
			}
			if (pgDropList[i].dropB == pgName) {
				$("#infoListB").append('<li>' + pgDropList[i].enemy + '</li>');
			}
			if (pgDropList[i].dropC == pgName) {
				$("#infoListC").append('<li style="padding-left: 0;">' + pgDropList[i].enemy + '</li>');
			}
			if (pgDropList[i].dropD == pgName) {
				$("#infoListD").append('<li>' + pgDropList[i].enemy + '</li>');
			}
		}

		// 自己開発できるか
		for(var i = 0; i < pgSelfList.length; i++){
			if (pgSelfList[i].name == pgName && pgSelfList[i].getType.indexOf(clickedType) != -1) {
				$("#infoListSelf").append('<li>' + 'タイプ' + clickedType + 'は自己開発可能' + '</li>');
			}
		}
		
	}
	
});



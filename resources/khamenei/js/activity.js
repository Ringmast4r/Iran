$('document').ready(function(){
	
	function makeid(){
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for( var i=0; i < 10; i++ ){
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}	

	var _modified_time = 0;
	function loadStagePlayer(){
		var _p_sto = setTimeout(function(){
			var d = new Date();
			var n = d.getTime(); 
			
			$.getJSON('//formx.khamenei.link/live-stream-web/get_datas_stream?r='+makeid()+n,function(_res){
				console.log(_res);
				var _code = parseInt(_res.code);
				if(_code===200){
					if(parseFloat(_res.result.modified_time)!==_modified_time){
						var _active = _res.result.active;
						if(_active===true){
							_modified_time= _res.result.modified_time;

							var _channel = _res.result.channel;
							var _location = _res.result.location;
							var _description = _res.result.description;
							
							var _iframe = _res.result.iframe;

							/*
							if($('#features .divTitr1 iframe').length===0){
								$('#features .divTitr1').removeAttr('style');//583

								var _html = '<iframe frameborder="0" scrolling="no" width="583" height="244" style="width:100%" src="//farsi.khamenei.ir/player-live/index.html?v='+_modified_time+'" allowtransparency="0"></iframe>';
								if(_res.result.channel===undefined){
									_html = _iframe;
								}
								$('#features .divTitr1').html(_html);
							}
							if(_res.result.channel!==undefined){
								var _location_ifr = $('#features .divTitr1 iframe').contents().find('body .location');
								var _description_ifr = $('#features .divTitr1 iframe').contents().find('body .title');
								var _video_src_ifr = $('#features .divTitr1 iframe').contents().find('body #player-wrapper');
								_video_src_ifr.attr('data-src',_channel);
								_location_ifr.html(_location);
								_description_ifr.html(_description);
							}else{
								$('.divTitr1 .h_iframe-aparat_embed_frame>span').css('padding-top','42%');
								$('#features iframe').css('position','absolute');
								if($('.divTitr1 .h_iframe-aparat_embed_frame .location-alt').length===0){
									$('<div>').addClass('location-alt').css({'position':'absolute','padding':'0 8px','font':'bold 10px/32px DroidNaskh','height':'32px','line-height':'32px','color':'#fff','background':'rgba(0,0,0,1)','left':'14%','top':'5px','border-radius':'4px','z-index':99999999}).html(_location).appendTo($('.divTitr1 .h_iframe-aparat_embed_frame'))
								}
								$('.divTitr1 .h_iframe-aparat_embed_frame .location-alt').html(_location);
								//$('#features .divTitr1 iframe').contents().find('body .view_cnt_is_close_box').css({'display':'none'});
							}
							*/
							if($('#features .divTitr2 iframe').length===0){
								$('#features .divTitr2').addClass('has-player');
								$('#features .divTitr2').removeAttr('style');//583

								var _html = '<iframe frameborder="0" scrolling="no" width="283" height="244" style="width:100%" src="//farsi.khamenei.ir/player-live/index.html?v='+_modified_time+'" allowtransparency="0"></iframe>';
								if(_res.result.channel===undefined){
									_html = _iframe;
								}
								$('#features .divTitr2').html(_html);
							}
							if(_res.result.channel!==undefined){
								var _location_ifr = $('#features .divTitr2 iframe').contents().find('body .location');
								var _description_ifr = $('#features .divTitr2 iframe').contents().find('body .title');
								var _video_src_ifr = $('#features .divTitr2 iframe').contents().find('body #player-wrapper');
								_video_src_ifr.attr('data-src',_channel);
								_location_ifr.html(_location);
								_description_ifr.html(_description);
							}else{
								$('.divTitr2 .h_iframe-aparat_embed_frame>span').css('padding-top','86.2%');
								$('#features iframe').css('position','absolute');
								if($('.divTitr2 .h_iframe-aparat_embed_frame .location-alt').length===0){
									$('<div>').addClass('location-alt').css({'position':'absolute','padding':'0 8px','font':'bold 10px/32px DroidNaskh','height':'32px','line-height':'32px','color':'#fff','background':'rgba(0,0,0,1)','left':'14%','top':'5px','border-radius':'4px','z-index':99999999}).html(_location).appendTo($('.divTitr2 .h_iframe-aparat_embed_frame'))
								}
								$('.divTitr2 .h_iframe-aparat_embed_frame .location-alt').html(_location);
								//$('#features .divTitr1 iframe').contents().find('body .view_cnt_is_close_box').css({'display':'none'});
							}



							//if($.trim(_location_ifr.html()) !== $.trim(_location)){
							//	
							//}
							//if($.trim(_description_ifr.html()) !== $.trim(_description)){
							//	
							//}
						}else{
							if($('#features .divTitr1 iframe').length>0){
								location.reload();
							}
						}
					}
				}
			//
			//	clearTimeout(_p_sto);
			//	var _status = _res.status;
			//
			//	
			//	if(_code===200){
			//		var _location_title = _res.location;
			//		var _title = _res.title;
			//		
			//		if($('#features .divTitr1 iframe').length===0){
			//			$('#features .divTitr1').removeAttr('style');//583
			//			var _html = '<iframe frameborder="0" scrolling="no" width="285" height="244" style="width:100%" src="//farsi.khamenei.ir/player-live/index.html?v=35" allowtransparency="0"></iframe>';
			//			$('#features .divTitr1').html(_html);
			//		}
			//		var _location_ifr = $('#features .divTitr1 iframe').contents().find('body .location');
			//		var _title_ifr = $('#features .divTitr1 iframe').contents().find('body .title');
			//		
			//		if($.trim(_location_ifr.html()) !== $.trim(_location_title)){
			//			_location_ifr.html(_location_title);
			//		}
			//		if($.trim(_title_ifr.html()) !== $.trim(_title)){
			//			_title_ifr.html(_title);
			//		}
			//		/*
			//		if($('#features .divTitr1 iframe').length===0){
			//			$('#features .divTitr1').removeAttr('style');
			//			var _html = '<iframe frameborder="0" scrolling="no" width="285" height="244" src="//farsi.khamenei.ir/player-live/index.html"  allowtransparency="0"></iframe>';
			//			$('#features .divTitr1').html(_html);
			//		}
			//		*/
			//	}else{
			//		if($('#features .divTitr1 iframe').length>0){
			//			location.reload();
			//		}
			//		/*
			//		if($('#features .divTitr1 iframe').length>0){
			//			location.reload();
			//		}
			//		*/
			//	}
				loadStagePlayer();
			});
		},3000);
	}
	if($('#features .divTitr2').length>0){
		loadStagePlayer();
	}
});
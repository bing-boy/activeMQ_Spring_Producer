a  //$.parser.auto = false; //取消所有渲染，用parser.parse()进行手动渲染，放在 $(function (){});的外面

$(function(){
	//$('#box').dialog();
	
	//$.parser.parse(); //不传渲染所有easyui组件
	
	//$.parser.parse('#box');//使用指定UI解析，必须设置父类容器才可以解析到，所以这里在id为box的外层套一层父层div
	//$.parser.parse('#boxfather');
	
	//拖放组件
	//$.fn.draggable.defaults.revert = true;  //$.fn.draggable.defaults 重写默认值
	
	$('#dragablebox').draggable({
	//	revert:false, 	//拖动释放鼠标后自动回原位置（move/boolean）
	//	cursor:'text', 	//拖动时指针的样式（move/String）
	//	handle:'#pox',	//开始拖动的句柄，即鼠标放到句柄上才能拖动（null/selector）
	//	disabled:false,	//设置为true停止拖动（false/boolean）
	//	edge:50,		//可以在其中拖动的容器的宽度,即距离容器外边框的距离（0/number）
	//	axis:'v',		//垂直拖动 'v', 水平拖动 'h'（null/String）
		proxy:'clone',	//使用 'clone' 时，克隆一个替代元素拖动，如果指定一个函数，则它必须返回jQuery对象（null/String、function）下面有一个指定函数的demo
	//	deltaX:50,		//被拖动的元素相对于当前光标位置 x，即水平偏移（null/number）
	//	deltaY:50,		//被拖动的元素相对于当前光标位置 y，即竖直偏移（null/number）
		delay:1000,		//定义延迟多少毫秒后执行（100/number）
		/*proxy:function(source){ //传递一个参数source，其就是上面的'#draggablebox'这个div本身
			var p = $('<div style="width:400px;height:200px;border:5px dashed;">')
			p.appendTo('body');
			return p; //不返回这个p拖动一次，就追加一个虚框,理解和 proxy:clone 差不多,只是clone是复制一个一样的，而这里是自定义了应该div
		}*/
		/*proxy:function(source){ //传递一个参数source，其就是上面的 '#draggablebox' 这个div本身(Return the drag proxy if the proxy property is setted.)
			var p = $('<div style="width:400px;height:200px;border:1px dashed;">')
			p.html($(source).html()).appendTo('body'); //将source(这里是id为draggablebox的div)的内容写到p里然后追加到body中
			return p; 
		}*/
		
		//事件
		/*onBeforeDrag:function(e){
			alert("拖动前触发");
		}*/
		/*onBeforeDrag:function(e){
			return false;	//return false之后就不能拖了,实际业务中进行一些判断后再返回true或者false来允许拖否
		}*/
		/*onStartDrag:function(e){
			//alert("拖动开始触发");	//return false之后就不能拖了,实际业务中进行一些判断后再返回true或者false来允许拖否
			//console.log($('#draggablebox').draggable('proxy'));	//如果代理元素被设置，则返回该拖动代理元素自身，所以此方法要到拖动开始这里来执行，否则没拖动该元素就没有生效
		}*/
		/*onDrag:function(e){
			alert("拖动过程中触发");	//return false之后就不能拖了,实际业务中进行一些判断后再返回true或者false来允许拖否
		}*/
		/*onStopDrag:function(e){
			alert("拖动过结束后触发");	//return false之后就不能拖了,实际业务中进行一些判断后再返回true或者false来允许拖否
		}*/	
	});
	
	//方法
	//$('#draggablebox').draggable('disable');	//禁止拖动
	//$('#draggablebox').draggable('enable');	/允许拖动
	//console.log($('#draggablebox').draggable('options'));	//返回属性对象
	//console.log($('#draggablebox').draggable('proxy')); //如果代理元素被设置，则返回该拖动代理元素自身，所以此方法要到拖动开始这里来执行，否则没拖动该元素就没有生效
	
	
	//放置组件
	//$.fn.droppable.defaults.disabled = true;
	
	$('#droppabledd').droppable({
		//accept:'#droppablebox',
		//disabled:false,
		//事件
		/*onDragEnter:function(event, source){ //onDragEnter在被拖拽元素到放置区内的时候触发,source就是被拖进来的元素（只触发一次，优先于Over触发）
			console.log(source);
			$(this).css('background','blue'); //如果上述droppabledd放置组件不接受droppablebox拖拽组件，那么这些事件是不会产生任何效果的
		},*/
		/*onDragOver:function(event, source){	//onDragEnter 在被拖拽元素经过放置区内的时候触发,source就是被拖进来的元素（经过时连续触发）
			//console.log(source);
			$(this).css('background','red'); //如果上述droppabledd放置组件不接受droppablebox拖拽组件，那么这些事件是不会产生任何效果的
		},*/
		/*onDragLeave:function(event, source){	//onDragEnter 在被拖拽元素离开放置区内的时候触发,source就是被拖进来的元素
			//console.log(source);
			$(this).css('background','white'); //如果上述droppabledd放置组件不接受droppablebox拖拽组件，那么这些事件是不会产生任何效果的
		},*/
		/*onDrop:function(event, source){	//onDragEnter 在被拖拽元素到放置区后松开鼠标的时候触发,source就是被拖进来的元素,如果有Over事件，在Over事件之后执行
			//console.log(source);
			$(this).css('background','yellow'); //如果上述droppabledd放置组件不接受droppablebox拖拽组件，那么这些事件是不会产生任何效果的
		}*/
	});
	
	//方法
	//console.log($('#droppabledd').droppable('options')); //返回属性对象
	
	
	//resizable 调整大小
	//$.fn.resizable.defaults.disabled = true;
	
	$('#resizablebox').resizable({
		//disabled:true,	//默认false,设置成true则禁用调整大小(boolean)
		//handles:"e,s,se",	//声明调整的方位，n,e,s,w,ne,se,sw,nw,all(String)
		minWidth:200,		//默认10，调整大小时最小宽度（number）
		minHeight:200,		//默认10，调整大小时最宽高度
		maxWidth:500,		//默认10000，调整大小时最大宽度
		maxHeight:500,		//默认10000，调整大小时最大高度
		edge:50,				//默认5，边框边缘触发大小（number）
		
		//事件
		onStartResize:function(e){
			console.log("开始调整时触发");
		},
		onResize:function(e){  //当返回false时，不会实际改变dom元素的大小，测试的结果：在调整大小的过程中不变，鼠标一松开，大小就变了
			console.log("调整期间的时候触发");
			return false;
		},
		onStopResize:function(e){
			console.log("停止调整时触发");
		},
	});
	
	//方法
	//console.log($('#resizablebox').resizable('options'));
	//$('#resizablebox').resizable('disable');
	//$('#resizablebox').resizable('enable');
	
	
	
	//tooltip 提示工具
	$.fn.tooltip.defaults.position = 'bottom';
	
	$('#tooltipbox').tooltip({
		//Properties
		content:'<strong>This is the tooltip message.</strong>', //The tooltip content. It can be a function that returns the content directly.(string,function/null)
		//position:'right', //The tooltip position. Possible values are: 'left','right','top','bottom'.(string/bottom)
		trackMouse:true, //True to make tooltip move along with the mouse.（boolean/false）
		deltaX:50,//The horizontal distance from the tooltip position.(number/0)
		deltaY:0, //The vertical distance from the tooltip position.(number/0)
		showEvent:'mouseenter',//The event that cause the tooltip to appear.(string/mouseenter)
		hideEvent:'mouseleave', //The event that cause the tooltip to disappear.(string/mouseleave)
		showDelay:100, //The time delay to show tooltip.(number/200)
		hideDelay:300, //The time delay to hide tooltip.(number/100)
		
		//Events
		onShow:function(e){  //Fires when show tooltip.(Parameters:e)
			console.log(1);
			console.log("tip: " + $('#tooltipbox').tooltip('tip')); //	Return the tip object.
			console.log("arrow: " + $('#tooltipbox').tooltip('arrow')); //Return the arrow object.
			$('.tooltip-bottom').css('left',500);  //将提示框距离改为500，目的是搭配 Event onHide 中 repositon 使用
		},
		onHide:function(e){  //Fires when hide tooltip.(Parameters:e)
			console.log(2);
			$('.tooltip-content').tooltip('reposition');  //	Reset the tooltip position.
		},
		onUpdate:function(content){  	//Fires when tooltip content is updated.(Parameters:content) 提示框内容更新的时候触发，默认只触发一次（一开始为空，移动上去变为有内容），想多次改变可以结合update 方法使用
			console.log(content);
		},
		onPosition:function(left,top){  //Fires when tooltip position is changed.(Parameters:left,top) 
			console.log("left:" + left + ",top:" + top);
		},
		onDestroy:function(e){  //Fires when tooltip is destroyed.(Parameters:none) 
			alert("工具提示框被销毁了");
		},
	});
	
	//Method
	$('#tooltipbox').click(function(){
		//$(this).tooltip('update',"内容改变")
		$(this).tooltip('destroy');
	});
	
	//console.log($('#tooltipbox').tooltip('options')); //Return the options property.(注意，有这个options方法不注释的话，下面的linkbutton属性就不生效)
	
	$('#tooltipbox').tooltip('show');	//Display the tooltip.(Parameter/e) 即一开始就展示提示框
	
	$('#tooltipbox').tooltip('hide');	//hide the tooltip.(Parameter/e) 即一开始不展示提示框
	
	
	
	
	
	//linkbutton
	//$.fn.linkbutton.defaults.iconCls = 'icon-add';
	
	$('#linkbuttonbox').linkbutton({
		id:'linkbuttonbox1',  //更改id值
		//width:100,
		height:40,
		disabled:false,  //True to disable the button
		toggle:true,  //True to enable the user to switch its state to selected or unselected. Available since version 1.3.3.
		selected:false,  //Defines if the button's state is selected. Available since version 1.3.3.
		group:'bing',  //The group name that indicates what buttons belong to. Available since version 1.3.3.  同一个组的button，当一个被选中时，其它的就变为未选中状态，有点类似于单选按钮，此时toggle选项会失效
		plain:false,//True to show a plain effect.(简洁效果，没有按钮效果，鼠标移动上去又有了)
		text:'按钮文字',  //The button text.
		//iconCls:'icon-add',  //A CSS class to display a 16x16 icon on left.即显示在按钮文字左侧的图片（16*16）的CSS类ID,默认null
		//iconAlign:'right',  //Position of the button icon. Possible values are: 'left','right','top','bottom'. Available since version 1.3.2.即按钮图片的位置
		size:'large',  //The button size. Possible values are: 'small','large'. Available since version 1.3.6.(String/small)
		
		//EVENT
		onClick:function(e){
			alert(JSON.stringify($('#linkbuttonbox1').linkbutton('select')));
		}
	});
	
	//Method
	//console.log($('#linkbuttonbox1').linkbutton('options'));
	
	$('#linkbuttonbox1').linkbutton('disable');
	
	$('#linkbuttonbox1').linkbutton('enable');
	
	$('#linkbuttonbox1').linkbutton('select');
	
	//$('#linkbuttonbox1').linkbutton('unselect');
	
	//linkbutton
	$('#linkbuttonbox2').linkbutton({
		group:'bing', 
		selected:true,
		toggle:true,
		iconCls:'icon-mini-add',
	});
	
	
	
	
	//progerssbar
	$('#progerssbarbox').progressbar({
		value:60,  //The percentage value.(number/0)
		//width:'200',  //Set the progressbar width.(String/auto)
		height:50,  //The height of the component. Available since version 1.3.2.(number/22)
		text:'进度：{value}%',  //The text template to be displayed on component.(Stirng/{value}%)
		
		//Events
		onChange:function(newValue,oldValue){  //	Fires when the value is changed.(Parameters:newValue,oldValue)
			console.log("newValue: " + newValue + " ,oldValue: " + oldValue);
		},
	});
	
	//Method
	//console.log($('#progerssbarbox').progressbar('options'));  //Return the options object.(Parameters:none)
	
	$('#progerssbarbox').progressbar('resize','500');  //Resize the component.(Parameters:width)
	
	//console.log($('#progerssbarbox').progressbar('getValue'));  //Return the current progress value.(Parameters:none)  //这里不注释，下面的panel组件就没有效果
	
	function setvalue(){
		var randomNum = Math.ceil(Math.random() * 100);
		$('#progerssbarbox').progressbar('setValue',randomNum);  ////Set a new progress value.(Parameters:value)
	}
	//setInterval(setvalue,1000);
	
	
	
	
	
	//panel
	$('#panelbox').panel({
		//id:'panelbox1',
		width:500,  //Set the panel width.(number/auto)
		height:300,
		title:'panel',
		iconCls:'icon-search',
		left:30,  //Set the panel left position.(number/null) 即面板距离左边的位置 //此处这两个属性设置进去了但不生效，因为position是相对的，要改成绝对的，给panel对象添加一个属性
		top:30,
		cls:'a',  //Add a CSS class to the panel.(Stirng/null)
		headerCls:'b',  //Add a CSS class to the panel header.(Stirng/null)
		bodyCls:'c',  //Add a CSS class to the panel body.(Stirng/null)
		style:{  //Add a custom specification style to the panel.(Object/{})
			'min-height':'800px',
		},
		fit:false,  //When true to set the panel size fit it's parent container. The example below shows a panel which can be auto resized to max inner dimensions of its parent container(boolean/false)
		border:true,  //Defines if to show panel border.(boolean/true)
		doSize:true,  //If set to true,the panel will be resize and do layout when created.(boolean/true)
		noheader:false,  //If set to true, the panel header will not be created.(boolean/false)
		content:'hello easyui',  //he panel body content.(Stirng/null)
		halign:'top',  //The panel header alignment. Possible values are: 'top','left','right'. Available since version 1.5.2.(String/top)
		titleDirection:'up',  //The header title direction. Possible values are: 'up','down'. This property is valid only when the 'halign' property is set to 'left' or 'right'. Available since version 1.5.2.(Stirng/down)
		collapsible:true,  //Defines if to show collapsible button.(boolean/false) 展开首期按钮
		minimizable:true,  //Defines if to show minimizable button.(boolean/false) 最小化按钮
		maximizable:true,  //Defines if to show maximizable button.(boolean/false) 最大化按钮
		closable:true,  //Defines if to show closable button.(boolean/false) 关不窗口按钮
		
		/*tools:[  //Custom tools, possible values: 1) an array, each element contains iconCls and handler properties.(每个数组元素都包含iconCls和handler属性) 
												//2) a selector that indicating the tools(指向工具菜单的选择器,默认[])(array,selector/[])
				{
					iconCls:'icon-cut',
					handler:function(){alert('cut')}
				},
				{
					iconCls:'icon-help',
					handler:function(){alert('help')}
				}
				
			],*/
		tools:'#tt',
		//header:'',  //The panel header. Available since version 1.4.2.(selector/null)
		//footer:'',  //The panel footer. Available since version 1.4.1.((selector/null))
		openAnimation:'show',  //The opening animation. Available since version 1.4.1. Available values are: 'slide','fade','show'.(String) css3的一个动画样式
		closeAnimation:'',  //The closing animation. Available since version 1.4.1. Available values are: 'slide','fade','hide'.
		openDuration:100,  //The opening duration. Available since version 1.4.1. (number/400)
		closeDuration:1000,  //The closing duration. Available since version 1.4.1.(number/400)
		href:'http://localhost:8080/ssm/hello/hello.action',  //A URL to load remote data and then display in the panel. Notice that the content will not be loaded until the panel is open and expand. This is useful to create a lazy loading panel:(String/null)
		cache:true,  //True to cache the panel content that loaded from href.(boolean/true)
		loadingMessage:'加载中，请稍等',  //loading remote data show a message in the panel.(String/Loading...)
		extractor:function(data){  //Defines how to extract the content from ajax response, return extracted data.(function)
			var pattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
			var matches = pattern.exec(data);
			if (matches){
				return matches[1];	// only extract body content
			} else {
				return data;
			}
		},
		method:'get',  //The http method to load content page. Available since version 1.3.6.(Stirng/get)
		//queryParams:'',  //The additional parameters that will be sent when loading a content page. Available since version 1.3.6.(object/{})
		//loader:'',  //Defines how to load content page from remote server. Available since version 1.3.6. This function takes following parameters: param: the parameter object to pass to remote server. success(data): the callback function that will be called when retrieve data successfully. error(): the callback function that will be called when failed to retrieve data.(function)
		
		//Events
		/*onBeforeLoad:function(){  //	Fires before loading a content page, return false to ignore this action. Available since version 1.3.6.(Parameters/param)
			alert("远程加载前触发");
			return false;  //取消远程加载
		},
		onLoad:function(){  //Fires when remote data is loaded.(Parameters/none)
			alert("远程加载之后触发");
		},
		onLoadError:function(){  //Fires when some errors occur to load content page. Available since version 1.3.6.(Parameters/none)
			alert();
		},
		onBeforeOpen:function(){  //Fires before panel is opened, return false to stop the open.(Parameters/none)
			alert("打开之前触发");
			return false;
		},
		onOpen:function(){
			alert("打开之后触发");
		},
		onBeforeClose:function(){  //Fires before panel is closed, return false to cancel the close. The panel declared below cannot be closed.(Parameters/none)
			alert("关闭之前触发");
		},
		onClose:function(){
			alert("关闭之后触发");
		},
		onBeforeDestroy:function(){  //	Fires before panel is destroyed, return false to cancel the destroy.(Parameters/none)
			alert("销毁之前触发");
		},
		onDestroy:function(){
			alert("销毁之后触发");
		},
		onBeforeCollapse:function(){  //Fires before panel is collapsed, return false to stop the collapse.(Parameters/none) 
			alert("折叠之前触发");
		},
		onCollapse:function(){
			alert("折叠之后触发");
		},
		onBeforeExpand:function(){  //Fires before panel is expanded, return false to stop the expand.(Parameters/none) 
			alert("展开之前触发");
		},
		onExpand:function(){
			alert("展开之后触发");
		},*/
		/*onResize:function(width,height){  //Fires after panel is resized. width: the new outer width; height: the new outer height(Parameters/width, height)
			alert("面板大小改变时触发:width:" + width + ", height:"+ height);
		},
		onMove:function(left,top){  //	Fires after panel is moved. left: the new left postion, top: the new top position
			alert("窗口移动时时触发,left:" + left + ", top:" + top);
		},
		onMaximize:function(){  //Fires after the window has been maximized.(Parameters/none) 
			alert("窗口最大化时触发");
		},
		onMinimize:function(){  //	Fires after the window has been minimized.(Parameters/none) 
			alert("窗口最小化时触发");
		},
		onRestore:function(){  //Fires after the window has been restored to its original size.(Parameters/none) 
			alert("窗口还原后触发");
		},*/
	});
	
	//Method
	//$('#panelbox').panel('panel').css('position','absolute');  //Return the outer panel object.(array,selector/[])
	
	//$('#panelbox').panel('destroy');
	/*
	$(document).click(  ///Set panel size and do layout. The options object contains following properties: width: the new panel width ,height: the new panel height ,left: the new panel left position ,top: the new panel top position(Parameters/Options)
		function(){
		//	$('#panelbox').panel('resize',{
		//		'width':800,
		//		'height':500,
		//	});
			$('#panelbox').panel('move',{
				'left':100,
				'top':50,
			});
		}
	);
	*/
	//console.log($('#panelbox').panel('options'));
	
	//console.log("header:" + $('#panelbox').panel('header'));  //Return the panel header object.(Parameters/none) 
	
	//console.log("footer:" + $('#panelbox').panel('footer'));  //Return the panel footer object. Available since version 1.4.1.(Parameters/none) 
	
	//console.log("body:" + $('#panelbox').panel('body'));  //Return the panel body object.(Parameters/none) 
	
	$('#panelbox').panel('setTitle','settitletest');  //	Set the title text of header.(Parameters/tetle) 
	
	$('#panelbox').panel('open',true);  //When forceOpen parameter set to true, the panel is opened bypass the onBeforeOpen callback.(Parameters/forceOpen)  forceOpen参数设置为true时，将跳过onBeforeOpen回调函数
	
	//$('#panelbox').panel('close',true);  //When forceClose parameter set to true, the panel is closed bypass the onBeforeClose callback.(Parameters/forceOpen)
	
	//$('#panelbox').panel('destroy',true);  //When forceDestroy parameter set to true, the panel is destroyed bypass the onBeforeDestroy callback.(Parameters/forceOpen)
	
	//$('#panelbox').panel('clear');  //Clear the panel content. Available since version 1.4.(Parameters/none) 
	
	//$('#panelbox').panel('refresh','http://localhost:8080/ssm/easyui/listUserTest.action');  //Refresh the panel to load remote data. If the 'href' parameter is assigned, it will override the old 'href' property.(Parameters/href)
	
	$('#panelbox').panel('doLayout');  //Set the sizes of child components within the panel. Available since version 1.4.(Parameters/none) 
	
	//$('#panelbox').panel('maximize');  //Fits the panel winthin its container.(Parameters/none)
	
	//$('#panelbox').panel('minimize');  //Minimizing the panel.(Parameters/none)
	
	$('#panelbox').panel('restore');  //Restores the maximized panel back to its original size and position.(Parameters/none)
	
	$('#panelbox').panel('collapse',true);  //Collapses the panel body. The 'animate' parameter value indicates if to use animation effect.(Parameters/animate) 动画效果（逐渐由一种状态变为另一种状态）
	
	//$('#panelbox').panel('extend');  //	Expand the panel body. The 'animate' parameter value indicates if to use animation effect.(Parameters/animate)
	

	

	
	
	
	
	//tabs
	$('#tabsbox').tabs({
		closable:true,  //When set to true, the tab panel will show a closable button which can be clicked to close the tab panel.
		width:500,  //The width of tabs container.(number/auto)
		height:300,
		plain:false,  //True to render the tab strip without a background container image.(boolean/false) 设置为true，将不再显示控制面板背景
		fit:false,  //True to set the size of tabs container to fit it's parent container.(boolean/false)
		border:true,  //True to show tabs container border.(boolean/true)
		scrollIncrement:200,  //The number of pixels to scroll each time a tab scroll button is pressed.(number/100) 选项卡滚动条每次滚动的像素值
		scrollDuration:300,  //The number of milliseconds that each scroll animation should last.(number/400) 每次滚动动画持续时间 单位：毫秒
		/*tools:[  //The toolbar placed on left or right side of header. Possible values: 1. An array indicate the tools, each tool options is same as linkbutton. 2. A selector point to the <div> that contains the tools.
			{
				iconCls:'icon-add',
				handler:function(){
					alert('add')
				}
			},
			{
				iconCls:'icon-save',
				handler:function(){
					alert('save')
				}
			}
		],*/
		tools:'#tt',
		toolPosition:'right',  //The toolbar position. Possible values: 'left','right','top','bottom'. Available since version 1.3.2.(String/right)
		tabPosition:'top',  //The tab position. Possible values: 'top','bottom','left','right'. Available since version 1.3.2.(String/top)
		headerWidth:85,  //The tab header width, it is valid only when tabPosition is set to 'left' or 'right'. Available since version 1.3.2.(nubmer/150) //选项卡标题宽度，在tabPosition属性设置为left或者right的时候才有效
		tabWidth:110,  //The width of tab strip. Available since version 1.3.4.(number/auto) 标签条的宽度，默认auto
		tabHeight:27,  //The height of tab strip. Available since version 1.3.4.(number/27)
		selected:0,  //The initialized selected tab index. Available since version 1.3.5.(number/0)
		showHeader:true,  //True to display tabs header. Available since version 1.3.5.(boolean/true)
		justified:false,  //True to make tab strips equal widths of their parent container. Available since version 1.4.2.(boolean/false)
		narrow:true,  //True to remove the space between tab strips. Available since version 1.4.2.(boolean/false)
		pill:true,  //True to make tab strips look like pills. Available since version 1.4.2.(boolean/false)
		
		//公共属性及附加属性参考官网最下边
		//http://www.jeasyui.com/documentation/index.php#
		href:'http://localhost:8080/ssm/easyui/listUserTest.action',
		
		//Event
		onLoad:function(panel){ //Fires when an ajax tab panel finish loading remote data.(Parameters/panel) 在ajax选项卡面板远程加载完数据时触发
		
		},
		/*onSelect:function(title,index){  //Fires when user select a tab panel.
			alert(title + " | " + index);
		},
		onUnselect:function(title,index){  //Fires when user unselect a tab panel. Available since version 1.3.5.
			alert(title + " | " + index);
		},*/
		onBeforeClose:function(title,index){  //Fires before the tab panel is closed, return false to cancel this close action. The example below shows how to show confirm dialog before closing tab panel.
			return confirm('Are you sure you want to close ' + title);
		},
		/*
		$('#tt').tabs({
		  onBeforeClose: function(title){
			return confirm('Are you sure you want to close ' + title);
		  }
		});
		// using the async confirm dialog
		$('#tt').tabs({
		  onBeforeClose: function(title,index){
			var target = this;
			$.messager.confirm('Confirm','Are you sure you want to close '+title,function(r){
				if (r){
					var opts = $(target).tabs('options');
					var bc = opts.onBeforeClose;
					opts.onBeforeClose = function(){};  // allowed to close now
					$(target).tabs('close',index);
					opts.onBeforeClose = bc;  // restore the event function
				}
			});
			return false;	// prevent from closing
		  }
		});
		*/
		/*
		onClose:function(title,index){   //Fires when user close a tab panel.
			
		},
		onAdd:function(title,index){  //Fires when a new tab panel is added.
			
		},
		onUpdate:function(title,index){  //Fires when a tab panel is updated.
			
		},
		onContextMenu:function(title,index){  //Fires when a tab panel is right clicked. 右键点击一个选项卡面板时触发
			
		},*/
	});
	
	//Method
	//console.log($('#tabsbox').tabs('options'));
	
	//console.log("tabs: " + $('#tabsbox').tabs('tabs'));  //	Return all tab panels.(Parameter/none)
	/*
	$(document).click(function(){
		$('#tabsbox').tabs().css('display','block');  //Resize the tabs container and do layout.
		$('#tabsbox').tabs('resize');
	});
	*/
	$('#tabsbox').tabs('add',{  //Add a new tab panel, the options parameter is a config object, see tab panel properties for more details. When adding a new tab panel, it will become selected. To add a unselected tab panel, remember to set 'selected' property to false.
		id:'tabnew',
		title: 'new tab',
		selected: false,
		index:3,
		closable:true,
		iconCls:'icon-add',
	});
	
	//$('#tabsbox').tabs('close',2);  //Close a tab panel, the 'which' parameter can be the title or index of tab panel to be closed.(Parameter/which) which参数可以是title或者index
	
	//console.log("getTab: " + $('#tabsbox').tabs('getTab',2));  //Get the specified tab panel, the 'which' parameter can be the title or index of tab panel.(Parameter/which)
	
	//console.log("getTabIndex: " + $('#tabsbox').tabs('getTabIndex','#tabnew'));  //Get the specified tab panel index(Parameter/tab) 获取指定选项卡面板的索引

	//console.log("getSelected: " + $('#tabsbox').tabs('getSelected'));  //Get the specified tab panel index(Parameter/tab) Get the selected tab panel. The example below shows how to get the index of selected tab panel.
	
	$('#tabsbox').tabs('select',2);  //Select a tab panel, the 'which' parameter can be the title or index of tab panel.(Parameter/which)
	
	//$('#tabsbox').tabs('unselect',2);  //Select a tab panel, the 'which' parameter can be the title or index of tab panel. Available since version 1.3.5.(Parameter/which)
	
	$('#tabsbox').tabs('showHeader');  //Show the tabs header. Available since version 1.3.5.
	
	//$('#tabsbox').tabs('hideHeader');  //Hide the tabs header. Available since version 1.3.5.
	
	$('#tabsbox').tabs('showTool');  //Show the tabs tools. Available since version 1.4.3.
	
	//$('#tabsbox').tabs('hideTool');  //Hide the tabs tools. Available since version 1.4.3.
	
	//console.log("exists: " + $('#tabsbox').tabs('exists',3));  //Indicate if the special panel is exists, the 'which' parameter can be the title or index of tab panel.(Parameter/which)
	/*
	$('#tabsbox').tabs('update',{  //Update the specified tab panel, the param parameter contains two properties: tab: the tab panel to be updated. type: the updating type, available values are: 'header','body','all'. options: the panel options.
		tab:$('#tabsbox').tabs('getSelected'),
		options:{
			title: '新主题',
		}
	});
	*/	
	$('#tabsbox').tabs('enableTab',1);  //Enable the specified tab panel, the 'which' parameter can be the title or index of tab panel. Available since version 1.3.(Parameter/which)
	
	$('#tabsbox').tabs('disableTab',1);  //Disable the specified tab panel, the 'which' parameter can be the title or index of tab panel. Available since version 1.3.(Parameter/which)
	
	$('#tabsbox').tabs('scrollBy',10);  //Scroll the tab header by the specified amount of pixels, negative values scroll to the right, positive values scroll to the left. Available since version 1.3.2.(Parameter/deltaX	) 滚动选项卡标题指定的像素数量，负值指向右滚动，正值向左滚动
	
	
	
	
	
	//accordion
	$('#accordionbox').accordion({
		width:500,  //The width of accordion container.(number/auto)
		height:300,  //The height of accordion container.
		fit:false,  //Set to true to set the accordion container size fit it's parent container.(boolean/false)
		border:true,  //Defines if to show the border.(boolean/true)
		animate:true,  //Defines if to show animation effect when expand or collapse panel.(boolean/true) 展开折叠时显示动画效果
		multiple:false,  //True to enable expanding multiple panels at one time. Available since version 1.3.5.(boolean/false) true,同时展开多个面板
		selected:1,  //The initialized selected panel index. Available since version 1.3.5.(number/0)
		halign:'top',  //The header alignment of the accordion panel. Possible values are: 'top','left','right'. Available since version 1.5.2.(String/top)
		
		selected:true,  //Set to true to expand the panel.(boolean/false)
		collapsible:false,  //Defines if to show collapsible button. False will prevent from clicking to expand/collapse this panel.(boolean/true)
		
		//Event
		onSelect:function(title,index){  //	Fires when a panel is selected.(Parameters/title,index)
			console.log("onUnselect: " + title + " | " + index);
		},
		onUnselect:function(title,index){  //Fires when a panel is unselected. Available since version 1.3.5. 取消选中时触发
			console.log("onUnselect: " + title + " | " + index);
		},
		onAdd:function(title,index){  //Fires when a new panel is added.
			console.log("onBeforeRemove: " + title + " | " + index);
		},
		onBeforeRemove:function(title,index){  //Fires before a panel is removed, return false to cancel the remove action.
			console.log("onBeforeRemove: " + title + " | " + index);
		},
		onRemove:function(title,index){  //Fires when a panel is removed.
			console.log("onRemove: " + title + " | " + index);
		},
	});//.hide();
	
	//Method
	//console.log($('#accordionbox').accordion('options'));
	
	//console.log($('#accordionbox').accordion('panels'));  //Get all panels.(Parameter/none)
	
	/*
	$(document).click(function (){
		$('#accordionbox').accordion().show();  //在上面先hide()然后这里show(),会导致样式乱了
		$('#accordionbox').accordion('resize');  //Resize the accordion.(Parameter/none) 调整分类组件大小
	});*/
 
	//console.log("getSelected: " + $('#accordionbox').accordion('getSelected'));  //Get the all the selected panels. Available since version 1.3.5.(Parameter/none)
	
	//console.log("getPanel: " + JSON.stringify($('#accordionbox').accordion('getPanel',2).context));  //Get the specified panel. The 'which' parameter can be the title or index of panel.(Parameter/which)
	
	//console.log("getPanelIndex: " + $('#accordionbox').accordion('getPanelIndex',$('#accordionbox').accordion('getSelected')));  //Get the specified panel index. Available since version 1.3.(Parameter/panel)
	
	//$('#accordionbox').accordion('select',2);  //Select the specified panel. The 'which' parameter can be the title or index of panel.(Parameter/which)
	
	//$('#accordionbox').accordion('unselect',2);  //Unselect the specified panel. The 'which' parameter can be the title or index of panel. Available since version 1.3.5.(Parameter/which)
	
	$('#accordionbox').accordion('add',{  //Add a new panel. By default the added panel will become selected. To add a unselected new panel, pass the 'selected' property and set it to false. (Parameter/options)
		title:'abc',
		content: 'abc',
		selected:true,   //Set to true to expand the panel.(boolean/false)  panel属性 是否选中
		collapsible:true,  //Defines if to show collapsible button. False will prevent from clicking to expand/collapse this panel.(boolean/true)  panel属性 折叠按钮
		closable:true,
		onClose:function(){
			confirm("close");
		},
	});
	
	//$('#accordionbox').accordion('remove','abc');  //Remove the specified panel. The 'which' parameter can be the title or index of panel.(Parameter/which)
	
	
	
	
	
	//layout
	$('#layoutbox').layout({
		//布局属性
		fit:false,  //Set to true to set the layout size fit its parent container. When creating layout on 'body' tag, it will be auto maximized to the full size of whole page.(boolean/false)
		
		//区域面板属性
		title:'标题',  //The layout panel title text.(String/null)
		width:600,
		
		//Event
		onCollapse:function(region){  //Fires when collapse a region panel. Available since version 1.4.4.(Parameters/region)
			console.log(region);
		},
		onExpnad:function(region){
			console.log(region);
		},
		onAdd:function(region){
			console.log(region);
		},
		onRemove:function(region){
			console.log(region);
		},
	});
	
	//Method
	$('#layoutbox').layout('resize',{
		width:'60%',
		heigth:300,	
	});
	
	//console.log("panel: " + $('#layoutbox').layout('panel','north'));  //Return the specified panel, the 'region' parameter possible values:'north','south','east','west','center'.(Parameter/region)
	
	//$('#layoutbox').layout('collapse','west');  //Collapse the specified panel, the 'region' parameter possible values:'north','south','east','west'.(Parameter/region) //无法理解为什么这里折叠的话会导致下面的add方法不可用
	
	$('#layoutbox').layout('expand','west');  //Expand the specified panel, the 'region' parameter possible values:'north','south','east','west'.(Parameter/region)
	/*
	$('#layoutbox').layout('remove','center'); 
	
	$('#layoutbox').layout('add',{  //Add a specified panel, the options parameter is a config object, see tab panel properties for more details.(Parameter/options)
		region:'center',
		title:'add center',
	});*/
	
	$('#layoutbox').layout('split','north');  //Split the region panel. Available since version 1.4.2.(Parameter/options)
	
	$('#layoutbox').layout('unsplit','north');  //Unsplit the region panel. Available since version 1.4.2.(Parameter/options)
	
	
	
	
	//menu
	$('#menubox').menu({
		
		//事件
		onShow:function(){  //Fires after menu is showed.(Parameters/none)
			console.log("展示时触发");
		},
		onHide:function(){
			console.log("隐藏时触发");
		},
		onClick:function(item){
			console.log("点击时触发 ---" + item.text);
		},
	});
	
	
	//Method
	$(document).on('contextmenu',function(event){
		event.preventDefault();  //组织系统自带右键事件
		$('#menubox').menu('show',{
			left: event.pageX,
			top: event.pageY,
		});
	});
	/*
	$('#menubox').menu('show',{
		left: 200,
		top: 100
	});*/

	//console.log($('#menubox').menu('options'));
	
	$('#menubox').menu('hide');
	
	$('#menubox').menu('destroy');
	
	//console.log("getItem: " + JSON.stringify($('#menubox').menu('getItem','#new')));  //Get the menu item properties that include a 'target' property indicating the item DOM element. The example below shows how to get the specified item by id:(Parameter/itemEl)
	
	//$('#menubox').menu('setText',{target:$('#menubox').menu('findItem','New').target,text:'新建'});  //Set the specified menu item text. The 'param' parameter contains two properties:target: DOM object, the menu item to be setted.text: string, the new text value.
	
	$('#menubox').menu('setIcon',{  //Set the specified menu item icon. The 'param' parameter contains two properties:target: DOM object, the menu item.iconCls: the new icon class.
		target:$('#new'),
		iconCls:'icon-add',
	});
	
	//console.log("findItem: " + $('#menubox').menu('findItem','Open'));  //Find the specified menu item, the return object is same as the getItem method.(Parameter/text)
	
	$('#menubox').menu('appendItem',{  //	Append a new menu item, the 'options' parameter indicate the new item properties. By default the added item will become a top menu item. To append a sub menu item, a 'parent' property should be set to specify the parent item element that already has sub items.(Parameter/options)
		id:'addItemid',
		text:'addItemtext',
		iconCls:'icon-ok',
		onclick:function(e){
			console.log("additem");
		},
	});
	
	//$('#menubox').menu('removeItem','#new');  //Remove the specified menu item.(Parameter/itemEl)
	//console.log("item：" + JSON.stringify($('#new')));
	//console.log("item[0]：" + JSON.stringify($('#new')[0]));
	//console.log("menubox.getItem：" + JSON.stringify($('#menubox').menu('getItem',$('#new')[0])));
	
	
	$('#menubox').menu('disableItem','#new');
	
	$('#menubox').menu('enableItem','#new');
	
	$('#menubox').menu('showItem','#new');
	//$('#menubox').menu('hideItem','#new');
	
	$('#menubox').menu('resize','#menubox');
	
	
	
	
	
	//menubutton
	$('#menubuttonbox').menubutton({
		iconCls: 'icon-edit',
		menu: '#mm',  //A selector to create a corresponding menu.(String/null)
		plain:true,  //True to show plain effect.(boolean/true)
		menuAlign:'right',  //The alignment of top level menu. Possible values are: 'left', 'right'. Available since version 1.3.6.(String/left)
		duration:100,  //Defines duration time in milliseconds to show menu when hovering the button.(number/100)
		showEvent:'click',  //The event that cause the menu to appear. Available since version 1.5.5.(String/mouseenter)
		hideEvent:'mouseleave',  //The event that cause the menu to disappear. Available since version 1.5.5.(String/mouseleave)
		hasDownArrow:true,  //Defines if to display the down arrow icon. Available since version 1.4.2.(boolean/true)
	});
	
	//Method
	//console.log($('#menubuttonbox').menubutton('options'));
	
	$('#menubuttonbox').menubutton('disable');
	
	$('#menubuttonbox').menubutton('enable');
	
	//$('#menubuttonbox').menubutton('destroy');
	
	
	
	
	
	
	//sidemenu
	var data = 
	[
		{
            text: 'Item1',
            iconCls: 'icon-sum',
            state: 'open',
            children: [
				{
					text: 'Option1'
				},
				{
					text: 'Option2'
				},
				{
					text: 'Option3',
					children: [
						{
							text: 'Option31'
						},
						{
							text: 'Option32'
						}
					]
				}
			]
		},
		{
            text: 'Item2',
            iconCls: 'icon-more',
            children: [
				{
					text: 'Option4'
				},
				{
					text: 'Option5'
				},
				{
					text: 'Option6'
				}
			]
        }
	];
	$('#sidemenubox').sidemenu({
		//data:[{text: 'Item1',children:[{text:'Option1'},{text:'Option2',children:[{text:'parama1'},{text:'param2'}]}]},{text: 'Item2'}],
		data:data,  //The menu data to display.(array/null)
		width:400,  //The width of sidemenu component.(number/200)
		height:'auto',  //The height of sidemenu component.(number/auto)
		border:true,  //Defines if to show the border.(boolean/true)
		animate:true,  //Defines if to show animation effect when expand or collapse menus.(boolean/true)  折叠动画
		multiple:true,  //True to enable expanding multiple panels at one time.(boolean/true) 同时拓展多个面板
		floatMenuWidth:200,  //The float menu width.(number/200)
		floatMenuPosition:'right',  //The float menu position. Available values are: 'left','right'.(String/right)
		
		//Event
		onSelect:function(item){  //Fires when a menu is selected.(Parameters/item)
			//console.log("onSelect: " + JSON.stringify(item));
			console.log("onSelect: " + item.text);
		},
	});
	
	//Method
	//console.log($('#sidemenubox').sidemenu('options'));(Parameter/none)
	
	//$('#sidemenubox').sidemenu('resize',{800,400});  //Resize the sidemenu.(Parameter/{width,height})
	
	//$('#sidemenubox').sidemenu('collapse');  //Collapse the sidemenu.(Parameter/none) 折叠
	
	$('#sidemenubox').sidemenu('expand');  //Expand the sidemenu.(Parameter/none)
	
	//$('#sidemenubox').sidemenu('destroy');  //Destroy the sidemenu.(Parameter/none)
	
	
	
	
	
	
	
	
	//splitbutton
	/*Simalar to the menubutton, the splitbutton is also associated with linkbutton and menu. The difference between menubutton and splitbutton is that the splitbutton is split into two parts. When moving mouse over the splitbutton, a 'split' line will display. The menu only display when moving mouse over the right part of splitbutton.*/
	$('#splitbuttonbox').splitbutton({
		iconCls:'icon-ok',
		menu:'#mm',  //A selector to create a corresponding menu.(String/null)
		palin:false,  //True to show plain effect.(boolean/true)
		duration:100,  //Defines duration time in milliseconds to show menu when hovering the button.(number/100)
	});
	
	//Method
	//console.log($('#splitbuttonbox').splitbutton('options'));
	
	$('#splitbuttonbox').splitbutton('disable');
	
	$('#splitbuttonbox').splitbutton('enable');
	
	//$('#splitbuttonbox').splitbutton('destroy');
	
	
	
	
	
	
	
	//switchbutton
	$('#switchbuttonbox').switchbutton({
		width:100,  //The width of switchbutton.(number/60)
		height:30,  //The height of switchbutton.(number/26)
		handleWidth:50,  //The width of the center handle of switchbutton.(number/auto)
		checked:false,  //Defines if the button is checked.(boolean/false)  是否选中（on）
		disabled:false,  //Defines if to disable the button.(boolean/false)
		readonly:false,  //Defines if the button is read-only.(boolean/false)
		reversed:false,  //Set to true the onText value and offText value will switch their positions.(boolean/false)
		onText:'ON',  //The text value of the left side.(Stinrg/ON)
		offText:'OFF',  //The text value of the right side.(Stinrg/OFF)
		handleText:'-',  //The text value of the center handle.(String/'')
		value:'ON',  //The default value bound to the button.(String/on)
		
		//Event
		onChange: function(checked){  //Fires when the checked value is changed.(Parameters/checked)
			console.log(checked);
		},
	});
	
	//Method
	//console.log($('#switchbuttonbox').switchbutton('options'));
	
	$('#switchbuttonbox').switchbutton('resize');  //Resize the switchbutton.(Parameters/param)
	
	//$('#switchbuttonbox').switchbutton('disable');  //Disable the switchbutton. Code example:(Parameters/none)
	
	//$('#switchbuttonbox').switchbutton('enable');  //Enable the switchbutton. Code example:
	
	//$('#switchbuttonbox').switchbutton('readonly');  //Enable/Disable readonly mode.(Parameters/mode)
	
	//$('#switchbuttonbox').switchbutton('check');  //Check the switchbutton.(Parameters/none)
	
	//$('#switchbuttonbox').switchbutton('uncheck');
	
	//$('#switchbuttonbox').switchbutton('clear');  //Clear the switchbutton's 'checked' value.(Parameters/none)
	
	//$('#switchbuttonbox').switchbutton('reset');  //Reset the switchbutton's 'checked' value.(Parameters/none)
	
	//$('#switchbuttonbox').switchbutton('setValue','on');  //Set the switchbutton value.(Parameters/value)
	
	
	
	
	
	
	
	//window
	$('#windowbox').window({
		width:300,
		height:200,
		iconCls:'icon-add',
		fit:false,
		//left:50,
		//properties  The properties extend from panel, below is the overridden and added properties for window.
		title:'标题',  //The window title text.(string/New Window)
		collapsible:true,  //Defines if to show collapsible button.(boolean/true)
		minimizable:true,  //Defines if to show minimizable button.(boolean/true)
		maxmizable:true,  //Defines if to show maximizable button.(boolean/true)
		closeable:true,  //Defines if to show closable button.(boolean/true)
		//closed:true,  //Defined if to close the window.(boolean/true)
		zIndex:9000,  //Window z-index,increase from it.(number/9000)
		draggable:true,  //Defines if window can be dragged.(boolean/true)
		resizable:true,  //Defines if window can be resized(boolean/true)
		shadow:true,  //If set to true,when window show the shadow will show also.(boolean/true)
		inline:true,  //Defines how to stay the window, true to stay inside its parent, false to go on top of all elements.(boolean/false)
		modal:true,  //Defines if window is a modal window.(boolean/false)
		border:'thin',  //Defines the window border style. Possible values are: true,false,'thin','thick'.(boolean,string/true)
		constrain:false,  //Defines if to constrain the window position. Available since version 1.5.(boolean/false)
		
		//Events
		//The events extend from panel.
		onClose:function(){
			alert("参考panel面板方法");
		},
	});
	
	//Method
	//console.log(JSON.stringify($('#windowbox').window('window').prevObject));  //Return the outer window object.
	/*
	$(document).click(function(){
		$('#windowbox').window('move',{
			left:0,
			top:0,
		});
	});
	
	$(document).dblclick(function(){
		$('#windowbox').window('center');  //Center the window on screen. Available since version 1.3.1.
	});*/

	
	
	
	
	//dialog
	$('#dialogbox').dialog({
		title: 'My Dialog',
		collapsible:true,  //Defines if to show collapsible button.(boolean/false)
		minimizable:true,
		maximizable:true,
		resizable:true,
		toolbar:[  //	The top toolbar of dialog, possible values: 1) an array, each tool options are same as linkbutton. 2) a selector that indicating the toolbar.(array,selector/null)
					{
						text:'Edit',
						iconCls:'icon-edit',
						handler:function(){alert('edit')}
					},
					{
						text:'Help',
						iconCls:'icon-help',
						handler:function(){alert('help')}
					}
				],
		//buttons:'#bb',
		buttons:[  //	The bottom buttons of dialog, possible values: 1) an array, each button options is same as linkbutton. 2) a selector that indicating the button bar.(array,selector/null)
					{
						text:'Save',
						handler:function(){alert('save')}
					},
					{
						text:'Close',
						handler:function(){alert('close')}
					}
				],
				
		
		//The properties extend from window, below is the overridden properties for dialog.
		width:400,
		height:200,
		closed:false,
		cache:false,
		href:'get_content.php',
		modal:true,
		
		//Event
		//The events extend from window.
	});
	
	//Method
	//The methods extend from window, below is the added methods for dialog.
	//console.log(JSON.stringify($('#dialogbox').dialog('dialog')));  //Return the outer dialog object.
	
	
	
	
	
	
	//messager
	$.messager.defaults={
		ok:'是',
		cancel:'否',
	};
	
	var ss = {
		title:'My Title',
		msg:'Message will be closed after 4 seconds.',
		timeout:1000,  //超时自动关闭，设置为0，不关闭
		showType:'show',  //如何显示消息，null,slide,fade,show,默认slide
		showspeed:100,  //窗口显示过渡时间，默认600ms
		width:500,
		height:300,
		style:{
			right:'',
			top:document.body.scrollTop+document.documentElement.scrollTop,
			bottom:''
		}
	}
	//$.messager.show(ss);
	
	//$.messager.alert('alert','提示框','info',function(){alert('alert');});  //title, msg, icon, fn
	
	//$.messager.confirm('confirm','这是一个提示',function(flag){alert('confirm');});  //title, msg, fn
	
	//$.messager.prompt('prompt','ok or cancel', function(){alert('prompt');});  //title, msg, fn
	
	/*
	$.messager.progress({  //Show a progress message window.The options is defined as:title: The title text to be showed on msg: The message box body text, default ''. text: The text to display in the progress bar, default undefined. interval: The length of time in milliseconds between each progress update, default 300. 
		title:'执行中',
		msg:'努力上传中',
		text:'{value}%',
		interval:100,
	});
	*/
	
	
	
	
	
	
	
	
	//pagination
	var array = [
					{
						iconCls:'icon-add',
						handler:function(){alert('add')}
					},
					'-',
					{
						iconCls:'icon-edit',
						handler:function(){alert('edit')}
					},
					'-',
					{
						iconCls:'icon-cut',
						handler:function(){alert('cut')}
					}
				];
	$('#paginationbox').pagination({
		total:1000,  //The total records, which should be setted when pagination is created.(number/1)
		pageSize:1,  //The page size.(number/10)
		pageNumber:1,  //Show the page number when pagination is created.(number/1)
		pageList:[1,5,10,30,50,100],  //User can change the page size. The pageList property defines how many size can be changed.(array/[10,20,30,50])
		loading:false,  //Defines if data is loading.(boolean/false)
		//buttons:'#paginationmm',
		buttons:array, //Defines custom buttons, possible values:(array,selector/null)
		//layout:['first','links','last'],  
						/*The pagination layout definition. Available since version 1.3.5.
						The layout item contains one or more following values:
						1) list: the page size list.
						2) sep: the page button separator.
						3) first: the first button.
						4) prev: the prev button.
						5) next: the next button.
						6) last: the last button.
						7) refresh: the refresh button.
						8) manual: the manual page input to allow entering page number.
						9) links: the page number links.
						10) info: the page information.*/
		links:5,  //The links amount, it is valid only when the 'links' item is included in 'layout'. Available since version 1.3.5.(number/10)
		showPageList:true,  //Defines if to show page list.(boolean/true)
		showRefresh:true,  //Defines if to show refresh button.(boolean/true)
		showPageInfo:true,
		beforePageText:'Page',  //Show a label before the input component.(Sirng/Page)
		afterPageText:'of {pages}',  //Show a label after the input component.(String/of {pages})
		displayMsg:'Displaying {from} to {to} of {total} items',  //Display a page information.(String/Displaying {from} to {to} of {total} items)
		
		//Event
		onSelectPage:function(pageNumber, pageSize){  //Fires when user select a new page. callback function contains two parameter: the new page number(Parameters:pageNumber:pageNumber, pageSize)
			$('#panelcontent').panel('refresh','../hello/listUserTest1.action?pageNumber=' + pageNumber + '&pageSize=' + pageSize);
		},
		onBeforeRefresh:function(pageNumber, pageSize){
			console.log("onBeforeRefresh	pageNumber:" + pageNumber + " ,pageSize:" + pageSize);
		},
		onRefresh:function(pageNumber, pageSize){
			console.log("onRefresh	pageNumber:" + pageNumber + " ,pageSize:" + pageSize);
		},
		onChangePageSize:function(pageSize){
			console.log("onChangePageSize	pageSize:" + pageSize);
		}
	});
	
	//Method
	//console.log($('#paginationbox').pagination('options'));
	
	//$('#paginationbox').pagination('loading'); //Make the pagination to become loading status.(Parameter/none)
	
	//$('#paginationbox').pagination('loaded');
	
	$('#paginationbox').pagination('refresh',{  //Refresh and display pager information. Available since version 1.3.(Parameter/none)
		total:100,
		pageNumber:2,
	});
	
	//$('#paginationbox').pagination('select');  //refresh the current page //此处报错原因未知
	//$('#paginationbox').pagination('select',1);  //select the second page(Parameter/page)
	
	$('#panelcontent').panel({
		title:'panel',
		iconCls:'icon-search',
		border:true,
		loadingMessage:'加载中，请稍等',
		href:'../hello/listUserTest1.action?pageNumber=' + 1 + '&pageSize=' + 1,
	});

	
	
	
	
	
	
	
	//searchbox
	$('#searchbox').searchbox({
		width:400,
		height:25,
		prompt:'searchboxtprompt',  //The prompt message to be displayed in input box.
		value:'',  //The inputed value.(String/'')
		menu:'#sbm',  //The search type menu. Each menu item can has below attribute:name: the search type name.selected: current selected search type name.(selector/null)
		searcher:function(value,name){  //The searcher function that will be called when user presses the searching button or press ENTER key.(function(value,name)/null)
			console.log("value:" + value + ",name:" + name);
		},
		disabled:false,
	});
	
	//Method
	/*
	var m = $('#searchbox').searchbox('menu');  //Return the search type menu object. The example below shows how to change the menu item icon.(Parameter/none)
	var item = m.menu('findItem','Sports');
	console.log("target:" + JSON.stringify(item.target));
	m.menu('setIcon',{
		target:item.target,
		iconCls:'icon-save',
	});*/
	
	//console.log("textbox:" + JSON.stringify($('#searchbox').searchbox('textbox')));  //Return the text box object.(Parameter/none)
	
	//console.log("getValue:" + $('#searchbox').searchbox('getValue'));  //Return the current searching value.(Parameter/none)
	
	$('#searchbox').searchbox('setValue','请输入。。。');  //Set a new searching value.(Parameter/none)
	
	//console.log("getName:" + $('#searchbox').searchbox('getName'));  //Return the current searching type name.(Parameter/none)
	
	//$('#searchbox').searchbox('selectName', 'sports');  //Select the current searching type name.(Parameter/name)
	
	//$('#searchbox').searchbox('destroy');  //Destroy this component.(Parameter/none)
	
	$('#searchbox').searchbox('resize', 400);  //Reset the component width.(Parameter/width)
	
	$('#searchbox').searchbox('disable');  //Disable the searchbox. Available since version 1.3.6.(Parameter/none)
	
	$('#searchbox').searchbox('enable');
	
	$('#searchbox').searchbox('clear');  //Clear the searching value. Available since version 1.3.6.(Parameter/none)
	
	$('#searchbox').searchbox('reset');  //Reset the searching value. Available since version 1.3.6.(Parameter/none)
	
	
	
	
	
	
	
	
	//validatebox
	//自定义规则
	$.extend($.fn.validatebox.defaults.rules, {
		minlength: {
			validator: function(value,param){
				return value.length >= param[0];
			},
			message: '最短为5'
		}
	});
	
	$('#validatebox').validatebox({
		required:true,  //Defines whether the field should be inputed.(boolean/false)
		//validType:'email',  //Defines the field valid type, such as email, url, etc. (string,array/null) //参考官网例子
		//validType:'url', 
		//validType:'length[2,20]',  //长度2到10
		//validType:'remote["/hello/hello.action","username"]',
		validType:'minlength[5,10]',  //这里的5传给自定义策略中的param，不满足就提示meissage
		delay:10,  //Delay to validate from the last inputting value. Available since version 1.3.2.(number/200)
		missingMessage:'is required',  //Tooltip text that appears when the text box is empty.(String/This field is required.)
		invalidMessgae:'invalid',  //Tooltip text that appears when the content of text box is invalid.(String/null)
		tipPosition:'right', //Defines the position of tip message when the content of text box is invalid. Possible values: 'left','right','top','bottom'. Available since version 1.3.2.(String/right)
		deltaX:5,  //Tooltip offset in the X direction. Available since version 1.3.3.(number/0)
		novalidate:false,  //Defines whether to turn off validation. Available since version 1.3.4.(boolean/false)
		editable:true,  //Defines whether the user can type text directly into the field. Available since version 1.4.5.(boolean/true)
		disabled:false,  //Defines whether to disable the validatebox. Available since version 1.4.5.(boolean/false)
		readonly:false,  //Defines whether the component is read-only. Available since version 1.4.5.(boolean/false)
		validateOnCreate:true,  //Defines whether to validate after creating the component. Available since version 1.4.5.(boolean/true)
		validateOnBlur:false,  //Defines whether to validate when losing focus. Available since version 1.4.5.(boolean/false)
		
		//Events
		onBeforeValidate:function(){  //Fires before validate on a field. Available since version 1.4.(Parameters/none)
			console.log('onBeforeValidate');
		},
		onValidate:function(valid){  //Fires when validate on a field. Available since version 1.4.(Parameters/valid)
			console.log(valid);
		}
	});
	
	//Method
	//console.log($('#validatebox').validatebox('options'));
	
	//$('#validatebox').validatebox('destroy');
	/*$(document).click(function(){
		//console.log("validate:" + $('#validatebox').validatebox('validate'));  //Do the validation to determine whether the content of text box is valid.(Parameters/none)
		console.log("isValid:" + $('#validatebox').validatebox('isValid'));  //Call validate method and return the validation result, true or false.(Parameters/none)
	});*/
	
	//$('#validatebox').validatebox('enableValidation');  //Enable validation. Available since version 1.3.4.(Parameters/none)
	
	//$('#validatebox').validatebox('disableValidation');  //Disable validation. Available since version 1.3.4.(Parameters/none)
	
	//$('#validatebox').validatebox('resetValidation');  //Reset validation. Available since version 1.4.5.(Parameters/none)
	
	//$('#validatebox').validatebox('enable');  //Enable the component. Available since version 1.4.5.(Parameters/none)
	
	//$('#validatebox').validatebox('disable');  //Disable the component. Available since version 1.4.5.(Parameters/none)
	
	//$('#validatebox').validatebox('readonly',true); //Enable/Disable readonly mode. Available since version 1.4.5.(Parameters/mode)
	
	
	
	
	
	
	
	//combobox 下拉框
	var array = [{
		id: 'java',
		text: 'Java'
	},{
		id: 'perl',
		text: 'Perl'
	},{
		id: 'ruby',
		text: 'Ruby'
	}];
	var ob = '{"name":"combobox"}';
	$('#combobox').combobox({
		valueField:'id',  //The underlying data value name to bind to this ComboBox.(String/value)
		textField:'text',  //The underlying data field name to bind to this ComboBox.(String/text)
		groupFieldId:'',  //Indicate what field to be grouped. Available since version 1.3.4.(String/null)
		groupFromatter:function(group){  //return group text to display on group item. Available since version 1.3.4.(function(group))
			return '<span style="color:red">' + group + '</span>';
		},
		mode:'remote',  //Defines how to load list data when text changed. Set to 'remote' if the combobox loads from server. When set to 'remote' mode, what the user types will be sent as the http request parameter named 'q' to server to retrieve the new data.(String/local)
		url:'../hello/comboboxjson.action', //A URL to load list data from remote.(String/null)
		method:'get',  //The http method to retrieve data.(String/post)
		data:array,  //The list data to be loaded.(array/null)
		queryParams:ob,  //The additional parameters that will be sent to server when requesting remote data. Available since version 1.4.2.(object/{})
		requeired:true,
	});
});

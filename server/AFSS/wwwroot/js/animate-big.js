(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animate_atlas_1", frames: [[0,0,1247,1247]]},
		{name:"animate_atlas_2", frames: [[0,1480,1792,472],[0,1006,1929,472],[0,0,1004,1004],[1006,0,971,994]]},
		{name:"animate_atlas_3", frames: [[0,871,1348,266],[0,0,1537,472],[0,1139,772,175],[0,1316,772,175],[0,1493,568,175],[0,1670,369,175],[570,1493,175,448],[774,1139,175,721],[1350,871,175,994],[1527,871,175,994],[0,474,1752,395]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_12 = function() {
	this.initialize(ss["animate_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["animate_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["animate_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["animate_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["animate_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["animate_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(img.CachedBmp_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2238,395);


(lib.CachedBmp_16 = function() {
	this.initialize(ss["animate_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["animate_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["animate_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["animate_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["animate_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["animate_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["animate_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["animate_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["animate_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.textauto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,674,133);


(lib.text3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.2818,0.2818);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,505,133);


(lib.text2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.2818,0.2818);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,433.1,133);


(lib.text1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.2818,0.2818);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,543.6,133);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-1,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,502,502);


(lib.item = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,0,0.2566,0.2566);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.item, new cjs.Rectangle(0,0,249.2,255.1), null);


(lib._5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AExINIhUjDIm5AAIhVDDIjvAAIHJwZICvAAIHJQZgAiHCFIEOAAIiHk5g");
	this.shape.setTransform(48.8045,47.0149,0.8959,0.8954);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.7,94.1);


(lib._4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AExINIhUjDIm5AAIhVDDIjvAAIHJwZICvAAIHJQZgAiHCFIEOAAIiHk5g");
	this.shape.setTransform(83.4292,86.6515,1.5897,1.5889,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166.9,173.3);


(lib._3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmJINIAAwZIMUAAIAADZIosAAIAADmIIMAAIAADJIoMAAIAAGRg");
	this.shape.setTransform(83.4603,62.7134,1.5897,1.5889,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166.9,125.5);


(lib._2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjHFlQhRgvgshFIB4h4QAmA5A5AiQA9AkBHAAQA9AAAfgUQAegWAAgfQAAgfghgWQghgWgwgOIhogeQg6gSgwgYQgwgWghgwQghgvAAhEQAAhiBVhGQBVhHCGAAQDHAABtCQIh1ByQhVhfhwAAQh1AAAABHQAAAcAhASQAhATAuAOIBqAeQA6AQAwAYQAwAXAhAxQAgAxAABEQAABqhWBIQhVBHh/AAQiFAAhdg2g");
	this.shape.setTransform(64.863,152.5492,1.58,1.5799,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjHFlQhSgvgrhFIB4h4QAmA5A5AiQA9AkBHAAQA9AAAfgUQAegWAAgfQAAgfghgWQghgWgwgOIhogeQg6gSgwgYQgwgWghgwQghgvAAhEQAAhiBVhGQBVhHCGAAQDHAABtCQIh1ByQhVhfhwAAQh1AAAABHQAAAcAhASQAhATAuAOIBqAeQA6AQAwAYQAwAXAhAxQAgAxAABEQAABqhWBIQhVBHh/AAQiFAAhdg2g");
	this.shape_1.setTransform(64.863,51.356,1.58,1.5799,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,129.8,203.8);


(lib._1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ap+B0IAAjnIT9AAIAADng");
	this.shape.setTransform(18.4265,101.6486,1.5897,1.5889,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,36.9,203.20000000000002);


(lib.Символ17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,1119,197.5), null);


(lib.Символ16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FEC715").ss(50,1,1).p("AAApcIK7S5I11AAg");
	this.shape.setTransform(69.875,60.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC715").s().p("Aq6JdIK6y5IK7S5g");
	this.shape_1.setTransform(69.875,60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-25,-25,189.8,171), null);


(lib.Символ15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FEC715").ss(24.5,1,1).p("AB7AAQAAAzglAjQgjAlgzAAQgyAAgkglQgkgjAAgzQAAgyAkgkQAkgkAyAAQAzAAAjAkQAlAkAAAyg");
	this.shape.setTransform(12.25,12.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC715").s().p("AhWBWQgkgjAAgzQAAgyAkgkQAkgkAyAAQAzAAAjAkQAlAkgBAyQABAzglAjQgjAlgzgBQgyABgkglg");
	this.shape_1.setTransform(12.25,12.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FEC715").ss(24.5,1,1).p("Ai9AAQAAhOA4g3QA3g4BOAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAQhOAAg3g4Qg4g3AAhPg");
	this.shape_2.setTransform(12.25,12.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEC715").s().p("AiFCGQg4g3AAhPQAAhOA4g3QA3g4BOAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAQhOAAg3g4g");
	this.shape_3.setTransform(12.25,12.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FEC715").ss(24.5,1,1).p("AkBAAQAAhpBMhMQBMhMBpAAQBqAABMBMQBMBMAABpQAABqhMBMQhMBMhqAAQhpAAhMhMQhMhMAAhqg");
	this.shape_4.setTransform(12.25,12.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEC715").s().p("Ai1C2QhLhLgBhrQABhpBLhMQBMhLBpgBQBrABBLBLQBMBMgBBpQABBrhMBLQhLBMhrgBQhpABhMhMg");
	this.shape_5.setTransform(12.25,12.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FEC715").ss(24.5,1,1).p("AlEAAQAAiFBfhgQBghfCFAAQCGAABgBfQBfBgAACFQAACGhfBgQhgBfiGAAQiFAAhghfQhfhgAAiGg");
	this.shape_6.setTransform(12.25,12.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEC715").s().p("AjlDlQhfhfAAiGQAAiFBfhgQBghfCFAAQCGAABfBfQBgBgAACFQAACGhgBfQhfBgiGAAQiFAAhghgg");
	this.shape_7.setTransform(12.25,12.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FEC715").ss(24.5,1,1).p("AGJAAQAACih0BzQhzB0iiAAQihAAhzh0Qh0hzAAiiQAAihB0hzQBzh0ChAAQCiAABzB0QB0BzAAChg");
	this.shape_8.setTransform(12.25,12.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEC715").s().p("AkUEVQhzhzgBiiQABihBzhzQBzhzChgBQCiABBzBzQBzBzAAChQAACihzBzQhzBziiAAQihAAhzhzg");
	this.shape_9.setTransform(12.25,12.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},36).to({state:[]},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-39.2,103,103);


(lib.Символ12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,386,87.5), null);


(lib.Символ11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,386,87.5), null);


(lib.Символ10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,284,87.5), null);


(lib.Символ9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,184.5,87.5), null);


(lib.Символ7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.2566,0.2566);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,44.9,115), null);


(lib.Символ6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.2566,0.2566);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,44.9,185), null);


(lib.Символ5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.2566,0.2566);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,44.9,255.1), null);


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.2566,0.2566);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,44.9,255.1), null);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,876,197.5), null);


(lib.Анимация7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEC715").s().p("EgD5CcQMAAAk4fIHzAAMAAAE4fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-1000,50,2000);


(lib.Анимация5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE611E").s().p("EgD5CcQMAAAk4fIHzAAMAAAE4fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-1000,50,2000);


(lib.Анимация3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E00E0F").s().p("EgD5CcQMAAAk4fIHzAAMAAAE4fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-1000,50,2000);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A0B14").s().p("EgD5CcQMAAAk4fIHzAAMAAAE4fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-1000,50,2000);


(lib.line4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация7("synched",0);
	this.instance.setTransform(25,1000);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,2000);


(lib.line3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(25,1000);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,2000);


(lib.line2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(25,1000);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,2000);


(lib.line1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(25,1000);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,2000);


(lib.itemкопия = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Символ_7
	this.instance = new lib.Символ7();
	this.instance.setTransform(226.55,197.5,1,1,0,0,0,22.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:175.55},10).wait(1));

	// Символ_6
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(156.55,162.5,1,1,0,0,0,22.5,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:123.4},10).wait(1));

	// Символ_5
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(92.5,127.5,1,1,0,0,0,22.5,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:72.1},10).wait(1));

	// Символ_4
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(22.5,127.5,1,1,0,0,0,22.5,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,255.1);


(lib.all = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text_3
	this.instance = new lib.text3("synched",0);
	this.instance.setTransform(252.5,554.35,1,1,0,0,0,252.5,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:12.5},12).to({_off:true},1).wait(6).to({_off:false,x:-27.5},0).wait(1));

	// text_2
	this.instance_1 = new lib.text2("synched",0);
	this.instance_1.setTransform(1003.5,307.65,1,1,0,0,0,216.6,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:1226.35},12).to({_off:true},1).wait(6).to({_off:false,x:1263.5},0).wait(1));

	// text_1
	this.instance_2 = new lib.text1("synched",0);
	this.instance_2.setTransform(271.8,66.5,1,1,0,0,0,271.8,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:14.65},12).to({_off:true},1).wait(6).to({_off:false,x:-28.2},0).wait(1));

	// Слой_6
	this.instance_3 = new lib._5("synched",0);
	this.instance_3.setTransform(518.7,310.9,1,1,0,0,0,48.8,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:48.9,rotation:77.1437,y:310.95},12).to({_off:true},1).wait(6).to({_off:false,regX:48.8,rotation:90,y:310.9},0).wait(1));

	// logo
	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(434.25,135.1,0.2818,0.2818);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:true},1).wait(6).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,0,1780,620.9);


(lib.Символ8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Символ_12
	this.instance = new lib.Символ12();
	this.instance.setTransform(192.95,453.1,1,1,0,0,0,192.9,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// Символ_11
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(192.95,316.7,1,1,0,0,0,192.9,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:359.2},10).wait(1));

	// Символ_10
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(142.15,180.3,1,1,0,0,0,142.1,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:265.3},10).wait(1));

	// Символ_9
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(92.25,43.9,1,1,0,0,0,92.2,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:171.4},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,386,496.7);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib._1("synched",0);
	this.instance.setTransform(203.45,36.95,1,1,-90,0,0,-0.1,203.5);

	this.instance_1 = new lib._3("synched",0);
	this.instance_1.setTransform(157.2,94.3,1,1,0,0,0,83.5,62.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240.6,157.1);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.textauto("synched",0);
	this.instance.setTransform(510.2,126.95,1,1,0,0,0,336.9,66.5);

	this.instance_1 = new lib._4("synched",0);
	this.instance_1.setTransform(86.6,83.45,1,1,90,0,0,83.4,86.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,847.3,193.5);


(lib.lines2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.line3("synched",0);
	this.instance.setTransform(509.45,689.25,0.9999,0.9999,0,45,-135,24.9,1000.1);

	this.instance_1 = new lib.line1("synched",0);
	this.instance_1.setTransform(438.8,901.25,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_2 = new lib.line3("synched",0);
	this.instance_2.setTransform(594.2,887,0.9999,0.9999,0,45,-135,25.1,1000.1);

	this.instance_3 = new lib.line1("synched",0);
	this.instance_3.setTransform(665.15,957.75,0.9999,0.9999,0,45,-135,24.9,999.9);

	this.instance_4 = new lib.line2("synched",0);
	this.instance_4.setTransform(714.45,1120.4,0.9999,0.9999,0,45,-135,25,1000.1);

	this.instance_5 = new lib.line1("synched",0);
	this.instance_5.setTransform(806.5,1099.25,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_6 = new lib.line2("synched",0);
	this.instance_6.setTransform(827.6,1290.05,0.9999,0.9999,0,45,-135,25,1000);

	this.instance_7 = new lib.line4("synched",0);
	this.instance_7.setTransform(926.65,1332.35,0.9999,0.9999,0,45,-135,25.1,999.9);

	this.instance_8 = new lib.line3("synched",0);
	this.instance_8.setTransform(1075.15,1254.8,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_9 = new lib.line1("synched",0);
	this.instance_9.setTransform(1032.7,1438.65,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_10 = new lib.line4("synched",0);
	this.instance_10.setTransform(1181.15,1360.8,0.9999,0.9999,0,45,-135,25,1000);

	this.instance_11 = new lib.line2("synched",0);
	this.instance_11.setTransform(1110.5,1573,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_12 = new lib.line4("synched",0);
	this.instance_12.setTransform(1322.65,1502.3,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_13 = new lib.line2("synched",0);
	this.instance_13.setTransform(1167.1,1799.3,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_14 = new lib.line1("synched",0);
	this.instance_14.setTransform(1258.9,1777.95,0.9999,0.9999,0,45,-135,25,1000);

	this.instance_15 = new lib.line4("synched",0);
	this.instance_15.setTransform(1492.3,1615.45,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_16 = new lib.line3("synched",0);
	this.instance_16.setTransform(1358,1820.5,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_17 = new lib.line1("synched",0);
	this.instance_17.setTransform(1513.5,1806.35,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_18 = new lib.line3("synched",0);
	this.instance_18.setTransform(1640.7,1820.45,0.9999,0.9999,0,45,-135,25,1000.1);

	this.instance_19 = new lib.line1("synched",0);
	this.instance_19.setTransform(1626.7,1976.05,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_20 = new lib.line2("synched",0);
	this.instance_20.setTransform(1647.85,2167,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_21 = new lib.line1("synched",0);
	this.instance_21.setTransform(1739.75,2145.8,0.9999,0.9999,0,45,-135,24.9,1000.1);

	this.instance_22 = new lib.line3("synched",0);
	this.instance_22.setTransform(1867.05,2159.9,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_23 = new lib.line1("synched",0);
	this.instance_23.setTransform(1966.05,2202.05,0.9999,0.9999,0,45,-135,25.1,999.8);

	this.instance_24 = new lib.line4("synched",0);
	this.instance_24.setTransform(1916.55,2322.25,0.9999,0.9999,0,45,-135,25.1,999.8);

	this.instance_25 = new lib.line1("synched",0);
	this.instance_25.setTransform(1965.95,2485.1,0.9999,0.9999,0,45,-135,25,1000);

	this.instance_26 = new lib.line4("synched",0);
	this.instance_26.setTransform(2142.75,2379.15,0.9999,0.9999,0,45,-135,24.9,1000.1);

	this.instance_27 = new lib.line2("synched",0);
	this.instance_27.setTransform(2298.4,2365,0.9999,0.9999,0,45,-135,24.9,1000);

	this.instance_28 = new lib.line3("synched",0);
	this.instance_28.setTransform(2319.6,2555.6,0.9999,0.9999,0,45,-135,25.1,999.8);

	this.instance_29 = new lib.line2("synched",0);
	this.instance_29.setTransform(2411.45,2534.6,0.9999,0.9999,0,45,-135,25,1000);

	this.instance_30 = new lib.line1("synched",0);
	this.instance_30.setTransform(2390.35,2626.4,0.9999,0.9999,0,45,-135,25,999.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lines2, new cjs.Rectangle(-286,-35.6,3422.2,3386.9), null);


(lib.lines = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.line4("synched",0);
	this.instance.setTransform(2754.1,2605.5,1,1,45,0,0,24.9,1000);

	this.instance_1 = new lib.line3("synched",0);
	this.instance_1.setTransform(2662.3,2626.85,1,1,45,0,0,25.1,1000);

	this.instance_2 = new lib.line2("synched",0);
	this.instance_2.setTransform(2570.25,2647.9,1,1,45,0,0,24.9,1000);

	this.instance_3 = new lib.line1("synched",0);
	this.instance_3.setTransform(2450.05,2697.4,1,1,45,0,0,24.9,1000);

	this.instance_4 = new lib.line4("synched",0);
	this.instance_4.setTransform(2358.35,2718.7,1,1,45,0,0,25.1,999.9);

	this.instance_5 = new lib.line3("synched",0);
	this.instance_5.setTransform(2464.35,2542,1,1,45,0,0,25.1,1000);

	this.instance_6 = new lib.line2("synched",0);
	this.instance_6.setTransform(2372.4,2563.2,1,1,45,0,0,25.1,1000);

	this.instance_7 = new lib.line1("synched",0);
	this.instance_7.setTransform(2393.7,2471.2,1,1,45,0,0,25.1,999.9);

	this.instance_8 = new lib.line4("synched",0);
	this.instance_8.setTransform(2160.25,2633.7,1,1,45,0,0,24.9,999.9);

	this.instance_9 = new lib.line3("synched",0);
	this.instance_9.setTransform(2323,2400.5,1,1,45,0,0,25.1,999.9);

	this.instance_10 = new lib.line2("synched",0);
	this.instance_10.setTransform(2231,2421.8,1,1,45,0,0,25.1,1000);

	this.instance_11 = new lib.line1("synched",0);
	this.instance_11.setTransform(2252.05,2329.75,1,1,45,0,0,24.9,1000);

	this.instance_12 = new lib.line4("synched",0);
	this.instance_12.setTransform(2103.7,2407.65,1,1,45,0,0,25.1,1000);

	this.instance_13 = new lib.line3("synched",0);
	this.instance_13.setTransform(2011.65,2428.75,1,1,45,0,0,24.9,1000);

	this.instance_14 = new lib.line2("synched",0);
	this.instance_14.setTransform(2061.3,2308.65,1,1,45,0,0,25.1,1000);

	this.instance_15 = new lib.line1("synched",0);
	this.instance_15.setTransform(2110.8,2188.45,1,1,45,0,0,25.1,1000);

	this.instance_16 = new lib.line4("synched",0);
	this.instance_16.setTransform(2018.95,2209.6,1,1,45,0,0,25.1,999.9);

	this.instance_17 = new lib.line3("synched",0);
	this.instance_17.setTransform(2096.5,2061.1,1,1,45,0,0,24.9,1000);

	this.instance_18 = new lib.line2("synched",0);
	this.instance_18.setTransform(2004.55,2082.3,1,1,45,0,0,24.9,1000);

	this.instance_19 = new lib.line1("synched",0);
	this.instance_19.setTransform(1912.65,2103.5,1,1,45,0,0,24.9,1000);

	this.instance_20 = new lib.line4("synched",0);
	this.instance_20.setTransform(1990.55,1955.15,1,1,45,0,0,25.1,1000);

	this.instance_21 = new lib.line3("synched",0);
	this.instance_21.setTransform(1757.25,2117.8,1,1,45,0,0,25.1,1000);

	this.instance_22 = new lib.line2("synched",0);
	this.instance_22.setTransform(1778.3,2025.75,1,1,45,0,0,24.9,1000);

	this.instance_23 = new lib.line1("synched",0);
	this.instance_23.setTransform(1799.5,1933.8,1,1,45,0,0,24.9,1000);

	this.instance_24 = new lib.line4("synched",0);
	this.instance_24.setTransform(1849,1813.6,1,1,45,0,0,24.9,1000);

	this.instance_25 = new lib.line3("synched",0);
	this.instance_25.setTransform(1672.35,1919.8,1,1,45,0,0,25.1,1000);

	this.instance_26 = new lib.line2("synched",0);
	this.instance_26.setTransform(1552.15,1969.3,1,1,45,0,0,25.1,1000);

	this.instance_27 = new lib.line1("synched",0);
	this.instance_27.setTransform(1573.5,1877.3,1,1,45,0,0,25.1,999.9);

	this.instance_28 = new lib.line4("synched",0);
	this.instance_28.setTransform(1735.85,1643.9,1,1,45,0,0,24.9,1000);

	this.instance_29 = new lib.line3("synched",0);
	this.instance_29.setTransform(1530.8,1778.25,1,1,45,0,0,24.9,1000);

	this.instance_30 = new lib.line2("synched",0);
	this.instance_30.setTransform(1552,1686.35,1,1,45,0,0,24.9,1000);

	this.instance_31 = new lib.line1("synched",0);
	this.instance_31.setTransform(1544.95,1622.7,1,1,45,0,0,24.9,1000);

	this.instance_32 = new lib.line4("synched",0);
	this.instance_32.setTransform(1453.25,1643.95,1,1,45,0,0,25.1,999.9);

	this.instance_33 = new lib.line3("synched",0);
	this.instance_33.setTransform(1530.95,1495.55,1,1,45,0,0,25.1,1000);

	this.instance_34 = new lib.line2("synched",0);
	this.instance_34.setTransform(1467.15,1488.35,1,1,45,0,0,24.9,1000);

	this.instance_35 = new lib.line1("synched",0);
	this.instance_35.setTransform(1375.25,1509.55,1,1,45,0,0,24.9,1000);

	this.instance_36 = new lib.line4("synched",0);
	this.instance_36.setTransform(1481.55,1332.85,1,1,45,0,0,25.1,999.9);

	this.instance_37 = new lib.line3("synched",0);
	this.instance_37.setTransform(1332.95,1410.7,1,1,45,0,0,25.1,1000);

	this.instance_38 = new lib.line2("synched",0);
	this.instance_38.setTransform(1184.45,1488.5,1,1,45,0,0,25.1,1000);

	this.instance_39 = new lib.line1("synched",0);
	this.instance_39.setTransform(1205.55,1396.4,1,1,45,0,0,24.9,1000);

	this.instance_40 = new lib.line4("synched",0);
	this.instance_40.setTransform(1283.3,1247.95,1,1,45,0,0,24.9,1000);

	this.instance_41 = new lib.line3("synched",0);
	this.instance_41.setTransform(1191.4,1269.15,1,1,45,0,0,24.9,1000);

	this.instance_42 = new lib.line2("synched",0);
	this.instance_42.setTransform(1127.9,1262.2,1,1,45,0,0,25.1,1000);

	this.instance_43 = new lib.line1("synched",0);
	this.instance_43.setTransform(1149.2,1170.2,1,1,45,0,0,25.1,999.9);

	this.instance_44 = new lib.line4("synched",0);
	this.instance_44.setTransform(1029,1219.7,1,1,45,0,0,25.1,999.9);

	this.instance_45 = new lib.line3("synched",0);
	this.instance_45.setTransform(965.35,1212.65,1,1,45,0,0,25.1,999.9);

	this.instance_46 = new lib.line2("synched",0);
	this.instance_46.setTransform(986.6,1120.7,1,1,45,0,0,25.1,999.9);

	this.instance_47 = new lib.line1("synched",0);
	this.instance_47.setTransform(866.25,1170.3,1,1,45,0,0,25.1,1000);

	this.instance_48 = new lib.line4("synched",0);
	this.instance_48.setTransform(972.35,993.55,1,1,45,0,0,25.1,1000);

	this.instance_49 = new lib.line3("synched",0);
	this.instance_49.setTransform(937,958.15,1,1,45,0,0,25.1,1000);

	this.instance_50 = new lib.line2("synched",0);
	this.instance_50.setTransform(986.45,837.95,1,1,45,0,0,25.1,1000);

	this.instance_51 = new lib.line1("synched",0);
	this.instance_51.setTransform(951.1,802.6,1,1,45,0,0,25.1,1000);

	this.instance_52 = new lib.line4("synched",0);
	this.instance_52.setTransform(746.15,936.85,1,1,45,0,0,25.1,999.9);

	this.instance_53 = new lib.line3("synched",0);
	this.instance_53.setTransform(795.65,816.65,1,1,45,0,0,25.1,999.9);

	this.instance_54 = new lib.line2("synched",0);
	this.instance_54.setTransform(816.75,724.85,1,1,45,0,0,25.1,1000);

	this.instance_55 = new lib.line1("synched",0);
	this.instance_55.setTransform(724.95,745.95,1,1,45,0,0,25.1,999.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lines, new cjs.Rectangle(0,0,3478.9,3443.5), null);


// stage content:
(lib.animate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,28,192];
	// timeline functions:
	this.frame_0 = function() {
		repeat = 0;
	}
	this.frame_28 = function() {
		if (repeat == 2) {
			this.stop();
		}
	}
	this.frame_192 = function() {
		repeat++;
		this.gotoAndPlay(12);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(164).call(this.frame_192).wait(1));

	// Слой_6
	this.instance = new lib.lines2();
	this.instance.setTransform(3487.35,-1808.45,1.5879,1.5879,0,0,0,1739.4,1721.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1425.1,regY:1657.8,x:2968.5,y:-1890.3},0).wait(1).to({x:2927.35,y:-1849.15},0).wait(1).to({x:2862.8,y:-1784.6},0).wait(1).to({x:2772.55,y:-1694.35},0).wait(1).to({x:2654.4,y:-1576.2},0).wait(1).to({x:2506.15,y:-1427.95},0).wait(1).to({x:2326.05,y:-1247.85},0).wait(1).to({x:2113.2,y:-1034.95},0).wait(1).to({x:1867.9,y:-789.65},0).wait(1).to({x:1592.8,y:-514.55},0).wait(1).to({x:1293.55,y:-215.3},0).wait(1).to({x:978.75,y:99.5},0).wait(1).to({x:659.9,y:418.3},0).wait(1).to({x:349.55,y:728.65},0).wait(1).to({x:59.4,y:1018.8},0).wait(1).to({x:-201.55,y:1279.75},0).wait(1).to({x:-427.55,y:1505.75},0).wait(1).to({x:-616.15,y:1694.35},0).wait(1).to({x:-767.3,y:1845.5},0).wait(1).to({x:-882.5,y:1960.7},0).wait(1).to({x:-964.15,y:2042.35},0).wait(1).to({x:-1014.95,y:2093.15},0).wait(1).to({regX:1739.4,regY:1721.8,x:-538.7,y:2217.5},0).to({_off:true},1).wait(169));

	// Слой_15
	this.instance_1 = new lib.lines2();
	this.instance_1.setTransform(3487.35,-1808.45,1.5879,1.5879,0,0,0,1739.4,1721.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(182).to({_off:false},0).wait(1).to({regX:1425.1,regY:1657.8,x:2968.5,y:-1890.3},0).wait(1).to({x:2927.4,y:-1849.15},0).wait(1).to({x:2862.8,y:-1784.6},0).wait(1).to({x:2772.55,y:-1694.35},0).wait(1).to({x:2654.4,y:-1576.2},0).wait(1).to({x:2506.2,y:-1428},0).wait(1).to({x:2326.15,y:-1247.9},0).wait(1).to({x:2113.25,y:-1035},0).wait(1).to({x:1867.95,y:-789.7},0).wait(1).to({regX:1739.4,regY:1721.8,scaleX:1.5878,scaleY:1.5878,x:2091.95,y:-413.05},0).wait(1));

	// text_3
	this.instance_2 = new lib.lines();
	this.instance_2.setTransform(2249.35,-634.35,1,1,0,0,0,1739.5,1721.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(182).to({_off:false},0).to({x:1136.3,y:478.7},10).wait(1));

	// Слой_13
	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(625.05,98.75,0.3013,0.3013,0,0,0,559.5,98.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(162).to({_off:false},0).to({regX:559.4,scaleX:1,scaleY:1,x:625,y:98.8,alpha:1},9).to({_off:true},21).wait(1));

	// Слой_5
	this.instance_4 = new lib.lines();
	this.instance_4.setTransform(2249.35,-634.35,1,1,0,0,0,1739.5,1721.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-310.65,y:1925.65},23).to({_off:true},1).wait(169));

	// text_3
	this.instance_5 = new lib.text3("synched",0);
	this.instance_5.setTransform(-262.5,568.5,1,1,0,0,0,252.5,66.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.Символ16();
	this.instance_6.setTransform(886.25,359.05,0.1065,1,66.9945,0,0,69.6,60.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({x:267.5},5,cjs.Ease.cubicOut).to({_off:true},22).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(161).to({_off:false},0).to({regX:69.9,scaleX:1,x:979.25,y:309.1},5).to({_off:true},26).wait(1));

	// Слой_10
	this.instance_7 = new lib.Символ15("synched",0);
	this.instance_7.setTransform(362.3,594.35,1,1,0,0,0,12.2,12.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(156).to({_off:false},0).to({_off:true},36).wait(1));

	// Слой_12
	this.instance_8 = new lib.Символ15("synched",0);
	this.instance_8.setTransform(470.3,263.3,1,1,0,0,0,12.2,12.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(151).to({_off:false},0).to({_off:true},41).wait(1));

	// Слой_11
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FEC715").ss(50,1,1).p("AhZAAICzAA");
	this.shape.setTransform(362.2595,602.8561,1,1,-25.234);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FEC715").ss(50,1,1).p("ArrFgIXXq/");
	this.shape_1.setTransform(428.875,571.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FEC715").ss(50,1,1).p("A2EKaMAsJgUz");
	this.shape_2.setTransform(495.45,540.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FEC715").ss(50,1,1).p("EggeAPUMBA+gen");
	this.shape_3.setTransform(562.05,508.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FEC715").ss(50,1,1).p("Egq4AUOMBVxgob");
	this.shape_4.setTransform(628.625,477.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FEC715").ss(50,1,1).p("Eg66AAAMB11AAA");
	this.shape_5.setTransform(695.2097,445.9401,1,1,-25.234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},156).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},31).wait(1));

	// text_2
	this.instance_9 = new lib.text2("synched",0);
	this.instance_9.setTransform(1468.5,321.8,1,1,0,0,0,216.6,66.5);
	this.instance_9._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FEC715").ss(50,1,1).p("AAegdIg7A7");
	this.shape_6.setTransform(479.925,256.5473,1,1,-25.234);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FEC715").ss(50,1,1).p("AiKGCIEVsD");
	this.shape_7.setTransform(467.475,291.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FEC715").ss(50,1,1).p("AkGLcIIN23");
	this.shape_8.setTransform(455.05,325.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FEC715").ss(50,1,1).p("AmDQ2MAMHghr");
	this.shape_9.setTransform(442.6,360.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FEC715").ss(50,1,1).p("An/WRMAP/gsh");
	this.shape_10.setTransform(430.175,395);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FEC715").ss(50,1,1).p("AUy0yMgpkApl");
	this.shape_11.setTransform(417.7277,429.6291,1,1,-25.234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},29).to({state:[{t:this.instance_9}]},5).to({state:[]},22).to({state:[{t:this.shape_6}]},95).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},36).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:false},0).to({x:1018.5},5,cjs.Ease.cubicOut).to({_off:true},22).wait(137));

	// Слой_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FEC715").ss(50,1,1).p("AhZArICzhV");
	this.shape_12.setTransform(-104.95,528.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FEC715").ss(50,1,1).p("AqbE7IU3p1");
	this.shape_13.setTransform(-47.225,501.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FEC715").ss(50,1,1).p("AzcJLMAm5gSV");
	this.shape_14.setTransform(10.5,474.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FEC715").ss(50,1,1).p("A8dNbMA47ga1");
	this.shape_15.setTransform(68.225,447.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FEC715").ss(50,1,1).p("EglfARrMBK/gjV");
	this.shape_16.setTransform(125.95,420.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FEC715").ss(50,1,1).p("EgzaAAAMBm1AAA");
	this.shape_17.setTransform(183.6878,392.8443,1,1,-25.234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},146).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},41).wait(1));

	// text_1
	this.instance_10 = new lib.text1("synched",0);
	this.instance_10.setTransform(-273.2,80.65,1,1,0,0,0,271.8,66.5);
	this.instance_10._off = true;

	this.instance_11 = new lib.Символ3();
	this.instance_11.setTransform(1695.05,325.05,1,1,0,0,0,438.1,98.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({_off:false},0).to({x:286.8},5,cjs.Ease.cubicOut).to({_off:true},22).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(116).to({_off:false},0).to({x:805.05},10).wait(10).to({y:-104.95},10).to({_off:true},1).wait(46));

	// Слой_19
	this.instance_12 = new lib.Символ8("synched",0);
	this.instance_12.setTransform(196.4,325.1,1,1,0,0,0,193,248.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(136).to({_off:false},0).to({y:911.6,startPosition:10},10).to({_off:true},1).wait(46));

	// Слой_18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_81 = new cjs.Graphics().p("EgsYAQTMgOJggmMB1DAEdIAAcJg");
	var mask_graphics_103 = new cjs.Graphics().p("Ai1GgIAAs/IFrAAIAAM/g");
	var mask_graphics_104 = new cjs.Graphics().p("AmFR0ISdAAIAMBEIx5DKgAmFR0MgGegkrIR6jKMAHBAn1g");
	var mask_graphics_105 = new cjs.Graphics().p("A6Y7qIc0qgMAX9BB1I80Kgg");
	var mask_graphics_106 = new cjs.Graphics().p("EgrVgf4MAlZgVmMAxSBVYMglZAVlg");
	var mask_graphics_107 = new cjs.Graphics().p("Eg+KgeyMAqogjxMBRtBhWMgqpAjxg");
	var mask_graphics_108 = new cjs.Graphics().p("EhRggX6MAr0g0NMB3NBkCMgr0A0Ng");
	var mask_graphics_109 = new cjs.Graphics().p("Ehj5gLHMAoUhF1MCffBcEMgoUBF1g");
	var mask_graphics_110 = new cjs.Graphics().p("Ehz2AHYMAf3hXfMDH2BIwMgf3BXfg");
	var mask_graphics_111 = new cjs.Graphics().p("Eh/7AfEMASWhoAMDthAp5MgSVBoAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(81).to({graphics:mask_graphics_81,x:505.125,y:507.95}).wait(20).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_103,x:594.975,y:321}).wait(1).to({graphics:mask_graphics_104,x:608.0875,y:332.9875}).wait(1).to({graphics:mask_graphics_105,x:619.9,y:340.475}).wait(1).to({graphics:mask_graphics_106,x:628.9875,y:343.7875}).wait(1).to({graphics:mask_graphics_107,x:634.525,y:343.7625}).wait(1).to({graphics:mask_graphics_108,x:635.675,y:341.425}).wait(1).to({graphics:mask_graphics_109,x:631.6625,y:337.7}).wait(1).to({graphics:mask_graphics_110,x:622.2875,y:333.9375}).wait(1).to({graphics:mask_graphics_111,x:607.425,y:331.325}).wait(82));

	// Слой_17
	this.instance_13 = new lib.textauto("synched",0);
	this.instance_13.setTransform(-160.6,529.8,1,1,0,0,0,336.9,66.5);
	this.instance_13._off = true;

	this.instance_14 = new lib.item();
	this.instance_14.setTransform(625,325,1,1,0,0,0,124.5,127.5);
	this.instance_14._off = true;

	this.instance_15 = new lib.itemкопия("synched",0);
	this.instance_15.setTransform(625.4,325.05,1.9486,1.9486,0,0,0,124.7,127.5);
	this.instance_15._off = true;

	this.instance_16 = new lib.Символ7();
	this.instance_16.setTransform(345.65,461.45,1.9486,1.9486,0,0,0,22.6,57.5);

	this.instance_17 = new lib.Символ6();
	this.instance_17.setTransform(243.85,393.25,1.9486,1.9486,0,0,0,22.5,92.5);

	this.instance_18 = new lib.Символ5();
	this.instance_18.setTransform(143.9,325.05,1.9486,1.9486,0,0,0,22.5,127.5);

	this.instance_19 = new lib.Символ4();
	this.instance_19.setTransform(47.25,325.05,1.9486,1.9486,0,0,0,22.5,127.5);

	var maskedShapeInstanceList = [this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},81).to({state:[{t:this.instance_13}]},4).to({state:[]},16).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_15}]},5).to({state:[{t:this.instance_15}]},10).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]},1).to({state:[{t:this.instance_15}]},8).to({state:[]},1).to({state:[]},11).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(81).to({_off:false},0).to({x:539.4},4).to({_off:true},16).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(104).to({_off:false},0).to({regX:124.6,scaleX:1.9486,scaleY:1.9486,x:625.2,y:325.05},7).to({_off:true},5).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(116).to({_off:false},0).to({x:246.4,startPosition:10},10).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(57));

	// _
	this.instance_20 = new lib._4("synched",0);
	this.instance_20.setTransform(625.8,486.3,1,1,90,0,0,83.4,86.7);
	this.instance_20._off = true;

	this.instance_21 = new lib.Символ1("synched",0);
	this.instance_21.setTransform(452.8,499.55,1,1,0,0,0,423.6,96.7);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(70).to({_off:false},0).wait(6).to({startPosition:0},0).to({x:115.8},5).to({_off:true},20).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(101).to({_off:false},0).to({y:759.55},5).to({_off:true},1).wait(86));

	// _
	this.instance_22 = new lib._3("synched",0);
	this.instance_22.setTransform(625.7,336.8,1,1,0,0,0,83.5,62.7);

	this.instance_23 = new lib.Символ2("synched",0);
	this.instance_23.setTransform(588.8,321,1,1,0,0,0,120.3,78.5);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},70).to({state:[{t:this.instance_23}]},33).to({state:[{t:this.instance_23}]},9).to({state:[]},5).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(103).to({_off:false},0).to({regX:119.8,regY:78.4,scaleX:20.7277,scaleY:20.7277,rotation:-90,x:588.3,y:460},9).to({_off:true},5).wait(76));

	// _
	this.instance_24 = new lib._2("synched",0);
	this.instance_24.setTransform(607,279.55,1,1,0,0,0,64.9,203.8);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(70).to({_off:false},0).to({regY:203.7,scaleY:0.2587,y:279.5},2).to({regX:65,regY:203.8,scaleY:0.1013,x:604.1},4).to({_off:true},27).wait(90));

	// _
	this.instance_25 = new lib._1("synched",0);
	this.instance_25.setTransform(672,279.5,1,1,0,0,0,-0.1,203.5);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(70).to({_off:false},0).to({rotation:-90,x:671.95,y:279.45},6).to({_off:true},27).wait(90));

	// Слой_7
	this.instance_26 = new lib.logo("synched",0);
	this.instance_26.setTransform(625.05,325.05,0.6,0.6,0,0,0,250.1,250.1);
	this.instance_26._off = true;

	this.instance_27 = new lib.all("synched",0);
	this.instance_27.setTransform(625,324.55,1,1,0,0,0,610,310.4);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(14).to({_off:false},0).to({scaleX:0.7,scaleY:0.7},7).to({_off:true},35).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(56).to({_off:false},0).to({regX:609.9,scaleX:1.7745,scaleY:1.7745,rotation:-89.999,x:624.95,startPosition:19},13).to({_off:true},1).wait(123));

	// Слой_21
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("EhhpAyyMAAAhljMDDTAAAMAAABljg");
	this.shape_18.setTransform(625,325);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(193));

	// Слой_4
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("A85fLMAAAg+VMA5zAAAMAAAA+Vg");
	this.shape_19.setTransform(625,325);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).to({_off:true},107).wait(86));

	// Слой_3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AAAAfIAAg9");
	this.shape_20.setTransform(-691.2,150.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CC66").s().p("Eg+GAfLMAAAg+VMB8NAAAMAAAA+Vg");
	this.shape_21.setTransform(625,325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).to({state:[]},107).wait(86));

	// Слой_2
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AAAAfIAAg9");
	this.shape_22.setTransform(-691.2,150.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F32E2E").s().p("EhfTAwcMAAAhg3MC+nAAAMAAABg3g");
	this.shape_23.setTransform(625,325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).to({state:[]},107).wait(86));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-3129.7,-4274,8835.099999999999,9078.9);
// library properties:
lib.properties = {
	id: '7B61A83CF4FCE643932E3479B16E314B',
	width: 1250,
	height: 650,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{ src:"../images/images/CachedBmp_17.png", id:"CachedBmp_17"},
		{ src:"../images/images/animate_atlas_1.png", id:"animate_atlas_1"},
		{ src:"../images/images/animate_atlas_2.png", id:"animate_atlas_2"},
		{ src:"../images/images/animate_atlas_3.png", id:"animate_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7B61A83CF4FCE643932E3479B16E314B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
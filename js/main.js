
!function(T,y,u,d){"use strict";function a(t,i){this.element=t,this.$context=T(t).data("api",this),this.$layers=this.$context.find(".layer");var e={calibrateX:this.$context.data("calibrate-x")||null,calibrateY:this.$context.data("calibrate-y")||null,invertX:this.$context.data("invert-x")||null,invertY:this.$context.data("invert-y")||null,limitX:parseFloat(this.$context.data("limit-x"))||null,limitY:parseFloat(this.$context.data("limit-y"))||null,scalarX:parseFloat(this.$context.data("scalar-x"))||null,scalarY:parseFloat(this.$context.data("scalar-y"))||null,frictionX:parseFloat(this.$context.data("friction-x"))||null,frictionY:parseFloat(this.$context.data("friction-y"))||null,originX:parseFloat(this.$context.data("origin-x"))||null,originY:parseFloat(this.$context.data("origin-y"))||null};for(var s in e)null===e[s]&&delete e[s];T.extend(this,r,i,e),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depths=[],this.raf=null,this.bounds=null,this.ex=0,this.ey=0,this.ew=0,this.eh=0,this.ecx=0,this.ecy=0,this.erx=0,this.ery=0,this.cx=0,this.cy=0,this.ix=0,this.iy=0,this.mx=0,this.my=0,this.vx=0,this.vy=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.initialise()}var o="parallax",r={relativeInput:!1,clipRelativeInput:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,type:["translate"]};a.prototype.transformSupport=function(t){for(var i=u.createElement("div"),e=!1,s=null,a=!1,o=null,r=null,n=0,h=this.vendors.length;n<h;n++)if(null!==this.vendors[n]?(o=this.vendors[n][0]+"transform",r=this.vendors[n][1]+"Transform"):r=o="transform",i.style[r]!==d){e=!0;break}switch(t){case"2D":a=e;break;case"3D":if(e){var l=u.body||u.createElement("body"),p=u.documentElement,c=p.style.overflow;u.body||(p.style.overflow="hidden",p.appendChild(l),l.style.overflow="hidden",l.style.background=""),l.appendChild(i),i.style[r]="translate3d(1px,1px,1px)",a=(s=y.getComputedStyle(i).getPropertyValue(o))!==d&&0<s.length&&"none"!==s,p.style.overflow=c,l.removeChild(i)}}return a},a.prototype.ww=null,a.prototype.wh=null,a.prototype.wcx=null,a.prototype.wcy=null,a.prototype.wrx=null,a.prototype.wry=null,a.prototype.portrait=null,a.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),a.prototype.vendors=[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],a.prototype.motionSupport=!!y.DeviceMotionEvent,a.prototype.orientationSupport=!!y.DeviceOrientationEvent,a.prototype.orientationStatus=0,a.prototype.transform2DSupport=a.prototype.transformSupport("2D"),a.prototype.transform3DSupport=a.prototype.transformSupport("3D"),a.prototype.propertyCache={},a.prototype.initialise=function(){this.accelerate(this.$context),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)},a.prototype.updateLayers=function(){this.$layers=this.$context.find(".layer"),this.depths=[],this.accelerate(this.$layers),this.$layers.each(T.proxy(function(t,i){this.depths.push(T(i).data("depth")||0)},this))},a.prototype.updateDimensions=function(){this.ww=y.innerWidth,this.wh=y.innerHeight,this.wcx=this.ww*this.originX,this.wcy=this.wh*this.originY,this.wrx=Math.max(this.wcx,this.ww-this.wcx),this.wry=Math.max(this.wcy,this.wh-this.wcy)},a.prototype.updateBounds=function(){this.bounds=this.element.getBoundingClientRect(),this.ex=this.bounds.left,this.ey=this.bounds.top,this.ew=this.bounds.width,this.eh=this.bounds.height,this.ecx=this.ew*this.originX,this.ecy=this.eh*this.originY,this.erx=Math.max(this.ecx,this.ew-this.ecx),this.ery=Math.max(this.ecy,this.eh-this.ecy)},a.prototype.queueCalibration=function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)},a.prototype.enable=function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=null,y.addEventListener("deviceorientation",this.onDeviceOrientation),setTimeout(this.onOrientationTimer,this.supportDelay)):(this.cx=0,this.cy=0,this.portrait=!1,y.addEventListener("mousemove",this.onMouseMove)),y.addEventListener("resize",this.onWindowResize),this.raf=requestAnimationFrame(this.onAnimationFrame))},a.prototype.disable=function(){this.enabled&&(this.enabled=!1,this.orientationSupport?y.removeEventListener("deviceorientation",this.onDeviceOrientation):y.removeEventListener("mousemove",this.onMouseMove),y.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.raf))},a.prototype.calibrate=function(t,i){this.calibrateX=t===d?this.calibrateX:t,this.calibrateY=i===d?this.calibrateY:i},a.prototype.invert=function(t,i){this.invertX=t===d?this.invertX:t,this.invertY=i===d?this.invertY:i},a.prototype.friction=function(t,i){this.frictionX=t===d?this.frictionX:t,this.frictionY=i===d?this.frictionY:i},a.prototype.scalar=function(t,i){this.scalarX=t===d?this.scalarX:t,this.scalarY=i===d?this.scalarY:i},a.prototype.limit=function(t,i){this.limitX=t===d?this.limitX:t,this.limitY=i===d?this.limitY:i},a.prototype.origin=function(t,i){this.originX=t===d?this.originX:t,this.originY=i===d?this.originY:i},a.prototype.clamp=function(t,i,e){return t=Math.max(t,i),t=Math.min(t,e)},a.prototype.css=function(t,i,e){var s=this.propertyCache[i];if(!s)for(var a=0,o=this.vendors.length;a<o;a++)if(s=null!==this.vendors[a]?T.camelCase(this.vendors[a][1]+"-"+i):i,t.style[s]!==d){this.propertyCache[i]=s;break}t.style[s]=e},a.prototype.accelerate=function(t){for(var i=0,e=t.length;i<e;i++){var s=t[i];this.css(s,"transform","translate3d(0,0,0)"),this.css(s,"transform-style","preserve-3d"),this.css(s,"backface-visibility","hidden")}},a.prototype.setPosition=function(i,e,s){var a=this,t=T(i).data("translate-calibration")||1,o=T(i).data("rotate-calibration")||1,r=T(i).data("scale-calibration")||1,n=T(i).data("grayscale-calibration")||1,h=T(i).data("blur-calibration")||1,l=T(i).data("brightness-calibration")||1,p=(T(i).data("contrast-calibration"),T(i).data("hue-rotate-calibration")||1),c=T(i).data("opacity-calibration")||1,y=T(i).data("saturate-calibration")||1,u=T(i).data("sepia-calibration")||1,d=T(i).data("skewX-calibration")||1,m=(T(i).data("skewX-calibration"),T(i).data("perspective")||0),b=(e+s)*o/2+"deg",v=1+(e+s)*r/2,f=(e+s)*d/2+"deg",x=100-(e+s)*n/2+"%",w=Math.max((e+s)*h/2,0)+"px",g=100-(e+s)*l/2+"%",X=(e+s)*p/2+"deg",Y=1-(e+s)*c/200,M=100-(e+s)*y/2+"%",D=100-(e+s)*u/2+"%";e=e*t+"px",s=s*t+"px";var F="",$="",S=T(i).data("parallax-type")||"";if(0<S.length)var k=S.split(",");else k=this.type;k.forEach(function(t){"translate"==(t=t.trim())&&(a.transform3DSupport?F=F+"translate3d("+e+","+s+",0) ":a.transform2DSupport?F=F+"translate("+e+","+s+") ":(i.style.left=e,i.style.top=s)),"rotate"==t&&(F=a.transform3DSupport?F+"rotate3d(0, 0, 1, "+b+") ":F+"rotate("+b+") "),"rotateX"==t&&(F=F+"rotateX("+b+") "),"rotateY"==t&&(F=F+"rotateY("+b+") "),"scale"==t&&(F=a.transform3DSupport?F+"scale3d("+v+", "+v+", 1) ":F+"scale("+v+") "),"skewX"==t&&(F=F+"skewX("+f+") "),"skewY"==t&&(F=F+"skewX("+f+") "),"grayscale"==t&&($=$+"grayscale("+x+") "),"blur"==t&&($=$+"blur("+w+") "),"brightness"==t&&($=$+"brightness("+g+") "),"contrast"==t&&($=$+"contrast("+g+") "),"hue-rotate"==t&&($=$+"hue-rotate("+X+") "),"saturate"==t&&($=$+"saturate("+M+") "),"sepia"==t&&($=$+"sepia("+D+") "),"opacity"==t&&(i.style.opacity=Y),"perspective"==t&&(F=F+"perspective("+m+") ")}),this.css(i,"-webkit-transform",F),this.css(i,"transform",F),this.css(i,"-moz-filter",$),this.css(i,"-webkit-filter",$),this.css(i,"filter",$)},a.prototype.onOrientationTimer=function(t){this.orientationSupport&&0===this.orientationStatus&&(this.disable(),this.orientationSupport=!1,this.enable())},a.prototype.onCalibrationTimer=function(t){this.calibrationFlag=!0},a.prototype.onWindowResize=function(t){this.updateDimensions()},a.prototype.onAnimationFrame=function(){this.updateBounds();var t=this.ix-this.cx,i=this.iy-this.cy;(Math.abs(t)>this.calibrationThreshold||Math.abs(i)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.mx=this.calibrateX?i:this.iy,this.my=this.calibrateY?t:this.ix):(this.mx=this.calibrateX?t:this.ix,this.my=this.calibrateY?i:this.iy),this.mx*=this.ew*(this.scalarX/100),this.my*=this.eh*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.mx=this.clamp(this.mx,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.my=this.clamp(this.my,-this.limitY,this.limitY)),this.vx+=(this.mx-this.vx)*this.frictionX,this.vy+=(this.my-this.vy)*this.frictionY;for(var e=0,s=this.$layers.length;e<s;e++){var a=this.depths[e],o=this.$layers[e],r=this.vx*a*(this.invertX?-1:1),n=this.vy*a*(this.invertY?-1:1);this.setPosition(o,r,n)}this.raf=requestAnimationFrame(this.onAnimationFrame)},a.prototype.onDeviceOrientation=function(t){if(!this.desktop&&null!==t.beta&&null!==t.gamma){this.orientationStatus=1;var i=(t.beta||0)/30,e=(t.gamma||0)/30,s=y.innerHeight>y.innerWidth;this.portrait!==s&&(this.portrait=s,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.cx=i,this.cy=e),this.ix=i,this.iy=e}},a.prototype.onMouseMove=function(t){var i=t.clientX,e=t.clientY;!this.orientationSupport&&this.relativeInput?(this.clipRelativeInput&&(i=Math.max(i,this.ex),i=Math.min(i,this.ex+this.ew),e=Math.max(e,this.ey),e=Math.min(e,this.ey+this.eh)),this.ix=(i-this.ex-this.ecx)/this.erx,this.iy=(e-this.ey-this.ecy)/this.ery):(this.ix=(i-this.wcx)/this.wrx,this.iy=(e-this.wcy)/this.wry)};var n={enable:a.prototype.enable,disable:a.prototype.disable,updateLayers:a.prototype.updateLayers,calibrate:a.prototype.calibrate,friction:a.prototype.friction,invert:a.prototype.invert,scalar:a.prototype.scalar,limit:a.prototype.limit,origin:a.prototype.origin};T.fn[o]=function(e){var s=arguments;return this.each(function(){var t=T(this),i=t.data(o);i||(i=new a(this,e),t.data(o,i)),n[e]&&i[e].apply(i,Array.prototype.slice.call(s,1))})}}(window.jQuery||window.Zepto,window,document);
/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */

;(function ( $, window, document, undefined ) {

  // Polyfill for requestAnimationFrame
  // via: https://gist.github.com/paulirish/1579671

  (function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
  }());


  // Parallax Constructor

  function Parallax(element, options) {
    var self = this;

    if (typeof options == 'object') {
      delete options.refresh;
      delete options.render;
      $.extend(this, options);
    }

    this.$element = $(element);

    if (!this.imageSrc && this.$element.is('img')) {
      this.imageSrc = this.$element.attr('src');
    }

    var positions = (this.position + '').toLowerCase().match(/\S+/g) || [];

    if (positions.length < 1) {
      positions.push('center');
    }
    if (positions.length == 1) {
      positions.push(positions[0]);
    }

    if (positions[0] == 'top' || positions[0] == 'bottom' || positions[1] == 'left' || positions[1] == 'right') {
      positions = [positions[1], positions[0]];
    }

    if (this.positionX !== undefined) positions[0] = this.positionX.toLowerCase();
    if (this.positionY !== undefined) positions[1] = this.positionY.toLowerCase();

    self.positionX = positions[0];
    self.positionY = positions[1];

    if (this.positionX != 'left' && this.positionX != 'right') {
      if (isNaN(parseInt(this.positionX))) {
        this.positionX = 'center';
      } else {
        this.positionX = parseInt(this.positionX);
      }
    }

    if (this.positionY != 'top' && this.positionY != 'bottom') {
      if (isNaN(parseInt(this.positionY))) {
        this.positionY = 'center';
      } else {
        this.positionY = parseInt(this.positionY);
      }
    }

    this.position =
      this.positionX + (isNaN(this.positionX)? '' : 'px') + ' ' +
      this.positionY + (isNaN(this.positionY)? '' : 'px');

    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      if (this.imageSrc && this.iosFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    if (navigator.userAgent.match(/(Android)/)) {
      if (this.imageSrc && this.androidFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    this.$mirror = $('<div />').prependTo(this.mirrorContainer);

    var slider = this.$element.find('>.parallax-slider');
    var sliderExisted = false;

    if (slider.length == 0)
      this.$slider = $('<img />').prependTo(this.$mirror);
    else {
      this.$slider = slider.prependTo(this.$mirror)
      sliderExisted = true;
    }

    this.$mirror.addClass('parallax-mirror').css({
      visibility: 'hidden',
      zIndex: this.zIndex,
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden'
    });

    this.$slider.addClass('parallax-slider').one('load', function() {
      if (!self.naturalHeight || !self.naturalWidth) {
        self.naturalHeight = this.naturalHeight || this.height || 1;
        self.naturalWidth  = this.naturalWidth  || this.width  || 1;
      }
      self.aspectRatio = self.naturalWidth / self.naturalHeight;

      Parallax.isSetup || Parallax.setup();
      Parallax.sliders.push(self);
      Parallax.isFresh = false;
      Parallax.requestRender();
    });

    if (!sliderExisted)
      this.$slider[0].src = this.imageSrc;

    if (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || slider.length > 0) {
      this.$slider.trigger('load');
    }

  }


  // Parallax Instance Methods

  $.extend(Parallax.prototype, {
    speed:    0.2,
    bleed:    0,
    zIndex:   -100,
    iosFix:   true,
    androidFix: true,
    position: 'center',
    overScrollFix: false,
    mirrorContainer: 'body',

    refresh: function() {
      this.boxWidth        = this.$element.outerWidth();
      this.boxHeight       = this.$element.outerHeight() + this.bleed * 2;
      this.boxOffsetTop    = this.$element.offset().top - this.bleed;
      this.boxOffsetLeft   = this.$element.offset().left;
      this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;

      var winHeight = Parallax.winHeight;
      var docHeight = Parallax.docHeight;
      var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
      var minOffset = Math.max(this.boxOffsetTop + this.boxHeight - winHeight, 0);
      var imageHeightMin = this.boxHeight + (maxOffset - minOffset) * (1 - this.speed) | 0;
      var imageOffsetMin = (this.boxOffsetTop - maxOffset) * (1 - this.speed) | 0;
      var margin;

      if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
        this.imageWidth    = imageHeightMin * this.aspectRatio | 0;
        this.imageHeight   = imageHeightMin;
        this.offsetBaseTop = imageOffsetMin;

        margin = this.imageWidth - this.boxWidth;

        if (this.positionX == 'left') {
          this.offsetLeft = 0;
        } else if (this.positionX == 'right') {
          this.offsetLeft = - margin;
        } else if (!isNaN(this.positionX)) {
          this.offsetLeft = Math.max(this.positionX, - margin);
        } else {
          this.offsetLeft = - margin / 2 | 0;
        }
      } else {
        this.imageWidth    = this.boxWidth;
        this.imageHeight   = this.boxWidth / this.aspectRatio | 0;
        this.offsetLeft    = 0;

        margin = this.imageHeight - imageHeightMin;

        if (this.positionY == 'top') {
          this.offsetBaseTop = imageOffsetMin;
        } else if (this.positionY == 'bottom') {
          this.offsetBaseTop = imageOffsetMin - margin;
        } else if (!isNaN(this.positionY)) {
          this.offsetBaseTop = imageOffsetMin + Math.max(this.positionY, - margin);
        } else {
          this.offsetBaseTop = imageOffsetMin - margin / 2 | 0;
        }
      }
    },

    render: function() {
      var scrollTop    = Parallax.scrollTop;
      var scrollLeft   = Parallax.scrollLeft;
      var overScroll   = this.overScrollFix ? Parallax.overScroll : 0;
      var scrollBottom = scrollTop + Parallax.winHeight;

      if (this.boxOffsetBottom > scrollTop && this.boxOffsetTop <= scrollBottom) {
        this.visibility = 'visible';
        this.mirrorTop = this.boxOffsetTop  - scrollTop;
        this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
        this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);
      } else {
        this.visibility = 'hidden';
      }

      this.$mirror.css({
        transform: 'translate3d('+this.mirrorLeft+'px, '+(this.mirrorTop - overScroll)+'px, 0px)',
        visibility: this.visibility,
        height: this.boxHeight,
        width: this.boxWidth
      });

      this.$slider.css({
        transform: 'translate3d('+this.offsetLeft+'px, '+this.offsetTop+'px, 0px)',
        position: 'absolute',
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: 'none'
      });
    }
  });


  // Parallax Static Methods

  $.extend(Parallax, {
    scrollTop:    0,
    scrollLeft:   0,
    winHeight:    0,
    winWidth:     0,
    docHeight:    1 << 30,
    docWidth:     1 << 30,
    sliders:      [],
    isReady:      false,
    isFresh:      false,
    isBusy:       false,

    setup: function() {
      if (this.isReady) return;

      var self = this;

      var $doc = $(document), $win = $(window);

      var loadDimensions = function() {
        Parallax.winHeight = $win.height();
        Parallax.winWidth  = $win.width();
        Parallax.docHeight = $doc.height();
        Parallax.docWidth  = $doc.width();
      };

      var loadScrollPosition = function() {
        var winScrollTop  = $win.scrollTop();
        var scrollTopMax  = Parallax.docHeight - Parallax.winHeight;
        var scrollLeftMax = Parallax.docWidth  - Parallax.winWidth;
        Parallax.scrollTop  = Math.max(0, Math.min(scrollTopMax,  winScrollTop));
        Parallax.scrollLeft = Math.max(0, Math.min(scrollLeftMax, $win.scrollLeft()));
        Parallax.overScroll = Math.max(winScrollTop - scrollTopMax, Math.min(winScrollTop, 0));
      };

      $win.on('resize.px.parallax load.px.parallax', function() {
          loadDimensions();
          self.refresh();
          Parallax.isFresh = false;
          Parallax.requestRender();
        })
        .on('scroll.px.parallax load.px.parallax', function() {
          loadScrollPosition();
          Parallax.requestRender();
        });

      loadDimensions();
      loadScrollPosition();

      this.isReady = true;

      var lastPosition = -1;

      function frameLoop() {
        if (lastPosition == window.pageYOffset) {   // Avoid overcalculations
          window.requestAnimationFrame(frameLoop);
          return false;
        } else lastPosition = window.pageYOffset;

        self.render();
        window.requestAnimationFrame(frameLoop);
      }

      frameLoop();
    },

    configure: function(options) {
      if (typeof options == 'object') {
        delete options.refresh;
        delete options.render;
        $.extend(this.prototype, options);
      }
    },

    refresh: function() {
      $.each(this.sliders, function(){ this.refresh(); });
      this.isFresh = true;
    },

    render: function() {
      this.isFresh || this.refresh();
      $.each(this.sliders, function(){ this.render(); });
    },

    requestRender: function() {
      var self = this;
      self.render();
      self.isBusy = false;
    },
    destroy: function(el){
      var i,
          parallaxElement = $(el).data('px.parallax');
      parallaxElement.$mirror.remove();
      for(i=0; i < this.sliders.length; i+=1){
        if(this.sliders[i] == parallaxElement){
          this.sliders.splice(i, 1);
        }
      }
      $(el).data('px.parallax', false);
      if(this.sliders.length === 0){
        $(window).off('scroll.px.parallax resize.px.parallax load.px.parallax');
        this.isReady = false;
        Parallax.isSetup = false;
      }
    }
  });


  // Parallax Plugin Definition

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var options = typeof option == 'object' && option;

      if (this == window || this == document || $this.is('body')) {
        Parallax.configure(options);
      }
      else if (!$this.data('px.parallax')) {
        options = $.extend({}, $this.data(), options);
        $this.data('px.parallax', new Parallax(this, options));
      }
      else if (typeof option == 'object')
      {
        $.extend($this.data('px.parallax'), options);
      }
      if (typeof option == 'string') {
        if(option == 'destroy'){
            Parallax.destroy(this);
        }else{
          Parallax[option]();
        }
      }
    });
  }

  var old = $.fn.parallax;

  $.fn.parallax             = Plugin;
  $.fn.parallax.Constructor = Parallax;


  // Parallax No Conflict

  $.fn.parallax.noConflict = function () {
    $.fn.parallax = old;
    return this;
  };


  // Parallax Data-API

  $( function () { 
    $('[data-parallax="scroll"]').parallax(); 
  });

}(jQuery, window, document));

// Когда пользователь прокручивает страницу, выполните myFunction
window.onscroll = function() {myFunction()};

// Получить навигатор
var navbar = document.getElementById("navbar");

// Получить смещение позиции навигационной панели
var sticky = navbar.offsetTop;

// Добавить класс sticky к навигационной панели, когда вы достигнете ее положения прокрутки. Удалите "sticky", когда вы покидаете положение прокрутки
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
$(document).ready(function() {
 $('.nav__burger,.close').click(function(event){ //при клике на бургер что дожно происхоидть
 	$('.nav__burger,.mobile,.close').toggleClass('active');//когда человек будет нажажимать на бургер будет добавляться класс active
 	$('body').toggleClass('lock');
 });
});

var swiper = new Swiper('.mySwiper', {
  autoplay: {
    delay: 4000,
  },
});
$('.nav__logo-container').on('mousemove', (e) => {
	const x = e.pageX / $(window).width();
	const y = e.pageY / $(window).height();

	$('.layer').css(
		'transform',
		'translate3d(-' + x * 40 + 'px,-' + y * 50 + 'px, 0px)'
   // 30 - это коэфициент, задающий скорость параллакса, его можно менять
	);
});
$(document).ready(function() {
 $('.mobile__item-triger').click(function(){ //при клике на бургер что дожно происхоидть
 	 if ($('.mobile__list').hasClass('one')) {
 	 	$('.mobile__item-triger').not($(this)).removeClass('active-mobile-sub-menu')
 	 	$('.mobile__sub-menu').not($(this).next()).slideUp()
 	 }
 	  
 	$(this).toggleClass('active-mobile-sub-menu').next('.mobile__sub-menu').slideToggle();//когда человек будет нажажимать элемент с классом mobile__item-triger будет появляться элемент с классом mobile__sub-menu
 
 });
});

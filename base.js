var $ = function () {
        return new Base();
}

function Base() {

//创建一个数组，来保存获取的节点和节点数组
        this.elements = [];
        this.element
        //获取ID节点
        this.getId = function (id) {
                this.elements.push(document.getElementById(id));
                return this;
        };
        
        //获取元素节点
        this.getTagName = function (tag) {
                var tags = document.getElementsByTagName(tag);
                for (var i = 0; i < tags.length; i ++) {
                        this.elements.push(tags[i]);
                }
                return this;
        };  
}


Base.prototype.css = function (attr, value) {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].style[attr] = value;
        }
        return this;
}

Base.prototype.html = function (str) {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].innerHTML = str;
        }
        return this;
}

Base.prototype.click = function (fn) {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].onclick = fn;
        }
        return this;
}



//前台调用代码

window.onload=function(){
        $().getId('box').css('color','red').css('backgroundColor','black');
        $().getTagName('p').css('color','green').html('标题').click(function(){
                alert('a');
        }).css('backgroundColor','pink');
};


//基础库
function Base() {
//创建一个数组，来保存获取的节点和节点数组
        this.elements = [];
}
//获取ID节点
Base.prototype.getId = function (id) {
        this.elements.push(document.getElementById(id));
        return this;
};

//获取元素节点数组
Base.prototype.getTagName = function (tag) {
        var tags = document.getElementsByTagName(tag);
        for (var i = 0; i < tags.length; i ++) {
                this.elements.push(tags[i]);
        }
        return this;
};

//获取CLASS节点数组
Base.prototype.getClass = function (className, idName) {
        var node = null;
        if (arguments.length == 2) {
                node = document.getElementById(idName);
        } else {
                node = document;
        }
        var all = node.getElementsByTagName('*');
        for (var i = 0; i < all.length; i ++) {
                if (all[i].className == className) {
                        this.elements.push(all[i]);
                }
        }
        return this;
}

//获取某一个节点
Base.prototype.getElement = function (num) {        
        var element = this.elements[num];
        this.elements = [];
        this.elements[0] = element;
        return this;
};

//设置CSS
Base.prototype.css = function (attr, value) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (arguments.length == 1) {
                        if (typeof window.getComputedStyle != 'undefined') {//W3C
                                return window.getComputedStyle(this.elements[i], null)[attr];
                        } else if (typeof this.elements[i].currentStyle != 'undeinfed') {//IE
                                return this.elements[i].currentStyle[attr];
                        }
                }
                this.elements[i].style[attr] = value;
        }
        return this;
}

//设置innerHTML
Base.prototype.html = function (str) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (arguments.length == 0) {
                        return this.elements[i].innerHTML;
                }
                this.elements[i].innerHTML = str;
        }
        return this;
}

//触发点击事件
Base.prototype.click = function (fn) {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].onclick = fn;
        }
        return this;
}

//获取ID节点
Base.prototype.getId = function (id) {
        this.elements.push(document.getElementById(id));
        return this;
};

//获取元素节点数组
Base.prototype.getTagName = function (tag) {
        var tags = document.getElementsByTagName(tag);
        for (var i = 0; i < tags.length; i ++) {
                this.elements.push(tags[i]);
        }
        return this;
};

//获取CLASS节点数组
Base.prototype.getClass = function (className, idName) {
        var node = null;
        if (arguments.length == 2) {
                node = document.getElementById(idName);
        } else {
                node = document;
        }
        var all = node.getElementsByTagName('*');
        for (var i = 0; i < all.length; i ++) {
                if (all[i].className == className) {
                        this.elements.push(all[i]);
                }
        }
        return this;
}

//获取某一个节点
Base.prototype.getElement = function (num) {        
        var element = this.elements[num];
        this.elements = [];
        this.elements[0] = element;
        return this;
};

//设置CSS
Base.prototype.css = function (attr, value) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (arguments.length == 1) {
                        if (typeof window.getComputedStyle != 'undefined') {//W3C
                                return window.getComputedStyle(this.elements[i], null)[attr];
                        } else if (typeof this.elements[i].currentStyle != 'undeinfed') {//IE
                                return this.elements[i].currentStyle[attr];
                        }
                }
                this.elements[i].style[attr] = value;
        }
        return this;
}

//添加Class
Base.prototype.addClass = function (className) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (!this.elements[i].className.match(new RegExp('(\\s|^)' +className +'(\\s|$)'))) {
                        this.elements[i].className += ' ' + className;
                }
        }
        return this;
}

//移除Class
Base.prototype.removeClass = function (className) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (this.elements[i].className.match(new RegExp('(\\s|^)' +className +'(\\s|$)'))) {
                        this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' +className +'(\\s|$)'), ' ');
                }
        }
        return this;
}

//添加link或style的CSS规则
Base.prototype.addRule = function (num, selectorText, cssText, position) {
        var sheet = document.styleSheets[num];
        if (typeof sheet.insertRule != 'undefined') {//W3C
                sheet.insertRule(selectorText + '{' + cssText + '}', position);
        } else if (typeof sheet.addRule != 'undefined') {//IE
                sheet.addRule(selectorText, cssText, position);
        }
        return this;
}

//移除link或style的CSS规则
Base.prototype.removeRule = function (num, index) {
        var sheet = document.styleSheets[num];
        if (typeof sheet.deleteRule != 'undefined') {//W3C
                sheet.deleteRule(index);
        } else if (typeof sheet.removeRule != 'undefined') {//IE
                sheet.removeRule(index);
        }
        return this;
}

//设置innerHTML
Base.prototype.html = function (str) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (arguments.length == 0) {
                        return this.elements[i].innerHTML;
                }
                this.elements[i].innerHTML = str;
        }
        return this;
}

//触发点击事件
Base.prototype.click = function (fn) {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].onclick = fn;
        }
        return this;
}




/*
*封装下拉菜单
*/


//前台调用
var $ = function (_this) {
        return new Base(_this);
}

//基础库
function Base(_this) {
        //创建一个数组，来保存获取的节点和节点数组
        this.elements = [];
        if (_this != undefined) {    //_this是一个对象，undefined也是一个对象，区别与typeof返回的带单引号的'undefined'
                this.elements[0] = _this;
        }
}

//获取ID节点
Base.prototype.getId = function (id) {
        this.elements.push(document.getElementById(id));
        return this;
};

//获取元素节点数组
Base.prototype.getTagName = function (tag) {
        var tags = document.getElementsByTagName(tag);
        for (var i = 0; i < tags.length; i ++) {
                this.elements.push(tags[i]);
        }
        return this;
};

//获取CLASS节点数组
Base.prototype.getClass = function (className, idName) {
        var node = null;
        if (arguments.length == 2) {
                node = document.getElementById(idName);
        } else {
                node = document;
        }
        var all = node.getElementsByTagName('*');
        for (var i = 0; i < all.length; i ++) {
                if (all[i].className == className) {
                        this.elements.push(all[i]);
                }
        }
        return this;
}

//获取某一个节点
Base.prototype.getElement = function (num) {        
        var element = this.elements[num];
        this.elements = [];
        this.elements[0] = element;
        return this;
};

//设置CSS
Base.prototype.css = function (attr, value) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (arguments.length == 1) {
                        if (typeof window.getComputedStyle != 'undefined') {//W3C
                                return window.getComputedStyle(this.elements[i], null)[attr];
                        } else if (typeof this.elements[i].currentStyle != 'undeinfed') {//IE
                                return this.elements[i].currentStyle[attr];
                        }
                }
                this.elements[i].style[attr] = value;
        }
        return this;
}

//添加Class
Base.prototype.addClass = function (className) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (!this.elements[i].className.match(new RegExp('(\\s|^)' +className +'(\\s|$)'))) {
                        this.elements[i].className += ' ' + className;
                }
        }
        return this;
}

//移除Class
Base.prototype.removeClass = function (className) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (this.elements[i].className.match(new RegExp('(\\s|^)' +className +'(\\s|$)'))) {
                        this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' +className +'(\\s|$)'), ' ');
                }
        }
        return this;
}

//添加link或style的CSS规则
Base.prototype.addRule = function (num, selectorText, cssText, position) {
        var sheet = document.styleSheets[num];
        if (typeof sheet.insertRule != 'undefined') {//W3C
                sheet.insertRule(selectorText + '{' + cssText + '}', position);
        } else if (typeof sheet.addRule != 'undefined') {//IE
                sheet.addRule(selectorText, cssText, position);
        }
        return this;
}

//移除link或style的CSS规则
Base.prototype.removeRule = function (num, index) {
        var sheet = document.styleSheets[num];
        if (typeof sheet.deleteRule != 'undefined') {//W3C
                sheet.deleteRule(index);
        } else if (typeof sheet.removeRule != 'undefined') {//IE
                sheet.removeRule(index);
        }
        return this;
}

//设置innerHTML
Base.prototype.html = function (str) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (arguments.length == 0) {
                        return this.elements[i].innerHTML;
                }
                this.elements[i].innerHTML = str;
        }
        return this;
}

//设置鼠标移入移出方法
Base.prototype.hover = function (over, out) {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].onmouseover = over;
                this.elements[i].onmouseout = out;
        }
        return this;
};

//设置显示
Base.prototype.show = function () {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].style.display = 'block';
        }
        return this;
}

//设置隐藏
Base.prototype.hide = function () {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].style.display = 'none';
        }
        return this;
}

//触发点击事件
Base.prototype.click = function (fn) {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].onclick = fn;
        }
        return this;
}



/*
*遮罩锁屏
*/


//获取ID节点
Base.prototype.getId = function (id) {
        this.elements.push(document.getElementById(id));
        return this;
};

//获取元素节点数组
Base.prototype.getTagName = function (tag) {
        var tags = document.getElementsByTagName(tag);
        for (var i = 0; i < tags.length; i ++) {
                this.elements.push(tags[i]);
        }
        return this;
};

//获取CLASS节点数组
Base.prototype.getClass = function (className, idName) {
        var node = null;
        if (arguments.length == 2) {
                node = document.getElementById(idName);
        } else {
                node = document;
        }
        var all = node.getElementsByTagName('*');
        for (var i = 0; i < all.length; i ++) {
                if (all[i].className == className) {
                        this.elements.push(all[i]);
                }
        }
        return this;
}

//获取某一个节点
Base.prototype.getElement = function (num) {        
        var element = this.elements[num];
        this.elements = [];
        this.elements[0] = element;
        return this;
};

//设置CSS
Base.prototype.css = function (attr, value) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (arguments.length == 1) {
                        if (typeof window.getComputedStyle != 'undefined') {//W3C
                                return window.getComputedStyle(this.elements[i], null)[attr];
                        } else if (typeof this.elements[i].currentStyle != 'undeinfed') {//IE
                                return this.elements[i].currentStyle[attr];
                        }
                }
                this.elements[i].style[attr] = value;
        }
        return this;
}

//添加Class
Base.prototype.addClass = function (className) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (!this.elements[i].className.match(new RegExp('(\\s|^)' +className +'(\\s|$)'))) {
                        this.elements[i].className += ' ' + className;
                }
        }
        return this;
}

//移除Class
Base.prototype.removeClass = function (className) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (this.elements[i].className.match(new RegExp('(\\s|^)' +className +'(\\s|$)'))) {
                        this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' +className +'(\\s|$)'), ' ');
                }
        }
        return this;
}

//添加link或style的CSS规则
Base.prototype.addRule = function (num, selectorText, cssText, position) {
        var sheet = document.styleSheets[num];
        if (typeof sheet.insertRule != 'undefined') {//W3C
                sheet.insertRule(selectorText + '{' + cssText + '}', position);
        } else if (typeof sheet.addRule != 'undefined') {//IE
                sheet.addRule(selectorText, cssText, position);
        }
        return this;
}

//移除link或style的CSS规则
Base.prototype.removeRule = function (num, index) {
        var sheet = document.styleSheets[num];
        if (typeof sheet.deleteRule != 'undefined') {//W3C
                sheet.deleteRule(index);
        } else if (typeof sheet.removeRule != 'undefined') {//IE
                sheet.removeRule(index);
        }
        return this;
}

//设置innerHTML
Base.prototype.html = function (str) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (arguments.length == 0) {
                        return this.elements[i].innerHTML;
                }
                this.elements[i].innerHTML = str;
        }
        return this;
}

//设置鼠标移入移出方法
Base.prototype.hover = function (over, out) {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].onmouseover = over;
                this.elements[i].onmouseout = out;
        }
        return this;
};

//设置显示
Base.prototype.show = function () {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].style.display = 'block';
        }
        return this;
}

//设置隐藏
Base.prototype.hide = function () {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].style.display = 'none';
        }
        return this;
}

//设置物体居中
Base.prototype.center = function (width, height) {
        var top = (document.documentElement.clientHeight - height) / 2;
        var left = (document.documentElement.clientWidth - width) / 2;
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].style.top = top + 'px';
                this.elements[i].style.left = left + 'px';
        }
        return this;
}

//触发点击事件
Base.prototype.click = function (fn) {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].onclick = fn;
        }
        return this;
}

//触发浏览器窗口事件
Base.prototype.resize = function (fn) {
        window.onresize = fn;
        return this;
}
//锁屏功能 
Base.prototype.lock=function(){
        var innerWidth=window.innerWidth||document.documentElement.clientWidth;
        var innerHeight=window.innerHeight||document.documentElement.clientHeight;
        for(var i=0;i<this.elements.length;i++){                        
                this.elements[i].style.width=innerWidth+'px';
                this.elements[i].style.height=innerHeight+'px';
                this.elements[i].style.display='block';
        }
        return this;
}
//解锁功能
Base.prototype.unlock=function(){
        for(var i=0;i<this.elements.length;i++){
                this.elements[i].style.display='none';
        }
}



//跨浏览器添加事件绑定
function addEvent(obj, type, fn) {
        if (typeof obj.addEventListener != 'undefined') {
                obj.addEventListener(type, fn, false);
        } else {
                if (!obj.events) obj.events = {};
                if (!obj.events[type]) {
                        obj.events[type] = [];
                        if (obj['on' + type]) obj.events[type][0] = fn;
                } else {
                        if (addEvent.equal(obj.events[type], fn)) return false;
                }
                obj.events[type][addEvent.ID++] = fn;
                obj['on' + type] = addEvent.exec;
        }
}

addEvent.ID = 1;
addEvent.exec = function (event) {
        var e = event || addEvent.fixEvent(window.event);
        var es = this.events[e.type];
        for (var i in es) {
                es[i].call(this, e);
        }
};
addEvent.equal = function (es, fn) {
        for (var i in es) {
                if (es[i] == fn) return true;
        }
        return false;
}
addEvent.fixEvent = function (event) {
        event.preventDefault = addEvent.fixEvent.preventDefault;
        event.stopPropagation = addEvent.fixEvent.stopPropagation;
        event.target = event.srcElement;
        return event;
};
addEvent.fixEvent.preventDefault = function () {
        this.returnValue = false;
};
addEvent.fixEvent.stopPropagation = function () {
        this.cancelBubble = true;
};
//跨浏览器删除事件
function removeEvent(obj, type, fn) {
        if (typeof obj.removeEventListener != 'undefined') {
                obj.removeEventListener(type, fn, false);
        } else {
                if(obj.events){
                        for (var i in obj.events[type]) {
                                if (obj.events[type][i] == fn) {
                                        delete obj.events[type][i];
                                }
                        }
                }
        }
}


//跨浏览器获取视口大小
function getInner() {
        if (typeof window.innerWidth != 'undefined') {
                return {
                        width : window.innerWidth,
                        height : window.innerHeight
                }
        } else {
                return {
                        width : document.documentElement.clientWidth,
                        height : document.documentElement.clientHeight
                }
        }
}

//跨浏览器获取Style
function getStyle(element, attr) {
        if (typeof window.getComputedStyle != 'undefined') {//W3C
                return window.getComputedStyle(element, null)[attr];
        } else if (typeof element.currentStyle != 'undeinfed') {//IE
                return element.currentStyle[attr];
        }
}


//判断class是否存在
function hasClass(element, className) {
        return element.className.match(new RegExp('(\\s|^)' +className +'(\\s|$)'));
}


//跨浏览器添加link规则
function insertRule(sheet, selectorText, cssText, position) {
        if (typeof sheet.insertRule != 'undefined') {//W3C
                sheet.insertRule(selectorText + '{' + cssText + '}', position);
        } else if (typeof sheet.addRule != 'undefined') {//IE
                sheet.addRule(selectorText, cssText, position);
        }
}

//跨浏览器移出link规则
function deleteRule(sheet, index) {
        if (typeof sheet.deleteRule != 'undefined') {//W3C
                sheet.deleteRule(index);
        } else if (typeof sheet.removeRule != 'undefined') {//IE
                sheet.removeRule(index);
        }
}



//前台调用
var $ = function (_this) {
        return new Base(_this);
}
//基础库
function Base(_this) {
        this.elements = [];
        if (_this != undefined) {    
                this.elements[0] = _this;
        }
}
//获取ID节点
Base.prototype.getId = function (id) {
        this.elements.push(document.getElementById(id));
        return this;
};
//获取元素节点数组
Base.prototype.getTagName = function (tag) {
        var tags = document.getElementsByTagName(tag);
        for (var i = 0; i < tags.length; i ++) {
                this.elements.push(tags[i]);
        }
        return this;
};
//获取CLASS节点数组
Base.prototype.getClass = function (className, idName) {
        var node = null;
        if (arguments.length == 2) {
                node = document.getElementById(idName);
        } else {
                node = document;
        }
        var all = node.getElementsByTagName('*');
        for (var i = 0; i < all.length; i ++) {
                if (all[i].className == className) {
                        this.elements.push(all[i]);
                }
        }
        return this;
}
//获取某一个节点，并返回这个节点对象
Base.prototype.getElement = function (num) {        
        return this.elements[num];
};
//获取某一个节点，并且Base对象
Base.prototype.eq = function (num) {
        var element = this.elements[num];
        this.elements = [];
        this.elements[0] = element;
        return this;
}
//设置CSS
Base.prototype.css = function (attr, value) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (arguments.length == 1) {
                        return getStyle(this.elements[i], attr);
                }
                this.elements[i].style[attr] = value;
        }
        return this;
}
//添加Class
Base.prototype.addClass = function (className) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (!hasClass(this.elements[i], className)) {
                        this.elements[i].className += ' ' + className;
                }
        }
        return this;
}
//移除Class
Base.prototype.removeClass = function (className) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (hasClass(this.elements[i], className)) {
                        this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' +className +'(\\s|$)'), ' ');
                }
        }
        return this;
}
//添加link或style的CSS规则
Base.prototype.addRule = function (num, selectorText, cssText, position) {
        var sheet = document.styleSheets[num];
        insertRule(sheet, selectorText, cssText, position);
        return this;
}
//移除link或style的CSS规则
Base.prototype.removeRule = function (num, index) {
        var sheet = document.styleSheets[num];
        deleteRule(sheet, index);
        return this;
}
//设置innerHTML
Base.prototype.html = function (str) {
        for (var i = 0; i < this.elements.length; i ++) {
                if (arguments.length == 0) {
                        return this.elements[i].innerHTML;
                }
                this.elements[i].innerHTML = str;
        }
        return this;
}
//设置鼠标移入移出方法
Base.prototype.hover = function (over, out) {
        for (var i = 0; i < this.elements.length; i ++) {
                addEvent(this.elements[i], 'mouseover', over);
                addEvent(this.elements[i], 'mouseout', out);
        }
        return this;
};
//设置显示
Base.prototype.show = function () {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].style.display = 'block';
        }
        return this;
}
//设置隐藏
Base.prototype.hide = function () {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].style.display = 'none';
        }
        return this;
}
//设置物体居中
Base.prototype.center = function (width, height) {
        var top = (getInner().height - width) / 2;
        var left = (getInner().width - height) / 2;
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].style.top = top + 'px';
                this.elements[i].style.left = left + 'px';
        }
        return this;
}
//锁屏功能
Base.prototype.lock = function () {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].style.width = getInner().width + 'px';
                this.elements[i].style.height = getInner().height + 'px';
                this.elements[i].style.display = 'block';
                document.documentElement.style.overflow = 'hidden';
                addEvent(window, 'scroll', scrollTop);
        }
        return this;
};
Base.prototype.unlock = function () {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].style.display = 'none';
                document.documentElement.style.overflow = 'auto';
                removeEvent(window, 'scroll', scrollTop);
        }
        return this;
}
//触发点击事件
Base.prototype.click = function (fn) {
        for (var i = 0; i < this.elements.length; i ++) {
                this.elements[i].onclick = fn;
        }
        return this;
}
//触发浏览器窗口事件
Base.prototype.resize = function (fn) {
        for (var i = 0; i < this.elements.length; i ++) {
                var element = this.elements[i];
                addEvent(window, 'resize', function () {
                        fn();
                        if (element.offsetLeft > getInner().width - element.offsetWidth) {
                                element.style.left = getInner().width - element.offsetWidth + 'px';
                        }
                        if (element.offsetTop > getInner().height - element.offsetHeight) {
                                element.style.top = getInner().height - element.offsetHeight + 'px';
                        }
                });
        }
        return this;
}
//插件入口
Base.prototype.extend = function (name, fn) {
        Base.prototype[name] = fn;
};


$().extend('drag', function (tags) {
        for (var i = 0; i < this.elements.length; i ++) {
                addEvent(this.elements[i], 'mousedown', function (e) {
                        if (trim(this.innerHTML).length == 0) e.preventDefault();
                        var _this = this;
                        var diffX = e.clientX - _this.offsetLeft;
                        var diffY = e.clientY - _this.offsetTop;
                        var flag = false;                        
                        for (var i = 0; i < tags.length; i ++) {
                                if (e.target == tags[i]) {
                                        flag = true;                                        
                                        break;
                                }
                        }                        
                        if (flag) {
                                addEvent(document, 'mousemove', move);
                                addEvent(document, 'mouseup', up);
                        } else {
                                removeEvent(document, 'mousemove', move);
                                removeEvent(document, 'mouseup', up);
                        }                        
                        function move(e) {
                                var left = e.clientX - diffX;
                                var top = e.clientY - diffY;                                
                                if (left < 0) {
                                        left = 0;
                                } else if (left > getInner().width - _this.offsetWidth) {
                                        left = getInner().width - _this.offsetWidth;
                                }                                
                                if (top < 0) {
                                        top = 0;
                                } else if (top > getInner().height - _this.offsetHeight) {
                                        top = getInner().height - _this.offsetHeight;
                                }                                
                                _this.style.left = left + 'px';
                                _this.style.top = top + 'px';                                
                                if (typeof _this.setCapture != 'undefined') {
                                        _this.setCapture();
                                } 
                        }                        
                        function up() {
                                removeEvent(document, 'mousemove', move);
                                removeEvent(document, 'mouseup', up);
                                if (typeof _this.releaseCapture != 'undefined') {
                                        _this.releaseCapture();
                                }
                        }
                });
        }
        return this;
});

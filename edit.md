##summernote 编辑器的bug以及解决方案

#在某元素后面按回车会自动复制当前段落的内容的bug

解决方法，搜索 var insertAfter = function (node, preceding) 

找到源代码：

```
var insertAfter = function (node, preceding) {
    var next = preceding.nextSibling, parent = preceding.parentNode;
    if (next) {
        parent.insertBefore(node, next);
    } else {
        parent.appendChild(node);
    }
    return node;
};
```

替换成：

```
var insertAfter = function (node, preceding) {
    var next = preceding.nextSibling, parent = preceding.parentNode;
    var p=document.createElement("p");
    if (next) {
	    parent.insertBefore(p, next);
    } else {
        parent.appendChild(p);
    }
    //console.log(node);
    return p;
};

```

#让上传的图片宽度不超过编辑器的宽度

覆盖原有方法即可

```
var createImage = function (sUrl, filename) {
    return $.Deferred(function (deferred) {
    	var $img = $('<img>');
    	$img.one('load', function () {
	    	$img.off('error abort');
	    	deferred.resolve($img);
	    }).one('error abort', function () {
	        $img.off('load').detach();
	        deferred.reject($img);
	    }).css({
	        display: 'none',
	        maxWidth: '100%',
	        height: 'auto',
	        with: 'auto'
	    }).appendTo(document.body).attr({
	        'src': sUrl,
	        'data-filename': filename
	    });
    }).promise();
};
```

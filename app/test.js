/*(function() {
  var el = $('a');
  var links = [];
  for (var i = 0; i < el.length; i++) {
    links.push(el[i].href);
  }

  for (var i = 0; i < links.length; i++) {
    if (el[i].href === links[i]) {
      $(el[i]).detach();
    } else {
      console.log('no match');
    }
  }
})();*/

function logArrEl(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

arr = ['manual', 'hello'];
arr.forEach(logArrEl);

/*var mydivs = $("div");*/
/*for (var i = 0; i < mydivs.length; i++) {
  console.log($(mydivs[i]).html());
}*/

links = ["imalink", "I'm a file", 1, 3];
links.forEach(function(val, index, array) {
  console.log("val:", val);
  console.log("index",index);
  console.log("array",array);
});


var oprop = function(object) {
  for (var prop in obj) {
    if (obj.hasOwnPoperty(prop)) {
      console.log("obj." + prop + ":" + obj[prop]);
    }
  }
}

a = new Array();
b = new Object();
b.name = "charles";
a.push('this string')
a[0] = b;

function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
};

var obj = new Counter();
obj.add([2, 5, 9]);
obj.count
obj.sum

var oprop = function(obj) {
  for (var prop in obj) {
    if (obj.hasOwnPoperty(prop)) {
      console.log("obj." + prop + ":" + obj[prop]);
    }
  }
}

var newarr = ['_', 't', 'a', 'n', 'i', 'f', ']'];

['_', 't', 'a', 'n', 'i', 'f', ']'].forEach(function (value, index, array) {
    this.push(String.fromCharCode(value.charCodeAt() + index + 2))
}, out = [])

out.join('')

document.body;

$("a")

var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

$('a')
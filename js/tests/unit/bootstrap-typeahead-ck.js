$(function(){module("bootstrap-typeahead");test("should be defined on jquery object",function(){ok($(document.body).typeahead,"alert method is defined")});test("should return element",function(){ok($(document.body).typeahead()[0]==document.body,"document.body returned")});test("should listen to an input",function(){var a=$("<input />");a.typeahead();ok(a.data("events").blur,"has a blur event");ok(a.data("events").keypress,"has a keypress event");ok(a.data("events").keyup,"has a keyup event");$.browser.webkit||$.browser.msie?ok(a.data("events").keydown,"has a keydown event"):ok(a.data("events").keydown,"does not have a keydown event")});test("should create a menu",function(){var a=$("<input />");ok(a.typeahead().data("typeahead").$menu,"has a menu")});test("should listen to the menu",function(){var a=$("<input />"),b=a.typeahead().data("typeahead").$menu;ok(b.data("events").mouseover,"has a mouseover(pseudo: mouseenter)");ok(b.data("events").click,"has a click")});test("should show menu when query entered",function(){var a=$("<input />").typeahead({source:["aa","ab","ac"]}),b=a.data("typeahead");a.val("a");b.lookup();ok(b.$menu.is(":visible"),"typeahead is visible");equals(b.$menu.find("li").length,3,"has 3 items in menu");equals(b.$menu.find(".active").length,1,"one item is active");b.$menu.remove()});test("should hide menu when query entered",function(){stop();var a=$("<input />").typeahead({source:["aa","ab","ac"]}),b=a.data("typeahead");a.val("a");b.lookup();ok(b.$menu.is(":visible"),"typeahead is visible");equals(b.$menu.find("li").length,3,"has 3 items in menu");equals(b.$menu.find(".active").length,1,"one item is active");a.blur();setTimeout(function(){ok(!b.$menu.is(":visible"),"typeahead is no longer visible");start()},200);b.$menu.remove()});test("should set next item when down arrow is pressed",function(){var a=$("<input />").typeahead({source:["aa","ab","ac"]}),b=a.data("typeahead");a.val("a");b.lookup();ok(b.$menu.is(":visible"),"typeahead is visible");equals(b.$menu.find("li").length,3,"has 3 items in menu");equals(b.$menu.find(".active").length,1,"one item is active");ok(b.$menu.find("li").first().hasClass("active"),"first item is active");a.trigger({type:"keypress",keyCode:40});ok(b.$menu.find("li").first().next().hasClass("active"),"second item is active");a.trigger({type:"keypress",keyCode:38});ok(b.$menu.find("li").first().hasClass("active"),"first item is active");b.$menu.remove()});test("should set input value to selected item",function(){var a=$("<input />").typeahead({source:["aa","ab","ac"]}),b=a.data("typeahead");a.val("a");b.lookup();$(b.$menu.find("li")[2]).mouseover().click();equals(a.val(),"ac","input value was correctly set");ok(!b.$menu.is(":visible"),"the menu was hidden");b.$menu.remove()})});
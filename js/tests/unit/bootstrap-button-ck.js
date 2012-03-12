$(function(){module("bootstrap-buttons");test("should be defined on jquery object",function(){ok($(document.body).button,"button method is defined")});test("should return element",function(){ok($(document.body).button()[0]==document.body,"document.body returned")});test("should return set state to loading",function(){var a=$('<button class="btn" data-loading-text="fat">mdo</button>');equals(a.html(),"mdo","btn text equals mdo");a.button("loading");equals(a.html(),"fat","btn text equals fat");stop();setTimeout(function(){ok(a.attr("disabled"),"btn is disabled");ok(a.hasClass("disabled"),"btn has disabled class");start()},0)});test("should return reset state",function(){var a=$('<button class="btn" data-loading-text="fat">mdo</button>');equals(a.html(),"mdo","btn text equals mdo");a.button("loading");equals(a.html(),"fat","btn text equals fat");stop();setTimeout(function(){ok(a.attr("disabled"),"btn is disabled");ok(a.hasClass("disabled"),"btn has disabled class");start();stop()},0);a.button("reset");equals(a.html(),"mdo","btn text equals mdo");setTimeout(function(){ok(!a.attr("disabled"),"btn is not disabled");ok(!a.hasClass("disabled"),"btn does not have disabled class");start()},0)});test("should toggle active",function(){var a=$('<button class="btn">mdo</button>');ok(!a.hasClass("active"),"btn does not have active class");a.button("toggle");ok(a.hasClass("active"),"btn has class active")});test("should toggle active when btn children are clicked",function(){var a=$('<button class="btn" data-toggle="button">mdo</button>'),b=$("<i></i>");a.append(b).appendTo($("#qunit-fixture"));ok(!a.hasClass("active"),"btn does not have active class");b.click();ok(a.hasClass("active"),"btn has class active")});test("should toggle active when btn children are clicked within btn-group",function(){var a=$('<div class="btn-group" data-toggle="buttons-checkbox"></div>'),b=$('<button class="btn">fat</button>'),c=$("<i></i>");a.append(b.append(c)).appendTo($("#qunit-fixture"));ok(!b.hasClass("active"),"btn does not have active class");c.click();ok(b.hasClass("active"),"btn has class active")})});
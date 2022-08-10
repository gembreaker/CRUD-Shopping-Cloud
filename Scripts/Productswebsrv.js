// Before you can style a web page you have to wait until all the web tags
// have been loaded. In JavaScript you would add a function to the
// body page load event, in jQuery do it this way.
$(function ()
{
	$.ajaxSetup({cache:false});
	
	GetPosts();
	GetProductTable();
	JeweleryPagination();
	MensClothesPagination();
	WomensClothesPagination();
	ElectronicsPagination();
		
	$('#ajaxgetallproducts-button').click(function() {
		location.reload();
	});

	$("#ajaxgetall-button").click(function(e)
	{
		GetAllPosts();
		e.preventDefault();
		return false;
	});

	$("#ajaxpost-button").click(function(e)
	{
		SendPost();
		e.preventDefault();
		return false;
	});
	
	$("#ajaxdelete-button").click(function(e)
	{
		DeletePost();
		e.preventDefault();
		return false;
	});
	
	$("#ajaxgetbyid-button").click(function(e)
	{
		GetPost();
		e.preventDefault();
		return false;
	});	

	$("#ajaxgetbyfiltername-button").click(function(e)
	{
		FilterPost();
		e.preventDefault();
		return false;
	});	
});

function GetPosts()
{
	$.ajax({
		cache: false,
		type: "GET",
		url: "https://fakestoreapi.com/products",
		data: '',
		contentType: "application/json; charset=utf-8",     // <-- may need to remove charset=utf-8 for IE
		dataType: "json",
		success: GotAllPosts,
		error: (req, status, error) => window.alert("AJAX error")
	});	
}

function GetAllPosts()
{
	$.ajax({
		cache: false,
		type: "GET",
		url: "https://fakestoreapi.com/products",
		data: '',
		contentType: "application/json; charset=utf-8",     // <-- may need to remove charset=utf-8 for IE
		dataType: "json",
		success: GotAllPosts,
		error: (req, status, error) => window.alert("AJAX error")
	});	
}

function JeweleryPagination()
{
	$.ajax({
		cache: false,
		type: "GET",
		url: "https://fakestoreapi.com/products/category/jewelery?limit=3",
		data: '',
		contentType: "application/json; charset=utf-8",     // <-- may need to remove charset=utf-8 for IE
		dataType: "json",
		success: Got3Posts,
		error: (req, status, error) => window.alert("AJAX error")
	});	
}

function Got3Posts(json, status, req)
{
	var html = "";

	for(i in json)
	{
		html += `<div class="col-md-4">
		<div class="card mb-4 box-shadow">
		<p id="productid" style="visibility: hidden">` + json[i].id + `</p>
		<img class="card-img-top" alt="` + json[i].title + `" style="height: 325px; width: 325px; display: block;" src="` + json[i].image + `" data-holder-rendered="true" style="text-align: center">
            <div class="card-body">
			<p class="card-text">` + json[i].title + `</p>
			<p class="card-text">£` + json[i].price + `</p>
		</div>
		</div>
		</div>`
	}
	
	$("#load3jewelery").html(html)
}

function MensClothesPagination()
{
	$.ajax({
		cache: false,
		type: "GET",
		url: "https://fakestoreapi.com/products/category/men%20clothing?limit=3",
		data: '',
		contentType: "application/json; charset=utf-8",     // <-- may need to remove charset=utf-8 for IE
		dataType: "json",
		success: Got3PostsMens,
		error: (req, status, error) => window.alert("AJAX error")
	});	
}

function Got3PostsMens(json, status, req)
{
	var html = "";

	for(i in json)
	{
		html += `<div class="col-md-4">
		<div class="card mb-4 box-shadow">
		<p id="productid" style="visibility: hidden">` + json[i].id + `</p>
		<img class="card-img-top" alt="` + json[i].title + `" style="height: 325px; width: 325px; display: block;" src="` + json[i].image + `" data-holder-rendered="true" style="text-align: center">
            <div class="card-body">
			<p class="card-text">` + json[i].title + `</p>
			<p class="card-text">£` + json[i].price + `</p>
		</div>
		</div>
		</div>`
	}
	
	$("#load3mens").html(html)
}

function WomensClothesPagination()
{
	$.ajax({
		cache: false,
		type: "GET",
		url: "https://fakestoreapi.com/products/category/women%20clothing?limit=3",
		data: '',
		contentType: "application/json; charset=utf-8",     // <-- may need to remove charset=utf-8 for IE
		dataType: "json",
		success: Got3PostsWomens,
		error: (req, status, error) => window.alert("AJAX error")
	});	
}

function Got3PostsWomens(json, status, req)
{
	var html = "";

	for(i in json)
	{
		html += `<div class="col-md-4">
		<div class="card mb-4 box-shadow">
		<p id="productid" style="visibility: hidden">` + json[i].id + `</p>
		<img class="card-img-top" alt="` + json[i].title + `" style="height: 325px; width: 325px; display: block;" src="` + json[i].image + `" data-holder-rendered="true" style="text-align: center">
            <div class="card-body">
			<p class="card-text">` + json[i].title + `</p>
			<p class="card-text">£` + json[i].price + `</p>
		</div>
		</div>
		</div>`
	}
	
	$("#load3womens").html(html)
}


function ElectronicsPagination()
{
	$.ajax({
		cache: false,
		type: "GET",
		url: "https://fakestoreapi.com/products/category/electronics?limit=3",
		data: '',
		contentType: "application/json; charset=utf-8",     // <-- may need to remove charset=utf-8 for IE
		dataType: "json",
		success: Got3PostsElec,
		error: (req, status, error) => window.alert("AJAX error")
	});	
}

function Got3PostsElec(json, status, req)
{
	var html = "";

	for(i in json)
	{
		html += `<div class="col-md-4">
		<div class="card mb-4 box-shadow">
		<p id="productid" style="visibility: hidden">` + json[i].id + `</p>
		<img class="card-img-top" alt="` + json[i].title + `" style="height: 325px; width: 325px; display: block;" src="` + json[i].image + `" data-holder-rendered="true" style="text-align: center">
            <div class="card-body">
			<p class="card-text">` + json[i].title + `</p>
			<p class="card-text">£` + json[i].price + `</p>
		</div>
		</div>
		</div>`
	}
	
	$("#load3elecs").html(html)
}

function GotAllPosts(json, status, req)
{
	var html = "";

	for(i in json)
	{
		html += `<div class="col-md-4">
		<div class="card mb-4 box-shadow">
		<p id="productid" style="visibility: hidden">` + json[i].id + `</p>
		<img class="card-img-top" alt="` + json[i].title + `" style="height: 325px; width: 325px; display: block;" src="` + json[i].image + `" data-holder-rendered="true" style="text-align: center">
            <div class="card-body">
			<p class="card-text">` + json[i].title + `</p>
			<p class="card-text">£` + json[i].price + `</p>
		</div>
		</div>
		</div>`
	}
	
	$("#loadtext").html(html)
}

function GetProductTable()
{
	$.ajax({
		cache: false,
		type: "GET",
		url: "https://fakestoreapi.com/products",
		data: '',
		contentType: "application/json; charset=utf-8",     // <-- may need to remove charset=utf-8 for IE
		dataType: "json",
		success: GotProductTable,
		error: (req, status, error) => window.alert("AJAX error")
	});	
}

function GotProductTable(json, status, req)
{
	var html = "";

	for(i in json)
	{
		html += `<tr>
		<td>` + json[i].id +`</td>
		<td>` + json[i].title +`</td>
		<td>£` + json[i].price +`</td>
		<td>` + json[i].description +`</td>
		<td>` + json[i].category +`</td>
		<td>` + json[i].image +`</td>
	  </tr>`
	}
	
	$("#displaytableproducts").html(html)
}

function SendPost()
{
	var data = {
		title: $("#title-text").val(),
		price: parseInt($("#price-text").val()),
		category: $("#category-text").val(),
		description: $("#description-text").val(),
		image: $("#image-text").val(),
	};

	$.ajax({
		cache: false,
		type: "POST",
		url: "https://fakestoreapi.com/products",
		data: JSON.stringify(data),
		contentType: "application/json; charset=utf-8",     // <-- may need to remove charset=utf-8 for IE
		dataType: "json",
		success: GotPostResult,
		error: (req, status, error) => window.alert("AJAX error")
	});	
}

function GotPostResult(json, status, req)
{
	var html = "";

	html += "Successfully added to database: <br/>"
		 +	"<b>Title:</b> "+json.title + "<br/>"
		 +  "<b>Price:</b> "+json.price + "<br/>"
		 +  "<b>Category:</b> "+json.category + "<br/>"
		 +  "<b>Description:</b> "+json.description + "<br/>"
		 +  "<b>Image URL:</b> "+json.image + "<br/>";
	
	$("#postresults").html(html);
}

function DeletePost()
{
	var postId = parseInt($("#id-text").val());
	
	$.ajax({
		cache: false,
		type: "DELETE",
		url: `https://fakestoreapi.com/products/${postId}`,
		data: '',
		contentType: "application/json; charset=utf-8",     // <-- may need to remove charset=utf-8 for IE
		dataType: "json",
		success: (json, status, req) => $("#deleteresults").html("<p>Successfully deleted product.</p>"),
		error: (req, status, error) => window.alert("AJAX error")
	});	
}

function GetPost() {
    var productID = $("#getid-product").val();

    $.ajax({
        cache: false,
        async: true,
        crossDomain: true,
        type: "GET",
        url: "https://fakestoreapi.com/products/" + productID,
        data: '',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: GotGetResultById,
        error: (req, status, error) => window.alert("AJAX error")
    });
}

function GotGetResultById(json, status, req) {
    var html = "";
	html += `<div class="col-md-4">
	<div class="card mb-4 box-shadow">
	<img class="card-img-top" alt="` + json.title + `" style="height: 325px; width: 325px; display: block;" src="` + json.image + `" data-holder-rendered="true" style="text-align: center">
		<div class="card-body">
		<p class="card-text">` + json.title + `</p>
		<p class="card-text">£` + json.price + `</p>
	</div>
	</div>
	</div>`
	$("#getbyidresults").html(html);
}

function GetPost() {
    var productID = $("#getid-product").val();

    $.ajax({
        cache: false,
        async: true,
        crossDomain: true,
        type: "GET",
        url: "https://fakestoreapi.com/products/" + productID,
        data: '',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: GotGetResultById,
        error: (req, status, error) => window.alert("AJAX error")
    });
}

function GotGetResultById(json, status, req) {
    var html = "";
	html += `<tr>
		<td>` + json.id +`</td>
		<td>` + json.title +`</td>
		<td>£` + json.price +`</td>
		<td>` + json.description +`</td>
		<td>` + json.category +`</td>
		<td>` + json.image +`</td>
	  </tr>`
	$("#displaytableproducts").html(html);
}

function FilterPost() {
    var filterName = $("#getfilter-product").val();

    $.ajax({
        cache: false,
        async: true,
        crossDomain: true,
        type: "GET",
        url: "https://fakestoreapi.com/products/category/" + filterName,
        data: '',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: GotGetResultByFilter,
        error: (req, status, error) => window.alert("AJAX error")
    });
}

function GotGetResultByFilter(json, status, req) {
	var html = "";
	for(i in json)
	{
		html += `<div class="col-md-4">
		<div class="card mb-4 box-shadow">
		<img class="card-img-top" alt="` + json[i].title + `" style="height: 325px; width: 325px; display: block;" src="` + json[i].image + `" data-holder-rendered="true" style="text-align: center">
			<div class="card-body">
			<p class="card-text">` + json[i].title + `</p>
			<p class="card-text">£` + json[i].price + `</p>
		</div>
		</div>
		</div>`
	}
	
	$("#loadtext").html(html)
}
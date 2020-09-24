var searchTerm = $("#search-term");
var numRec = $("#numRec");
var startYear = $("#startYear");
var endYear = $("endYear");
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm +
                "&begin_date=" + startYear + "0101" +
                "&end_date=" + endYear + "1231" + "&api-key=qVI7K4V1bDicSsvBeXk27AqEQgACX1SO"

                $("#search-btn").on
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
        console.log(response);
    //     for (var i = 0; i < results.length; i++) {
    //       var gifDiv = $("<div>");
    //       var animalImage = $("<img>");
    //         animalImage.attr("src", results[i].images.fixed_height.url);
    //       gifDiv.prepend(animalImage);
    //       $("#gifs-appear-here").prepend(gifDiv);
    //    }
});
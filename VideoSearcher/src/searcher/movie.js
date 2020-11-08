'use strict';
$(function(){
   $("#reset").click(function (e) {
      location.reload();
   });
	var baseimg = "http://image.tmdb.org/t/p/w500";
	var getMovie = function(e){
        e.preventDefault();
		var film = $('#term').val();
		if (film == '') {
			$('#movie').html("<h2 class='loading'>Введите название фильма!!!</h2>");
		} else {
			$('#movie').html("<h2 class='loading'>Ищу фильм...</h2>");
			$.getJSON("https://api.themoviedb.org/3/search/movie?query="+film+"&api_key=2db5d5edf92e3ea3cd00b4c546fe47bb&language=ru-RU&callback=?", function(data) {
				if (data.total_results) {
					$('#movie').html('<h2 class="loading">Фильм найден!</h2><h1>Название: '+data.results[0].title+'.</h1><h3>Краткое описание: '+data.results[0].overview+'</h3><img id="thePoster" src='+baseimg+data.results[0].poster_path+' />');
				} else {
					$('#movie').html('<h2 class="loading">Не нахожу фильм. Ты же ввел название на английском?</h2>');
            	}
            });
		}
   	}
	$('#fetch form').on('submit', getMovie);
});
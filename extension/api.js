$(document).ready(function(){

  function Weather(){

  var URL = 'https://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&appid=1a16680f9588e382d6fb7e6468cadac6';
  var FURL = 'http://api.openweathermap.org/data/2.5/forecast?id=6167865&appid=1a16680f9588e382d6fb7e6468cadac6&units=metric';

    $.getJSON(URL, function(data){
      console.log(data);
      updateInformation(data);
    });

    $.getJSON(FURL, function(fivedata){
      console.log(fivedata);
      updatefivedayforecast(fivedata);
    });
  }

  function updateInformation(data){

    // Local variables containing values from the JSON call
    var city = data.name;
    var icon = data.weather[0].icon;
    var desc = data.weather[0].description;
    var temperature = Math.round(data.main.temp);
    var humid = data.main.humidity;
    var speed = data.wind.speed;
    var min = Math.round(data.main.temp_min);
    var max = Math.round(data.main.temp_max);


    // Right Side of the extentsion
    $('#cityname').html(city);
    $('#deg').html(temperature + '°');

    $('#minmax').html("Low: " + min + '  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0   ' + " High: "+ max);
    // Left div display
    $("#icon").attr('src', "http://openweathermap.org/img/w/"+ icon + ".png");
    $('#description').html(desc);

    if (humid<21) {
      $('#humidity').html("Humidity: " + humid + "  ( Dry )" )
    } else if (humid > 60) {
      $('#humidity').html("Humidity: " + humid + "  ( Humid )")
    } else {
      $('#humidity').html("Humidity: " + humid + "  ( Normal )")
    }

    $('#windspeed').html("Wind Speed: " + Math.round(speed*3.6) + " km/h");

    console.log(city);
    console.log(icon);
    console.log(desc);

  }


    function updatefivedayforecast(data) {


      var dayoneicon = data.list[6].weather[0].icon;
      var daytwoicon = data.list[14].weather[0].icon;
      var daythreeicon = data.list[22].weather[0].icon;
      var dayfouricon = data.list[30].weather[0].icon;
      var dayfiveicon = data.list[38].weather[0].icon;

      var temperaturedayone = Math.round(data.list[6].main.temp);
      var temperaturedaytwo = Math.round(data.list[14].main.temp);
      var temperaturedaythree = Math.round(data.list[22].main.temp);
      var temperaturedayfour = Math.round(data.list[30].main.temp);
      var temperaturedayfive = Math.round(data.list[38].main.temp);

        $("#dayoneicon").attr('src', "http://openweathermap.org/img/w/"+ dayoneicon + ".png");
        $("#daytwoicon").attr('src', "http://openweathermap.org/img/w/"+ daytwoicon + ".png");
        $("#daythreeicon").attr('src', "http://openweathermap.org/img/w/"+ daythreeicon + ".png");
        $("#dayfouricon").attr('src', "http://openweathermap.org/img/w/"+ dayfouricon + ".png");
        $("#dayfiveicon").attr('src', "http://openweathermap.org/img/w/"+ dayfiveicon + ".png");


        $("#dayonetemp").html(temperaturedayone + '°' );
        $("#daytwotemp").html(temperaturedaytwo + '°' );
        $("#daythreetemp").html( temperaturedaythree + '°' );
        $("#dayfourtemp").html( temperaturedayfour + '°' );
        $("#dayfivetemp").html( temperaturedayfive + '°' );

    }

Weather();

});

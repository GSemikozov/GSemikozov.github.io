    function initialize() {
                var myLoc = new google.maps.LatLng(59.435771, 24.739372);
                var myOptions = {
                zoom: 12,
                center: myLoc,
                markers: myLoc,
                mapTypeId: google.maps.MapTypeId.ROADMAP
                                }
                var map = new google.maps.Map(document.getElementById("geolocation"), myOptions);
                var marker = new google.maps.Marker({
                             position: myLoc,
                             map: map,
                             title: "Tallinn - Old City"
                             });
}
    function loadScript() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
        document.body.appendChild(script);
    }
    window.onload = loadScript;
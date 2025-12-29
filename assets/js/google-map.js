window.initGoogleMap = function () {
  if (!window.google || !window.google.maps) {
    console.error("Google Maps API not loaded");
    return;
  }

  const map = new google.maps.Map(
    document.getElementById("google-map"),
    {
      center: { lat: 28.6139, lng: 77.2090 }, // ✅ India
      zoom: 12,
    }
  );

  new google.maps.Marker({
    position: { lat: 28.6139, lng: 77.2090 },
    map,
    title: "Xirgo Vehicle - DEL-101",
  });
};



  <footer>
    <div class="map-container">
      <iframe id="googleMap" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>

    <div class="locations">
      <input type="radio" id="location1" name="location" checked>
      <label for="location1">
        <h3>Location 1</h3>
        <p>123 Main Street</p>
        <p>City, Country</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: location1@example.com</p>
      </label>

      <input type="radio" id="location2" name="location">
      <label for="location2">
        <h3>Location 2</h3>
        <p>456 Park Avenue</p>
        <p>City, Country</p>
        <p>Phone: (987) 654-3210</p>
        <p>Email: location2@example.com</p>
      </label>
    </div>

    <div class="additional-content">
      <!-- Additional content goes here -->
    </div>
  </footer>

    const googleMap = document.getElementById('googleMap');
    const location1Radio = document.getElementById('location1');
    const location2Radio = document.getElementById('location2');

    // Initial map URL
    const defaultMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE_LONGITUDE_HERE!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU3JzIwLjkiTiA3NMKwMjUnMDQuMiJX!5e0!3m2!1sen!2sus!4v1610655943580!5m2!1sen!2sus';

    // Map URLs for each location
    const mapUrls = {
      location1: 'URL_FOR_LOCATION_1',
      location2: 'URL_FOR_LOCATION_2'
    };

    // Function to update the map based on the selected location
    function updateMap() {
      if (location1Radio.checked) {
        googleMap.src = mapUrls.location1;
      } else if (location2Radio.checked) {
        googleMap.src = mapUrls.location2;
      }
    }

    // Initial map update
    updateMap();

    // Add event listeners to radio buttons
    location1Radio.addEventListener('change', updateMap);
    location2Radio.addEventListener('change', updateMap);
  
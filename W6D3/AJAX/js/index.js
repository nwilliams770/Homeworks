console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  type: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/' +
    'weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b',
  success(data) {
    console.log("Surprise! It's raining men!");
    console.log(data);
  },
  error() {
    console.log("Something went wrong...just dress in layers");
  },
});
// Add another console log here, outside your AJAX request

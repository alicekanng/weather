# Pilot Take-home Assignment Weather App

## Running the app locally
1. Clone the repository at https://github.com/alicekanng/weather.git
2. Check that you are in the ```weather``` folder
3. Run ```npm install``` to install all packages
4. Start the app using ```npm start```

You can also access the app using the following link: https://cheerful-eclair-f57f8d.netlify.app/

## How I approached the project
I first initialized the app using ```create-react-app```, and started playing around with various Material UI components to see which ones would be the best fit. After experimenting with a couple of them, I decided to use the accordion component and mimic something similar to Apple's built-in weather app. This allow users to easily see which cities are available, and pick the ones they would like to expand and learn more about.

Once the basic front end was built, I loaded the data locally and imported it into the home page. Inside the home page, I iterate through the data and render a dropdown component for each city object. In this processs, I parse the city's name and temperature to render onto the collapsed accordion, and the min/max temperature, wind speed, and description to fill the expanded portion.

At this point, I wanted to validate the data and make sure that I wasn't blindly assuming that the required information existed for every city in the json. After thinking of different ways to verify this, I decided to migrate the app to TypeScript. Using TypeScript, I was able to declare an interface containing all the required fields, and easily check that each city in the data implements this interface using the ```in``` type guard. I thought this was a big advantage over having to iterate through every key and manually checking whether every required key exists for each city—especially if there is a possibility of the data growing to include more cities around the world.

Lastly, I added some styling to make the UI aesthetically pleasing. I added some headers and helper texts, and again, tried to mimic the weather app on my phone by setting the background image to represent the weather in each city. Using Material UI's ```Grid``` and ```Stack``` components, I was able to easily center and size my custom components. At this stage, I also included some conditional rendering to handle other cases in which a city is not cloudy. As shown in the screenshot below, I currently show a different background image and icon if the city's weather description is not "Clouds".

<img width="1680" alt="Screen Shot 2022-05-04 at 9 39 57 PM" src="https://user-images.githubusercontent.com/23249184/166868548-e265ec16-7925-48c8-b6c5-5244bf568007.png">

## Improvements for the future
The biggest improvement I would make for this app is to introduce better edge case handling. Currently, the validation I do on the data only checks whether the keys exist for each city, but does not check whether the value of those keys are valid. This means that a city could have an empty string as its name, and the app will still render a dropdown component for it. Keeping scalability in mind, I could move the data into the backend (or even an external database) and fetch it by calling an HTTP GET request on a custom endpoint. At this point I would introduce a more elegant way to handle edge cases like the one I mentioned above, and have the backend validate the raw data before sending it to the frontend.

Another improvement would be to implement a wider variety of weather conditions the front end can render. Currently, the app renders a "sunny" background image for all cities with weather conditions not described as "Clouds". If the data included more cities which I could categorize into distinct groups, I would like to render different backgrounds and icons for rainy, snowy, foggy, etc. weathers. On the same note, with more data, I would like to make the list of accordions scrollable so that it does not expand outside the screen bounds.

Lastly, an interesting idea that I explored for a little bit was to render a map component on the home page with pins representing the cities. Given that the data includes longitude and latitude coordinates of each city, I would have liked to pin them on an interative map and have the weather information render on the click of each pin. I had done something similar in the past using the Google Places and Geocoding API so I went down that path for a little bit, but thought it was too big of a scope to tackle in this project.

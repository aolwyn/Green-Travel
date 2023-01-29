# QHacks2023

## Inspiration
Global Warming has rapidly progressed in recent years, with a sheet of ice the size of Greater London breaking off 5 days ago in Antarctica. One of the major contributors towards global warming is the transportation industry. We decided to raise awareness on how different methods of travel produce varying amount of CO2 and greenhouse gas emissions and how they contribute to a person's yearly average.

## What it does
After creating an account and authenticating, users are able to enter a source, destination, and method of travel for a trip. Upon clicking go, the Map updates with the route from source to destination and calculates the total carbon emissions for the trip along with travel time and distance. The trip data is then stored in the Appwrite database and a total emission for the trip is shown to the user along with tips on how to minimize their emissions or how other methods use less (i.e., public transit vs passenger vehicle). This data can be retrieved from a user's profile to track how close they are to a given country's yearly emissions-per-capita. 

## How we built it
The front-end of our web application was built using ReactJS and Bootstrap. We used Appwrite as our database of choice for authentication and data storage with Node.js to connect it all together.  

The map and directions were retrieved and displayed using the Google Maps API, Directions API, and the Distance Matrix API also provided by Google. 

## Challenges we ran into
Though the Google API's are free, they do not interact very well on the same map. We had to work around the directions and standard map API interactions.

We also ran into challenges configuring the Appwrite database. Making different documents and collections proved difficult and it took time to implement the data structure of each user.

Cross-origin resource sharing (CORS) was throwing some odd errors that we could not bug fix. Eventually, we solved the problem through the use of an extension. 

## Accomplishments that we're proud of

As a team, we are overall very proud of our project. We overcame many challenges and learned a lot. Some of our most proud accomplishments include getting authentication and the Appwrite backend working, the clean, minimalistic design of the web application and the 3 Google API integrations.

## What we learned
We learned that, no matter how much documentation exists, there will always be gaps in the knowledge and opportunities to learn. We also learned that, based on given transportation methods, certain methods produce exponentially greater CO2 emissions than others. Though we did not get a chance to implement our ML model, the research we completed for it is a good enough framework to extend this project past the deadline. 


## What's next for Green Travel
We want to produce a risk-based analysis for the City of Kingston using the associated API and Machine Learning based on household energy usage.


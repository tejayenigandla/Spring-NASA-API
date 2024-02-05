# Spring-NASA-API
  Using the NASA API, this Spring Boot application offers an API endpoint for retrieving NASA's Astronomy Picture of the Day (APOD). Users can use parameters like date, start date, end date, count, and whether to 
  add thumbnails to retrieve APOD data.
# Table of Contents
* Controllers
* Models
* Services
* Main Application
* Configuration
# Controllers
  As a Spring RestController, the NasaApodController class is in charge of responding to incoming HTTP requests pertaining to APOD data. It retrieves the data via the NasaApodService and gives back a collection of NasaApodResponse objects.
# Model Classes
  The response structure obtained from the NASA APOD API is represented by the NasaApodResponse class. Copyright, date, explanation, hdurl, media_type, service_version, title, and url are among the fields it 
  contains.
# Services
  The NASA APOD API communication is handled by the NasaApodService class. Using the parameters supplied, it makes HTTP queries via RestTemplate to retrieve APOD data.
# Main Application
  The SpringNasaApiApplication class serves as the entry point for the Spring Boot application. It contains the main method to start the application.
# Configuration
  The application.properties file contains configuration properties for the application, such as the server port, NASA API URL, and API key. 
# Endpoint Usage
  To interact with the NASA APOD API, you can use tools like Postman. Here's an example of how to use the /apod endpoint:
  * Method: GET
  * URL: http://localhost:9094/apod
  * Parameters: (Add parameters as needed)
  * date : A specific date for APOD
  * start_date : Start date for a range of APOD entries
  * end_date : End date for a range of APOD entries
  * count : Number of entries to fetch
  * thumbs : Include thumbnails (true/false)
    
* End point to retrieve date   URL : http://localhost:9094/apod?date=2024-01-29
![date](https://github.com/tejayenigandla/Spring-NASA-API/assets/122107419/e575de52-eb66-44fd-9697-7c4b077876cc)

*End point to retrieve count   URL : http://localhost:9094/apod?count=5
![count](https://github.com/tejayenigandla/Spring-NASA-API/assets/122107419/4c03e8cf-2eb7-4f21-bd0c-32c7c7a0ebf3)

*End point to retrieve Start date & End date  URL : http://localhost:9094/apod?start_date=2024-01-25&end_date=2024-01-29
![SD ED](https://github.com/tejayenigandla/Spring-NASA-API/assets/122107419/9d994860-c3cc-4994-996b-3a41b56d8318)





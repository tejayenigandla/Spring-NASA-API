package com.SpringNasaAPI.NasaApiSpring.Controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import com.SpringNasaAPI.NasaApiSpring.model.*;

import javax.lang.model.util.Elements;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class NasaController {
	@Value("82Ys6piQLKdv5UfpRBuojCvPNdmjUBHCcr44Aaw0")
	private String apiKey;



	@Value("https://api.nasa.gov/planetary/apod")
	private String URL;


	@GetMapping("/apod")
	public List<APODResponse> getAPOD(@RequestParam(required = false) String date,
			@RequestParam(required = false) String start_date, @RequestParam(required = false) String end_date,
			@RequestParam(required = false) Integer count, @RequestParam(required = false) Boolean thumbs) {
		RestTemplate restTemplate = new RestTemplate();
		UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(URL).queryParam("api_key", apiKey)
				.queryParam("date", date).queryParam("start_date", start_date).queryParam("end_date", end_date)
				.queryParam("count", count).queryParam("thumbs", thumbs);

		String url = uriBuilder.toUriString();

		try {
			ResponseEntity<List<APODResponse>> responseEntity = restTemplate.exchange(url, HttpMethod.GET, null,
					new ParameterizedTypeReference<List<APODResponse>>() {
					});
			return responseEntity.getBody();
		} catch (Exception e) {

			try {
				APODResponse singleResponse = restTemplate.getForObject(url, APODResponse.class);
				return Collections.singletonList(singleResponse);
			} catch (Exception ex) {

				throw new RuntimeException("Error fetching APOD data: " + ex.getMessage(), ex);
			}
		}
	}
}

helpers do 
	def get_netflix
		client = NetflixRoulette::Client.new(title: "Breaking Bad")
		breaking_bad = client.fetch
	  
	  return   breaking_bad["category"]
	
	end 	
  
  def roulette_comedy
  	comedy_directors =["Woody Allen", "Mel Brooks", "Alexander Payne", "Joel Coen", "Terry Gilliam",  "Martin McDonagh"] 

    client = NetflixRoulette::Client.new(director: comedy_directors.sample)
		  puts client.fetch
		  puts comedy = client.fetch.first
		   return comedy["show_title"]
  end

  def roulette_action
   action_directors = ["Michael Bay","John McTiernan","Tony Scott","James Cameron","Steven Spielberg","Peter Jackson","John Woo","Ridley Scott"]
   client = NetflixRoulette::Client.new(director: action_directors.sample)
		
		   action = client.fetch.first
		   return action["show_title"]
  end 	
  
  def roulette_documentary 
   doc_directors = ["Michael Moore","Charles Ferguson","Alex Gibney","Eugene Jarecki", "Jehane Noujaim","Errol Morris", "Oliver Stone", "John Pilger","Werner Herzog", "Robert Greenwald"]
   client = NetflixRoulette::Client.new(director: doc_directors.sample)
		
		   documentary = client.fetch.first
		   return documentary["show_title"]
  end	
end
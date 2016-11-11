helpers do 
	def get_netflix
		client = NetflixRoulette::Client.new(category: "Anime")
		media = client.fetch
	  
	  return   media
	
	end 	
end
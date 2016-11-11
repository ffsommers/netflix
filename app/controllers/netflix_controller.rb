post'/netflix/comedy' do
	if request.xhr?
	@show = roulette_comedy
	erb :_show, layout: false, locals: {show: @show}
	end
end

post '/netflix/action' do 
  if request.xhr?
	@show = roulette_action
	erb :_show, layout: false, locals: {show: @show}
	end
end	
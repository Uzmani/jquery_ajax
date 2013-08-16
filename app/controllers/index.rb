get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do
  # content_type :JSON

  #Create and return a JSON object with the random cell and color given below.

  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)

  # {box: cell, cell_color: color}.to_json
  "3"
end
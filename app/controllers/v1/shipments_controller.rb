class V1::ShipmentsController < V1::BaseController
  def index
		render json: { shipment: 'test' }  	
  end

  def create
  	shipment = EasyPost::Shipment.create(params[:shipment])
  	rates = []
  	shipment.rates.each do |rate|
  		rates << {
  			id: rate.id,
  			carrier: rate.carrier,
  			service: rate.service,
  			rate: rate.rate
  		}
  	end

  	# Could not implement returning the rates, choosing, and creating another request 
  	# since the shipment object does not persist between controller actions. I've resorted
  	# to simply buying the lowest rate due to time constraints.
  	response = shipment.buy(
  		:rate => shipment.lowest_rate(carriers = ['USPS'], services = ['First', 'Priority'])
  	)

  	p response
  	render json: { data: response }
  end

  def buy
  	# Originally wanted to have the user select the rate and invoke another controller action
  	# to request shipment.buy using the selected rate.
  end
end

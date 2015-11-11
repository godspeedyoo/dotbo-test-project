class V1::ShipmentsController < V1::BaseController
  def index
		render json: { shipment: 'test' }  	
  end

  def create
  	shipment = EasyPost::Shipment.create(params[:shipment])
  	rates = {}
  	shipment.rates.each do |rate|
  		rates[rate.id] = {
  			carrier: rate.carrier,
  			service: rate.service,
  			rate: rate.rate
  		}
  	end
  	p rates
  	render json: { data: rates }
  end
end

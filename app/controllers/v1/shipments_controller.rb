class V1::ShipmentsController < V1::BaseController
  def index
		render json: { shipment: 'test' }  	
  end
end

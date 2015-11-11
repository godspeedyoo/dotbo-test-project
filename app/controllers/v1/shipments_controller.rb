class V1::ShipmentsController < V1::BaseController
  def index
		render json: { shipment: 'test' }  	
  end

  def create
  	p params[:shipment]
  	render json: { data: params }
  end
end

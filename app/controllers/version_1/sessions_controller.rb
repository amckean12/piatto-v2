class V1::SessionsController < ApplicationController
  def create
    #Find the User based on Email
    user = User.where(email: params[:email]).first
    #If User is valid will get the user object if not will return unauthorized
    if user && user.valid_password?(params[:password])
      render json: user.as_json(only: [:email, :authentication_token]), status: :created
    else
      head(:unauthorized)
    end
  end

  def destroy

  end
end

Rails.application.routes.draw do
  #devise_for :users (Will Handle own authenitication)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :v1 do
    resources :sessions, only: [:create, :destroy]
  end
end

Rails.application.routes.draw do
  namespace :api do
    get 'random_greeting', to: 'greetings#random_greeting'
  end

  root to: 'root#index'
  get '/packs/*filename', to: 'packs#show', constraints: { filename: /.+/ }
end

Rails.application.routes.draw do
  root "root#main"
  resources :posts
end

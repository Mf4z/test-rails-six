Rails.application.routes.draw do
  resources :users
  root 'pages#home'
  resources :articles
  get'about', to: 'pages#about'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

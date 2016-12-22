Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :todo_lists do
    resources :todo_items
  end

  get '/', to: "index#index"
  get '*path', to: "index#index"
end

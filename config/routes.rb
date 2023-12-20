Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :accounts
      resources :textbooks, param: :isbn
      resources :questions, param: :textbook_id
      resources :discussions
    end
  end

  get '*path', to: 'pages#index', via: :all
end

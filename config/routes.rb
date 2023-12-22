Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :accounts
      resources :textbooks, param: :isbn
      resources :questions, param: :id
      resources :discussions
    end
    namespace :v2 do
      resources :accounts, param: :name
      resources :questions, param: :chapter, param: :textbook_id
      resources :discussions, param: :question_id
    end
  end

  get '*path', to: 'pages#index', via: :all
end

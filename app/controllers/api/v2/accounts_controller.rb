module Api
    module V2
        class AccountsController < ApplicationController
            protect_from_forgery with: :null_session
           

            def show
                account = Account.find_by(name: params[:name])
                render json: AccountSerializer.new(account).serialized_json
            end

           

            
        end
    end
end
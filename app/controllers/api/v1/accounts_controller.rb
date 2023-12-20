module Api
    module V1
        class AccountsController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                accounts = Account.all
                render json: AccountSerializer.new(accounts).serialized_json
            end

            def show
                account = Account.find_by(params[:id])
                render json: AccountSerializer.new(account).serialized_json
            end

            def create
                account = Account.new(account_params)
                if account.save
                    render json: AccountSerializer.new(account).serialized_json
                else
                    render json: {error:account.errors.messages},status:422
                end
            end

            def update
                account = Account.find_by(params[:id])
                if account.update(account_params)
                    render json: AccountSerializer.new(account).serialized_json
                else
                    render json: {error:account.errors.messages},status:422
                end
            end

            def destroy
                account = Account.find_by(params[:id])
                if account.destroy
                    head :no_content
                else
                    render json: {error:account.errors.messages},status:422
                end
            end

            private

            def account_params
                params.require(:account).permit(:name)
            end
        end
    end
end
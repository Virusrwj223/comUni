module Api
    module V1
        class TextbooksController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                textbooks = Textbook.all
                render json: TextbookSerializer.new(textbooks).serialized_json
            end

            def show
                textbook = Textbook.find_by(isbn: params[:isbn])#(params[:id])
                render json: TextbookSerializer.new(textbook).serialized_json
            end

            def create
                textbook = Textbook.new(textbook_params)
                if textbook.save
                    render json: TextbookSerializer.new(textbook).serialized_json
                else
                    render json: {error:textbook.errors.messages},status:422
                end
            end

            def update
                textbook = Textbook.find_by(isbn: params[:isbn])#(params[:id])
                if textbook.update(textbook_params)
                    render json: TextbookSerializer.new(textbook).serialized_json
                else
                    render json: {error:textbook.errors.messages},status:422
                end
            end

            def destroy
                textbook = Textbook.find_by(isbn: params[:isbn])#(params[:id])
                if textbook.destroy
                    head :no_content
                else
                    render json: {error:textbook.errors.messages},status:422
                end
            end

            private

            def textbook_params
                params.require(:textbook).permit(:isbn, :name, :chapters)
            end
        end
    end
end
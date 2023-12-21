module Api
    module V2
        class QuestionsController < ApplicationController
            protect_from_forgery with: :null_session

            def show
                question = Question.where(textbook_id: params[:textbook_id], chapter: params[:chapter]).take(10)#.find_by(textbook_id: params[:textbook_id], chapter: params[:chapter])#.take(2)
                render json: QuestionSerializer.new(question).serialized_json
            end

        end
    end
end
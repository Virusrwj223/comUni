module Api
    module V1
        class QuestionsController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                questions = Question.all
                render json: QuestionSerializer.new(questions).serialized_json
            end

            def show
                question = Question.find_by(textbook_id: params[:textbook_id])#(params[:id])
                render json: QuestionSerializer.new(question).serialized_json
            end

            def create
                question = Question.new(question_params)
                if question.save
                    render json: QuestionSerializer.new(question).serialized_json
                else
                    render json: {error:question.errors.messages},status:422
                end
            end

            def update
                question = Question.find_by(textbook_id: params[:textbook_id])
                if question.update(question_params)
                    render json: QuestionSerializer.new(question).serialized_json
                else
                    render json: {error:question.errors.messages},status:422
                end
            end

            def destroy
                question = Question.find_by(textbook_id: params[:textbook_id])
                if question.destroy
                    head :no_content
                else
                    render json: {error:question.errors.messages},status:422
                end
            end

            private

            def question_params
                params.require(:question).permit(:textbook_id, :chapter, :questionHead, :questionBlurb, :account_id)
            end
        end
    end
end
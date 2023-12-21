module Api
    module V2
        class DiscussionsController < ApplicationController
            protect_from_forgery with: :null_session

            def show
                discussion = Discussion.where(question_id: params[:question_id]).take(10)#.find_by(textbook_id: params[:textbook_id], chapter: params[:chapter])#.take(2)
                render json: DiscussionSerializer.new(discussion).serialized_json
            end

        end
    end
end
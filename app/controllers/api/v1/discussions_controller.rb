module Api
    module V1
        class DiscussionsController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                discussions = Discussion.all
                render json: DiscussionSerializer.new(discussions).serialized_json
            end

            def show
                discussion = Discussion.find_by(params[:id])
                render json: DiscussionSerializer.new(discussion).serialized_json
            end

            def create
                discussion = Discussion.new(discussion_params)
                if discussion.save
                    render json: DiscussionSerializer.new(discussion).serialized_json
                else
                    render json: {error:discussion.errors.messages},status:422
                end
            end

            def update
                discussion = Discussion.find_by(params[:id])
                if discussion.update(discussion_params)
                    render json: DiscussionSerializer.new(discussion).serialized_json
                else
                    render json: {error:discussion.errors.messages},status:422
                end
            end

            def destroy
                discussion = Discussion.find_by(params[:id])
                if discussion.destroy
                    head :no_content
                else
                    render json: {error:discussion.errors.messages},status:422
                end
            end

            private

            def discussion_params
                params.require(:discussion).permit(:textbook_id, :question_id, :account_id, :response)
            end
        end
    end
end
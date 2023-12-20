class DiscussionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :textbook_id, :question_id, :account_id, :response
end

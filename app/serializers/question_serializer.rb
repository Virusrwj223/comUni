class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :textbook_id, :chapter, :questionHead, :questionBlurb, :account_id

  has_many :discussions
end

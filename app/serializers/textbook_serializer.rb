class TextbookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :isbn, :name, :chapters

  has_many :questions
  has_many :discussions
end

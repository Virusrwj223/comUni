class AccountSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  has_many :questions
  has_many :discussions
end

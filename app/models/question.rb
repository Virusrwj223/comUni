class Question < ApplicationRecord
  belongs_to :textbook
  belongs_to :account
  has_many :discussions
end

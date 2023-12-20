class Discussion < ApplicationRecord
  belongs_to :textbook
  belongs_to :question
  belongs_to :account
end

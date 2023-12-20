class Account < ApplicationRecord
    has_many :questions
    has_many :discussions
end

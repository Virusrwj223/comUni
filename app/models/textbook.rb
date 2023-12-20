class Textbook < ApplicationRecord
    has_many :questions
    has_many :discussions
end

class CreateDiscussions < ActiveRecord::Migration[7.1]
  def change
    create_table :discussions do |t|
      t.belongs_to :textbook, null: false, foreign_key: true
      t.belongs_to :question, null: false, foreign_key: true
      t.belongs_to :account, null: false, foreign_key: true
      t.string :response

      t.timestamps
    end
  end
end

class CreateQuestions < ActiveRecord::Migration[7.1]
  def change
    create_table :questions do |t|
      t.belongs_to :textbook, null: false, foreign_key: true
      t.integer :chapter
      t.string :questionHead
      t.string :questionBlurb
      t.belongs_to :account, null: false, foreign_key: true

      t.timestamps
    end
  end
end

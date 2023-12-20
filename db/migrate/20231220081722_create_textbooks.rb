class CreateTextbooks < ActiveRecord::Migration[7.1]
  def change
    create_table :textbooks do |t|
      t.string :isbn
      t.string :name
      t.integer :chapters

      t.timestamps
    end
  end
end

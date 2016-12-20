class CreateTodoItems < ActiveRecord::Migration[5.0]
  def change
    create_table :todo_items do |t|
      t.text :body
      t.references :todo_list, foreign_key: true
      t.boolean :finished

      t.timestamps
    end
  end
end

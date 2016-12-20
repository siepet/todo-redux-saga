class AddNameToTodoLists < ActiveRecord::Migration[5.0]
  def change
    add_column :todo_lists, :name, :string
  end
end

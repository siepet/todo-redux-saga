class TodoList < ApplicationRecord
  has_many :items,
    class_name: "TodoItem",
    foreign_key: :todo_list_id,
    dependent: :destroy
end

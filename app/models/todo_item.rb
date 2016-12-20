class TodoItem < ApplicationRecord
  belongs_to :list,
    class_name: "TodoList",
    foreign_key: :todo_list_id
end

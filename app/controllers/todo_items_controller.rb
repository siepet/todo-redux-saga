class TodoItemsController < ApplicationController
  def index
    @todo_list = TodoList.includes(:items).find(params[:todo_list_id])
    render json: { todo_items: @todo_list.items }, status: :ok
  end
end

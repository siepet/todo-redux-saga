class TodoListsController < ApplicationController
  def index
    @todo_lists = TodoList.all
    render json: { todo_lists: @todo_lists }, status: :ok
  end

  def show
    @todo_list = TodoList.find(params[:id])
    render json: { todo_list: @todo_list }, status: :ok
  end
end

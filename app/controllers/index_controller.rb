require 'rails/application_controller'

class IndexController < Rails::ApplicationController
  layout false

  def index
    render file: Rails.root.join('app', 'views', 'layouts', 'application.html')
  end
end

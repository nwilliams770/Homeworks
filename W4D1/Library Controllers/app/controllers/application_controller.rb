class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    @books = Book.all

    render :index
  end

end

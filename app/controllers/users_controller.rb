class UsersController < ApplicationController
  before_filter :require_no_user, :only => [:new, :create]
  before_filter :require_user, :only => [:show, :destroy]
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:notice] = "Account registered!"
      redirect_back_or_default @user
    else
      render :action => :new
    end
  end

  def show
    @user = User.find(params[:id])
    @tasks = @user.tasks
    @task = @user.tasks.new(params[:id])
  end

  def destroy
  end

end

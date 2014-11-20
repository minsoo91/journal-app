class PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts
  end
  
  def show
    @post = Post.find(params[:id])
    render json: @post
  end
  
  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: @post.errors, status: 422  #unprocessable entity
    end
  end
  
  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render json: @post
    else
      raise 'WTF!'
    end
  end
  
  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: 422 #unprocessable entity
    end
  end
  
  private
  
  def post_params
    params.require(:post).permit(:title, :body)
  end
end

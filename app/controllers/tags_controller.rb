class TagsController < ApplicationController

  def index
    authorize Tag
    @tags = Tag.all
  end

end

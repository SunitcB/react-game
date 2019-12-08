class BoggleController < ApplicationController
  def game
  end

  def wordList
    @wordList = WordsList
    render json: @wordList
  end
end

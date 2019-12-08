Rails.application.routes.draw do
  get 'boggle/wordList'
  # root 'game#boggle'
  root 'boggle#game'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

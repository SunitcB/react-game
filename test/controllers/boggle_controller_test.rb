require 'test_helper'

class BoggleControllerTest < ActionDispatch::IntegrationTest
  test "should get a list of valid words" do
    valid_word_url = '/boggle/wordList'
    get valid_word_url
    assert_response :success
  end

end

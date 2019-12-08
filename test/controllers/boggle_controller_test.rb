require 'test_helper'

class BoggleControllerTest < ActionDispatch::IntegrationTest
  test "should get game" do
    get boggle_game_url
    assert_response :success
  end

end

class GreetingsController < ApplicationController
  before_action :set_greeting, only: %i[ show update destroy ]

  # GET /greetings
  # GET /greetings.json
  def index
    @greetings = Greeting.all
    @greeting = [@greetings.sample]

    render json: @greeting
  end  
end

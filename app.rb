require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'data_mapper'
require File.dirname(__FILE__) + '/models.rb'
require 'json'
require 'Date'

before do
  content_type 'application/json'
end

get "/" do
  content_type 'html'
  @winners = Winner.all
  erb :index
end

get "/winners/new" do
  content_type 'html'
  @last = Winner.last
  @raffle = Winner.new
  erb :new
end

get "/winner" do
  Winner.last.to_json
end

post "/winners" do
  puts params
  puts params[:number]
  if Winner.create(name: params[:name], number: params[:number])
    {status: "success"}.to_json
  else
    {status: "failure"}.to_json
  end
end

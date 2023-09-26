class PacksController < ApplicationController
  def show
    path = File.join(Rails.root, 'public', 'packs', params[:filename])
    send_file path, disposition: 'inline'
  end
end

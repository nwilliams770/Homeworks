class UserMailer < ApplicationMailer
  default from: 'everybody@appacademy.io'
  def welcome_mail(user)
    @user = user
    mail(to: @user.username, subject: "Welcome to World O' Cats!")
  end
end

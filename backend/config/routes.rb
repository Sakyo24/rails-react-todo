Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'user', controllers: {
        registrations: 'api/v1/user/registrations',
        sessions: 'api/v1/user/sessions',
      }
    end
  end
end

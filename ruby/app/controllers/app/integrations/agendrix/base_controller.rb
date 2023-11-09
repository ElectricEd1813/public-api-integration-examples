module App
  module Integrations
    module Agendrix
      class BaseController < ApplicationController
        protected

        def api_provider
          @api_provider ||= Services::Integrations::Agendrix::APIProvider.new
        end

        def oauth_provider
          @oauth_provider ||= Services::Integrations::Agendrix::OAuthProvider.new
        end
      end
    end
  end
end

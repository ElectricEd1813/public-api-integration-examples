class URIS
  class << self
    def agendrix_api
      "https://api.sandbox.agendrix.net"
    end

    def oauth_provider
      "https://sandbox.agendrix.net/oauth"
    end

    def redirect_uri
      "https://localhost:3000/integrations/agendrix/oauth/redirect"
    end
  end
end

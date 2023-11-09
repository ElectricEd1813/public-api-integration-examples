# This is normally your persistent storage
class InMemoryDatabase
  class << self
    @@rows = []

    def insert(data)
      @@rows.unshift(data)
    end

    def first
      @@rows.first
    end
  end
end

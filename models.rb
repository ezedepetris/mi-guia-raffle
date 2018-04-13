DataMapper.setup(:default, "postgres://Ezequiel:root@localhost/raffle")

class Winner
  include DataMapper::Resource

  property :id,              Serial
  property :name,            Text
  property :number,          Integer
end

DataMapper.auto_upgrade!
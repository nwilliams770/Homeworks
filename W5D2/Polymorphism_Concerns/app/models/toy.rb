class Toy < ApplicationRecord
validates :name, uniqueness: true

belongs_to :toyable, polymorphic: true
end

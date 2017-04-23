class Thing < ActiveRecord::Base
  include Protectable
  validates :name, :presence=>true

  has_many :thing_images, inverse_of: :thing, dependent: :destroy
  has_many :images, through: :thing_images

  scope :not_linked, ->(image) { where.not(:id=>ThingImage.select(:thing_id)
                                                          .where(:image=>image)) }
  scope :linked_with_tag, ->(tag) { where(:id=>ThingTag.select(:thing_id)
                                                          .where(:tag=>tag)) }
end

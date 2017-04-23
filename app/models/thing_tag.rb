class ThingTag < ActiveRecord::Base
  belongs_to :tag
  belongs_to :thing
  scope :with_name, ->{ joins(:tag).select("thing_tags.*, tags.name AS tag_name")}
end

class Task < ActiveRecord::Base
  validates_presence_of :name
  validates_presence_of :desc
  belongs_to :user
  has_many :stories
end

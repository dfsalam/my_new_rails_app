# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
m1 = 'Do you remember where you were six months ago?'
m2 = 'Keep up the effort, imagine what you will know in six months...'
m3 = 'Hello web developer.'
m4 = 'Good morning! Embrace the new day with a positive mindset and the determination to achieve greatness.'
m5 = 'Hello! Remember that every day is a fresh start, filled with opportunities and possibilities. Make the most of it and believe in your ability to succeed.'

g1 = Greeting.create!(message:m1)
g2 = Greeting.create!(message:m2)
g3 = Greeting.create!(message:m3)
g4 = Greeting.create!(message:m4)
g5 = Greeting.create!(message:m5)
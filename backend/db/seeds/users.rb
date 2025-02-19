10.times do |n|
  User.create!(
    name: "テストユーザー#{n + 1}",
    email: "user#{n + 1}@example.com",
    password: "Password1234",
  )
end

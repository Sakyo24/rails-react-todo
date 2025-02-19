10.times do |n|
  Admin.create!(
    name: "テスト管理者#{n + 1}",
    email: "admin#{n + 1}@example.com",
    password: "Password1234",
  )
end

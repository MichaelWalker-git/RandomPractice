https://launchschool.com/books/ruby/read/intro_exercises

#Array

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.push(11)
arr.unshift(0)

arr.pop()
arr.push(3)

arr.uniq


# Hash

h = {a:1, b:2, c:3, d:4}

# 1. Get the value of key `:b`.
puts h[:b]

# 2. Add to this hash the key:value pair `{e:5}`
h["e"] = 5
puts h
# 3. Remove all key:value pairs whose value is less than 3.5
h.delete_if{ |key, value| value < 3.5 }

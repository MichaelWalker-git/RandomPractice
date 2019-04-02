# https://launchschool.com/books/ruby/read/intro_exercises

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


# Can hash values be arrays? Can you have an array of hashes? (give examples)

hashie = {a: [0, 1, 2, 3], b:2, c:3, d:4}
puts hashie

arrie = [{a: 1}]
puts arrie


# Given the following data structures. Write a program that moves the information from the array into the empty hash that applies to the correct person.


# contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
            ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]

contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}

def convertRawIntoFormat(arr)
  return {
    email: arr[0],
    address: arr[1],
    phone: arr[2],
  }
end

# contacts["Joe Smith"] = convertRawIntoFormat(contact_data[0]);
# contacts["Sally Johnson"] = convertRawIntoFormat(contact_data[1]);

def iterateObj(obj, arr)
  count = 0
  obj.map do |key, val|
    obj[key] = convertRawIntoFormat(arr[count])
    count +=1
  end
end

iterateObj(contacts, contact_data)

puts contacts


#15
# Use Ruby's Array method delete_if and String method start_with? to delete all of the words that begin with an "s" in the following array.

arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']

arr.delete_if{|word| word.start_with?('s')}

#16
a = ['white snow', 'winter wonderland', 'melting ice',
     'slippery sidewalk', 'salted roads', 'white trees']
a.map{|bigWord| bigWord.split(" ")}.flatten()

#17
hash1 = {shoes: "nike", "hat" => "adidas", :hoodie => true}
hash2 = {"hat" => "adidas", :shoes => "nike", hoodie: true}

if hash1 == hash2
  puts "These hashes are the same!"
else
  puts "These hashes are not the same!"
end

#Hashes are the same

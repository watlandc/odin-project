def echo(words)
  words
end

def shout(words)
  words.upcase
end

def repeat(word, n=2)
  word = word + " " 
  (word * n).strip
end

def start_of_word(word, n)
	word[0..n-1]
end

def first_word(word, n=1)
	array = word.split(" ")
	array[0]
end

def titleize(w)
	words = w.split(" ").map do | i |
		if %w(the and over).include?(i)
			i
		else
			i.capitalize
		end
	end
	words.first.capitalize!
	words.join(" ")
end


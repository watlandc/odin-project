def add(x,y)
	sum = x + y
end

def subtract(x,y)
	difference = x - y
end

def sum(array)
	array.inject(0) { |total, x | total + x}
end

def multiply(array)
	array.inject(1) { |total, x| total * x }
end

def power(x, y)
	result = x ** y
end

def factorial x
  (1..x).inject(:*) || 1
end




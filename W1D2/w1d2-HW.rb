require 'byebug'

def sum_to(n)
  if n < 0
    return nil
  elsif n == 0
    return 0
  elsif n <= 1
    return 1
  end
  n + sum_to(n - 1)
end

def add_numbers(arr)
  if arr.length == 0
    return nil
  elsif arr.length == 1
    return arr.first
  end
  arr.first + add_numbers(arr[1..-1])
end

def gamma_fnc(n) 
  return nil if n == 0
  gamma_helper_fnc(n - 1)
end

def gamma_helper_fnc(n)
  return 1 if n <= 1
  n * gamma_helper_fnc(n - 1)
end

def ice_cream_shop(flavors, favorite)
  return false if flavors.empty?
  return true if flavors.first == favorite

  ice_cream_shop(flavors[1..-1], favorite)
end

def reverse(string)
  return string if string.length <= 1
  string[-1] + reverse(string[0..-2])
end

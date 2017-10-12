# O(n^2)
def sluggish_octopus(fishes)
  fishes.each_index do |fish1, i|
    big_fish = fishes[0]
    fishes.each_index do |fish2, j|
      next if i == j
      if big_fish.length > fishes[i]
        big_fish = fishes[i]
      elsif big_fish.length > fishes[j]
        big_fish = fishes[j]
      end
    end
  end
  big_fish
end

class Array
def dominant_octopus(&prc)
  prc ||= Proc.new {|x,y| x<=>y}

  return self if count <= 1

  mid = count / 2
  sorted_left = self[0...mid].merge_sort(&prc)
  sorted_right = self[mid..-1].merge_sort(&prc)

  Array.merge(sorted_left, sorted_right, &prc)

  end

  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end

    merged.concat(left)
    merged.concat(right)

    merged
  end
end

def clever_octopus(fishes)
  big_fish = fishes.first

  fishes.each do |fish|
    if fish.length > big_fish.length
      big_fish = fish
    end
  end
  big_fish
end

tiles_array = ["up", "right-up", "right", "right-down", "down",
              "left-down", "left",  "left-up" ]

def slow_dance(dir, arr)
  arr.each_with_index do |tile, idx|
    return idx if tile == dir
  end
end

tiles_hash = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left-up" => 7
}

def constant_dance(dir, hash)
  tiles_hash[dir]
end

require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef", name: "Francois") }
  let(:pie) { Dessert.new("pie", 100, chef)}

  describe "#initialize" do
    it "sets a type" do
      expect(pie.type).to eq("pie")
    end

    it "sets a quantity" do
      expect(pie.quantity).to eq(100)
    end

    it "starts ingredients as an empty array" do
      expect(pie.ingredients).to be_empty
    end


    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("pie", "lots of pie", "Jacques") }.to raise_error(ArgumentError)
    end

  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      expect(pie.ingredients).to_not include("grandma's love")
      pie.add_ingredient("grandma's love")
      expect(pie.ingredients).to include("grandma's love")

    end

  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      ingredients = ["chocolate", "flour", "egg", "sugar", "butter"]

      ingredients.each do |ingredient|
        pie.add_ingredient(ingredient)
      end
      pie.mix!
      expect(pie.ingredients).not_to eq(ingredients)
      expect(pie.ingredients.sort).to eq(ingredients.sort)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      expect(pie.eat(25)).to eq(75)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect { pie.eat(101) }.to raise_error(RuntimeError)
    end

  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      expect(pie.serve).to include("chef")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(pie)
      pie.make_more
    end
  end
end

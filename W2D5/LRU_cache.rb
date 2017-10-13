class LRUCache
  def initialize(size)
    @cache = []
    @size = size
  end

  def count
    @cache.count
  end

  def add(el)
    if @cache.include?(el)
      @cache.delete(el)
      @cache << el
    elsif @cache.count == @size
      @cache.delete_at(0)
      @cache << el
    else
      @cache << el
    end
  end

  def show
    @cache.each do |el|
      print el
    end
  end

  private
  # helper methods go here!

end

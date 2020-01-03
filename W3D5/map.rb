class Map
  def initialize
    @map = Array.new
  end

  def set(key, value)
    @map.each do |inner_arr|
      if inner_arr[0]
        inner_arr[1] = value
      else
        @map << [key, value]
      end
    end
    @map
  end

  def get(key)
    
  end

  def delete(key)

  end

end
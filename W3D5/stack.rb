class Stack
    def initialize
      @stack = []
    end

    def push(el)
      @stack << el
    end

    def pop
      @stack.pop
    end

    def peek
      @stack[-1]
    end
  end


#   [1] pry(main)> laod 'stack.rb'
# NoMethodError: undefined method `laod' for main:Object
# Did you mean?  load
# from (pry):1:in `__pry__'
# [2] pry(main)> load 'stack.rb'
# => true
# [3] pry(main)> stack = Stack.new
# => #<Stack:0x00007fae75a64278 @stack=[]>
# [4] pry(main)> stack.push("a")
# => ["a"]
# [5] pry(main)> stack.push("b")
# => ["a", "b"]
# [6] pry(main)> stack.push("c")
# => ["a", "b", "c"]
# [7] pry(main)> stack.pop
# => "c"
# [8] pry(main)> stack
# => #<Stack:0x00007fae75a64278 @stack=["a", "b"]>
# [9] pry(main)> 
# [10] pry(main)> stack.peek
# => "b"
# [11] pry(main)> 

class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue << el
  end

  def dequeue
    @queue.shift
  end

  def peek
    @queue[0]
  end

end

# [1] pry(main)> load 'queue.rb'
# => true
# [2] pry(main)> queue = Queue.new
# => #<Thread::Queue:0x00007fb35436b460 @queue=[]>
# [3] pry(main)> queue.enqueue("a")
# => ["a"]
# [4] pry(main)> queue.enqueue("b")
# => ["a", "b"]
# [5] pry(main)> queue.enqueue("c")
# => ["a", "b", "c"]
# [6] pry(main)> queue.dequeue
# => "a"
# [7] pry(main)> queue
# => #<Thread::Queue:0x00007fb35436b460 @queue=["b", "c"]>
# [8] pry(main)> queue.peek
# => "b"
# [9] pry(main)> 
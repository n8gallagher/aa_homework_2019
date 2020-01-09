class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq, :guess, :seq_str

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
    @guess = ""
    @seq_str = @seq.join(" ") unless seq.length <= 1
  end

  def play
    until self.game_over?
      self.take_turn
      system("clear")
    end

  end

  def take_turn

    self.show_sequence
    self.require_sequence
  end

  def show_sequence
    self.add_random_color
    p @seq_str
  end

  def require_sequence
    self.get_input
    if !self.game_over?
      self.round_success_message
      sequence_length += 1
    else
      self.game_over_message
    end

  end

  def game_over?
    guess != @seq_str
  end

  def get_input
    puts "try a guess"
    guess = gets.chomp
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "Great job, #{@seq_str} was the correct guess!"
  end

  def game_over_message
    puts "Sorry, the correct answer was #{@seq_str} you lose"
  end

  def reset_game

  end
end

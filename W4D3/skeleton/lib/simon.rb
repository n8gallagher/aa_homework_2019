class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play

  end

  def take_turn
    self.show_sequence
    self.require_sequence
  end

  def show_sequence
    self.add_random_color
    p seq
  end

  def require_sequence
    if self.game_over?
      self.round_success_message
    else
      self.game_over_message
    end

  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "Great job, #{seq.join(" ")} was the correct guess!"
  end

  def game_over_message
    puts "Sorry, the correct answer was #{seq.join(" ")} you lose"
  end

  def reset_game

  end
end

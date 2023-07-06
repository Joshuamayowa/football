import React from 'react'
import Football from './components/Football'

const football = [
  {
      'Id': 1,
      'name': 'David de Gea',
      'age': 31,
      'country': 'Spain',
      'image': '/images/degea.jpg',
      'description': 'David de Gea is a Spanish goalkeeper known for his exceptional reflexes and shot-stopping abilities.'
  },
  {
      'Id': 2,
      'name': 'Harry Maguire',
      'age': 28,
      'country': 'England',
      'image': '/images/harry.jpg',
      'description': 'Harry Maguire is an English defender and the captain of Manchester United. He is known for his leadership skills and aerial dominance.'
  },
  {
      'Id': 3,
      'name': 'Bruno Fernandes',
      'age': 26,
      'country': 'Portugal',
      'image': '/images/bruno.jpg',
      'description': 'Bruno Fernandes is a Portuguese midfielder who is known for his creativity, vision, and goal-scoring ability.'
  },
  {
      'Id': 4,
      'name': 'Paul Pogba',
      'age': 28,
      'country': 'France',
      'image': '/images/paul.jpg',
      'description': 'Paul Pogba is a French midfielder known for his technical skills, long-range shooting, and passing ability.'
  },
  {
      'Id': 5,
      'name': 'Marcus Rashford',
      'age': 23,
      'country': 'England',
      'image': '/images/marcus.jpg',
      'description': 'Marcus Rashford is an English forward known for his pace, agility, and goal-scoring ability.'
  },
  {
      'Id': 6,
      'name': 'Edinson Cavani',
      'age': 34,
      'country': 'Uruguay',
      'image': '/images/edinson.jpg',
      'description': 'Edinson Cavani is a Uruguayan forward known for his predatory instincts and aerial ability.'
  },
  {
      'Id': 7,
      'name': 'Luke Shaw',
      'age': 25,
      'country': 'England',
      'image': '/images/shaw.jpg',
      'description': 'Luke Shaw is an English left-back known for his solid defending and attacking contributions.'
  },
  {
      'Id': 8,
      'name': 'Aaron Wan-Bissaka',
      'age': 23,
      'country': 'England',
      'image': '/images/aaron.jpg',
      'description': 'Aaron Wan-Bissaka is an English right-back known for his exceptional tackling and defensive skills.'
  },
  {
      'Id': 9,
      'name': 'Scott McTominay',
      'age': 24,
      'country': 'Scotland',
      'image': '/images/scott.jpg',
      'description': 'Scott McTominay is a Scottish midfielder known for his physicality and versatility in midfield.'
  },
  {
      'Id': 10,
      'name': 'Mason Greenwood',
      'age': 19,
      'country': 'England',
      'image': '/images/mason.jpg',
      'description': 'Mason Greenwood is an English forward known for his composure in front of goal and excellent finishing ability.'
  },
  {
      'Id': 11,
      'name': 'Victor Lindelöf',
      'age': 27,
      'country': 'Sweden',
      'image': '/images/victor.jpg',
      'description': 'Victor Lindelöf is a Swedish defender known for his calmness on the ball and ability to read the game.'
  },
  {
      'Id': 12,
      'name': 'Donny van de Beek',
      'age': 24,
      'country': 'Netherlands',
      'image': '/images/donny.jpg',
      'description': 'Donny van de Beek is a Dutch midfielderknown for his intelligent movement, technical skills, and ability to contribute both offensively and defensively.'
  }
]

export default function page() {
  return (
    <div>
      <Football list={football}/>
    </div>
  )
}


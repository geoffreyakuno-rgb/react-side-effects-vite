function JokeDisplay({ joke, loading }) {
  if (loading) {
    return <p>Loading...</p>
  }

  return <p>{joke}</p>
}

export default JokeDisplay
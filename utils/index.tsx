export async function fetchCars() {
  const headers = {
    headers: {
      "X-RapidAPI-Key": "d6820d056cmsh6751ef1c3b8df5fp12476ajsn7aa4106d5830",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );

  const result = await response.json();
  return result;
}

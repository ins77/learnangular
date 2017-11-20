type Env = {
  production: boolean
};

type Place = {
  place_type: string,
  place_info: HotelInfo,
  weather: Weather,
  social_info: SocialInfo
};

type PlaceType = {
  title: string
};

type HotelInfo = {
  img: string,
  contacts: Contact[]
};

type Contact = {
  address: string,
  phone: number, // дополнительно задание pipe для форматирования
  photos: Photo[]
};

type Photo = {
  img: string
};

type Weather = {
  title: string,
  icon: string,
  water: number,
  temperature: number
};

type SocialInfo = {
  title: string,
  img: string,
  followers: number,
  following: number
};

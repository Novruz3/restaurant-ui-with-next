export interface ILink {
  id: number,
  title: string,
  url: string
}

export interface ISliderData {
  id: number,
  title: string,
  image: string
}

export interface IProduct {
  id: number,
  title: string,
  desc?: string,
  img?: string,
  price: number,
  options?: {
    title: string,
    additionalPrice: number
  }[]
}

export interface IMenu{
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}

export interface IPriceProps{
  id: number,
  price: number,
  options?: {
    title: string,
    additionalPrice: number
  }[]
}
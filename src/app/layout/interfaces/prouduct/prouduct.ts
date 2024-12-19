export interface prouduct {
sold: number;
images: string[];
subcategory: Subcategory[];
ratingsQuantity: number;
_id: string;
title: string;
slug: string;
description: string;
quantity: number;
price: number;
priceAfterDiscount: number;
imageCover: string;
category: Category;
brand: Category;
ratingsAverage: number;
createdAt: string;
updatedAt: string;
id: string;
}

interface Category {
_id: string;
name: string;
slug: string;
image: string;
}

interface Subcategory {
_id: string;
name: string;
slug: string;
category: string;
}
 



export interface spec_data {
  data: Data;
}

export interface Data {
  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Category;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  reviews: any[];
  id: string;
}

export interface Category_interface {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}


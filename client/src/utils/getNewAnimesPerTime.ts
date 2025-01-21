'use client';
import { Dispatch, SetStateAction } from 'react';

export async function getNewAnimesPerTime(setPage: Dispatch<SetStateAction<number>>, page: number) {
  setTimeout(() => {
    if (page >= 5) {
      console.log(page);
      setPage(0);
      return;
    }
    console.log(page++);
    setPage(page++);
    return;
  }, 10000);
}

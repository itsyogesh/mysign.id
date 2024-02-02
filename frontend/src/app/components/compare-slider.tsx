'use client'

import Image from 'next/image'
import { FC } from 'react'

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from 'react-compare-slider'

export interface CompareSliderProps {
  className?: string
}

export const CompareSlider: FC<CompareSliderProps> = ({ className, ...rest }) => (
  <ReactCompareSlider
    className={className}
    handle={
      <ReactCompareSliderHandle
        buttonStyle={{
          width: '48px',
          height: '48px',
        }}
      />
    }
    boundsPadding={10}
    itemOne={<ReactCompareSliderImage src="/images/mysign-before.jpeg" alt="before" />}
    itemTwo={
      <ReactCompareSliderImage src="/images/mysign-after.png" alt="after" className=" bg-white" />
    }
    {...rest}
    keyboardIncrement="5%"
    position={60}
  />
)

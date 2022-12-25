import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Stack>
    <Skeleton height='60px' />
    <Skeleton height='60px' />
    <Skeleton height='60px' />
    <Skeleton height='60px' />
    <Skeleton height='60px' />
    <Skeleton height='60px' />
    <Skeleton height='60px' />
    <Skeleton height='60px' />
    <Skeleton height='60px' />
    <Skeleton height='60px' />
  </Stack>
  )
}

export default Loader
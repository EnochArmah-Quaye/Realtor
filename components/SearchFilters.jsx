import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button, filter } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterData'

const SearchFilters = () => {
    const [filters, setfilters] = useState({filterData});

    const searchProperties = (filterValues) => {
      
    }
 return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filter.map((filter) => (
         <Box key={filter.queryName}>
            <Select onChange={(e) => searchProperties()}>

            </Select>
         </Box>
      ))}
    </Flex>
 )
} 

export default SearchFilters;
import React from 'react';

import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
 
} from '@chakra-ui/react';
import { AiOutlineSend,AiOutlineInstagram,AiOutlineGithub,AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackalpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size="md" textTransform={'uppercase'} textAlign={['center','start ']}>
            Subscribe to get update
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          width={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All Rights Reserved</Text>
         
        </VStack>

            <VStack width={'full'}>
          <Heading size={'md'} textTransform={'unset'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white.600'}>
            <a target={'_blank'} href="https://www.linkedin.com/in/omkar-more-599923203/">Linkedin</a>
          </Button>
          <Button variant={'link'} colorScheme={'white.600'}>
            <a target={'_blank'} href="https://www.instagram.com/omkar_more07/?igshid=NGExMmI2YTkyZg%3D%3D">Instagram </a>
          </Button>
          <Button variant={'link'} colorScheme={'white.600'}>
            <a target={'_blank'} href="https://github.com/omkar01111">GitHub</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

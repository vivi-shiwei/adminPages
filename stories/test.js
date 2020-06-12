import React from 'react';

import NewBgLayout, { NewInputHeader } from '../conponents/newBgLayout'
import App from '../App'
import LinkNext from 'next/link'

import {
    Box,
    Heading,
    List,
    ListItem,
    Divider,
    ListIcon
} from '@chakra-ui/core'

const SchoolAdminPage = () => {
    return (
        <NewBgLayout
            backurl={[
                {
                    href: '/school',
                    name: '首頁',
                }
            ]}
        >
            <Box>
                <Box>
                    <NewInputHeader
                        title='管理員'
                    />
                    <Divider my={3} />
                </Box>

                <Box as='article' pl='5%'>
                    <Heading fontSize={{ base: '14px', sm: '1rem' }} my={4}>你是一個管理員, 所以你可以擁有以下操作…</Heading>

                    <List spacing={3}>
                        <ListItem className='admin-list-item'>
                            <LinkNext href='/school'>
                                <Box as='a' href='#'>
                                    <ListIcon icon='check-circle' color='green.500' />
                  修改學校
                </Box>
                            </LinkNext>
                        </ListItem>
                        <ListItem className='admin-list-item'>
                            <LinkNext href='/school'>
                                <Box as='a' href='#'>
                                    <ListIcon icon='check-circle' color='green.500' />
                    新增/刪除學校用戶
                </Box>
                            </LinkNext>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </NewBgLayout>
    )
}

export default { title: 'Button' };

export const withText = () => (
    App(SchoolAdminPage)
)
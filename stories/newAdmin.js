import React from 'react';

import NewBgLayout, { NewInputHeader } from '../conponents/newBgLayout'
import App from '../App'
import LinkNext from 'next/link'
import NewAdminModal from '../conponents/newAdminModal'

import NextLink from 'next/link'

import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Divider,
    useDisclosure,
    Image,
    IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Badge,
    DarkMode,
    Text,
    LightMode,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
} from '@chakra-ui/core'

import MyImage from "../static/QQ20200518181405.jpg"
import MyImage3 from "../static/timg8J2T10BJ.jpg"
import MyImage4 from "../static/timgXOPS3YTR.jpg"
import MyImage6 from "../static/timg.jpg"
const initialValues = {
    name: '',
    email: '',
    englishName: '',
    gender: 'M',
    idNo: '',
    eduNo: '',
    cardNo: '',
    profilePhoto: ''
}
// const schoolusers = () => ({
//     profilePhoto: MyImage,
//     name: 'vivi',
//     isAdmin: true,
//     isDirector: false,
//     isTeacher: true,
//     isStudent: false,
//     currentClsMember: {
//         num: 1,
//         cls: {
//             name: '幼兒甲'
//         }
//     }
// })

const newAdmin = () => {


    const { isOpen: isAdminOpen, onOpen: onAdminOpen, onClose: onAdminClose } = useDisclosure()
    const { isOpen: isDirectorOpen, onOpen: onDirectorOpen, onClose: onDirectorClose } = useDisclosure()
    const { isOpen: isTeacherOpen, onOpen: onTeacherOpen, onClose: onTeacherClose } = useDisclosure()
    const { isOpen: isStudentOpen, onOpen: onStudentOpen, onClose: onStudentClose } = useDisclosure()

    // const currentClsMember = [{
    //     cls: { name: '幼兒甲', haha: 'dij' },
    //     num: 2
    // }, {
    //     cls: { name: '幼兒甲', haha: 'dij' },
    //     num: 2
    // }
    // ]
    const schoolusers = [
        {
            profilePhoto: MyImage,
            name: 'vivi',
            isAdmin: false,
            isDirector: false,
            isTeacher: true,
            isStudent: false,
            currentClsMember: {
                num: 1,
                cls: {
                    name: '交給'
                }
            }
        },
        {
            profilePhoto: MyImage3,
            name: 'vivi1',
            isAdmin: false,
            isDirector: false,
            isTeacher: false,
            isStudent: true,
            currentClsMember: {
                num: 1,
                cls: {
                    name: '幼兒'
                }
            }
        },
        {
            profilePhoto: MyImage,
            name: 'vivi2',
            isAdmin: false,
            isDirector: false,
            isTeacher: false,
            isStudent: true,
            currentClsMember: {
                num: 1,
                cls: {
                    name: '交給'
                }
            }
        },
        {
            profilePhoto: MyImage4,
            name: 'vivi3',
            isAdmin: false,
            isDirector: false,
            isTeacher: false,
            isStudent: true,
            currentClsMember: {
                num: 1,
                cls: {
                    name: '二點'
                }
            }
        },
        {
            profilePhoto: MyImage,
            name: 'vivi9',
            isAdmin: false,
            isDirector: true,
            isTeacher: false,
            isStudent: false,
            currentClsMember: {
                num: 1,
                cls: {
                    name: '二點'
                }
            }
        },
        {
            profilePhoto: MyImage,
            name: 'vivi10',
            isAdmin: true,
            isDirector: false,
            isTeacher: false,
            isStudent: false,
            currentClsMember: {
                num: 1,
                cls: {
                    name: '二點'
                }
            }
        },
        {
            profilePhoto: MyImage,
            name: 'vivi10',
            isAdmin: false,
            isDirector: false,
            isTeacher: true,
            isStudent: false,
            currentClsMember: {
                num: 1,
                cls: {
                    name: '二點'
                }
            }
        },
        {
            profilePhoto: MyImage,
            name: 'vivi4',
            isAdmin: false,
            isDirector: false,
            isTeacher: false,
            isStudent: true,
            currentClsMember: {
                num: 1,
                cls: {
                    name: '交給'
                }
            }
        },
        {
            profilePhoto: MyImage6,
            name: 'vivi5',
            isAdmin: false,
            isDirector: false,
            isTeacher: false,
            isStudent: true,
            currentClsMember: {
                num: 1,
                cls: {
                    name: '交給'
                }
            }
        },
        {
            profilePhoto: MyImage,
            name: 'vivi6',
            isAdmin: false,
            isDirector: false,
            isTeacher: false,
            isStudent: true,
            currentClsMember: {
                num: 1,
                cls: {
                    name: '交給'
                }
            }
        },
        {
            profilePhoto: MyImage,
            name: 'vivi7',
            isAdmin: false,
            isDirector: false,
            isTeacher: false,
            isStudent: true,
            currentClsMember: {
                num: 1,
                cls: {
                    name: '交給'
                }
            }
        },
        {
            profilePhoto: MyImage3,
            name: 'vivi8',
            isAdmin: false,
            isDirector: false,
            isTeacher: false,
            isStudent: true,
            currentClsMember: {
                num: 1,
                cls: {
                    name: '交給'
                }
            }
        },
        {
            profilePhoto: MyImage6,
            name: 'vivi9',
            isAdmin: false,
            isDirector: false,
            isTeacher: false,
            isStudent: true,
            currentClsMember: {
                num: 1,
                cls: {
                    name: ''
                }
            }
        }
    ]
    return (
        <NewBgLayout
            backurl={[
                {
                    href: '/school',
                    name: '首頁',
                },
                {
                    href: '/school',
                    name: '管理員',
                }
            ]}
        >
            <Box py={4}>
                <Box pt='1px'>
                    <Box
                        as='section'
                        mx='auto'
                        w='100%'
                        maxW={{ base: '100%', sm: '100%', md: '800px' }}
                        backgroundColor='white'
                        rounded={8}
                        transition='0.3s'
                    >
                        <Box as='header' position='relative' mb='10px'>
                            <NewInputHeader
                                title='用戶'
                            />
                            <Tabs>
                                <TabList>
                                    <Tab>系統管理員</Tab>
                                    <Tab>學校負責人</Tab>
                                    <Tab>老師</Tab>
                                    <Tab>學生</Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel>
                                        <Button
                                            w='70px'
                                            h='30px'
                                            position='relative'
                                            left={['83%', '87%', '87%', '90%']}
                                            color='black'
                                            transform='translate(5px, -110%)'
                                            onClick={onAdminOpen}
                                        // transform='translate(11px, -50%)'
                                        // rightIcon='chevron-down'
                                        >
                                            <NewAdminModal
                                                title='新增系統管理員'
                                                type='admin'
                                                initialValues={initialValues}
                                                onModalClose={onAdminClose}
                                                isModalOpen={isAdminOpen}
                                                imageURL={MyImage3}
                                                onSuccess={(val, close) => {
                                                    close()
                                                }}
                                            />
                                            新 增
                                        </Button>
                                        <Box mt={6}>
                                            {schoolusers.map(item => {
                                                return (
                                                    (item.isAdmin && !item.isStudent) ? (
                                                        <Box position='relative'>
                                                            <Box d='flex' position='relative'>
                                                                <Box
                                                                    width='40px'
                                                                    height='40px'
                                                                    borderRadius='50%'
                                                                    overflow=' hidden'
                                                                    rounded='full'
                                                                    background='#c3c3c3'
                                                                    mx={4}
                                                                >
                                                                    {item.profilePhoto && (<Popover trigger="hover">
                                                                        <PopoverTrigger>
                                                                            <Image src={item.profilePhoto}
                                                                                rounded="full"
                                                                                size="50px" />
                                                                        </PopoverTrigger>

                                                                        <LightMode>
                                                                            <PopoverContent border="0" zIndex={4} width="400px" color="black">
                                                                                <Box p={5}>
                                                                                    <Image src={item.profilePhoto}
                                                                                        rounded="full"
                                                                                        size="50px" />
                                                                                    <Text mt={4} fontWeight="bold">
                                                                                        {item.name}
                                                                                        <Badge ml={3} fontSize="xs">
                                                                                            Follows you
                                                                                    </Badge>
                                                                                    </Text>
                                                                                    <Text mt={3}>
                                                                                        Infinite Builder working on DX @Netlify. Helping people
                                                                                        #LearnInPublic
                                                                                </Text>
                                                                                </Box>
                                                                            </PopoverContent>
                                                                        </LightMode>
                                                                    </Popover>)}
                                                                </Box>

                                                                <Box as='div'>
                                                                    <Box as='div' d={{ base: 'block', sm: 'flex' }}>
                                                                        姓名：{item.name}
                                                                        <Box as='div'>
                                                                            {item.isAdmin ? '（管理員）' : ''}
                                                                        </Box>
                                                                    </Box>

                                                                </Box>
                                                                <NextLink
                                                                    href='/schoolt'
                                                                    passHref
                                                                >
                                                                    <IconButton
                                                                        icon='edit'
                                                                        variantColor='blue'
                                                                        position='absolute'
                                                                        right='70px'
                                                                        top='50%'
                                                                        transform='translate(0, -50%)'
                                                                    />
                                                                </NextLink>

                                                                <IconButton
                                                                    variantColor='red'
                                                                    icon='delete'
                                                                    position='absolute'
                                                                    right='20px'
                                                                    top='50%'
                                                                    transform='translate(0, -50%)'
                                                                />
                                                            </Box>
                                                            <Divider my={6} />
                                                        </Box>
                                                    ) : ''
                                                )
                                            })}
                                        </Box>
                                    </TabPanel>
                                    <TabPanel>
                                        <Button
                                            w='70px'
                                            h='30px'
                                            position='relative'
                                            left={['83%', '87%', '87%', '90%']}
                                            color='black'
                                            transform='translate(5px, -110%)'
                                            onClick={onDirectorOpen}
                                        // transform='translate(11px, -50%)'
                                        // rightIcon='chevron-down'
                                        >
                                            <NewAdminModal
                                                title='新增學校負責人'
                                                type='director'
                                                initialValues={initialValues}
                                                onModalClose={onDirectorClose}
                                                isModalOpen={isDirectorOpen}
                                                imageURL={MyImage}
                                                onSuccess={(val, close) => {
                                                    close()
                                                }}
                                            />
                                            新 增
                                        </Button>
                                        <Box mt={6}>
                                            {schoolusers.map(item => {
                                                return (
                                                    (item.isDirector && !item.isStudent) ? (
                                                        <Box position='relative'>
                                                            <Box d='flex' position='relative'>
                                                                <Box
                                                                    width='40px'
                                                                    height='40px'
                                                                    borderRadius='50%'
                                                                    overflow=' hidden'
                                                                    rounded='full'
                                                                    background='#c3c3c3'
                                                                    mx={4}
                                                                >
                                                                    {item.profilePhoto && (<Popover trigger="hover">
                                                                        <PopoverTrigger>
                                                                            <Image src={item.profilePhoto}
                                                                                rounded="full"
                                                                                size="50px" />
                                                                        </PopoverTrigger>

                                                                        <LightMode>
                                                                            <PopoverContent border="0" zIndex={4} width="400px" color="black">
                                                                                <Box p={5}>
                                                                                    <Image src={item.profilePhoto}
                                                                                        rounded="full"
                                                                                        size="50px" />
                                                                                    <Text mt={4} fontWeight="bold">
                                                                                        {item.name}
                                                                                        <Badge ml={3} fontSize="xs">
                                                                                            Follows you
                                                                                    </Badge>
                                                                                    </Text>
                                                                                    <Text mt={3}>
                                                                                        Infinite Builder working on DX @Netlify. Helping people
                                                                                        #LearnInPublic
                                                                                </Text>
                                                                                </Box>
                                                                            </PopoverContent>
                                                                        </LightMode>
                                                                    </Popover>)}
                                                                </Box>

                                                                <Box as='div'>
                                                                    <Box as='div' d={{ base: 'block', sm: 'flex' }}>
                                                                        姓名：{item.name}
                                                                        <Box as='div'>
                                                                            {item.isDirector ? '（學校負責人）' : ''}
                                                                        </Box>
                                                                    </Box>

                                                                </Box>
                                                                <NextLink
                                                                    href='/schoolt'
                                                                    passHref
                                                                >
                                                                    <IconButton
                                                                        icon='edit'
                                                                        variantColor='blue'
                                                                        position='absolute'
                                                                        right='70px'
                                                                        top='50%'
                                                                        transform='translate(0, -50%)'
                                                                    />
                                                                </NextLink>

                                                                <IconButton
                                                                    variantColor='red'
                                                                    icon='delete'
                                                                    position='absolute'
                                                                    right='20px'
                                                                    top='50%'
                                                                    transform='translate(0, -50%)'
                                                                />
                                                            </Box>
                                                            <Divider my={6} />
                                                        </Box>
                                                    ) : ''
                                                )
                                            })}
                                        </Box>
                                    </TabPanel>
                                    <TabPanel>
                                        <Button
                                            w='70px'
                                            h='30px'
                                            position='relative'
                                            left={['83%', '87%', '87%', '90%']}
                                            color='black'
                                            transform='translate(5px, -110%)'
                                            onClick={onTeacherOpen}
                                        >
                                            <NewAdminModal
                                                title='新增老師'
                                                type='teacher'
                                                initialValues={initialValues}
                                                onModalClose={onTeacherClose}
                                                isModalOpen={isTeacherOpen}
                                                imageURL={MyImage}
                                                onSuccess={(val, close) => {
                                                    close()
                                                }}
                                            />
                                            新 增
                                        </Button>
                                        <Box mt={6}>
                                            {schoolusers.map(item => {
                                                return (
                                                    (item.isTeacher && !item.isStudent) ? (
                                                        <Box position='relative'>
                                                            <Box d='flex' position='relative'>
                                                                <Box
                                                                    width='40px'
                                                                    height='40px'
                                                                    borderRadius='50%'
                                                                    overflow=' hidden'
                                                                    rounded='full'
                                                                    background='#c3c3c3'
                                                                    mx={4}
                                                                >
                                                                    {item.profilePhoto && (<Popover trigger="hover">
                                                                        <PopoverTrigger>
                                                                            <Image src={item.profilePhoto}
                                                                                rounded="full"
                                                                                size="50px" />
                                                                        </PopoverTrigger>

                                                                        <LightMode>
                                                                            <PopoverContent border="0" zIndex={4} width="400px" color="black">
                                                                                <Box p={5}>
                                                                                    <Image src={item.profilePhoto}
                                                                                        rounded="full"
                                                                                        size="50px" />
                                                                                    <Text mt={4} fontWeight="bold">
                                                                                        {item.name}
                                                                                        <Badge ml={3} fontSize="xs">
                                                                                            Follows you
                                                                                    </Badge>
                                                                                    </Text>
                                                                                    <Text mt={3}>
                                                                                        Infinite Builder working on DX @Netlify. Helping people
                                                                                        #LearnInPublic
                                                                                </Text>
                                                                                </Box>
                                                                            </PopoverContent>
                                                                        </LightMode>
                                                                    </Popover>)}
                                                                </Box>

                                                                <Box as='div'>
                                                                    <Box as='div' d={{ base: 'block', sm: 'flex' }}>
                                                                        姓名：{item.name}
                                                                        <Box as='div'>
                                                                            {item.isTeacher ? '(老師)' : ''}
                                                                        </Box>
                                                                    </Box>

                                                                </Box>
                                                                <NextLink
                                                                    href='/schoolt'
                                                                    passHref
                                                                >
                                                                    <IconButton
                                                                        icon='edit'
                                                                        variantColor='blue'
                                                                        position='absolute'
                                                                        right='70px'
                                                                        top='50%'
                                                                        transform='translate(0, -50%)'
                                                                    />
                                                                </NextLink>

                                                                <IconButton
                                                                    variantColor='red'
                                                                    icon='delete'
                                                                    position='absolute'
                                                                    right='20px'
                                                                    top='50%'
                                                                    transform='translate(0, -50%)'
                                                                />
                                                            </Box>
                                                            <Divider my={6} />
                                                        </Box>
                                                    ) : ''
                                                )
                                            })}
                                        </Box>
                                    </TabPanel>
                                    <TabPanel>
                                        <Button
                                            w='70px'
                                            h='30px'
                                            position='relative'
                                            left={['83%', '87%', '87%', '90%']}
                                            color='black'
                                            transform='translate(5px, -110%)'
                                            onClick={onStudentOpen}
                                        // rightIcon='chevron-down'
                                        >
                                            <NewAdminModal
                                                title='新增學生'
                                                type='student'
                                                onModalClose={onStudentClose}
                                                isModalOpen={isStudentOpen}
                                                imageURL={MyImage}
                                                onSuccess={(val, close) => {
                                                    close()
                                                }}
                                            />
                                            新 增
                                        </Button>
                                        <Box mt={6}>
                                            {schoolusers.map(item => {
                                                return (
                                                    (item.isStudent) ? (
                                                        <Box position='relative'>
                                                            <Box d='flex' position='relative'>
                                                                <Box
                                                                    width='40px'
                                                                    height='40px'
                                                                    borderRadius='50%'
                                                                    overflow=' hidden'
                                                                    rounded='full'
                                                                    background='#c3c3c3'
                                                                    mx={4}
                                                                >
                                                                    {item.profilePhoto && (<Popover trigger="hover">
                                                                        <PopoverTrigger>
                                                                            <Image src={item.profilePhoto}
                                                                                rounded="full"
                                                                                size="50px" />
                                                                        </PopoverTrigger>

                                                                        <LightMode>
                                                                            <PopoverContent border="0" zIndex={4} width="400px" color="black">
                                                                                <Box p={5}>
                                                                                    <Image src={item.profilePhoto}
                                                                                        rounded="full"
                                                                                        size="50px" />
                                                                                    <Text mt={4} fontWeight="bold">
                                                                                        {item.name}
                                                                                        <Badge ml={3} fontSize="xs">
                                                                                            Follows you
                                                                                    </Badge>
                                                                                    </Text>
                                                                                    <Text mt={3}>
                                                                                        Infinite Builder working on DX @Netlify. Helping people
                                                                                        #LearnInPublic
                                                                                </Text>
                                                                                </Box>
                                                                            </PopoverContent>
                                                                        </LightMode>
                                                                    </Popover>)}
                                                                </Box>

                                                                <Box as='div'>
                                                                    <Box as='div' d={{ base: 'block', sm: 'flex' }}>
                                                                        姓名：{item.name}
                                                                        <Box as='div'>
                                                                            {item.isStudent ? (item.currentClsMember ? (<Box as='span' d={{ base: 'none', md: 'block' }}>（學生）</Box>) : (<Box as='span'>（學生）</Box>)) : ''}
                                                                        </Box>
                                                                    </Box>
                                                                    {
                                                                        item.currentClsMember && (
                                                                            (item.isStudent && item.currentClsMember.cls && item.currentClsMember.num) && (
                                                                                <Box as='div' alignItems='center'>
                                                                                    <Box as='div'>{`班級：${item.currentClsMember.cls.name}`}</Box>
                                                                                    <Box as='div'>學號：{item.currentClsMember.num}</Box>
                                                                                    <Box as='div' d={{ base: 'block', md: 'none' }}>（學生）</Box>
                                                                                </Box>
                                                                            )
                                                                        )
                                                                    }
                                                                </Box>
                                                                <NextLink
                                                                    href='/schoolt'
                                                                    passHref
                                                                >
                                                                    <IconButton
                                                                        icon='edit'
                                                                        variantColor='blue'
                                                                        position='absolute'
                                                                        right='70px'
                                                                        top='50%'
                                                                        transform='translate(0, -50%)'
                                                                    />
                                                                </NextLink>

                                                                <IconButton
                                                                    variantColor='red'
                                                                    icon='delete'
                                                                    position='absolute'
                                                                    right='20px'
                                                                    top='50%'
                                                                    transform='translate(0, -50%)'
                                                                />
                                                            </Box>
                                                            <Divider my={6} />
                                                        </Box>
                                                    ) : ''
                                                )
                                            })}
                                        </Box>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                            {/* <Menu>
                                <MenuButton
                                    as={Button}
                                    variantColor='blue'
                                    position='absolute'
                                    bottom='10px'
                                    left='0px'
                                    top='50%'
                                    transform='translate(11px, -50%)'
                                    rightIcon='chevron-down'
                                >
                                    新 增
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={onAdminOpen}>新增系統管理員</MenuItem>
                                    <MenuItem onClick={onDirectorOpen}>新增學校負責人</MenuItem>
                                    <MenuItem onClick={onTeacherOpen}>新增老師</MenuItem>
                                    <MenuItem onClick={onStudentOpen}>新增學生</MenuItem>
                                </MenuList>
                            </Menu>

                            <NewAdminModal
                                title='新增系統管理員'
                                type='admin'
                                initialValues={initialValues}
                                onModalClose={onAdminClose}
                                isModalOpen={isAdminOpen}
                                imageURL={MyImage3}
                                onSuccess={(val, close) => {
                                    close()
                                }}
                            />

                            <NewAdminModal
                                title='新增學校負責人'
                                type='director'
                                initialValues={initialValues}
                                onModalClose={onDirectorClose}
                                isModalOpen={isDirectorOpen}
                                imageURL={MyImage}
                                onSuccess={(val, close) => {
                                    close()
                                }}
                            />

                            <NewAdminModal
                                title='新增老師'
                                type='teacher'
                                initialValues={initialValues}
                                onModalClose={onTeacherClose}
                                isModalOpen={isTeacherOpen}
                                imageURL={MyImage}
                                onSuccess={(val, close) => {
                                    close()
                                }}
                            />

                            <NewAdminModal
                                title='新增學生'
                                type='student'
                                onModalClose={onStudentClose}
                                isModalOpen={isStudentOpen}
                                imageURL={MyImage}
                                onSuccess={(val, close) => {
                                    close()
                                }}
                            />
                        </Box>
                        <Divider my={3} />

                        <Box mt={6}>
                            {schoolusers.map(item => {
                                return (
                                    <Box key={item.id} position='relative'>
                                        <Box d='flex' position='relative'>
                                            <Box
                                                width='40px'
                                                height='40px'
                                                borderRadius='50%'
                                                overflow=' hidden'
                                                rounded='full'
                                                background='#c3c3c3'
                                                mx={2}
                                            >
                                                {item.profilePhoto && (<Popover trigger="hover">
                                                    <PopoverTrigger>
                                                        <Image src={item.profilePhoto}
                                                            rounded="full"
                                                            size="50px" />
                                                    </PopoverTrigger>

                                                    <LightMode>
                                                        <PopoverContent border="0" zIndex={4} width="400px" color="black">
                                                            <Box p={5}>
                                                                <Image src={item.profilePhoto}
                                                                    rounded="full"
                                                                    size="50px" />
                                                                <Text mt={4} fontWeight="bold">
                                                                    {item.name}
                                                                    <Badge ml={3} fontSize="xs">
                                                                        Follows you
                                                            </Badge>
                                                                </Text>
                                                                <Text mt={3}>
                                                                    Infinite Builder working on DX @Netlify. Helping people
                                                                    #LearnInPublic
                                                          </Text>
                                                            </Box>
                                                        </PopoverContent>
                                                    </LightMode>
                                                </Popover>)}
                                            </Box>

                                            <Box as='div'>
                                                <Box as='div' d={{ base: 'block', sm: 'flex' }}>
                                                    姓名：{item.name}
                                                    <Box as='div'>
                                                        {item.isAdmin ? '（管理員）' : (item.isDirector ? '（學校負責人）' : (item.isTeacher ? '（老師）' : ''))}
                                                        {item.isStudent ? (item.currentClsMember ? (<Box as='span' d={{ base: 'none', md: 'block' }}>（學生）</Box>) : (<Box as='span'>（學生）</Box>)) : ''}
                                                    </Box>
                                                </Box>
                                                {
                                                    item.currentClsMember && (
                                                        (item.isStudent && item.currentClsMember.cls && item.currentClsMember.num) && (
                                                            <Box as='div' alignItems='center'>
                                                                <Box as='div'>{`班級：${item.currentClsMember.cls.name}`}</Box>
                                                                <Box as='div'>學號：{item.currentClsMember.num}</Box>
                                                                <Box as='div' d={{ base: 'block', md: 'none' }}>（學生）</Box>
                                                            </Box>
                                                        )
                                                    )
                                                }

                                            </Box>
                                            <NextLink
                                                href='/schoolt'
                                                passHref
                                            >
                                                <IconButton
                                                    icon='edit'
                                                    variantColor='blue'
                                                    position='absolute'
                                                    right='70px'
                                                    top='50%'
                                                    transform='translate(0, -50%)'
                                                />
                                            </NextLink>

                                            <IconButton
                                                variantColor='red'
                                                icon='delete'
                                                position='absolute'
                                                right='20px'
                                                top='50%'
                                                transform='translate(0, -50%)'
                                            />
                                        </Box>
                                        <Divider my={6} />
                                    </Box>
                                )
                            })} */}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </NewBgLayout>
    )
}

export default { title: 'newAdmin' };

export const newAdmins = () => (
    App(newAdmin)
)
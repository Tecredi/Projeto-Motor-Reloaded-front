import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    padding: 5px;
    background-color: #bebebe;
    &:hover {
        background-color: #9e9e9e;
    }
    margin: 1px auto;
`

const Text = styled.p`
    margin: 0;
    color: black;
    font-weight: bold;
`

const Url = styled.span`
    cursor:pointer;
    &:hover {
        text-decoration: underline;
    }
`

type GodLinkItemProps = {
    link: {
        path: string,
        title: string
    }
    onClickUrl: () => any
}

const GodLinkItem = ({link, onClickUrl}: GodLinkItemProps) => {
    const {path, title} = link

    return (
        <Item>
            <Text>{title}</Text>
            <Url onClick={onClickUrl}>{path}</Url>
        </Item>
        )
}

export default GodLinkItem
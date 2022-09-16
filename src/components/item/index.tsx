import React from "react";
import styled from "styled-components";

function Item(props: any) {
    const Item = styled.div`
        font-size: 30px;
        border: solid 1px black;
        width: 400px;
        margin: 25px;
        padding: 25px;
        border-radius: 20px;
        &:hover {
            background-color: #e6ffff;
            cursor: pointer;
        }
    `;

    return (
        <Item>
            {props.text}
        </Item>
    );
}

export default Item;
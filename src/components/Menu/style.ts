import styled from "styled-components";
import {Link} from "react-router-dom";

export const WrapperUl = styled.ul`
    list-style: none;
    display: flex;
    gap: 15px;
    color: white;
    font-size: 12px;
    height: 40px;
    align-items: center;
    font-weight: 400;
    padding: 0;
    width: 1200px;
    margin:  0 auto;
`

export const WrapperLink = styled(Link)`
    text-decoration: none;
    padding: 0 5.5px;
    line-height: 40px;
    height: 40px;
    display: block;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    &:hover {
        color: #3297fd;
        cursor: pointer;
        transition: 0.4s;
    }
`

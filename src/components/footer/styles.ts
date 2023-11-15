import styled from "styled-components";

export const StyledFooter = styled.footer`

    background-color: var(--color-primary);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 50px 0 50px 0;
    border-top: 1px solid var(--color-secondary);
    margin-top: 81px;

    ul {
        display: flex;
        gap: 12px;

        li {
            cursor: pointer;
        }
    }

    div {
        display: flex;
        gap: 5px;
        align-items: center;
    }

    .reserveIcon {
        max-width: 30px;
    }

    .pinIcon {
        max-width: 30px;
    }

    figure {
        max-width: 200px;
        display: flex;
        justify-content: center;
        img {
            max-width: 150px;
        }
    }

    .social {
        display: flex;
        gap: 40px;
        img {
            max-width: 30px;
        }
    }

`
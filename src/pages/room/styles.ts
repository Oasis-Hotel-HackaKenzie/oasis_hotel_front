import styled from "styled-components";

export const StyledRoomDetails = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 0 110px 0 110px;
    gap: 35px;

    section {
        width: 100%;
    }

    .infoBox {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    ::-webkit-scrollbar {
        width: 1px; 
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--color-secondary); 
        border-radius: 10px; 
    }

    ::-webkit-scrollbar-track {
        background-color: var(--color-grey-02);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-button {
        display: none;
    }

    .sectionPhotos {
        display: flex;
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;

        figure {
            max-height: 500px;
        }

        img {
            height: 100%;
            width: 389px;
        }
    }

    .roomTitle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border-bottom: 4px solid var(--color-secondary);

        h3 {
            font-weight: 300;
        }

        span {
            font-weight: 500;
        }
    }

    .capacityBox {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        min-height: 40px;

        div {
            display: flex;
            gap: 5px;

            img {
                max-width: 25px;
            }
        }
    }

    .servicesIcons {
        border-top: 1px solid var(--color-secondary);
        border-bottom: 1px solid var(--color-secondary);
        padding: 30px 0 30px 0;
        display: flex;
        align-items: center;
        gap: 30px;

        img {
            max-width: 30px;
        }
    }

    .loginText {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;

        span {
            color: var(--color-secondary);
            cursor: pointer;
        }
    }
`
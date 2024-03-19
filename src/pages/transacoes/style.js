import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    Justify-content: center;
    margin-top: 50px;
    gap: 50px;
    width: 100%;
    
`
export const Blocksrow = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    Justify-content: center;
    gap: 50px;
    width: 100%;

`

export const BlockSaldo = styled.div`
    width: 20%;
    height: 150px;
    box-shadow: 0px 0px 8px 2px #2A112A;
    background-color: #fefefe;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    font-size: 20px;

`


export const Onblock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 10px

`
export const BlockValues = styled.div`
    display:flex;
    flex-direction: column;
    Justify-content: center;
    align-items: center;
    gap: 5px;
    border: none;
    border-radius: 10px;
    background-color: #fefefe;
    box-shadow: 0px 0px 8px 2px #2A112A;
    width: 11%;
    height: 150px;


`

export const Paragraph = styled.p`
    font-size:18px;
    font-weight: bold;

`


export const NewButton = styled.button`
    padding: 5px;
    border-radius: 10px;
    border: none;
    width: 55%;
    background-color: #2A112A;
    color: white;
    cursor: pointer;
    focus: none

`

export const NewInput = styled.input`
    padding: 10px;
    width: 50%;
    border-radius: 10px;
    border: 1px solid #C76565 ;
    outline: none;
    webkit-appearance: none;
`

export const List = styled.li`
    list-style: none;

`

//style histórico

export const HistoricoTransacao = styled.div`
    border: 2px solid #2A112A;
    border-radius:5px;
    display: flex;
    flex-direction: column;
    justify-Content: center;
    align-items:center;
    width: 400px;
    background-color: #fefefe;
    overflow-y: auto;
    max-height: 200px;
    padding:10px;
    
`
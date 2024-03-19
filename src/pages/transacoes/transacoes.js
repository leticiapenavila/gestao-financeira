import React, { useState, useEffect } from "react";
import { Container, BlockSaldo, NewButton, NewInput, BlockValues, Paragraph, List, HistoricoTransacao, Blocksrow } from "./style";
import { SlArrowDownCircle, SlArrowUpCircle } from "react-icons/sl";

export default function Inicial() {
    const [deposito, setDeposito] = useState(0);
    const [saque, setSaque] = useState(0);
    const [total, setTotal] = useState(0);
    const [historico, setHistorico] = useState([]);

    useEffect(() => {
        setTotal(deposito - saque);
    }, [deposito, saque]);

    function depositar() {
        const valor = parseFloat(document.getElementById("deposito").value);
        setDeposito(deposito + valor);
        setHistorico([...historico, { tipo: "Depósito", valor }]);
    }

    function sacar() {
        const valor = parseFloat(document.getElementById("saque").value);
        setSaque(saque + valor);
        setHistorico([...historico, { tipo: "Saque", valor }]);
    }

    return (
        <Container>
            <Blocksrow>
            <BlockValues>
                <Paragraph>Depósito <SlArrowUpCircle /></Paragraph>
                <NewInput id="deposito" type="number" placeholder="Insira o valor aqui..." />
                <NewButton onClick={depositar}>Depositar</NewButton>
            </BlockValues>
            <BlockValues>
                <Paragraph>Saque <SlArrowDownCircle /></Paragraph>
                <NewInput id="saque" type="number" placeholder="Insira o valor aqui..." />
                <NewButton onClick={sacar}>Sacar</NewButton>
            </BlockValues>
            <BlockSaldo>
                <p>Saldo Atual</p>
                <h1>R${total}</h1>
            </BlockSaldo>
            </Blocksrow>
            <Historico historico={historico}/>
        </Container>
        
    );
}


const Historico = ({ historico }) => {
    return (
        <HistoricoTransacao>
        <h2>Histórico de Transações</h2>
            <div>
            <ul>
                {historico.map((transacao, index) => (
                    <List key={index}>
                        {transacao.tipo === "Depósito" ? (
                            <span style={{ color: "green",}}><SlArrowUpCircle/> Depósito:</span>
                        ) : (
                            <span style={{ color: "red" }}><SlArrowDownCircle/> Saque:</span>
                        )}
                        R${transacao.valor}
                    </List>
                ))}
            </ul>
            </div>
        </HistoricoTransacao>
    );
};
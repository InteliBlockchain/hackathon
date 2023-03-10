import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/Layout";
import EducacionalCard from "@/components/EducacionalCard";

const Educacional = () => {
  // level -> indica a dificuldade do conteúdo
  // 1 -> básico
  // 2 -> intermediário
  // 3 -> avançado
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center bg2 md:bg-black bg-center bg-cover pt-32 pb-24 h-auto w-full mx-auto">
          <h1 className="font-bold text-5xl mb-4">Prepare-se</h1>
          <p className="font-semibold text-md">Não sabe o que é blockchain?</p>
          <p className="font-semibold text-md">Nunca programou em Solidity?</p>
          <p className="font-semibold text-md">Bora estudar!</p>
        </div>
        <div className="flex flex-col items-center justify-center md:bg-black bg-center h-auto w-full mx-auto">
          <h1 className="font-semibold text-2xl mb-2">Primeiros passos</h1>

          <EducacionalCard
            title={"Conceitos básicos em blockchain"}
            text={
              "Entenda o funcionamento e os principios técnologicos que possibilitam a maior blockchain do mundo, a Bitcoin."
            }
            type={"Texto"}
            level={1}
            important={true}
            link={"noneyet"}
          ></EducacionalCard>
          <EducacionalCard
            title={"O que é web3? O que é uma carteira?"}
            text={
              "Entenda a web3 e as famigeradas carteiras. Nesse link, foque nas lições 1 e 2. "
            }
            type={"Texto"}
            level={1}
            link={"https://learn.metamask.io/pt-BR/overview"}
          ></EducacionalCard>
          <EducacionalCard
            title={"Blockchain em negócios"}
            text={"Os casos de uso onde a blockchain está se saindo bem"}
            type={"Texto"}
            level={1}
            link={"https://www.ibm.com/topics/blockchain-for-business"}
          ></EducacionalCard>
          <EducacionalCard
            title={"O que é um NFT"}
            text={
              "Os tokens não fungiveis são parte fundamental de grande parte das soluções descentralizadas atuais."
            }
            type={"Texto"}
            level={1}
            link={
              "https://academy.binance.com/pt/articles/a-guide-to-crypto-collectibles-and-non-fungible-tokens-nfts"
            }
          ></EducacionalCard>
        </div>
        <div className="flex flex-col items-center justify-center md:bg-black bg-center h-auto w-full mx-auto">
          <h1 className="font-semibold mt-16 text-2xl mb-2">Programação</h1>

          <EducacionalCard
            title={"O que é Solidity?"}
            text={
              "O que é solidity? Por que criar uma linguagem nova só para a Ethereum?"
            }
            type={"Texto/Vídeo"}
            level={1}
            important={false}
            link={
              "https://www.simplilearn.com/tutorials/blockchain-tutorial/what-is-solidity-programming"
            }
          ></EducacionalCard>
          <EducacionalCard
            title={"Aprenda Solidity"}
            text={
              "Aprenda a programar em Solidity enquanto constrói um exercito de zumbis. Se algum programador Solidity te disser que nunca usou o CryptoZombies, ele está mentindo."
            }
            type={"Jogo"}
            level={1}
            important={true}
            link={"https://cryptozombies.io/en/course/"}
          ></EducacionalCard>
          <EducacionalCard
            title={"O que é EVM (Ethereum virtual machine)"}
            text={"Explicação em termos simples e aplicados"}
            type={"Texto"}
            level={1}
            link={
              "https://learn.bybit.com/deep-dive/what-is-ethereum-virtual-machine-evm/"
            }
          ></EducacionalCard>
        </div>
        <div className="flex flex-col items-center justify-center md:bg-black bg-center h-auto w-full mx-auto">
          <h1 className="font-semibold mt-16 text-2xl mb-2">Ferramentas</h1>

          <EducacionalCard
            title={"Deploy com Truffle"}
            text={
              "Aprenda a fazer o deploy de seus contratos Solidity para a blockchain"
            }
            type={"Texto"}
            level={2}
            important={false}
            link={
              "https://github.com/InteliBlockchain/InteliBlockchain/tree/main/tutoriais/Truffle%20-%20Deploy%20e%20compila%C3%A7%C3%A3o%20de%20contrato%20em%20Solidity"
            }
          ></EducacionalCard>
          <EducacionalCard
            title={"Token ERC-20"}
            text={"ERC-20 é o mais difundido padrão de tokens na rede Ethereum"}
            type={"Texto"}
            level={2}
            important={false}
            link={
              "https://ethereum.org/en/developers/docs/standards/tokens/erc-20/"
            }
          ></EducacionalCard>
          <EducacionalCard
            title={"Contratos OpenZeppelin"}
            text={
              "O OpenZeppelin disponibiliza contratos prontos que podem ser herdados, economizando muitas linhas de código."
            }
            type={"Docs"}
            level={2}
            important={false}
            link={"https://docs.openzeppelin.com/contracts/4.x/"}
          ></EducacionalCard>
        </div>
        <div className="flex flex-col items-center justify-center md:bg-black bg-center h-auto w-full mx-auto">
          <h1 className="font-semibold mt-16 text-2xl mb-2">Exemplos</h1>

          <EducacionalCard
            title={"Health Vault"}
            text={
              "Health Vault é um sistema web conectado com a blockchain que busca facilitar o registro de informações de saúde de forma segura. Desenvolvido na Campus Party 2023"
            }
            type={"Repositório"}
            level={3}
            important={false}
            link={"https://github.com/InteliBlockchain/HealthVault"}
          ></EducacionalCard>
          <EducacionalCard
            title={"Our Neighbours"}
            text={
              "Solução descentralizada que facilita a doação para instituições sociais em qualquer lugar no mundo. Desenvolvido na EthereumSP 2022"
            }
            type={"Repositório"}
            level={3}
            important={false}
            link={"https://github.com/lyorrei/inteli_blockchain_hackaton"}
          ></EducacionalCard>
        </div>
        <div className="flex flex-col items-center justify-center md:bg-black bg-center h-auto w-full mx-auto">
          <h1 className="font-semibold mt-16 text-2xl mb-2">
            Quero me aprofundar
          </h1>

          <EducacionalCard
            title={"Rollups"}
            text={
              "As rollup são uma solução para os altos custos de operar em uma blockchain como a Ethereum"
            }
            type={"Texto"}
            level={3}
            important={false}
            link={
              "https://decrypt.co/resources/what-are-ethereum-rollups-scaling-solution-cut-transaction-costs"
            }
          ></EducacionalCard>
          <EducacionalCard
            title={"Hyperledger"}
            text={
              "A refêrencia quando o assunto é blockchain feita e pensada para o mundo corporativo."
            }
            type={"Texto"}
            level={2}
            important={false}
            link={"https://www.edureka.co/blog/what-is-hyperledger/"}
          ></EducacionalCard>
        </div>
        <div className="text-center mt-20 mb-20 mx-8">
          <h1 className="font-semibold text-3xl mb-2">Precisa de mais?</h1>
          <p className="font-medium">
            No Discord você pode tirar dúvidas e compartilhar conteúdos com
            outros participantes!
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Educacional;

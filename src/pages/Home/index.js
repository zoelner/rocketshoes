import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-polo-blu-casual-masculino/06/DQH-0012-006/DQH-0012-006_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-polo-blu-casual-masculino/06/DQH-0012-006/DQH-0012-006_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-polo-blu-casual-masculino/06/DQH-0012-006/DQH-0012-006_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-polo-blu-casual-masculino/06/DQH-0012-006/DQH-0012-006_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-polo-blu-casual-masculino/06/DQH-0012-006/DQH-0012-006_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

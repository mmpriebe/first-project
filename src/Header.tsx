// Header.tsx
import React from 'react';
import styled from 'styled-components';

// Paleta “Poseidon” (Adobe) simplificada
const palette = {
  deepSea:   '#022F40',
  wave:      '#38A1DB',
  foam:      '#E0F7FF',
  shell:     '#F4F9FB',
};

// Elemento base
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;

  /* Gradiente suave no fundo */
  background: linear-gradient(
    135deg,
    ${palette.wave} 0%,
    ${palette.foam} 100%
  );

  /* Sombra leve para destacar */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

  /* Fixa no topo, se quiser */
  position: sticky;
  top: 0;
  z-index: 1000;
`;

/* Logo ou título */
export const Brand = styled.h1`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${palette.deepSea};
`;

/* Contêiner para botões/menu */
export const NavArea = styled.nav`
  display: flex;
  gap: 1rem;
`;

/* Exemplo de botão/link simples */
export const NavButton = styled.button`
  background: transparent;
  border: 2px solid ${palette.deepSea};
  color: ${palette.deepSea};
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.25s ease;

  &:hover {
    background: ${palette.deepSea};
    color: ${palette.shell};
  }
`;

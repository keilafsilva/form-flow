import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-6);
  color: var(--color-1);
  min-height: 100vh;
  width: 100%;
  overflow-y: auto;
`;

export const Area = styled.div`
  margin: 40px auto;
  max-width: 980px;
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid var(--color-7);

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--color-7);
    padding-bottom: 16px;
  }
`;

export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;

  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 24px;
  }
`;

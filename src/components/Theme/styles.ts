import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-6);
  color: var(--color-1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: auto;
`;

export const Area = styled.div`
  margin: auto;
  margin-top: 40px;
  max-width: 980px;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid var(--color-7);
`;

export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
`;

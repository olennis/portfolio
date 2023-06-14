import styled from "@emotion/styled";

export const StackWrapper = styled.ul`
  height: 400px;
  margin-bottom: 15px;
  position: relative;
`;

export const TitleContainer = styled.div`
  position: absolute;
  left: -100px;
  right: 0;
  padding: 8px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DurationWrapper = styled.div`
  margin-top: 10px;
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 10px;
`;

export const Title = styled.strong`
  font-size: 20px;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 8px;
  margin-left: auto;
`;

export const InternText = styled.span`
  margin-left: 95px;
`;

export const StackItem = styled.li<{ index: number }>`
  display: flex;
  position: absolute;
  top: ${({ index }) => index * 90}px;
`;

export const CareerDate = styled.div`
  position: absolute;
  left: -100px;
  padding: 4px 8px;
  background-color: #000;
  color: #fff;
`;

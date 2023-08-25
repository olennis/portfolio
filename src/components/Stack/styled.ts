import styled from "@emotion/styled";

export const StackWrapper = styled.ul`
  height: 20px;
  margin-bottom: 15px;
  position: relative;
  color: white;
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
  display: block;
  margin-left: 20px;
  padding: 4px 8px;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  overflow: hidden;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  background-color: #fff;
  border-radius: 8px;
  aspect-ratio: 1/1;
  margin-left: auto;
`;

export const Icon = styled.i<{ src?: string }>`
  display: block;
  width: 32px;
  height: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src});
  border-radius: 8px;
`;

export const InternText = styled.span`
  margin-left: 95px;
`;

export const StackItem = styled.li<{ index: number }>`
  display: flex;
  align-items: center;
  position: absolute;
  width: 90px;
  top: ${({ index }) => {
    if (index === 1) {
      return 100;
    } else {
      return 100 + 60 * (index - 1);
    }
  }}px;
`;

export const ContentText = styled.div`
  position: absolute;
  width: 200px;
  left: -180px;
  padding: 4px 8px;
  text-align: right;
`;

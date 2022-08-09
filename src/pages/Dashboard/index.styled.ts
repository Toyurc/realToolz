import styled from 'styled-components';

export const StyledDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledDashboardContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledContentContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  align-items: flex-end;
`;

export const StyleHeader = styled.h2`
  font-size: 2.4rem;
  line-height: 2.8rem;
  color: #193d61;
  margin: 0px;
`;

export const StyleSubHeader = styled.h4`
  display: flex;
  align-items: center;
  column-gap: 5px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: rgba(25, 61, 97, 0.7);
  margin: 0px;
  cursor: pointer;
`;

export const StyledDashboardSummaries = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5rem;
  margin-top: 2rem;
`;

export const StyledDashboardAnalyticsGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  min-width: 60%;
`;

export const StyledDashboardAnalytics = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  min-width: 60%;
`;

export const StyledDashboardContentGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5rem;
  margin-top: 5rem;
`;

export const StyledDashboardAnalyticItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  column-gap: 10rem;
  padding: 1rem 2rem;

  &:nth-child(even) {
    background: linear-gradient(
      90deg,
      rgba(213, 228, 242, 0.51) 0%,
      rgba(218, 230, 242, 0) 96.76%
    );
  }
`;

export const StyledTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const StyledAnalyticsLabel = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: rgba(25, 61, 97, 0.7);
  margin: 0px;
`;

export const StyledAnalyticsValue = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: #5e6a76;
  margin: 0px;

  ${StyledDashboardAnalyticItem}:nth-child(3) & {
    color: rgba(121, 212, 156, 1);
  }

  ${StyledDashboardAnalyticItem}:nth-child(4) & {
    color: rgba(121, 212, 156, 1);
  }

  ${StyledDashboardAnalyticItem}:nth-child(6) & {
    color: rgba(121, 212, 156, 1);
  }
`;

export const StyledDashboardImage = styled.img`
  width: 35rem;
  height: 30rem;
  cursor: pointer;
`;

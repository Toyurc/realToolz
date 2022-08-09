import { sentenceCase } from 'change-case';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Card from 'components/Card/Card';
import Navbar from 'components/NavigationBar/NavigationBar';
import SideBar from 'components/SideBar/SideBar';
import { SUMMARIES } from 'utils/constant';
import {
  StyledHeaderWrapper,
  StyledAnalyticsLabel,
  StyledAnalyticsValue,
  StyledContentContainer,
  StyledDashboardContentWrapper,
  StyledDashboardLayout,
  StyledDashboardAnalyticItem,
  StyledDashboardAnalytics,
  StyledDashboardContentGroup,
  StyledDashboardImage,
  StyledDashboardSummaries,
  StyledTextGroup,
  StyleHeader,
  StyleSubHeader,
  StyledDashboardAnalyticsGroup,
} from './index.styled';

const DashboardContent = () => {
  return (
    <StyledContentContainer>
      <StyledHeaderWrapper>
        <StyleHeader>Earnings & Analytics</StyleHeader>
        <StyleSubHeader>
          Today <FaAngleDown color="#DAE6F2" size={15} />
        </StyleSubHeader>
      </StyledHeaderWrapper>

      <StyledDashboardSummaries>
        {SUMMARIES.map(({ id, title, value }) => (
          <Card key={id} description={value} title={title} />
        ))}
      </StyledDashboardSummaries>

      <StyledDashboardContentGroup>
        <StyledDashboardAnalyticsGroup>
          <StyleHeader>Sales Page Visits</StyleHeader>
          <StyledDashboardAnalytics>
            {SUMMARIES[0].analytics.map((analytic) => {
              const analyticKeys: string[] = Object.keys(analytic);

              return (
                <StyledDashboardAnalyticItem key={analytic.id}>
                  {analyticKeys.map((key) => (
                    <StyledTextGroup key={key.indexOf(key)}>
                      <StyledAnalyticsLabel>{sentenceCase(key)}</StyledAnalyticsLabel>
                      <StyledAnalyticsValue>{analytic[key]}</StyledAnalyticsValue>
                    </StyledTextGroup>
                  ))}
                </StyledDashboardAnalyticItem>
              );
            })}
          </StyledDashboardAnalytics>
        </StyledDashboardAnalyticsGroup>

        {SUMMARIES[0].chart_url && <StyledDashboardImage src={SUMMARIES[0].chart_url} />}
      </StyledDashboardContentGroup>
    </StyledContentContainer>
  );
};

const Dashboard: React.FC = () => {
  return (
    <StyledDashboardLayout>
      <Navbar />
      <StyledDashboardContentWrapper>
        <SideBar />
        <DashboardContent />
      </StyledDashboardContentWrapper>
    </StyledDashboardLayout>
  );
};

export default Dashboard;

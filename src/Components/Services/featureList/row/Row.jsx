import { useParams } from "react-router-dom";
import ListIcon from "../listIcon/ListIcon";
import PlanCard from "../planCard/PlanCard";
import classes from "./Row.module.css";

const reportingAndAnalytics = [
  {
    title: "SEO",
    analytics: [
      {
        Name: "User Behaviour Insights",
        crossIcon: false,
      },
      {
        Name: "Crash Reports",
        crossIcon: false,
      },
      
      {
        Name: "Retention Metrics",
        crossIcon: false,
      },
      {
        Name: "Feature Utilization",
        crossIcon: false,
      },
      {
        Name: "Push Notification Effectiveness",
        crossIcon: false,
      },
      {
        Name: "App Store Performance",
        crossIcon: false,
      },
      {
        Name: "A/B Testing Feedback",
        crossIcon: false,
      },
      {
        Name: "Session Analytics",
        crossIcon: false,
      },
      {
        Name: "Monetization Analysis",
        crossIcon: true,
      },
      {
        Name: "User Segmentation",
        crossIcon: true,
      },
      
    ],
  },{
    title: "Web Development",
    analytics: [
      {
        Name: "User Behaviour Insights"
      },
      {
        Name: "Crash Reports",
        crossIcon: "true"
      },
      {
        Name: "Retention Metrics"
      },
      {
        Name: "Crash Reports",
        crossIcon: "true"
      },
    ]
  },{
    title: "Social Media Optimization",
    analytics: [
      {
        Name: "User Behaviour Insights" 
      },
      {
        Name: "Crash Reports",
        crossIcon: "true"
      },
      {
        Name: "Retention Metrics"
      },
      {
        Name: "Crash Reports",
        crossIcon: "true"
      },
    ]
  },
  {
    title: "PPC Advertising",
    analytics: [
      {
        Name: "User Behaviour Insights"
      },
      {
        Name: "Crash Reports",
        crossIcon: "true"
      },
      {
        Name: "Retention Metrics"
      },
      {
        Name: "Crash Reports",
        crossIcon: "true"
      },
    ]
  },
  {
    title: "Content Creation",
    analytics: [
      {
        Name: "User Behaviour Insights"
      },
      {
        Name: "Crash Reports",
        crossIcon: "true"
      },
      {
        Name: "Retention Metrics"
      },
      {
        Name: "Crash Reports",
        crossIcon: "true"
      },
    ]
  },
  {
    title: "Analytics & Reporting",
    analytics: [
      {
        Name: "User Behaviour Insights"
      },
      {
        Name: "Crash Reports",
        crossIcon: "true"
      },
      {
        Name: "Retention Metrics"
      },
      {
        Name: "Crash Reports",
        crossIcon: "true"
      },
    ]
  },
  {
    title: "Mobile App Development",
    analytics: [
      {
        Name: "User Behaviour Insights"
      },
      {
        Name: "Crash Reports",
        crossIcon: "true"
      },
      {
        Name: "Retention Metrics"
      },
      {
        Name: "Crash Reports",
        crossIcon: "true"
      },
    ]
  }
  
];

export default function Row({
  wantIcon,
  wantButton,
  wantCross,
}) {
  console.log({ wantCross });
  const { serviceName } = useParams();
  const analyticsData = reportingAndAnalytics.find((s) =>
    s.title.toLowerCase().includes(serviceName?.toLowerCase())
  );

  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <PlanCard buttons={wantButton} reportingAndAnalytics={reportingAndAnalytics}  />

          {analyticsData.analytics.map((item) => (
            <>
              <ListIcon
                icon={wantIcon}
                cross={`${item.crossIcon && wantCross ===true ? "true" : ""}`}
                analyticsName={item.Name}
              />
            </>
          ))}
          
        </div>
      </div>
    </>
  );
}

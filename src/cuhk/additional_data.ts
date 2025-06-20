import { Station } from "./data.ts";

export const StationTranslations: Record<
  keyof typeof Station,
  { en: string; zh: string; zh_Hans: string }
> = {
  AREA_39_DOWNWARD: {
    en: "Area 39 (Downward)",
    zh: "39區 (下行)",
    zh_Hans: "39区 (下行)",
  },
  AREA_39_UPWARD: {
    en: "Area 39 (Upward)",
    zh: "39區 (上行)",
    zh_Hans: "39区 (上行)",
  },
  CAMPUS_CIRCUIT_EAST_DOWNWARD: {
    en: "Campus Circuit East (Downward)",
    zh: "環迴東站 (下行)",
    zh_Hans: "环回东站 (下行)",
  },
  CAMPUS_CIRCUIT_EAST_UPWARD: {
    en: "Campus Circuit East (Upward)",
    zh: "環迴東站 (上行)",
    zh_Hans: "环回东站 (上行)",
  },
  CAMPUS_CIRCUIT_NORTH: {
    en: "Campus Circuit North",
    zh: "環迴北站",
    zh_Hans: "环回北站",
  },
  CHAN_CHUN_HA_HOSTEL: {
    en: "Chan Chun Ha Hostel",
    zh: "陳震夏宿舍",
    zh_Hans: "陈震夏宿舍",
  },
  CHUNG_CHI_TEACHING_BUILDING: {
    en: "Chung Chi Teaching Building",
    zh: "崇基教學樓",
    zh_Hans: "崇基教学楼",
  },
  CHUNG_CHI_TEACHING_BUILDING_TERMINUS: {
    en: "Chung Chi Teaching Building (Terminus)",
    zh: "崇基教學樓 (總站)",
    zh_Hans: "崇基教学楼 (总站)",
  },
  CWC_COLLEGE_DOWNWARD: {
    en: "CW Chu College (Downward)",
    zh: "敬文書院 (下行)",
    zh_Hans: "敬文书院 (下行)",
  },
  CWC_COLLEGE_DOWNWARD_TERMINUS: {
    en: "CW Chu College (Downward) (Terminus)",
    zh: "敬文書院 (下行) (總站)",
    zh_Hans: "敬文书院 (下行) (总站)",
  },
  CWC_COLLEGE_UPWARD: {
    en: "CW Chu College (Upward)",
    zh: "敬文書院 (上行)",
    zh_Hans: "敬文书院 (上行)",
  },
  FUNG_KING_HEY_BUILDING: {
    en: "Fung King Hey Building",
    zh: "馮景禧樓",
    zh_Hans: "冯景禧楼",
  },
  NEW_ASIA_CIRCLE: {
    en: "New Asia Circle",
    zh: "新亞坊",
    zh_Hans: "新亚坊",
  },
  NEW_ASIA_COLLEGE: {
    en: "New Asia College",
    zh: "新亞書院",
    zh_Hans: "新亚书院",
  },
  POSTGRADUATE_HALL_1: {
    en: "Postgraduate Hall 1",
    zh: "研究生宿舍一座",
    zh_Hans: "赛马会研究生宿舍",
  },
  POSTGRADUATE_HALL_1_DOWNWARD: {
    en: "Postgraduate Hall 1",
    zh: "研究生宿舍一座",
    zh_Hans: "赛马会研究生宿舍",
  },
  RESIDENCE_10: {
    en: "Residence No.10",
    zh: "十苑",
    zh_Hans: "十苑",
  },
  RESIDENCE_15: {
    en: "Residence No.15",
    zh: "十五苑",
    zh_Hans: "十五苑",
  },
  SCIENCE_CENTRE: {
    en: "Science Centre",
    zh: "科學館",
    zh_Hans: "科学馆",
  },
  SHAW_COLLEGE_DOWNWARD: {
    en: "Shaw College (Downward)",
    zh: "逸夫書院 (下行)",
    zh_Hans: "邵夫书院 (下行)",
  },
  SHAW_COLLEGE_UPWARD: {
    en: "Shaw College (Upward)",
    zh: "邵夫書院 (上行)",
    zh_Hans: "邵夫书院 (上行)",
  },
  SHHO_COLLEGE: {
    en: "S.H. Ho College",
    zh: "善衡書院",
    zh_Hans: "善衡书院",
  },
  SIR_RUN_RUN_SHAW_HALL: {
    en: "Sir Run Run Shaw Hall",
    zh: "邵逸夫堂",
    zh_Hans: "邵逸夫堂",
  },
  UNITED_COLLEGE_DOWNWARD: {
    en: "United College (Downward)",
    zh: "聯合書院 (下行)",
    zh_Hans: "联合书院 (下行)",
  },
  UNTIED_COLLEGE_STAFF_RESIDENCE: {
    en: "United College Staff Residence",
    zh: "聯合苑",
    zh_Hans: "联合苑",
  },
  UNITED_COLLEGE_UPWARD: {
    en: "United College (Upward)",
    zh: "聯合書院 (上行)",
    zh_Hans: "联合书院 (上行)",
  },
  UNIVERSITY_ADMIN_BUILDING: {
    en: "University Admin Building",
    zh: "大學行政樓",
    zh_Hans: "大学行政楼",
  },
  UNIVERSITY_SPORTS_CENTRE: {
    en: "University Sports Centre",
    zh: "大學體育中心",
    zh_Hans: "大学体育中心",
  },
  UNIVERSITY_STATION: {
    en: "University Station",
    zh: "大學站",
    zh_Hans: "大学站",
  },
  UNIVERSITY_STATION_TERMINUS: {
    en: "University Station (Terminus)",
    zh: "大學站 (總站)",
    zh_Hans: "大学站 (总站)",
  },
  UNIVERSITY_STATION_PIAZZA: {
    en: "University Station Piazza",
    zh: "大學站廣場",
    zh_Hans: "大学站广场",
  },
  UNIVERSITY_STATION_PIAZZA_TERMINUS: {
    en: "University Station Piazza (Terminus)",
    zh: "大學站廣場 (總站)",
    zh_Hans: "大学站广场 (总站)",
  },
  WU_YEE_SUN_COLLEGE_DOWNWARD: {
    en: "Wu Yee Sun College (Downward)",
    zh: "伍宜孫書院 (下行)",
    zh_Hans: "伍宜孙书院 (下行)",
  },
  WU_YEE_SUN_COLLEGE_UPWARD: {
    en: "Wu Yee Sun College (Upward)",
    zh: "伍宜孫書院 (上行)",
    zh_Hans: "伍宜孙书院 (上行)",
  },
  YIA: {
    en: "YIA",
    zh: "康本園",
    zh_Hans: "康本园",
  },
};

export const SpecialRoutes: Record<
  string,
  {
    minuteMarks?: number[];
    skip?: string[];
    elseSkip?: string[];
    notOn?: number[];
    onDays?: number[];
    lastService?: [number, number];
  }
> = {
  "2+": {
    minuteMarks: [0, 15, 30, 45],
    skip: ["SIR_RUN_RUN_SHAW_HALL"],
    notOn: [15, 30],
  },
  "N+": {
    minuteMarks: [0, 15, 30, 45],
    skip: [
      "POSTGRADUATE_HALL_1",
      "POSTGRADUATE_HALL_1_DOWNWARD",
      "AREA_39_UPWARD",
    ],
    notOn: [0],
  },
  "H+": {
    minuteMarks: [0, 20, 40],
    skip: [
      "POSTGRADUATE_HALL_1",
      "POSTGRADUATE_HALL_1_DOWNWARD",
      "AREA_39_UPWARD",
    ],
    notOn: [0],
  },
  "8": {
    onDays: [6],
    skip: ["UNIVERSITY_STATION_TERMINUS"],
    elseSkip: [
      "UNIVERSITY_STATION_PIAZZA",
      "CHUNG_CHI_TEACHING_BUILDING_TERMINUS",
    ],
  },
  "5": {
    onDays: [6],
    lastService: [13, 26],
  },
  "6A": {
    onDays: [6],
    lastService: [13, 10],
  },
  "7": {
    onDays: [6],
    lastService: [13, 18],
  },
};

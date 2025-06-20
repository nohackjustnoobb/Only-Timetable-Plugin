export const BusRoute = {
  _1A: "1A",
  _1B: "1B",
  _2P: "2+", // stops at sir run run shaw hall
  _3: "3",
  _4: "4",
  _5: "5",
  _5S: "5*", // weekends
  _6A: "6A",
  _6AS: "6A*", // weekends
  _6B: "6B",
  _7: "7",
  _7S: "7*", // weekends
  _8: "8",
  _8S: "8*", // weekends
  _NP: "N+", // stops at pg hall 1
  _HP: "H+", // stops at pg hall 1 & area 39 (upwards)
} as const;
export type BusRoute = (typeof BusRoute)[keyof typeof BusRoute];

export const Station = {
  AREA_39_DOWNWARD: "Area 39 (Downward)",
  AREA_39_UPWARD: "Area 39 (Upward)",
  CAMPUS_CIRCUIT_EAST_DOWNWARD: "Campus Circuit East (Downward)",
  CAMPUS_CIRCUIT_EAST_UPWARD: "Campus Circuit East (Upward)",
  CAMPUS_CIRCUIT_NORTH: "Campus Circuit North",
  CHAN_CHUN_HA_HOSTEL: "Chan Chun Ha Hostel",
  CHUNG_CHI_TEACHING_BUILDING: "Chung Chi Teaching Building",
  CHUNG_CHI_TEACHING_BUILDING_TERMINUS:
    "Chung Chi Teaching Building (Terminus)",
  CWC_COLLEGE_DOWNWARD: "CW Chu College (Downward)",
  CWC_COLLEGE_DOWNWARD_TERMINUS: "CW Chu College (Downward) (Terminus)",
  CWC_COLLEGE_UPWARD: "CW Chu College (Upward)",
  FUNG_KING_HEY_BUILDING: "Fung King Hey Building",
  NEW_ASIA_CIRCLE: "New Asia Circle",
  NEW_ASIA_COLLEGE: "New Asia College",
  POSTGRADUATE_HALL_1: "Postgraduate Hall 1",
  POSTGRADUATE_HALL_1_DOWNWARD: "Postgraduate Hall 1 (DOWNWARD)",
  RESIDENCE_10: "Residence No.10",
  RESIDENCE_15: "Residence No.15",
  SCIENCE_CENTRE: "Science Centre",
  SHAW_COLLEGE_DOWNWARD: "Shaw College (Downward)",
  SHAW_COLLEGE_UPWARD: "Shaw College (Upward)",
  SHHO_COLLEGE: "S.H. Ho College",
  SIR_RUN_RUN_SHAW_HALL: "Sir Run Run Shaw Hall",
  UNITED_COLLEGE_DOWNWARD: "United College (Downward)",
  UNTIED_COLLEGE_STAFF_RESIDENCE: "United College Staff Residence",
  UNITED_COLLEGE_UPWARD: "United College (Upward)",
  UNIVERSITY_ADMIN_BUILDING: "University Admin Building",
  UNIVERSITY_SPORTS_CENTRE: "University Sports Centre",
  UNIVERSITY_STATION: "University Station",
  UNIVERSITY_STATION_TERMINUS: "University Station (Terminus)",
  UNIVERSITY_STATION_PIAZZA: "University Station Piazza",
  UNIVERSITY_STATION_PIAZZA_TERMINUS: "University Station Piazza (Terminus)",
  WU_YEE_SUN_COLLEGE_DOWNWARD: "Wu Yee Sun College (Downward)",
  WU_YEE_SUN_COLLEGE_UPWARD: "Wu Yee Sun College (Upward)",
  YIA: "YIA",
} as const;
export type Station = (typeof Station)[keyof typeof Station];

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export const stationCoordinates: Record<Station, Coordinates> = {
  [Station.AREA_39_DOWNWARD]: { latitude: 22.42762, longitude: 114.20436 }, //^ ???
  [Station.AREA_39_UPWARD]: { latitude: 22.42762, longitude: 114.20436 }, //^ ???
  [Station.CAMPUS_CIRCUIT_EAST_DOWNWARD]: {
    latitude: 22.41906,
    longitude: 114.21298,
  },
  [Station.CAMPUS_CIRCUIT_EAST_UPWARD]: {
    latitude: 22.41915,
    longitude: 114.2129,
  },
  [Station.CAMPUS_CIRCUIT_NORTH]: { latitude: 22.42569, longitude: 114.20608 }, //^ ???
  [Station.CHAN_CHUN_HA_HOSTEL]: { latitude: 22.42181, longitude: 114.20466 },
  [Station.CHUNG_CHI_TEACHING_BUILDING]: {
    latitude: 22.41596,
    longitude: 114.20833,
  },
  [Station.CHUNG_CHI_TEACHING_BUILDING_TERMINUS]: {
    latitude: 22.41572,
    longitude: 114.2082,
  },
  [Station.CWC_COLLEGE_DOWNWARD]: { latitude: 22.42569, longitude: 114.20608 }, //^ ???
  [Station.CWC_COLLEGE_DOWNWARD_TERMINUS]: {
    latitude: 22.42569,
    longitude: 114.20608,
  }, //^ ???
  [Station.CWC_COLLEGE_UPWARD]: { latitude: 22.42569, longitude: 114.20608 }, //^ ???
  [Station.FUNG_KING_HEY_BUILDING]: {
    latitude: 22.41983,
    longitude: 114.20302,
  },
  [Station.NEW_ASIA_CIRCLE]: { latitude: 22.42096, longitude: 114.20775 },
  [Station.NEW_ASIA_COLLEGE]: { latitude: 22.42128, longitude: 114.2075 },
  [Station.POSTGRADUATE_HALL_1]: { latitude: 22.42034, longitude: 114.21215 },
  [Station.POSTGRADUATE_HALL_1_DOWNWARD]: {
    latitude: 22.42034,
    longitude: 114.21215,
  },
  [Station.RESIDENCE_10]: { latitude: 22.42475, longitude: 114.20791 }, //^ ???
  [Station.RESIDENCE_15]: { latitude: 22.42377, longitude: 114.20665 }, //^ ???
  [Station.SCIENCE_CENTRE]: { latitude: 22.41985, longitude: 114.20719 },
  [Station.SHAW_COLLEGE_DOWNWARD]: { latitude: 22.42242, longitude: 114.20126 },
  [Station.SHAW_COLLEGE_UPWARD]: { latitude: 22.42252, longitude: 114.20143 },
  [Station.SHHO_COLLEGE]: { latitude: 22.41801, longitude: 114.20994 },
  [Station.SIR_RUN_RUN_SHAW_HALL]: { latitude: 22.41984, longitude: 114.20697 },
  [Station.UNITED_COLLEGE_DOWNWARD]: {
    latitude: 22.4203,
    longitude: 114.20528,
  },
  [Station.UNTIED_COLLEGE_STAFF_RESIDENCE]: {
    latitude: 22.42324,
    longitude: 114.20516,
  },
  [Station.UNITED_COLLEGE_UPWARD]: { latitude: 22.4204, longitude: 114.20534 },
  [Station.UNIVERSITY_ADMIN_BUILDING]: {
    latitude: 22.41882,
    longitude: 114.20536,
  },
  [Station.UNIVERSITY_SPORTS_CENTRE]: {
    latitude: 22.41781,
    longitude: 114.21041,
  },
  [Station.UNIVERSITY_STATION]: { latitude: 22.41453, longitude: 114.21024 },
  [Station.UNIVERSITY_STATION_TERMINUS]: {
    latitude: 22.41517,
    longitude: 114.21053,
  },
  [Station.UNIVERSITY_STATION_PIAZZA]: {
    latitude: 22.41382,
    longitude: 114.20946,
  },
  [Station.UNIVERSITY_STATION_PIAZZA_TERMINUS]: {
    latitude: 22.41399,
    longitude: 114.20981,
  },
  [Station.WU_YEE_SUN_COLLEGE_DOWNWARD]: {
    latitude: 22.42109,
    longitude: 114.20353,
  },
  [Station.WU_YEE_SUN_COLLEGE_UPWARD]: {
    latitude: 22.42121,
    longitude: 114.20345,
  },
  [Station.YIA]: { latitude: 22.41599, longitude: 114.21083 },
} as const;

export type BusRouteInfo = {
  canonInfoUrl: string;
  routeName: string;
  routeColour: string;
  firstService: [number, number];
  lastService: [number, number];
  serviceDays: number[];
  minuteMarks: number[];
  stations: Station[];
  inflexionIndices?: [number, number];
};

export const busRouteInfos: Record<BusRoute, BusRouteInfo> = {
  [BusRoute._1A]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/1a",
    routeName: "Main Campus",
    routeColour: "#f2e421",
    firstService: [7, 40],
    lastService: [18, 40],
    serviceDays: [1, 2, 3, 4, 5, 6],
    minuteMarks: [10, 20, 40, 50],
    stations: [
      /* 0 */ Station.UNIVERSITY_STATION,
      /* 1 */ Station.UNIVERSITY_SPORTS_CENTRE,
      //$ inflexion
      /* 2 */ Station.SIR_RUN_RUN_SHAW_HALL,
      /* 3 */ Station.UNIVERSITY_ADMIN_BUILDING,
      //$ inflexion
      /* 4 */ Station.SHHO_COLLEGE,
      /* 5 */ Station.UNIVERSITY_STATION_TERMINUS,
    ],
    inflexionIndices: [1.5, 3.5],
  },
  [BusRoute._1B]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/1b",
    routeName: "Main Campus",
    routeColour: "#f2e421",
    firstService: [8, 0],
    lastService: [18, 0],
    serviceDays: [1, 2, 3, 4, 5, 6],
    minuteMarks: [0, 30],
    stations: [
      /* 0 */ Station.UNIVERSITY_STATION,
      /* 1 */ Station.POSTGRADUATE_HALL_1,
      /* 2 */ Station.UNIVERSITY_SPORTS_CENTRE,
      //$ inflexion
      /* 3 */ Station.SIR_RUN_RUN_SHAW_HALL,
      /* 4 */ Station.UNIVERSITY_ADMIN_BUILDING,
      //$ inflexion
      /* 5 */ Station.SHHO_COLLEGE,
      /* 6 */ Station.POSTGRADUATE_HALL_1_DOWNWARD,
      /* 7 */ Station.UNIVERSITY_STATION_TERMINUS,
    ],
    inflexionIndices: [2.5, 4.5],
  },
  [BusRoute._2P]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/2",
    routeName: "NA/UC",
    routeColour: "#ec4790",
    firstService: [7, 45],
    lastService: [18, 45],
    serviceDays: [1, 2, 3, 4, 5, 6],
    minuteMarks: [0, 45],
    stations: [
      /* 0 */ Station.UNIVERSITY_STATION_PIAZZA,
      /* 1 */ Station.UNIVERSITY_SPORTS_CENTRE,
      /* 2 */ Station.SIR_RUN_RUN_SHAW_HALL,
      /* 3 */ Station.FUNG_KING_HEY_BUILDING,
      /* 4 */ Station.UNITED_COLLEGE_UPWARD,
      //$ inflexion
      /* 5 */ Station.NEW_ASIA_COLLEGE,
      //$ inflexion
      /* 6 */ Station.UNITED_COLLEGE_DOWNWARD,
      /* 7 */ Station.UNIVERSITY_ADMIN_BUILDING,
      /* 8 */ Station.SHHO_COLLEGE,
      /* 9 */ Station.UNIVERSITY_STATION_TERMINUS,
    ],
    inflexionIndices: [4.5, 5.5],
  },
  [BusRoute._3]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/3",
    routeName: "Shaw",
    routeColour: "#318761",
    firstService: [9, 0],
    lastService: [18, 40],
    serviceDays: [1, 2, 3, 4, 5, 6],
    minuteMarks: [0, 20, 40],
    stations: [
      /* 0 */ Station.YIA,
      /* 1 */ Station.UNIVERSITY_SPORTS_CENTRE,
      /* 2 */ Station.SCIENCE_CENTRE,
      /* 3 */ Station.FUNG_KING_HEY_BUILDING,
      /* 4 */ Station.WU_YEE_SUN_COLLEGE_UPWARD,
      /* 5 */ Station.SHAW_COLLEGE_UPWARD,
      //$ inflexion
      /* 6 */ Station.CWC_COLLEGE_DOWNWARD,
      /* 7 */ Station.RESIDENCE_15,
      /* 8 */ Station.UNTIED_COLLEGE_STAFF_RESIDENCE,
      /* 9 */ Station.CHAN_CHUN_HA_HOSTEL,
      //$ inflexion
      /* 10 */ Station.SHAW_COLLEGE_DOWNWARD,
      /* 11 */ Station.WU_YEE_SUN_COLLEGE_DOWNWARD,
      /* 12 */ Station.UNIVERSITY_ADMIN_BUILDING,
      /* 13 */ Station.SHHO_COLLEGE,
      /* 14 */ Station.UNIVERSITY_STATION_PIAZZA_TERMINUS,
    ],
    inflexionIndices: [5.5, 9.5],
  },
  [BusRoute._4]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/4",
    routeName: "Campus Circuit",
    routeColour: "#e75a24",
    firstService: [7, 30],
    lastService: [18, 50],
    serviceDays: [1, 2, 3, 4, 5, 6],
    minuteMarks: [10, 30, 50],
    stations: [
      /* 0 */ Station.YIA,
      /* 1 */ Station.CAMPUS_CIRCUIT_EAST_UPWARD,
      //$ inflexion
      /* 2 */ Station.CWC_COLLEGE_UPWARD,
      /* 3 */ Station.AREA_39_UPWARD,
      /* 4 */ Station.CWC_COLLEGE_DOWNWARD,
      /* 5 */ Station.RESIDENCE_15,
      /* 6 */ Station.UNTIED_COLLEGE_STAFF_RESIDENCE,
      /* 7 */ Station.CHAN_CHUN_HA_HOSTEL,
      /* 8 */ Station.SHAW_COLLEGE_DOWNWARD,
      /* 9 */ Station.WU_YEE_SUN_COLLEGE_DOWNWARD,
      /* 10 */ Station.NEW_ASIA_COLLEGE,
      /* 11 */ Station.UNITED_COLLEGE_DOWNWARD,
      //$ inflexion
      /* 12 */ Station.UNIVERSITY_ADMIN_BUILDING,
      /* 13 */ Station.SHHO_COLLEGE,
      /* 14 */ Station.UNIVERSITY_STATION_TERMINUS,
    ],
    inflexionIndices: [1.5, 11.5],
  },
  [BusRoute._5]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/5",
    routeName: "Upward",
    routeColour: "#29a1d8",
    firstService: [9, 18],
    lastService: [17, 26],
    serviceDays: [1, 2, 3, 4, 5],
    minuteMarks: [18, 22, 26],
    stations: [
      /* 0 */ Station.CHUNG_CHI_TEACHING_BUILDING,
      /* 1 */ Station.UNIVERSITY_SPORTS_CENTRE,
      /* 2 */ Station.SIR_RUN_RUN_SHAW_HALL,
      /* 3 */ Station.FUNG_KING_HEY_BUILDING,
      /* 4 */ Station.UNITED_COLLEGE_UPWARD,
      /* 5 */ Station.NEW_ASIA_COLLEGE,
      /* 6 */ Station.WU_YEE_SUN_COLLEGE_UPWARD,
      /* 7 */ Station.SHAW_COLLEGE_UPWARD,
      /* 8 */ Station.CWC_COLLEGE_DOWNWARD_TERMINUS,
    ],
  },
  [BusRoute._5S]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/5",
    routeName: "Upward",
    routeColour: "#29a1d8",
    firstService: [9, 18],
    lastService: [13, 26],
    serviceDays: [6],
    minuteMarks: [18, 22, 26],
    stations: [
      /* 0 */ Station.CHUNG_CHI_TEACHING_BUILDING,
      /* 1 */ Station.UNIVERSITY_SPORTS_CENTRE,
      /* 2 */ Station.SIR_RUN_RUN_SHAW_HALL,
      /* 3 */ Station.FUNG_KING_HEY_BUILDING,
      /* 4 */ Station.UNITED_COLLEGE_UPWARD,
      /* 5 */ Station.NEW_ASIA_COLLEGE,
      /* 6 */ Station.WU_YEE_SUN_COLLEGE_UPWARD,
      /* 7 */ Station.SHAW_COLLEGE_UPWARD,
      /* 8 */ Station.CWC_COLLEGE_DOWNWARD_TERMINUS,
    ],
  },
  [BusRoute._6A]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/6a",
    routeName: "Downward (CWC)",
    routeColour: "#7c8644",
    firstService: [9, 10],
    lastService: [17, 10],
    serviceDays: [1, 2, 3, 4, 5],
    minuteMarks: [10],
    stations: [
      /* 0 */ Station.CWC_COLLEGE_DOWNWARD,
      /* 1 */ Station.UNTIED_COLLEGE_STAFF_RESIDENCE,
      /* 2 */ Station.CHAN_CHUN_HA_HOSTEL,
      /* 3 */ Station.WU_YEE_SUN_COLLEGE_DOWNWARD,
      /* 4 */ Station.NEW_ASIA_COLLEGE,
      /* 5 */ Station.UNITED_COLLEGE_DOWNWARD,
      /* 6 */ Station.UNIVERSITY_ADMIN_BUILDING,
      /* 7 */ Station.SHHO_COLLEGE,
      /* 8 */ Station.UNIVERSITY_STATION_PIAZZA,
      /* 9 */ Station.CHUNG_CHI_TEACHING_BUILDING_TERMINUS,
    ],
  },
  [BusRoute._6AS]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/6a",
    routeName: "Downward (CWC)",
    routeColour: "#7c8644",
    firstService: [9, 10],
    lastService: [13, 10],
    serviceDays: [6],
    minuteMarks: [10],
    stations: [
      /* 0 */ Station.CWC_COLLEGE_DOWNWARD,
      /* 1 */ Station.UNTIED_COLLEGE_STAFF_RESIDENCE,
      /* 2 */ Station.CHAN_CHUN_HA_HOSTEL,
      /* 3 */ Station.WU_YEE_SUN_COLLEGE_DOWNWARD,
      /* 4 */ Station.NEW_ASIA_COLLEGE,
      /* 5 */ Station.UNITED_COLLEGE_DOWNWARD,
      /* 6 */ Station.UNIVERSITY_ADMIN_BUILDING,
      /* 7 */ Station.SHHO_COLLEGE,
      /* 8 */ Station.UNIVERSITY_STATION_PIAZZA,
      /* 9 */ Station.CHUNG_CHI_TEACHING_BUILDING_TERMINUS,
    ],
  },
  [BusRoute._6B]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/6b",
    routeName: "Downward (NA/UC)",
    routeColour: "#7c8644",
    firstService: [12, 20],
    lastService: [17, 20],
    serviceDays: [1, 2, 3, 4, 5],
    minuteMarks: [20],
    stations: [
      /* 0 */ Station.NEW_ASIA_COLLEGE,
      /* 1 */ Station.UNITED_COLLEGE_DOWNWARD,
      /* 2 */ Station.UNIVERSITY_ADMIN_BUILDING,
      /* 3 */ Station.SHHO_COLLEGE,
      /* 4 */ Station.UNIVERSITY_STATION_PIAZZA,
      /* 5 */ Station.CHUNG_CHI_TEACHING_BUILDING_TERMINUS,
    ],
  },
  [BusRoute._7]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/7",
    routeName: "Downward (Shaw)",
    routeColour: "#666666",
    firstService: [8, 18],
    lastService: [17, 50],
    serviceDays: [1, 2, 3, 4, 5],
    minuteMarks: [18, 50],
    stations: [
      /* 0 */ Station.SHAW_COLLEGE_DOWNWARD,
      /* 1 */ Station.WU_YEE_SUN_COLLEGE_DOWNWARD,
      /* 2 */ Station.NEW_ASIA_COLLEGE,
      /* 3 */ Station.UNITED_COLLEGE_DOWNWARD,
      /* 4 */ Station.UNIVERSITY_ADMIN_BUILDING,
      /* 5 */ Station.SHHO_COLLEGE,
      /* 6 */ Station.UNIVERSITY_STATION_PIAZZA,
      /* 7 */ Station.CHUNG_CHI_TEACHING_BUILDING_TERMINUS,
    ],
  },
  [BusRoute._7S]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/7",
    routeName: "Downward (Shaw)",
    routeColour: "#666666",
    firstService: [8, 18],
    lastService: [13, 18],
    serviceDays: [6],
    minuteMarks: [18, 50],
    stations: [
      /* 0 */ Station.SHAW_COLLEGE_DOWNWARD,
      /* 1 */ Station.WU_YEE_SUN_COLLEGE_DOWNWARD,
      /* 2 */ Station.NEW_ASIA_COLLEGE,
      /* 3 */ Station.UNITED_COLLEGE_DOWNWARD,
      /* 4 */ Station.UNIVERSITY_ADMIN_BUILDING,
      /* 5 */ Station.SHHO_COLLEGE,
      /* 6 */ Station.UNIVERSITY_STATION_PIAZZA,
      /* 7 */ Station.CHUNG_CHI_TEACHING_BUILDING_TERMINUS,
    ],
  },
  [BusRoute._8]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/8",
    routeName: "Western Campus",
    routeColour: "#ffc55a",
    firstService: [7, 40],
    lastService: [18, 40],
    serviceDays: [1, 2, 3, 4, 5],
    minuteMarks: [0, 20, 40],
    stations: [
      /* 0 */ Station.AREA_39_UPWARD,
      /* 1 */ Station.CWC_COLLEGE_DOWNWARD,
      /* 2 */ Station.UNTIED_COLLEGE_STAFF_RESIDENCE,
      /* 3 */ Station.CHAN_CHUN_HA_HOSTEL,
      /* 4 */ Station.SHAW_COLLEGE_DOWNWARD,
      /* 5 */ Station.WU_YEE_SUN_COLLEGE_DOWNWARD,
      //$ inflexion
      /* 6 */ Station.UNIVERSITY_ADMIN_BUILDING,
      /* 7 */ Station.SCIENCE_CENTRE,
      /* 8 */ Station.NEW_ASIA_CIRCLE,
      /* 9 */ Station.UNITED_COLLEGE_DOWNWARD,
      //$ inflexion
      /* 10 */ Station.WU_YEE_SUN_COLLEGE_UPWARD,
      /* 11 */ Station.SHAW_COLLEGE_UPWARD,
      /* 12 */ Station.AREA_39_DOWNWARD,
      /* 13 */ Station.CAMPUS_CIRCUIT_NORTH,
      /* 14 */ Station.CAMPUS_CIRCUIT_EAST_DOWNWARD,
      /* 15 */ Station.UNIVERSITY_STATION_TERMINUS,
    ],
    inflexionIndices: [5.5, 9.5],
  },
  [BusRoute._8S]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/8",
    routeName: "Western Campus",
    routeColour: "#ffc55a",
    firstService: [7, 40],
    lastService: [18, 40],
    serviceDays: [6],
    minuteMarks: [0, 20, 40],
    stations: [
      /* 0 */ Station.AREA_39_UPWARD,
      /* 1 */ Station.CWC_COLLEGE_DOWNWARD,
      /* 2 */ Station.UNTIED_COLLEGE_STAFF_RESIDENCE,
      /* 3 */ Station.CHAN_CHUN_HA_HOSTEL,
      /* 4 */ Station.SHAW_COLLEGE_DOWNWARD,
      /* 5 */ Station.WU_YEE_SUN_COLLEGE_DOWNWARD,
      //$ inflexion
      /* 6 */ Station.UNIVERSITY_ADMIN_BUILDING,
      /* 7 */ Station.SCIENCE_CENTRE,
      /* 8 */ Station.NEW_ASIA_CIRCLE,
      /* 9 */ Station.UNITED_COLLEGE_DOWNWARD,
      //$ inflexion
      /* 10 */ Station.WU_YEE_SUN_COLLEGE_UPWARD,
      /* 11 */ Station.SHAW_COLLEGE_UPWARD,
      /* 12 */ Station.AREA_39_DOWNWARD,
      /* 13 */ Station.CAMPUS_CIRCUIT_NORTH,
      /* 14 */ Station.CAMPUS_CIRCUIT_EAST_DOWNWARD,
      /* 15 */ Station.UNIVERSITY_STATION_PIAZZA,
      /* 16 */ Station.CHUNG_CHI_TEACHING_BUILDING_TERMINUS,
    ],
    inflexionIndices: [5.5, 9.5],
  },
  [BusRoute._NP]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/n",
    routeName: "Night Service",
    routeColour: "#7961a8",
    firstService: [19, 0],
    lastService: [23, 30],
    serviceDays: [1, 2, 3, 4, 5, 6],
    minuteMarks: [0],
    stations: [
      /* 0 */ Station.UNIVERSITY_STATION,
      /* 1 */ Station.POSTGRADUATE_HALL_1,
      /* 2 */ Station.UNIVERSITY_SPORTS_CENTRE,
      /* 3 */ Station.SIR_RUN_RUN_SHAW_HALL,
      /* 4 */ Station.NEW_ASIA_CIRCLE,
      /* 5 */ Station.UNITED_COLLEGE_DOWNWARD,
      /* 6 */ Station.WU_YEE_SUN_COLLEGE_UPWARD,
      /* 7 */ Station.SHAW_COLLEGE_UPWARD,
      //$ inflexion
      /* 8 */ Station.AREA_39_UPWARD,
      /* 9 */ Station.CWC_COLLEGE_DOWNWARD,
      /* 10 */ Station.RESIDENCE_15,
      /* 11 */ Station.UNTIED_COLLEGE_STAFF_RESIDENCE,
      /* 12 */ Station.CHAN_CHUN_HA_HOSTEL,
      //$ inflexion
      /* 13 */ Station.SHAW_COLLEGE_DOWNWARD,
      /* 14 */ Station.WU_YEE_SUN_COLLEGE_DOWNWARD,
      /* 15 */ Station.NEW_ASIA_COLLEGE,
      /* 16 */ Station.UNITED_COLLEGE_DOWNWARD,
      /* 17 */ Station.UNIVERSITY_ADMIN_BUILDING,
      /* 18 */ Station.SHHO_COLLEGE,
      /* 19 */ Station.POSTGRADUATE_HALL_1_DOWNWARD,
      /* 20 */ Station.UNIVERSITY_STATION_TERMINUS,
    ],
    inflexionIndices: [7.5, 12.5],
  },
  [BusRoute._HP]: {
    canonInfoUrl: "https://transport.cuhk.edu.hk/route/h",
    routeName: "Holidays Service",
    routeColour: "#453087",
    firstService: [8, 20],
    lastService: [23, 20],
    serviceDays: [0],
    minuteMarks: [0],
    stations: [
      /* 0 */ Station.UNIVERSITY_STATION,
      /* 1 */ Station.POSTGRADUATE_HALL_1,
      /* 2 */ Station.UNIVERSITY_SPORTS_CENTRE,
      /* 3 */ Station.SIR_RUN_RUN_SHAW_HALL,
      /* 4 */ Station.NEW_ASIA_CIRCLE,
      /* 5 */ Station.UNITED_COLLEGE_DOWNWARD,
      /* 6 */ Station.WU_YEE_SUN_COLLEGE_UPWARD,
      /* 7 */ Station.SHAW_COLLEGE_UPWARD,
      //$ inflexion
      /* 8 */ Station.AREA_39_UPWARD,
      /* 9 */ Station.CWC_COLLEGE_DOWNWARD,
      /* 10 */ Station.RESIDENCE_10,
      /* 11 */ Station.RESIDENCE_15,
      /* 12 */ Station.UNTIED_COLLEGE_STAFF_RESIDENCE,
      /* 13 */ Station.CHAN_CHUN_HA_HOSTEL,
      //$ inflexion
      /* 14 */ Station.SHAW_COLLEGE_DOWNWARD,
      /* 15 */ Station.WU_YEE_SUN_COLLEGE_DOWNWARD,
      /* 16 */ Station.NEW_ASIA_COLLEGE,
      /* 17 */ Station.UNITED_COLLEGE_DOWNWARD,
      /* 18 */ Station.UNIVERSITY_ADMIN_BUILDING,
      /* 19 */ Station.SHHO_COLLEGE,
      /* 20 */ Station.POSTGRADUATE_HALL_1_DOWNWARD,
      /* 21 */ Station.UNIVERSITY_STATION_TERMINUS,
    ],
    inflexionIndices: [7.5, 13.5],
  },
} as const;

export const busStationTimings: Record<string, number[]> = {
  [`${Station.AREA_39_DOWNWARD}>>${Station.CAMPUS_CIRCUIT_NORTH}`]: [138],
  [`${Station.AREA_39_UPWARD}>>${Station.CWC_COLLEGE_DOWNWARD}`]: [98],
  [`${Station.CAMPUS_CIRCUIT_EAST_UPWARD}>>${Station.CWC_COLLEGE_UPWARD}`]: [
    139,
  ],
  [`${Station.CAMPUS_CIRCUIT_EAST_DOWNWARD}>>${Station.UNIVERSITY_STATION_PIAZZA}`]:
    [94, 84], //!
  [`${Station.CAMPUS_CIRCUIT_EAST_DOWNWARD}>>${Station.UNIVERSITY_STATION_TERMINUS}`]:
    [94, 84],
  [`${Station.CAMPUS_CIRCUIT_NORTH}>>${Station.CAMPUS_CIRCUIT_EAST_DOWNWARD}`]:
    [159, 174],
  [`${Station.CHAN_CHUN_HA_HOSTEL}>>${Station.SHAW_COLLEGE_DOWNWARD}`]: [
    118, 97, 155,
  ],
  [`${Station.CHAN_CHUN_HA_HOSTEL}>>${Station.WU_YEE_SUN_COLLEGE_DOWNWARD}`]: [
    60,
  ], //!
  [`${Station.CHUNG_CHI_TEACHING_BUILDING}>>${Station.UNIVERSITY_SPORTS_CENTRE}`]:
    [119],
  [`${Station.CWC_COLLEGE_DOWNWARD}>>${Station.RESIDENCE_10}`]: [93],
  [`${Station.CWC_COLLEGE_DOWNWARD}>>${Station.RESIDENCE_15}`]: [83],
  [`${Station.CWC_COLLEGE_DOWNWARD}>>${Station.UNTIED_COLLEGE_STAFF_RESIDENCE}`]:
    [141],
  [`${Station.CWC_COLLEGE_UPWARD}>>${Station.AREA_39_UPWARD}`]: [79],
  [`${Station.FUNG_KING_HEY_BUILDING}>>${Station.UNITED_COLLEGE_UPWARD}`]: [
    91, 79,
  ],
  [`${Station.FUNG_KING_HEY_BUILDING}>>${Station.WU_YEE_SUN_COLLEGE_UPWARD}`]: [
    36,
  ],
  [`${Station.NEW_ASIA_CIRCLE}>>${Station.UNITED_COLLEGE_DOWNWARD}`]: [51, 51],
  [`${Station.NEW_ASIA_COLLEGE}>>${Station.WU_YEE_SUN_COLLEGE_UPWARD}`]: [88],
  [`${Station.NEW_ASIA_COLLEGE}>>${Station.UNITED_COLLEGE_DOWNWARD}`]: [53, 74],
  [`${Station.POSTGRADUATE_HALL_1}>>${Station.UNIVERSITY_SPORTS_CENTRE}`]: [
    107, 155,
  ],
  [`${Station.POSTGRADUATE_HALL_1}>>${Station.UNIVERSITY_STATION_TERMINUS}`]: [
    134,
  ],
  [`${Station.POSTGRADUATE_HALL_1_DOWNWARD}>>${Station.UNIVERSITY_SPORTS_CENTRE}`]:
    [107, 155],
  [`${Station.POSTGRADUATE_HALL_1_DOWNWARD}>>${Station.UNIVERSITY_STATION_TERMINUS}`]:
    [134],
  [`${Station.RESIDENCE_10}>>${Station.RESIDENCE_15}`]: [36],
  [`${Station.RESIDENCE_15}>>${Station.UNTIED_COLLEGE_STAFF_RESIDENCE}`]: [
    63, 39,
  ],
  [`${Station.SCIENCE_CENTRE}>>${Station.NEW_ASIA_CIRCLE}`]: [111],
  [`${Station.SCIENCE_CENTRE}>>${Station.FUNG_KING_HEY_BUILDING}`]: [67],
  [`${Station.SHAW_COLLEGE_DOWNWARD}>>${Station.WU_YEE_SUN_COLLEGE_DOWNWARD}`]:
    [123, 79, 105],
  [`${Station.SHAW_COLLEGE_UPWARD}>>${Station.AREA_39_DOWNWARD}`]: [178],
  [`${Station.SHAW_COLLEGE_UPWARD}>>${Station.AREA_39_UPWARD}`]: [178],
  [`${Station.SHAW_COLLEGE_UPWARD}>>${Station.CWC_COLLEGE_DOWNWARD}`]: [
    126, 109,
  ],
  [`${Station.SHAW_COLLEGE_UPWARD}>>${Station.CWC_COLLEGE_DOWNWARD_TERMINUS}`]:
    [125],
  [`${Station.SHHO_COLLEGE}>>${Station.POSTGRADUATE_HALL_1}`]: [100],
  [`${Station.SHHO_COLLEGE}>>${Station.POSTGRADUATE_HALL_1_DOWNWARD}`]: [100],
  [`${Station.SHHO_COLLEGE}>>${Station.UNIVERSITY_STATION_PIAZZA}`]: [128, 93], //!
  [`${Station.SHHO_COLLEGE}>>${Station.UNIVERSITY_STATION_PIAZZA_TERMINUS}`]: [
    128, 93,
  ],
  [`${Station.SHHO_COLLEGE}>>${Station.UNIVERSITY_STATION_TERMINUS}`]: [
    95, 106, 97,
  ],
  [`${Station.SIR_RUN_RUN_SHAW_HALL}>>${Station.FUNG_KING_HEY_BUILDING}`]: [
    63, 73,
  ],
  [`${Station.SIR_RUN_RUN_SHAW_HALL}>>${Station.NEW_ASIA_CIRCLE}`]: [91],
  [`${Station.SIR_RUN_RUN_SHAW_HALL}>>${Station.UNIVERSITY_ADMIN_BUILDING}`]: [
    90, 157, 113,
  ],
  [`${Station.UNITED_COLLEGE_DOWNWARD}>>${Station.UNIVERSITY_ADMIN_BUILDING}`]:
    [81, 113, 119],
  [`${Station.UNITED_COLLEGE_DOWNWARD}>>${Station.WU_YEE_SUN_COLLEGE_UPWARD}`]:
    [64, 59],
  [`${Station.UNTIED_COLLEGE_STAFF_RESIDENCE}>>${Station.CHAN_CHUN_HA_HOSTEL}`]:
    [59, 55, 52],
  [`${Station.UNITED_COLLEGE_UPWARD}>>${Station.NEW_ASIA_COLLEGE}`]: [76, 63],
  [`${Station.UNIVERSITY_ADMIN_BUILDING}>>${Station.SCIENCE_CENTRE}`]: [161],
  [`${Station.UNIVERSITY_ADMIN_BUILDING}>>${Station.SHHO_COLLEGE}`]: [
    98, 103, 83, 140, 108,
  ],
  [`${Station.UNIVERSITY_SPORTS_CENTRE}>>${Station.FUNG_KING_HEY_BUILDING}`]: [
    168, 205,
  ],
  [`${Station.UNIVERSITY_SPORTS_CENTRE}>>${Station.SCIENCE_CENTRE}`]: [
    116, 118,
  ],
  [`${Station.UNIVERSITY_SPORTS_CENTRE}>>${Station.SIR_RUN_RUN_SHAW_HALL}`]: [
    132, 139, 110, 153, 147, 127, 145, 153, 123, 140, 149, 132, 109, 145, 147,
    160,
  ],
  [`${Station.UNIVERSITY_STATION}>>${Station.POSTGRADUATE_HALL_1}`]: [124, 150],
  [`${Station.UNIVERSITY_STATION}>>${Station.UNIVERSITY_SPORTS_CENTRE}`]: [
    135, 111, 91, 127, 112, 126, 146, 107, 123, 131, 98,
  ],
  [`${Station.UNIVERSITY_STATION_PIAZZA}>>${Station.CHUNG_CHI_TEACHING_BUILDING_TERMINUS}`]:
    [40], //!
  [`${Station.UNIVERSITY_STATION_PIAZZA}>>${Station.UNIVERSITY_SPORTS_CENTRE}`]:
    [157, 171, 176, 150, 162],
  [`${Station.WU_YEE_SUN_COLLEGE_DOWNWARD}>>${Station.NEW_ASIA_COLLEGE}`]: [84],
  [`${Station.WU_YEE_SUN_COLLEGE_DOWNWARD}>>${Station.UNIVERSITY_ADMIN_BUILDING}`]:
    [93, 131],
  [`${Station.WU_YEE_SUN_COLLEGE_UPWARD}>>${Station.SHAW_COLLEGE_UPWARD}`]: [
    94, 95, 92, 88,
  ],
  [`${Station.YIA}>>${Station.CAMPUS_CIRCUIT_EAST_UPWARD}`]: [100],
  [`${Station.YIA}>>${Station.UNIVERSITY_SPORTS_CENTRE}`]: [73],
} as const;

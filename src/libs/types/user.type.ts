export type UserDataType = {
  user: {
    name: string;
    day: number;
    continue: number;
    total: number;
    mogaco: number;
    level: number;
  };
  mogaco: [
    {
      name: string;
      week: number;
      total: number;
    },
  ];
  monthly: [
    {
      rank: number;
      name: string;
    },
  ];
  weekly: [
    {
      rank: number;
      name: string;
    },
  ];
};

export type UserPlanType = {
  user: {
    name: string;
    level: number;
  };
  time: {
    Monthly: string;
    Weekly: string;
    Today: string;
    Total: string;
  };
  mogaco: [
    {
      name: string;
      day: number;
      time: string;
    },
  ];
  todo: [
    {
      id: number;
      state: boolean;
      todo: string;
    },
  ];
};

export type userEditType = {
  name: string;
  email: string;
  password: string;
  mogaco: [
    {
      id: number;
      name: string;
      rank: number;
      currentMember: number;
      maxMember: number;
      day: number;
      master: boolean;
      userList: [
        {
          name: string;
          time: string;
          logined: string;
          level: number;
        },
      ];
    },
  ];
};

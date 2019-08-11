export const USER = {
  INTERESTS: [
    {
      TEXT: "스포츠",
      VALUE: "SPORT"
    },
    {
      TEXT: "영어",
      VALUE: "ENGLISH"
    },
    {
      TEXT: "중국어",
      VALUE: "CHINESE"
    },
    {
      TEXT: "요리",
      VALUE: "COOKING"
    },
    {
      TEXT: "개발",
      VALUE: "DEVELOPMENT"
    },
    {
      TEXT: "마케팅",
      VALUE: "MARKETING"
    },
    {
      TEXT: "연애",
      VALUE: "LOVE_RELATIONSHIP"
    },
    {
      TEXT: "와인",
      VALUE: "WINE"
    },
    {
      TEXT: "맥주",
      VALUE: "BEER"
    }
  ]
};

export const PAYMENT_HISTORY = {
  TYPE: {
    CHARGE: "CHARGE",
    CHARGE_CANCEL: "CHARGE_CANCEL"
  }
};

// ALARM MESSAGE ///////////////////////////////////////////////
export const Lunchwit = "[ Lunchwit ]";
export const EMAIL_FROM = "support@lunchwit.com";
export const ALARM_MESSAGE = {
  PAYMENT: {
    SUCCESS: {
      EMAIL: {
        SUBJECT: `${Lunchwit} 결제가 완료되었습니다.`,
        HTML: "결제가 완료되었습니다. 이용해 주셔서 감사합니다."
      },
      SMS: {
        CONTENTS: `${Lunchwit} 결제가 완료되었습니다. 이용해 주셔서 감사합니다.`
      },
      INNER: {
        CONTENTS: "결제가 완료되었습니다."
      }
    },
    CANCEL: {
      EMAIL: {
        SUBJECT: `${Lunchwit} 결제가 취소되었습니다.`,
        HTML: "결제가 취소되었습니다. 이용해 주셔서 감사합니다."
      },
      SMS: {
        CONTENTS: `${Lunchwit} 결제가 취소되었습니다. 이용해 주셔서 감사합니다.`
      },
      INNER: {
        CONTENTS: "결제가 취소되었습니다."
      }
    }
  }
};
////////////////////////////////////////////////////////////////
